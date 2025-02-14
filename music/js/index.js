$(document).ready(function () {
  init();

  $(".languages").click(function () {
    const languages = {
      english: $("#english").is(":checked"),
      hindi: $("#hindi").is(":checked"),
      japanese: $("#japanese").is(":checked"),
      spanish: $("#spanish").is(":checked"),
      russian: $("#russian").is(":checked"),
    };

    if (
      !languages.english &&
      !languages.hindi &&
      !languages.japanese &&
      !languages.spanish &&
      !languages.russian
    ) {
      languages.english = true;
      $("#english").prop("checked", languages.english);
    }

    loadNextVideo();
  });

  $("#englishCountBadge").click(function () {
    $("#english").trigger("click");
  });

  $("#hindiCountBadge").click(function () {
    $("#hindi").trigger("click");
  });

  $("#japaneseCountBadge").click(function () {
    $("#japanese").trigger("click");
  });

  $("#spanishCountBadge").click(function () {
    $("#spanish").trigger("click");
  });

  $("#russianCountBadge").click(function () {
    $("#russian").trigger("click");
  });

  $("#watched").click(function () {
    const video = { index: $("#videoIndex").val(), ln: $("#language").val() };
    markWatchedVideo(video);
    loadNextVideo();
  });

  $("#reset").click(function () {
    resetToDefault();
  });

  $("#next").click(function () {
    loadNextVideo();
  });
});

function init() {
  const languages = JSON.parse(localStorage.getItem("languagesMc")) || {
    english: false,
    hindi: true,
    japanese: false,
    spanish: true,
    russian: false,
  };

  $("#english").prop("checked", languages.english);
  $("#hindi").prop("checked", languages.hindi);
  $("#japanese").prop("checked", languages.japanese);
  $("#spanish").prop("checked", languages.spanish);
  $("#russian").prop("checked", languages.russian);

  loadNextVideo();
}

function loadNextVideo() {
  const languages = {
    english: $("#english").is(":checked"),
    hindi: $("#hindi").is(":checked"),
    japanese: $("#japanese").is(":checked"),
    spanish: $("#spanish").is(":checked"),
    russian: $("#russian").is(":checked"),
  };

  localStorage.setItem("languagesMc", JSON.stringify(languages));
  const videoList = loadPlaylists(languages);
  const numberOfVideos = videoList.length;
  const randomNumber = Math.random();
  const nextIndex = `${randomNumber * numberOfVideos}`.split(".")[0];
  console.log(
    `numberOfVideos:${numberOfVideos}, randomNumber:${randomNumber}, nextIndex:${nextIndex}`
  );
  const video = videoList[nextIndex];

  $("#videoIframe").attr("src", `https://www.youtube.com/embed/${video.id}`);
  $("#videoIndex").val(video.index);
  $("#language").val(video.ln);
}

function resetToDefault() {
  localStorage.removeItem("languagesMc");
  localStorage.removeItem("watchedListMc");
  location.reload();
}

function markWatchedVideo(video) {
  const watchedList = JSON.parse(localStorage.getItem("watchedListMc")) || {
    english: [],
    hindi: [],
    japanese: [],
    spanish: [],
    russian: [],
  };

  if (video.ln === "english") {
    watchedList.english.push(video.index);
  } else if (video.ln === "hindi") {
    watchedList.hindi.push(video.index);
  } else if (video.ln === "japanese") {
    watchedList.japanese.push(video.index);
  } else if (video.ln === "spanish") {
    watchedList.spanish.push(video.index);
  } else if (video.ln === "russian") {
    watchedList.russian.push(video.index);
  }

  localStorage.setItem("watchedListMc", JSON.stringify(watchedList));
}

function loadPlaylists(languages) {
  const watchedList = JSON.parse(localStorage.getItem("watchedListMc")) || {
    english: [],
    hindi: [],
    japanese: [],
    spanish: [],
    russian: [],
  };
  let videoList = [];
  const data = loadData();

  // https://www.youtube.com/@EnglishSpeeches
  // Learn English with Speeches
  const englishVideoList = data.englishVideoList;

  // https://www.youtube.com/@easylanguages
  // Easy Hindi - Learn Hindi from the Streets
  const hindiVideoList = data.hindiVideoList;

  // https://www.youtube.com/@easylanguages
  // Easy Japanese - Learn Japanese from the Streets!
  const japaneseVideoList = data.japaneseVideoList;

  // https://www.youtube.com/@EasySpanish
  // Easy Spanish - Learning Spanish from the Streets
  const spanishVideoList = data.spanishVideoList;

  // https://www.youtube.com/@EasyRussianVideos
  // Easy Russian - street interviews and more
  const russianVideoList = data.russianVideoList;

  if (watchedList.english.length > 0) {
    watchedList.english.forEach((index) => {
      englishVideoList.splice(index, 1);
    });
  }

  if (watchedList.hindi.length > 0) {
    watchedList.hindi.forEach((index) => {
      hindiVideoList.splice(index, 1);
    });
  }

  if (watchedList.japanese.length > 0) {
    watchedList.japanese.forEach((index) => {
      japaneseVideoList.splice(index, 1);
    });
  }

  if (watchedList.spanish.length > 0) {
    watchedList.spanish.forEach((index) => {
      spanishVideoList.splice(index, 1);
    });
  }

  if (watchedList.russian.length > 0) {
    watchedList.russian.forEach((index) => {
      russianVideoList.splice(index, 1);
    });
  }

  if (languages.english) videoList = videoList.concat(englishVideoList);
  if (languages.hindi) videoList = videoList.concat(hindiVideoList);
  if (languages.japanese) videoList = videoList.concat(japaneseVideoList);
  if (languages.spanish) videoList = videoList.concat(spanishVideoList);
  if (languages.russian) videoList = videoList.concat(russianVideoList);

  $("#englishCount").html(englishVideoList.length);
  $("#hindiCount").html(hindiVideoList.length);
  $("#japaneseCount").html(japaneseVideoList.length);
  $("#spanishCount").html(spanishVideoList.length);
  $("#russianCount").html(russianVideoList.length);

  return videoList;
}

