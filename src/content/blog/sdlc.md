---
title: A Secure Software Development Life Could Have Saved the Death Star and the Empire
author: Robert James
pubDate: 2024-10-15 20:00
tags:
  - software development
  - security
description: And people say DevSecOps is just a buzzword!
imgUrl: '../../assets/cisa.jpg'
layout: "../../layouts/BlogPost.astro"
---

## Overview

No, it's not opening up to your coworkers about how much you love your cat. (of course there's nothing wrong with that)

"Weakness in an information system, system security procedures, internal controls, or implementation that could be exploited or triggered by a threat source." National Institue of Standards and Technology (NIST) Computer Security Resource Center (CSRC)

Used in a sentence: 
> "Let's look at our latest vulnerability scan to see where we might be vulnerable to attacks." - Sun Tzu, probably

## Why Vulnerabilities Matter

Notice the two bolded words above: weakness and exploit. These are key to understanding vulnerabilities. In fact, it's the crux of the whole situation: attackers looks for weaknesses to take advantage of, or exploit. Whether for money, public humiliation, or just for fun, attackers live on the existence of exploitable vulnerabilities.

But what is a vulnerability? This can become complicated quite quickly, so let's skim the surface. Generally speaking, this is a bug in code that attackers can use. Once a bug is deemed a vulnerability, it is registered as a Common Vulnerability or Exposure (CVE). As of this writing, there are over 221,000 CVEs.

It is then assigned a score on a scale called the Common Vulnerability Scoring System, ranging from 0 (least severe) to 10 (most severe).

These vulnerabilities can be relatively harmless, or, they could greatly reduce the nuclear capabilities of a country. So yeah, it is unwise to ignore vulnerabilities-- especially the higher-scoring ones.

## Mitigation

The key to mitigating vulnerabilities and reducing risk is usually fairly straightforward. What do you do when your car tire has a hole or leak? You patch it. I suppose you could simply throw out the whole tire and start over, but that is usually unnecessary and and unneeded.

Most vulnerabilities are patched through either a system configuration change or a software update to the target program. Once a vendor/company finds out they have a vulnerability in their code, they will release an update that fixes the issue.

It is important to note, however, that while patching is an excellent way to mitigte risk, risk can never be completely mitigated.