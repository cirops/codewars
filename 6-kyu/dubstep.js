const songDecoder = (song) =>
  song.replace(/^(WUB)*|(WUB)*$/g, "").replace(/(WUB)+/g, " ");

console.log(
  songDecoder("AWUBBWUBC") === "A B C",
  "WUB should be replaced by 1 space"
);
console.log(
  songDecoder("AWUBWUBWUBBWUBWUBWUBC"),
  "A B C",
  "multiples WUB should be replaced by only 1 space"
);
console.log(
  songDecoder("WUBAWUBBWUBCWUB"),
  "A B C",
  "heading or trailing spaces should be removed"
);
