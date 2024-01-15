$(document).ready(function () {
  const nextVideo = getNextVideo();

  $("#videoIframe").attr("src", `https://www.youtube.com/embed/${nextVideo}`);
});

function getNextVideo() {
  const videoList = [
    // https://www.youtube.com/@EnglishSpeeches
    // Learn English with Speeches
    "fBnAMUkNM2k", // ENGLISH SPEECH | MUNIBA MAZARI - We all are Perfectly Imperfect (English Subtitles)
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
    // Super Easy Spanish - Spanish for Beginners - 09
  ];
  const index = Math.floor(Math.random() * videoList.length);

  return videoList[index];
}
