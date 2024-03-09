---
author: Robert James
pubDatetime: 2022-09-23T15:22:00Z
modDatetime: 2023-12-21T09:12:47.400Z
title: How to Shut Down a Hotel's HVAC System
featured: false
draft: false
tags:
  - moderately interesting
  - IOT
description: All it takes is connecting to port 8899.
---

You've probably seen a lot of bad news recently about smart thermostats. While super convenient for changing temperatures willy nilly like Katy Perry, they're not the safest devices out there. Security oversights are commonplace in devices like this, with the Bosch BCC100 series thermostat being the newest addition to the island of misfits. Hotel managers beware!

## technical overview

The vulnerability here, known as [CVE-2023-49722](https://www.cve.org/CVERecord?id=CVE-2023-49722), enables attackers to connect to the device on the same WiFi network. The crazy part: it doesn't take much. In fact, all you have to do is connect to port 8899 thanks to a misconfiguration in the thermostat's computer.

_don't actually go do this please thank you_

## implications

Several problems can arise here. At the very least, the device can be bricked and rendered completely inoperable. Annoying, but not a calamity.

At the worst, however... it's not good. With full access to the thermostat's internal guts, one could establish backdoor access and get to the rest of the network from the outside.

Imagine some guy named Carl sitting at home eating Doritos (I do apologize to all the good Carls out there).

Carl is having a bad day. He opens his laptop and logs into the thermostat he hacked last week. Since he has network access, he finds the central controller for the HVAC system and shuts it down. Then he sends commands to the fans and ducts that cause them to overload and fail.

Another step forward from that: imagine a really nasty fellow offers to purchase this access on the dark web. Attackers would quickly find ways to amass an array of vulnerable hotels. This is some _John Wick_ kind of stuff.

## the fix

Thankfully, Carl's plans have been foiled. [Bosch has already released a fix that closes port 8899](https://psirt.bosch.com/security-advisories/BOSCH-SA-473852.html). Sorry not sorry, Carl.

## tl;dr

Thermostat has an open port. Attacker connects to port and installs firmware. Attacker connects to network and does naughty things.
