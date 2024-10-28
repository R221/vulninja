---
title: Hacking Hotel HVAC is Rad
description: Hackers were so preoccupied with whether or not they could, they didn't stop to think if they should. 
pubDate: 2023-02-21 00:13
author: Robert James
tags:
  - ICS
  - hacking
imgUrl: '../../assets/thermostat.webp'
layout: ../../layouts/BlogPost.astro
---

## Overview

You've probably seen a lot of bad news recently about smart thermostats. While super convenient for changing temperatures willy nilly like Katy Perry, they're not the safest devices out there.

## Implications

Several problems can arise here. At the very least, the device can be bricked and rendered completely inoperable. Annoying, but not a calamity.

At the worst, however... it's not good. With full access to the thermostat's internal guts, one could establish backdoor access and get to the rest of the network from the outside.

Imagine some guy named Carl sitting at home eating Doritos (I do apologize to all the good Carls out there).

Carl is having a bad day. He opens his laptop and logs into the thermostat he hacked last week. Since he has network access, he finds the central controller for the HVAC system and shuts it down. Then he sends commands to the fans and ducts that cause them to overload and fail.

Another step forward from that: imagine a really nasty fellow offers to purchase this access on the dark web. Attackers would quickly find ways to amass an array of vulnerable hotels. This is some John Wick kind of stuff.

## The fix

Thankfully, Carl's plans have been foiled. Bosch has already released a fix that closes port 8899. Sorry not sorry, Carl.