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

  $("#englishCountBadge").click(function () {
    $("#english").trigger("click");
  });

  $("#spanishCountBadge").click(function () {
    $("#spanish").trigger("click");
  });

  $("#remove").click(function () {
    const video = { index: $("#videoIndex").val(), ln: $("#language").val() };
    removeVideo(video);
    loadNextVideo(languages);
  });

  $("#reset").click(function () {
    resetToDefault();
  });

  $("#next").click(function () {
    loadNextVideo(languages);
  });
});

function loadNextVideo(languages) {
  localStorage.setItem("languages", JSON.stringify(languages));
  const videoList = loadPlaylists(languages);
  const index = Math.floor(Math.random() * videoList.length);
  const video = videoList[index];

  $("#videoIframe").attr("src", `https://www.youtube.com/embed/${video.id}`);
  $("#videoIndex").val(video.index);
  $("#language").val(video.ln);
}

function resetToDefault() {
  localStorage.removeItem("languages");
  localStorage.removeItem("removedList");
  location.reload();
}

function removeVideo(video) {
  const removedList = JSON.parse(localStorage.getItem("removedList")) || {
    english: [],
    spanish: [],
  };

  if (video.ln === "english") {
    removedList.english.push(video.index);
  } else if (video.ln === "spanish") {
    removedList.spanish.push(video.index);
  }

  localStorage.setItem("removedList", JSON.stringify(removedList));
}

