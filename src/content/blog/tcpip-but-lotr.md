---
title: The Fellowship of the Network- A Middle-Earth Guide to Understanding IT Protocols
author: Robert James
pubDate: 2024-10-19 18:37
tags:
  - networking
description: From the One Ring to HTTP Beacons, Discover How Lord of the Rings Brings Networking to Life
imgUrl: '../../assets/frodo.jpg'
layout: "../../layouts/BlogPost.astro"
---

## But Why?
Look, we all know networking is important. In fact, without networking, none of the services or applications that make businesses run would be possible. You wouldn’t even be able to read this insightful blog!

But I can’t help feeling that networking could be more interesting to learn. Naturally, that leads to finding something familiar to connect with. In my case, that something is The Lord of the Rings.

## I know what you're thinking
"This is going to be painful."

No, not really. Well... maybe just a little. Anyway, we’re doing it—so let’s get to it!

One quick note: let’s say the Fellowship of the Ring is at the center. After all, wherever the Ring goes is typically the focal point of the story.

## Before Protocls: OSI
Ah, the OSI model—formally known as the Open Systems Interconnection model. As one of the most well-known and important frameworks in all of IT, it’s worth covering briefly. Throughout each of its seven layers, various protocols enable network communications.

- Transmission Control Protocol (TCP) is connection-oriented; data is sent only after a connection is established between applications.

- Internet Protocol (IP) handles routing data by managing details like source and destination IP addresses for inter-network communication.

These two are fundamental, forming the bedrock of most network interactions.

## One Ring to Rule Them All...
![Token Ring](../../assets/frodo.jpg)

This first one isn't technically a protocol, but we’re including it anyway—because it’s important (and because we can): the Token Ring data link.

> One ring to rule them all, one ring to find them,
> One ring to bring them all, and in the darkness bind them;
> In the Land of Mordor where the shadows lie.

Just like the One Ring, the Token Ring is key to binding hosts in a local area network (LAN). That said, you could just as easily use Ethernet for LAN communication.

Token Ring does have a few advantages, though. It determines priority and uses a star topology (not a bus), which offers different performance characteristics. Also, let’s be honest—“Token” is insanely close to “Tolkien.” Bonus points.

All the characters, plotlines, and actions center around Frodo and the One Ring. Sounds like a solid analogy to me.

## HTTP: The Beacon-hills of Gondor
![Beacon hills](../../assets/Pippin-lighting-the-beacon.webp)

Ignoring the fact that this scene from *The Return of the King* is a [lie](https://gamerant.com/lotr-lord-of-the-rings-best-scenes-gondor-beacons-changes/), it's still a pretty great representation of HTTP.

Hypertext Transfer Protocol is a client-server protocol: a client sends a request, and the server handles it and sends back a response. There are multiple hops and intermediaries between the client and the server, making this beacon analogy work surprisingly well.

Pippin, who initiates the beacon lighting (in the movie), plays the role of the browser—always the one initiating the request. The beacons light one by one, crossing seven foothills (thirteen in the book) to eventually reach King Théoden of Rohan. I guess he’s the server? Either way, a response is returned: Rohan will aid Gondor. Sure, the response doesn’t travel back through the same path, but… details. Minor details.

### But what if the beacon signal was intercepted?

HTTP sends data in plaintext, making it inherently insecure. That fits the LOTR analogy—giant mountain-top fires aren’t exactly subtle or encrypted. Anyone watching would know something is up. I’d be shocked if Sauron wasn’t aware of the beacons.

## Telnet/SSH: Pippin Gazing into the Palantir
![SSH is like the palantir in LOTR](../../assets/LOTR-Decisions-Palantir.webp)

This one’s actually one of my favorite comparisons in the whole post. Pippin unintentionally carried his team with this move.  

Some background: the spherical stone Pippin gazes into in The Two Towers is one of seven [palantiri](https://tolkiengateway.net/wiki/Palant%C3%ADri)- a network of “seeing stones.” Anyone holding one could see and communicate with another holder, regardless of distance. That’s how Sauron and Saruman kept in touch from Mordor and Isengard.

From a networking perspective, this is almost a fit for SSH. But after thinking about it, Telnet may actually be the better analogy.

Why? Pippin accessed the palantír without any authentication, encryption, or security controls—much like Telnet. It’s unclear whether the stones were already “connected,” but it’s easy to imagine the palantír network lacking encryption. Then again, maybe Sauron and Saruman had each other’s public keys and were just rocking some old-school asymmetric crypto...

## That's All for Now

This has been a fun thought experiment. I’ll need to think a bit more about how to work DNS, (S)FTP, and others into the Middle-earth framework.

Hopefully, this helped make networking concepts a bit less dry—and maybe even a little fun. Whether you’re prepping for a cert or just trying to grok the OSI model, remember: one analogy to rule them all.