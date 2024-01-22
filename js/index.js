$(document).ready(function () {
  updatePlaylists();

  const languages = JSON.parse(localStorage.getItem("languages")) || {
    english: true,
    spanish: true,
  };

  $("#english").prop("checked", languages.english);
  $("#spanish").prop("checked", languages.spanish);

  loadNextVideo(languages);

  $(".languages").click(function () {
    const languages = {
      english: $("#english").is(":checked"),
      spanish: $("#spanish").is(":checked"),
    };

    if (!languages.english && !languages.spanish) {
      if ($(this).attr("id") === "english") {
        languages.spanish = true;
        $("#spanish").prop("checked", true);
      } else {
        languages.english = true;
        $("#english").prop("checked", true);
      }
    }

    loadNextVideo(languages);
  });
});

function loadNextVideo(languages) {
  localStorage.setItem("languages", JSON.stringify(languages));
  const videoList = loadPlaylists();
  const index = Math.floor(Math.random() * videoList.length);

  $("#videoIframe").attr(
    "src",
    `https://www.youtube.com/embed/${videoList[index]}`
  );
}

function loadPlaylists() {
  let videoList = [];

  const englishVideoList = [
    // https://www.youtube.com/@EnglishSpeeches
    // Learn English with Speeches
    "fBnAMUkNM2k", // ENGLISH SPEECH | MUNIBA MAZARI - We all are Perfectly Imperfect (English Subtitles) - 1
    "s5BMcaQsjbM", // ENGLISH SPEECH | SAMANTHA RUTH PRABHU: You Can Do It (English Subtitles) - 2
    "1i9kcBHX2Nw", // ENGLISH SPEECH | STEVE JOBS: Stanford Speech(English Subtitles) - 3
    "iBBB-vJZB50", // ENGLISH SPEECH | MALALA YOUSAFZAI - Nobel Peace Prize (English Subtitles) - 4
    "jG-4kBIDAzA", // ENGLISH SPEECH | SELENA GOMEZ: Trust Yourself (English Subtitles) - 5
    "r01DOmPpxjg", // ENGLISH SPEECH | MUNIBA MAZARI: Motivational Words (English Subtitles) - 6
    "nIwU-9ZTTJc", // ENGLISH SPEECH | EMMA WATSON: Gender Equality (English Subtitles) - 7
    "aDG1T0kJnd4", // ENGLISH SPEECH | PRIYANKA CHOPRA: Be Fearless (English Subtitles) - 8
    "_nUDuXRh3zM", // ENGLISH SPEECH | IVANKA TRUMP: Think Big Again (English Subtitles) - 9
    "_POoaOQ2Xuc", // ENGLISH SPEECH | PRIYANKA CHOPRA: Full Power of Women (English Subtitles) - 10
    "EQYWOQ-12c8", // ENGLISH SPEECH | RASHMIKA MANDANNA: Dream BIG! (English Subtitles) - 11
    "U8iy5zvXhJc", // ENGLISH SPEECH | SHAKIRA: Education Changes the World (English Subtitles) - 12
    "2mqQMA7CSLQ", // ENGLISH SPEECH | DONALD TRUMP: Never, Ever Give Up (English Subtitles) - 13
    "mK53d6aIG48", // ENGLISH SPEECH | R. MADHAVAN: India in 2030 (English Subtitles) - 14
    "KLe7Rxkrj94", // ENGLISH SPEECH | THE ROCK: Be Yourself (English Subtitles) - 15
  ];

  const spanishVideoList = [
    // https://www.youtube.com/@EasySpanish
    // Easy Spanish - Learning Spanish from the Streets
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
    "tEJHoAMKMvQ", // Mexico : Croatia (FIFA World Cup 2014) | Easy Spanish 11
    "JvaqRQswHl4", // How did new technologies influence your life? | Easy Spanish 12
    "M3en0xK1XCk", // Mexican Bread | Easy Spanish 13
    "7GyCg4N6Q-4", // Machu Picchu | Easy Spanish 14
    "cx8LpiW174g", // What did you dream last night? | Easy Spanish 15
  ];

  if (languages.english) videoList = videoList.concat(englishVideoList);
  if (languages.spanish) videoList = videoList.concat(spanishVideoList);

  return videoList;
}

function updatePlaylists() {
  // https://developers.google.com/youtube/v3/docs/playlistItems/list
  // GET https://www.googleapis.com/youtube/v3/playlistItems
}
