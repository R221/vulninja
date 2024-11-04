---
title: Palpatine Clearly Didn't Consult MITRE ATT&CK
author: Robert James
pubDate: 2024-10-15 20:00
tags:
  - CTI
  - incident response
  - star wars
description: Bringing IR Into the Modern Era
imgUrl: '../../assets/cisa.jpg'
layout: "../../layouts/BlogPost.astro"
---

## Deep-Rooted Security Flaws of the Galactic Empire

Throughout the franchise, the Empire suffered many defeats and endured great struggles. Hilariously (or not hilariously, if you're an Empire fan), many of these could have been mitigated with even *some*
prior thought on how oh, I don't know, a not-so-small robot and its companions could break into their systems and wreak havoc on the network.

From R2D2 exploiting the lack of network access control lists to literally zero encryption, Palpatine would have probably had a better time if he just phoned up MITRE early on. Let's review our TTPs and
discuss some parallels to the galaxy far, far away.

## Overview of TTPs and MITRE ATT&CK

![MITRE ATT&CK Logo](../../assets/MITRE_ATTACK_logo_Lockup-black-transparent.png)

Before we dive into the examples, let's quickly review Tactics, Techniques, and Procedures (TTPs). Collectively, TTPs is a comprehensive description of a cyber threat actor's behavior.

**Tactics:** *What* the attacker is trying to achieve, a goal. Are they trying to steal something? Establish persistence in a network?

**Techniques:** *How* the attacker aims to achieve its goal. One technique of [Exfiltration (TA0010)](https://attack.mitre.org/tactics/TA0010/) is  [Exfiltration Over Physical Media (T1052)](https://attack.mitre.org/techniques/T1052).

**Procedures:** *In-the-wild/real-world implementation of a technique. We can see specific examples of the above technique: [Mustang Panda](https://attack.mitre.org/groups/G0129/) (cool name, bad people) developed a PlugX variant to exfiltrate documents
from air-gapped networks.

MITRE utilizes these TTPs into [ATT&CK](https://attack.mitre.org/), a curated knowledge base of adversary TTPs based on real-world observations. This knowledge base is then made into various matrices: Enterprise, Mobile, and ICS.
Users can navigate through a matrix to identify and prioritize potential threats to their information system. There's even some nifty [MITRE-developed Python Tools on GitHub](https://github.com/mitre-attack/mitreattack-python/) that
can be queried against.

## Back to Star Wars...

OK, back to the real reason you're here. Let's assess some of the most well-known security issues in Star Wars.

### R2D2 Carrying the Death Star Plans

Firstly, I greatly underestimated the amount of discussion and disagreement surrounding this topic. Some Reddit posts became so toxic that moderators had to disable new comments, so that was fun to parse through.

Anyway... the *general* consensus is 