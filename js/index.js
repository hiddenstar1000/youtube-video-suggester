$(document).ready(function () {
  const languages = JSON.parse(localStorage.getItem("languages")) || {
    english: true,
    spanish: true,
  };

  $("#english").attr("checked", languages.english);
  $("#spanish").attr("checked", languages.spanish);

  loadNextVideo(languages);

  $(".languages").click(function () {
    const languages = {
      english: $("#english").is(":checked"),
      spanish: $("#spanish").is(":checked"),
    };

    loadNextVideo(languages);
  });
});

function loadNextVideo(languages) {
  localStorage.setItem("languages", JSON.stringify(languages));

  let videoList = [];

  const englishVideoList = [
    // https://www.youtube.com/@EnglishSpeeches
    // Learn English with Speeches
    "fBnAMUkNM2k", // ENGLISH SPEECH | MUNIBA MAZARI - We all are Perfectly Imperfect (English Subtitles) - 001
    "s5BMcaQsjbM", // ENGLISH SPEECH | SAMANTHA RUTH PRABHU: You Can Do It (English Subtitles) - 002
    "1i9kcBHX2Nw", // ENGLISH SPEECH | STEVE JOBS: Stanford Speech(English Subtitles) - 003
    "iBBB-vJZB50", // ENGLISH SPEECH | MALALA YOUSAFZAI - Nobel Peace Prize (English Subtitles) - 004
    "jG-4kBIDAzA", // ENGLISH SPEECH | SELENA GOMEZ: Trust Yourself (English Subtitles) - 005
    "r01DOmPpxjg", // ENGLISH SPEECH | MUNIBA MAZARI: Motivational Words (English Subtitles) - 006
    "nIwU-9ZTTJc", // ENGLISH SPEECH | EMMA WATSON: Gender Equality (English Subtitles) - 007
    "aDG1T0kJnd4", // ENGLISH SPEECH | PRIYANKA CHOPRA: Be Fearless (English Subtitles) - 008
    "_nUDuXRh3zM", // ENGLISH SPEECH | IVANKA TRUMP: Think Big Again (English Subtitles) - 009
    "_POoaOQ2Xuc", // ENGLISH SPEECH | PRIYANKA CHOPRA: Full Power of Women (English Subtitles) - 010
    "EQYWOQ-12c8", // ENGLISH SPEECH | RASHMIKA MANDANNA: Dream BIG! (English Subtitles) - 011
    "U8iy5zvXhJc", // ENGLISH SPEECH | SHAKIRA: Education Changes the World (English Subtitles) - 012
    "2mqQMA7CSLQ", // ENGLISH SPEECH | DONALD TRUMP: Never, Ever Give Up (English Subtitles) - 013
    "mK53d6aIG48", // ENGLISH SPEECH | R. MADHAVAN: India in 2030 (English Subtitles) - 014
    "KLe7Rxkrj94", // ENGLISH SPEECH | THE ROCK: Be Yourself (English Subtitles) - 015
  ];

  const spanishVideoList = [
    // https://www.youtube.com/@easylanguages
    // Easy Spanish Podcast - 01
    // Spanish from Argentina - 02
    // International episodes - 03
    // Spanish from Spain - 04
    // Funny Episodes - 05
    // Super Easy Spanish - Grammar and Vocab Explained - 06
    // Spanish from Mexico - 07
    // Easy Spanish - Learning Spanish from the Streets - 08
    "L_-KQ90IiF0", // Professions | Easy Spanish 1
    "WlknUGwKHtw", // Plans for today | Easy Spanish 2
    "W0_GwKe1SB8", // What do you like about Lima? | Easy Spanish 3
    "m4rPXkaelKw", // Three Wishes | Easy Spanish 4
    "0jyMWq5T0eo", // What would you never lend to anyone? | Easy Spanish 5
    "nb5h1svrFro", // The greatest achievement of your life! | Easy Spanish 6
    "3Ee9cKEPOe4", // What do you believe in? / En qué crees? | Easy Spanish 7
    "6Pfm-y40NcU", // London | Easy Spanish 8
    "GBbHQv4FxmQ", // Is global warming real? | Easy Spanish 9
    "3QKtKxaAZ6o", // In the Mexican Subway | Easy Spanish 10
    // Super Easy Spanish - Spanish for Beginners - 09
  ];

  if (languages.english) videoList = videoList.concat(englishVideoList);
  if (languages.spanish) videoList = videoList.concat(spanishVideoList);

  const index = Math.floor(Math.random() * videoList.length);

  $("#videoIframe").attr(
    "src",
    `https://www.youtube.com/embed/${videoList[index]}`
  );
}
