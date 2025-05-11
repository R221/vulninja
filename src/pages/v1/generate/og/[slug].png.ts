import { Resvg, type ResvgRenderOptions } from '@resvg/resvg-js';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import { html as toReactElement } from 'satori-html';

const fontFile = await fetch(
  'https://og-playground.vercel.app/inter-latin-ext-700-normal.woff'
);
const fontData: ArrayBuffer = await fontFile.arrayBuffer();

const height = 630;
const width = 1200;

const posts = await getCollection('blog');

export function getStaticPaths() {
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { title: post.data.title, description: post.data.description },
  }));
}

export const GET: APIRoute = async ({ params, props }) => {
  const title = props.title.trim() ?? 'Blogpost';
  const description = props.description ?? null;
  const html = toReactElement(`
    <div style="background-color: #f5f5f5; display: flex; align-items: center; justify-content: center; height: 100%; padding: 3rem; width: 100%; font-family: sans-serif;">
      <div style="display:flex; flex-direction: column; background-color: white; border: 6px solid black; border-radius: 1rem; padding: 2.5rem; width: 100%; max-width: 1200px; box-shadow: 8px 8px 0 #000;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <h1 style="font-size: 40px; font-weight: 700; margin: 0; color: #555;">${title}</h1>
          </div>
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQFyus19LFsC5w/profile-displayphoto-shrink_800_800/B4EZQOi3N1HgAc-/0/1735410808737?e=1752710400&v=beta&t=KMocgwps2vPZcdHwqfz1U69jOnj6LBSq52lT7OaQmvY" width="160" height="160" style="border: 4px solid black; border-radius: 0.75rem; object-fit: cover;" />
        </div>
        <p style="font-size: 26px; color: #333; line-height: 1.4; margin: 0;">${description}</p>
      </div>
    </div>
  `);

  const svg = await satori(html, {
    fonts: [
      {
        name: 'Inter Latin',
        data: fontData,
        style: 'normal',
      },
    ],
    height,
    width,
  });

  const opts: ResvgRenderOptions = {
    fitTo: {
      mode: 'width', // If you need to change the size
      value: width,
    },
  };
  const resvg = new Resvg(svg, opts);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(pngBuffer, {
    headers: {
      'content-type': 'image/png',
    },
  });
};
