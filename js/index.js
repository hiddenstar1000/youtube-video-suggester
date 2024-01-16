$(document).ready(function () {
  loadNextVideo();

  $("body").keypress(function (e) {
    const ENTER_KEY = 13;

    if (e.which === ENTER_KEY) loadNextVideo();
  });
});

function loadNextVideo() {
  const videoList = [
    // https://www.youtube.com/@EnglishSpeeches
    // Learn English with Speeches
    "fBnAMUkNM2k", // ENGLISH SPEECH | MUNIBA MAZARI - We all are Perfectly Imperfect (English Subtitles)
    "s5BMcaQsjbM", // ENGLISH SPEECH | SAMANTHA RUTH PRABHU: You Can Do It (English Subtitles)
    "1i9kcBHX2Nw", // ENGLISH SPEECH | STEVE JOBS: Stanford Speech(English Subtitles)
    "iBBB-vJZB50", // ENGLISH SPEECH | MALALA YOUSAFZAI - Nobel Peace Prize (English Subtitles)
    "jG-4kBIDAzA", // ENGLISH SPEECH | SELENA GOMEZ: Trust Yourself (English Subtitles)
    // https://www.youtube.com/@easylanguages
    // Easy Spanish Podcast - 01
    // Spanish from Argentina - 02
    // International episodes - 03
    // Spanish from Spain - 04
    // Funny Episodes - 05
    // Super Easy Spanish - Grammar and Vocab Explained - 06
    // Spanish from Mexico - 07
    // Easy Spanish - Learning Spanish from the Streets - 08
    "L_-KQ90IiF0", // 1
    "WlknUGwKHtw", // 2
    "W0_GwKe1SB8", // 3
    "m4rPXkaelKw", // 4
    "0jyMWq5T0eo", // 5
    // Super Easy Spanish - Spanish for Beginners - 09
  ];
  const index = Math.floor(Math.random() * videoList.length);

  $("#videoIframe").attr(
    "src",
    `https://www.youtube.com/embed/${videoList[index]}`
  );
}
