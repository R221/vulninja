---
title: The Wizard’s Big Mistake- A Threat Modeling Breakdown of Wicked (2024)
author: Robert James
pubDate: 2024-12-08 20:00
tags:
  - threat modeling
  - AppSec
description: How the Wizard's Arrogance and Poor Planning Led to His Undoing—And What You Can Learn About Security
imgUrl: '../../assets/Threat Modeling Wicked Edition.png'
layout: "../../layouts/BlogPost.astro"
---

# Threat Modeling: Wicked Edition

## SPOILER ALERT

This post contains spoilers from Wicked (2024). Turn back now… or continue, if you dare.

I recently saw Wicked, the latest highly anticipated rendition of the classic prequel to The Wizard of Oz. Setting aside the genuinely stunning vocals and intricate choreography, one thing really stood out to me: If the Wizard is so smart, how could he so callously disregard the possibility that Elphaba just wouldn’t go along with his wicked (ha) plans?

Then it occurred to me: the issue isn’t that he disregarded the possibility—he simply didn’t understand the threats to his plan. He assumed Elphaba wouldn’t realize his trickery in having her read from the spellbook. He underestimated Glinda’s dedication to her friend. He didn’t think Elphaba had it in her to reject him. After all, no one had before.

Let’s conduct a threat modeling exercise and see if we can figure out where the Wizard went wrong.

## Threat Modeling Overview

According to OWASP:

> Threat modeling works to identify, communicate, and understand threats and mitigations > within the context of protecting something of value... a view of the application and > its environment through a lens of security.

In other words, the whole point is to improve security through critical thinking and proactive planning.

There are four high-level steps in threat modeling:

1. Scope the work  
2. Determine threats  
3. Determine countermeasures and mitigations  
4. Assess the work

So let’s say the Wizard’s plan—to make Elphaba his evil sidekick—is the “application.” Ironically, he did have a countermeasure in place: the sorcery professor (what was her name? Ah, who cares). Whether he planned for her to be there or she just showed up is unclear… but I digress.

## Threat Modeling Steps

### 1. Scope the Work

This is probably the part the Wizard did best. This step focuses on understanding the environment. Just like in OWASP, the Wizard identified his assets and anticipated how people might interact with Emerald City. He also scoped out the motivations of key players, understanding how they’d react to certain events.

One area that could’ve been handled better? A layout of his own palace. Elphaba juked him and his minions pretty hard once she became their target. Better spatial awareness might have saved his entire plan. In cyber threat modeling, this would be your data flow diagram (DFD): mapping the different paths and varying trust levels within and around system boundaries.

### 2. Determine Threats

A critical part of threat modeling is—surprise—identifying threats using a categorization model. This helps pinpoint attack surfaces and potential vulnerabilities. One popular methodology is STRIDE, an acronym representing types of threats:

- Spoofing
- Tampering
- Repudiation
- Information Disclosure
- Denial of Service
- Elevation of Privilege

So how would threat modeling have helped the Wizard?

For starters, there was definitely some tampering and information disclosure going on behind his back, which complicated things. Several characters pursued their own agendas, revealing secrets or influencing others at inconvenient times. Denial of service also reared its head when unexpected people showed up or acted unpredictably.

### 3. Determine Countermeasures and Mitigations

How can a vulnerability be mitigated? By determining in advance what level of risk is acceptable—and what can be done about it from a business standpoint. It’s important to note that risk can never be fully eliminated; there will always be some degree of it.

There are four common ways to address risk:

1. Accept it  
2. Eliminate it
3. Mitigate it  
4. Transfer it

The Wizard clearly chose to accept the risks tied to his plan. Whether or not that was intentional is another matter.

### 4. Assess the Work

After doing all this—did you create diagrams during scoping? List threats and match them to controls?

The Wizard, despite being “all-knowing and powerful,” was too arrogant to complete this final phase. His inflated ego led him to believe everything would go his way.

## Conclusion

So how did the Wizard do with his threat modeling? Just okay. He missed some major blind spots. Ultimately, it was his misplaced sense of invincibility that caused his downfall… at least, as far as we’ve seen in Part One.

But really, isn’t that how history tends to repeat itself? Whether in business or everyday life, people often forget what it means to be vulnerable—and that’s usually when things fall apart.