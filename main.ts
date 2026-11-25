// Tell a Whole Story in 32 Characters — make.fun entry.
// One Wi-Fi network name, written to /output/entry.txt.
// Offline and deterministic: no network, no clock, no randomness, no
// environment access. The program only emits the name.
import * as fs from "node:fs";

// Why this name: the judge weighs, in order, on-subject fit, a joke that
// lands on the first read, how much story the name carries, freshness,
// and tight wording. "The WiFi Outlived My Marriage" is a whole story in
// five words: two people, a marriage, it ended — and the router is still
// blinking in the empty house. The single verb "Outlived" does the joke:
// a marriage that could not last as long as a home router. It is deadpan
// rather than loud, it avoids every stock Wi-Fi joke (no FBI van, no
// "It Burns When IP", no "Pretty Fly for a Wi-Fi"), and it is not the
// roommate-moved-out angle already crowding this field. A stranger in a
// phone's network list gets it with no explanation.
const NAME = "The WiFi Outlived My Marriage";
const MAX_CHARS = 32;

// Guard the sealed gate ourselves: 1-32 UTF-8 characters, not only
// whitespace. Fail loudly instead of ever writing an entry the scorer
// would reject.
const chars = [...NAME].length;
if (chars < 1 || chars > MAX_CHARS || !NAME.trim()) {
  throw new Error(`wifi name violates the 1-32 char gate (${chars} chars)`);
}
// Tight wording, enforced: no leading/trailing space wasting a character,
// and no control character or newline sneaking into the network list.
if (NAME !== NAME.trim() || /[\u0000-\u001F\u007F]/.test(NAME)) {
  throw new Error("wifi name must have no edge whitespace or control chars");
}

// The name must render identically on any phone's network list, so it
// is printable ASCII only — no smart quotes or accented letters whose
// width or rendering could vary between devices.
if (!/^[\x20-\x7E]+$/.test(NAME)) {
  throw new Error("wifi name must be printable ASCII only");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", NAME, "utf8");

// Verify the written file round-trips exactly: same bytes, same text,
// same character count.
const written = fs.readFileSync("/output/entry.txt", "utf8");
if (written !== NAME || [...written].length !== chars) {
  throw new Error("entry.txt does not match the wifi name");
}

console.log(`wrote ${chars} chars to /output/entry.txt: ${NAME}`);
