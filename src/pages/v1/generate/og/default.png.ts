import { Resvg, type ResvgRenderOptions } from '@resvg/resvg-js';
import type { APIRoute } from 'astro';
import satori from 'satori';
import { html as toReactElement } from 'satori-html';

const fontFile = await fetch(
  'https://og-playground.vercel.app/inter-latin-ext-700-normal.woff'
);

const fontData: ArrayBuffer = await fontFile.arrayBuffer();

const height = 630;
const width = 1200;

export const GET: APIRoute = async () => {
  const link = 'https://vul.ninja';
  const html = toReactElement(`
  <div style="background-color: white; display: flex; flex-direction: column; height: 100%; padding: 3rem; width: 100%">
    <div style="display:flex; height: 100%; width: 100%; background-color: white; border: 6px solid black; border-radius: 0.5rem; padding: 2rem; filter: drop-shadow(6px 6px 0 rgb(0 0 0 / 1));">
      <div style="display: flex; flex-direction: column; justify-content: space-between; width: 100%; filter: drop-shadow()">
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">  
          <p style="font-size: 48px;">vul.ninja</p>
          <p style="font-size: 38px;">A rad little blog on cyber topics</p>
          <p style="font-size: 38px;">Made by Robert James</p>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: baseline; padding-top: -2rem;">
          <p style="font-size: 32px">${link}</p>
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQHRL7c91nv6Jg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730068657096?e=1735776000&v=beta&t=CvCcqIaWAhm-NaGNkw4DlX0gw7knD8REyQQck-xe61w" width="200px" height="200px" style="border: 3px solid black; border-radius: 0.5rem;" />
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
      mode: 'width',
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
