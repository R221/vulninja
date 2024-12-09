---
title: Threat Modeling, Wicked Edition
author: Robert James
pubDate: 2024-12-08 20:00
tags:
  - threat modeling
  - AppSec
description: The Wizard of OZ Could Have Seen it Coming.
imgUrl: '../../assets/Palpatine_vulninja.jpg'
layout: "../../layouts/BlogPost.astro"
---

# Threat Modeling: Wicked Edition

## SPOILER ALERT

This post contains spoilers from Wicked (2024). Turn back now if you or continue... if you dare.

I recently saw Wicked, the latest highly-anticipated rendition of the classic prequel to The Wizard of OZ. Setting aside the genuinely stunning vocals and intricate choreography, one thing really stood out to me. If the Wizard is so smart, how could he so callously disregard the possibility of Elphaba just not going with his wicked (ha) plans?

Then it occurred to me: the issue is not that he disregarded the possibility- he simply did not understand the threats to his plan. He assumed that Elphaba would not realize his trickery in having her read out of the spellbook. He underestimated Glinda's dedication to her friend. He did not think Elphaba had it in her to reject him. After all, no one had before.

Let's conduct a threat modeling exercise and see if we can figure out where the wizard went wrong!

## Threat Modeling Overview

According to [OWASP](https://owasp.org/www-community/Threat_Modeling), 
> Threat modeling works to identify, communicate, and understand threats and mitigations within the context of protecting something of value... a view of the application and its environment through a lens of security.

In other words, the whole point is to identify activities for improving security through critical thinking and planning.

There are four high level steps in threat modeling:
1. Scope the work
2. Determine threats
3. Determine countermeasures and mitigation
4. Assess the work

So let's say the Wizard's plan of having Elphaba being his evil sidekick is the application. Ironically, the wizard did a countermeasure/mitigation in place: the sorcery professor (what was her name? Ah who cares) although it's unclear whether he planned for her being there or she just showed up... but I digress.

## Threat Modeling Steps

1. Scope the work

This is probably  