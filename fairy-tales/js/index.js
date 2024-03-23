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
  const languages = JSON.parse(localStorage.getItem("languagesFt")) || {
    english: true,
    hindi: false,
    japanese: false,
    spanish: false,
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

  localStorage.setItem("languages", JSON.stringify(languages));
  const playList = loadPlaylists();
  const numberOfVideos = playList.length;
  const randomNumber = Math.random();
  const nextIndex = `${randomNumber * numberOfVideos}`.split(".")[0];
  console.log(
    `numberOfVideos:${numberOfVideos}, randomNumber:${randomNumber}, nextIndex:${nextIndex}`
  );
  const item = playList[nextIndex];

  $("#videoIframe").attr(
    "src",
    `https://www.youtube.com/embed/${item.videos[0].id}`
  );
  $("#videoIndex").val(item.index);
  $("#language").val(item.videos[0].ln);
}

function resetToDefault() {
  localStorage.removeItem("languagesFt");
  localStorage.removeItem("watchedList");
  location.reload();
}

function markWatchedVideo(video) {
  const watchedList = JSON.parse(localStorage.getItem("watchedList")) || {
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

  localStorage.setItem("watchedList", JSON.stringify(watchedList));
}

function loadPlaylists() {
  const watchedList = JSON.parse(localStorage.getItem("watchedList")) || {
    list: [],
  };
  let playList = [];
  const data = loadData();

  // https://www.youtube.com/@EnglishSpeeches
  // Learn English with Speeches
  const fairyTalesVideoList = data.fairyTalesVideoList;

  if (watchedList.list.length > 0) {
    watchedList.list.forEach((index) => {
      fairyTalesVideoList.splice(index, 1);
    });
  }

  playList = playList.concat(fairyTalesVideoList);

  $("#englishCount").html(fairyTalesVideoList.length);

  return playList;
}

function loadData() {
  // URL: https://developers.google.com/youtube/v3/docs/playlistItems/list
  // part: contentDetails
  // maxResults: 50
  // playlistId: PLosaC3gb0kGDhmBVm6M47jcU8BbEhTnlP
  // pageToken: Should be taken from nextPageToken of the previous response
  // items should be taken from the response and saved in the data object

  const englishData = [
    {
      kind: "youtube#playlistItem",
      etag: "cWo9ZAGC72kDBWYS0bns0W-0kis",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5ENDU4Q0M4RDExNzM1Mjcy",
      contentDetails: {
        videos: [{ id: "fBnAMUkNM2k", ln: "english" }],
      },
    },
  ];

  const data = {
    fairyTalesVideoList: [],
  };
  let i = 0;
  englishData.forEach((item) => {
    data.fairyTalesVideoList.push({
      index: i,
      videos: item.contentDetails.videos,
    });
    i++;
  });

  return data;
}
