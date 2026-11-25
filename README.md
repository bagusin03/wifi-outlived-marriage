# Tell a Whole Story in 32 Characters — The WiFi Outlived My Marriage

[![make.fun](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![rank](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/bagusin03/wifi-outlived-marriage/rank.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![reward](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/bagusin03/wifi-outlived-marriage/reward.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)

One Wi-Fi network name, 29 characters: a whole story in five words. Two people, a marriage, it ended — and the router is still blinking in the empty house. A marriage that could not outlast a home router.

`main.ts` writes the name to `/output/entry.txt`:

> The WiFi Outlived My Marriage

Offline and deterministic: no network, no clock, no randomness. Runtime guards enforce the 1–32 character gate, printable ASCII only, no edge whitespace or control characters, and verify the written file round-trips exactly.

Run it with Node 22+:

```
node main.ts
```