function loadPlaylists(languages) {
  const removedList = JSON.parse(localStorage.getItem("removedList")) || {
    english: [],
    spanish: [],
  };
  let videoList = [];

  const englishVideoList = [
    // https://www.youtube.com/@EnglishSpeeches
    // Learn English with Speeches
    { index: 0, id: "fBnAMUkNM2k", ln: "english" }, // ENGLISH SPEECH | MUNIBA MAZARI - We all are Perfectly Imperfect (English Subtitles) - 1
    { index: 1, id: "s5BMcaQsjbM", ln: "english" }, // ENGLISH SPEECH | SAMANTHA RUTH PRABHU: You Can Do It (English Subtitles) - 2
    { index: 2, id: "1i9kcBHX2Nw", ln: "english" }, // ENGLISH SPEECH | STEVE JOBS: Stanford Speech(English Subtitles) - 3
    { index: 3, id: "iBBB-vJZB50", ln: "english" }, // ENGLISH SPEECH | MALALA YOUSAFZAI - Nobel Peace Prize (English Subtitles) - 4
    { index: 4, id: "jG-4kBIDAzA", ln: "english" }, // ENGLISH SPEECH | SELENA GOMEZ: Trust Yourself (English Subtitles) - 5
    { index: 5, id: "r01DOmPpxjg", ln: "english" }, // ENGLISH SPEECH | MUNIBA MAZARI: Motivational Words (English Subtitles) - 6
    { index: 6, id: "nIwU-9ZTTJc", ln: "english" }, // ENGLISH SPEECH | EMMA WATSON: Gender Equality (English Subtitles) - 7
    { index: 7, id: "aDG1T0kJnd4", ln: "english" }, // ENGLISH SPEECH | PRIYANKA CHOPRA: Be Fearless (English Subtitles) - 8
    { index: 8, id: "_nUDuXRh3zM", ln: "english" }, // ENGLISH SPEECH | IVANKA TRUMP: Think Big Again (English Subtitles) - 9
    { index: 9, id: "_POoaOQ2Xuc", ln: "english" }, // ENGLISH SPEECH | PRIYANKA CHOPRA: Full Power of Women (English Subtitles) - 10
    { index: 10, id: "EQYWOQ-12c8", ln: "english" }, // ENGLISH SPEECH | RASHMIKA MANDANNA: Dream BIG! (English Subtitles) - 11
    { index: 11, id: "U8iy5zvXhJc", ln: "english" }, // ENGLISH SPEECH | SHAKIRA: Education Changes the World (English Subtitles) - 12
    { index: 12, id: "2mqQMA7CSLQ", ln: "english" }, // ENGLISH SPEECH | DONALD TRUMP: Never, Ever Give Up (English Subtitles) - 13
    { index: 13, id: "mK53d6aIG48", ln: "english" }, // ENGLISH SPEECH | R. MADHAVAN: India in 2030 (English Subtitles) - 14
    { index: 14, id: "KLe7Rxkrj94", ln: "english" }, // ENGLISH SPEECH | THE ROCK: Be Yourself (English Subtitles) - 15
    { index: 15, id: "MvJSyU_zuLY", ln: "english" }, // ENGLISH SPEECH | BTS: Speak Yourself (English Subtitles) - 16
    { index: 16, id: "gkr57P0fwbI", ln: "english" }, // ENGLISH SPEECH | ANNE HATHAWAY: Paid Family Leave (English Subtitles) - 17
    { index: 17, id: "Hq7a4qvYQqI", ln: "english" }, // ENGLISH SPEECH | AAMIR KHAN: For a Better India (English Subtitles) - 18
    { index: 18, id: "_S955fkSZd8", ln: "english" }, // ENGLISH SPEECH | SHASHI THAROOR: Britain owes reparations to India (English Subtitles) - 19
    { index: 19, id: "KMEe2ni92rQ", ln: "english" }, // ENGLISH SPEECH | BILL GATES: Harvard Commencement Address (English Subtitles) - 20
    { index: 20, id: "ksZpu1s1LV0", ln: "english" }, // ENGLISH SPEECH | MARK ZUCKERBERG: Find Your Purpose (English Subtitles) - 21
    { index: 21, id: "BZ7v0wVrKDo", ln: "english" }, // ENGLISH SPEECH | SHAH RUKH KHAN: Freedom to Be Yourself (English Subtitles) - 22
    { index: 22, id: "46yStqMV4eY", ln: "english" }, // ENGLISH SPEECH | HILLARY CLINTON: Be Resilient (English Subtitles) - 23
    { index: 23, id: "2rmRzAdLgWk", ln: "english" }, // ENGLISH SPEECH | SAI PALLAVI: The Best of Sai Pallavi (English Subtitles) - 24
    { index: 24, id: "SZR2nVKkcuI", ln: "english" }, // ENGLISH SPEECH | THERESA MAY: Britain, the Great Meritocracy (English Subtitles) - 25
    { index: 25, id: "bz7yYu_w2HY", ln: "english" }, // ENGLISH SPEECH | ELON MUSK: Future, A.I. and Mars (English Subtitles) - 26
    { index: 26, id: "6dKimoybmEo", ln: "english" }, // ENGLISH SPEECH | MARTIN LUTHER KING: I Have a Dream (English Subtitles) - 27
    { index: 27, id: "jkZizIN5aEg", ln: "english" }, // ENGLISH SPEECH | NICK VUJICIC: How to Stop A Bully (English Subtitles) - 28
    { index: 28, id: "pdYwZhCAeB0", ln: "english" }, // ENGLISH SPEECH | MS DHONI: Be Honest & Take Risks (English Subtitles) - 29
    { index: 29, id: "S1dNuCG3sOA", ln: "english" }, // ENGLISH SPEECH | BARACK OBAMA: The People of India (English Subtitles) - 30
  ];

  const spanishVideoList = [
    // https://www.youtube.com/@EasySpanish
    // Easy Spanish - Learning Spanish from the Streets
    { index: 0, id: "L_-KQ90IiF0", ln: "spanish" }, // Professions | Easy Spanish 1
    { index: 1, id: "WlknUGwKHtw", ln: "spanish" }, // Plans for today | Easy Spanish 2
    { index: 2, id: "W0_GwKe1SB8", ln: "spanish" }, // What do you like about Lima? | Easy Spanish 3
    { index: 3, id: "m4rPXkaelKw", ln: "spanish" }, // Three Wishes | Easy Spanish 4
    { index: 4, id: "0jyMWq5T0eo", ln: "spanish" }, // What would you never lend to anyone? | Easy Spanish 5
    { index: 5, id: "nb5h1svrFro", ln: "spanish" }, // The greatest achievement of your life! | Easy Spanish 6
    { index: 6, id: "3Ee9cKEPOe4", ln: "spanish" }, // What do you believe in? / En qué crees? | Easy Spanish 7
    { index: 7, id: "6Pfm-y40NcU", ln: "spanish" }, // London | Easy Spanish 8
    { index: 8, id: "GBbHQv4FxmQ", ln: "spanish" }, // Is global warming real? | Easy Spanish 9
    { index: 9, id: "3QKtKxaAZ6o", ln: "spanish" }, // In the Mexican Subway | Easy Spanish 10
    { index: 10, id: "tEJHoAMKMvQ", ln: "spanish" }, // Mexico : Croatia (FIFA World Cup 2014) | Easy Spanish 11
    { index: 11, id: "JvaqRQswHl4", ln: "spanish" }, // How did new technologies influence your life? | Easy Spanish 12
    { index: 12, id: "M3en0xK1XCk", ln: "spanish" }, // Mexican Bread | Easy Spanish 13
    { index: 13, id: "7GyCg4N6Q-4", ln: "spanish" }, // Machu Picchu | Easy Spanish 14
    { index: 14, id: "cx8LpiW174g", ln: "spanish" }, // What did you dream last night? | Easy Spanish 15
    { index: 15, id: "pcgLACpVjxk", ln: "spanish" }, // At the Lima Book Festival - Part I | Easy Spanish 16
    { index: 16, id: "MFPfyLz-46w", ln: "spanish" }, // At the Lima Book Festival (Part II) | Easy Spanish 17
    { index: 17, id: "ATTlzREF7gI", ln: "spanish" }, // Book or Movie? | Easy Spanish 18
    { index: 18, id: "4AY4OziyqyI", ln: "spanish" }, // Human Trafficking | Easy Spanish 19
    { index: 19, id: "CDt3KibDszk", ln: "spanish" }, // Barranco (I) | Easy Spanish 20
    { index: 20, id: "naENh3lLoDg", ln: "spanish" }, // Barranco (II) | Easy Spanish 21
    { index: 21, id: "QgedeMGTh5E", ln: "spanish" }, // Ciclonudista | Easy Spanish 22
    { index: 22, id: "ecsatgCN6Y8", ln: "spanish" }, // Chorrillos | Easy Spanish 23
    { index: 23, id: "4xGwNEhH8jM", ln: "spanish" }, // What if you had Super Powers? | Easy Spanish 24
    { index: 24, id: "SCuNIIVOqdY", ln: "spanish" }, // Medellín | Easy Spanish 25
    { index: 25, id: "by7hNcJamYI", ln: "spanish" }, // Favorite Destinations | Easy Spanish 26
    { index: 26, id: "UQna4-urlbw", ln: "spanish" }, // Weather in Monterrey | Easy Spanish 27
    { index: 27, id: "VhAiG4vUUXY", ln: "spanish" }, // Childhood Memories | Easy Spanish 28
    { index: 28, id: "XcS-qKBm7UE", ln: "spanish" }, // What did you want to be as a kid? | Easy Spanish 29
    { index: 29, id: "oPX0fYpSTMI", ln: "spanish" }, // Christmas in Mexico City | Easy Spanish 30
  ];

  if (removedList.english.length > 0) {
    removedList.english.forEach((index) => {
      englishVideoList.splice(index, 1);
    });
  }

  if (removedList.spanish.length > 0) {
    removedList.spanish.forEach((index) => {
      spanishVideoList.splice(index, 1);
    });
  }

  if (languages.english) videoList = videoList.concat(englishVideoList);
  if (languages.spanish) videoList = videoList.concat(spanishVideoList);

  $("#englishCount").html(englishVideoList.length);
  $("#spanishCount").html(spanishVideoList.length);

  return videoList;
}
