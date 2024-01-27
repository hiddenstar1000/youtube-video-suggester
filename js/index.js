$(document).ready(function () {
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
  const videoList = loadPlaylists(languages);
  const index = Math.floor(Math.random() * videoList.length);

  $("#videoIframe").attr(
    "src",
    `https://www.youtube.com/embed/${videoList[index]}`
  );
}

function loadPlaylists(languages) {
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
    "MvJSyU_zuLY", // ENGLISH SPEECH | BTS: Speak Yourself (English Subtitles) - 16
    "gkr57P0fwbI", // ENGLISH SPEECH | ANNE HATHAWAY: Paid Family Leave (English Subtitles) - 17
    "Hq7a4qvYQqI", // ENGLISH SPEECH | AAMIR KHAN: For a Better India (English Subtitles) - 18
    "_S955fkSZd8", // ENGLISH SPEECH | SHASHI THAROOR: Britain owes reparations to India (English Subtitles) - 19
    "KMEe2ni92rQ", // ENGLISH SPEECH | BILL GATES: Harvard Commencement Address (English Subtitles) - 20
    "ksZpu1s1LV0", // ENGLISH SPEECH | MARK ZUCKERBERG: Find Your Purpose (English Subtitles) - 21
    "BZ7v0wVrKDo", // ENGLISH SPEECH | SHAH RUKH KHAN: Freedom to Be Yourself (English Subtitles) - 22
    "46yStqMV4eY", // ENGLISH SPEECH | HILLARY CLINTON: Be Resilient (English Subtitles) - 23
    "2rmRzAdLgWk", // ENGLISH SPEECH | SAI PALLAVI: The Best of Sai Pallavi (English Subtitles) - 24
    "SZR2nVKkcuI", // ENGLISH SPEECH | THERESA MAY: Britain, the Great Meritocracy (English Subtitles) - 25
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
    "pcgLACpVjxk", // At the Lima Book Festival - Part I | Easy Spanish 16
    "MFPfyLz-46w", // At the Lima Book Festival (Part II) | Easy Spanish 17
    "ATTlzREF7gI", // Book or Movie? | Easy Spanish 18
    "4AY4OziyqyI", // Human Trafficking | Easy Spanish 19
    "CDt3KibDszk", // Barranco (I) | Easy Spanish 20
    "naENh3lLoDg", // Barranco (II) | Easy Spanish 21
    "QgedeMGTh5E", // Ciclonudista | Easy Spanish 22
    "ecsatgCN6Y8", // Chorrillos | Easy Spanish 23
    "4xGwNEhH8jM", // What if you had Super Powers? | Easy Spanish 24
    "SCuNIIVOqdY", // Medellín | Easy Spanish 25
  ];

  if (languages.english) videoList = videoList.concat(englishVideoList);
  if (languages.spanish) videoList = videoList.concat(spanishVideoList);

  $("#englishCount").html(englishVideoList.length);
  $("#spanishCount").html(spanishVideoList.length);

  return videoList;
}