function loadData() {
  // Channel: https://www.youtube.com/@romanticamusicaoficial

  const englishData = [
    {
      contentDetails: {
        videoId: "dE4xDQbS-9c",
      },
    },
  ];

  // Channel: https://www.youtube.com/@NewHindiMashupSongs918

  const hindiData = [
    {
      name: "💚 Best Mashup NonStop Love of Arijit Singh, Jubin Nautiyal, Atif Aslam Neha Kakkar#010",
      contentDetails: {
        videoId: "zkpRDb6giYE",
      },
    },
    {
      name: "💚 Best Mashup NonStop Love of Arijit Singh, Jubin Nautiyal, Atif Aslam Neha Kakkar#010",
      contentDetails: {
        videoId: "nyJjqAHRJYk",
      },
    },
    {
      name: "💚ROMANTIC HINDI LOVE MASHUP 2025 🧡 Best Mashup of Arijit Singh, Jubin Nautiyal, Atif Aslam#010",
      contentDetails: {
        videoId: "1BlTjeczmjY",
      },
    },
    {
      name: "Trending Love Mashup 2024 Best Mashup of Arijit Singh, Jubin Nautiyal, Atif Aslam#010#010",
      contentDetails: {
        videoId: "3kSW2ZaLMQQ",
      },
    },
    {
      name: "💚 Best Mashup NonStop Love of Arijit Singh, Jubin Nautiyal, Atif Aslam Neha Kakkar#010",
      contentDetails: {
        videoId: "qxB-bUaekms",
      },
    },
  ];

  // Channel: https://www.youtube.com/@romanticamusicaoficial

  const japaneseData = [
    {
      contentDetails: {
        videoId: "dE4xDQbS-9c",
      },
    },
  ];

  // Channel: https://www.youtube.com/@romanticamusicaoficial

  const spanishData = [
    {
      name: "Fiesta Latina Mix 2024 - Maluma, Shakira, Daddy Yankee, Wisin, Nicky Jam - Pop Latino Reggaeton",
      contentDetails: {
        videoId: "dE4xDQbS-9c",
      },
    },
    {
      name: "Fiesta Latina Mix 2024 - Maluma, Shakira, Daddy Yankee, Wisin, Nicky Jam - Pop Latino Reggaeton",
      contentDetails: {
        videoId: "T1LTNaRQH44",
      },
    },
    {
      name: "Fiesta Latina Mix 2023 - Maluma, Shakira, Daddy Yankee, Wisin, Nicky Jam - Pop Latino Reggaeton",
      contentDetails: {
        videoId: "t86S1O_NqKE",
      },
    },
    {
      name: "Luis Fonsi, Sebastian Yatra, Nacho, Wisin, Daddy Yankee, Maluma, CNCO, Karol G 🎉 Pop Latino 2024 🎉",
      contentDetails: {
        videoId: "HxTfCnmQGWw",
      },
    },
    {
      name: "Sebastián Yatra, Manuel Turizo, Maluma, KAROL G, Shakira, Luis Fonsi, Enrique Iglesias, J Balvin,...",
      contentDetails: {
        videoId: "JrqOrB5hUvQ",
      },
    },
  ];

  // Channel: https://www.youtube.com/@romanticamusicaoficial

  const russianData = [
    {
      contentDetails: {
        videoId: "dE4xDQbS-9c",
      },
    },
  ];

  const data = {
    englishVideoList: [],
    hindiVideoList: [],
    japaneseVideoList: [],
    spanishVideoList: [],
    russianVideoList: [],
  };
  let i = 0;
  englishData.forEach((item) => {
    data.englishVideoList.push({
      index: i,
      id: item.contentDetails.videoId,
      ln: "english",
    });
    i++;
  });

  i = 0;
  hindiData.forEach((item) => {
    data.hindiVideoList.push({
      index: i,
      id: item.contentDetails.videoId,
      ln: "hindi",
    });
    i++;
  });

  i = 0;
  japaneseData.forEach((item) => {
    data.japaneseVideoList.push({
      index: i,
      id: item.contentDetails.videoId,
      ln: "japanese",
    });
    i++;
  });

  i = 0;
  spanishData.forEach((item) => {
    data.spanishVideoList.push({
      index: i,
      id: item.contentDetails.videoId,
      ln: "spanish",
    });
    i++;
  });

  i = 0;
  russianData.forEach((item) => {
    data.russianVideoList.push({
      index: i,
      id: item.contentDetails.videoId,
      ln: "russian",
    });
    i++;
  });

  return data;
}
