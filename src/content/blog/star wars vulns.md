---
title: TTPs Would Have Prevented Death Star Go Boom
author: Robert James
pubDate: 2024-10-15 20:00
tags:
  - CTI
  - incident response
  - star wars
description: It's almost like Palpatine wanted the Rebels to steal the plans...
imgUrl: '../../assets/Palpatine_vulninja.jpg'
layout: "../../layouts/BlogPost.astro"
---

## Deep-Rooted Security Flaws of the Galactic Empire

Read time: About 10 minutes.

Throughout the franchise, the push and pull between dozens of characters and battles shifted the sands of fate many times. The most impactful, however, was the theft of the Death Star plans.

Bottom line: Palpatine would have had a better time with his whole destruction thing if he just phoned up MITRE early on. Let's recap TTPs and
discuss the parallels to the galaxy far, far away.

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

## Stealing the Death Star Plans

In *Rogue One*, we see K-2SO and company break into the Empire's military base on Scarif. Disguised as Empire staff, Kaytoo snatches an Empire security droid and copies its credentials to himself. Before going any further, we can already see a few points to pick at.

Tactics: Reconnaissance TA0043, Initial Access TA001, Credential Access TA006
Technqiues: Gather Victim Identity Information T1589, Valid Accounts T1078, Credentials from Password Stores T1555 Exfiltration Over Physical Medium T1052, Exfiltration Over Web Service T1567, and System Shutdown/Reboot T1529.
Procedures: See if you can browse through [Groups](https://attack.mitre.org/groups/) and find some!

Parsing the TTPs a bit, the goals (tactics) were to search for information on the plan location, figure out how to even get to them, and then be able to actually take them. This was done through (techniques) stealing the credentials from the security droid and gaining access to the control room. Kaytoo authenticated into the database, the strike team stole the plans, and then exfiltrated the physical media and transmitting to the Allied fleet, eventually leading to the destruction of the Death Star.

## Detection and Mitigations

Based on the TTPs above, let's discuss measures that could have been prevented this tragedy for the Empire. I promise I'm not rooting for them, this is just a discussion. Honest! Detections and Mitigations have their own identifiers, just like TTPs. We won't go through all of them because there are *many*, but here's some of the key ones.

Detections: Logon Session DS0028, User Account DS002, Network Traffic Data/Flow DS0029, File Access DS0022, 
Mitigations: MFA M1032, Privileged Account Management M1026, Pre-compromise M1056, Data Loss Prevention M1057

In English, processes were either not in place or very easily bypassed. If the victim security droid was connected to the network (I think that's a fair assumption), there should have been an alert that he was 1: taken offline and 2: copied to another physical medium. Once in the control room, it only took one person to open the vault. In a high-stakes area like this, you really should need at least two people simultanesouly to access the vault. The physical removal of the data with the claws did not require any form of MFA or re-authentication. And once the shield was down, the plans were easily transmitted off-planet to the fleet above.

## Conclusion

Look, if you're going to try to take over the entire galaxy to achieve total domination or whatever, maybe try a little harder to secure the tools by which you're going to do so. Consulting the TTPs can provide insights on how best to secure your information system. If Palpatine's CISO (was there even one?) had implemented a Zero Trust Architecture and followed the principles of Least Privilege then who knows, maybe we'd all be under Empire rule today.