$(document).ready(function () {
  init();

  $(".languages").click(function () {
    const languages = {
      hindi: $("#hindi").is(":checked"),
      spanish: $("#spanish").is(":checked"),
    };

    if ($(this).attr("id") === "hindi") {
      languages.spanish = !languages.hindi;
      $("#spanish").prop("checked", languages.spanish);
    } else {
      languages.hindi = !languages.spanish;
      $("#hindi").prop("checked", languages.hindi);
    }

    loadNextVideo(languages);
  });

  $("#hindiCountBadge").click(function () {
    $("#hindi").trigger("click");
  });

  $("#spanishCountBadge").click(function () {
    $("#spanish").trigger("click");
  });

  $("#watched").click(function () {
    const video = { index: $("#videoIndex").val(), ln: $("#language").val() };
    markWatchedVideo(video);
    loadNextVideo(languages);
  });

  $("#reset").click(function () {
    resetToDefault();
  });
});

function init() {
  const languages = JSON.parse(localStorage.getItem("languagesTs")) || {
    hindi: true,
    spanish: false,
  };

  $("#hindi").prop("checked", languages.hindi);
  $("#spanish").prop("checked", languages.spanish);

  loadNextVideo(languages);
}

function loadNextVideo(languages) {
  localStorage.setItem("languagesTs", JSON.stringify(languages));
  const videoList = loadPlaylists(languages);
  const currentVideo = JSON.parse(localStorage.getItem("currentVideoTs")) || {
    hindiIndex: 0,
    spanishIndex: 0,
  };
  let video = {};
  if (languages.hindi) video = videoList[currentVideo.hindiIndex];
  else if (languages.spanish) video = videoList[currentVideo.spanishIndex];

  $("#videoIframe").attr("src", `https://www.youtube.com/embed/${video.id}`);
  $("#videoIndex").val(video.index);
  $("#language").val(video.ln);
}

function resetToDefault() {
  localStorage.removeItem("languagesTs");
  localStorage.removeItem("currentVideoTs");
  location.reload();
}

function markWatchedVideo(video) {
  const currentVideo = JSON.parse(localStorage.getItem("currentVideoTs")) || {
    hindiIndex: 0,
    spanishIndex: 0,
  };

  if (video.ln === "hindi") {
    currentVideo.hindiIndex++;
  } else if (video.ln === "spanish") {
    currentVideo.spanishIndex++;
  }

  localStorage.setItem("currentVideoTs", JSON.stringify(currentVideo));
}

function loadPlaylists(languages) {
  let videoList = [];
  const data = loadData();

  const hindiVideoList = data.hindiVideoList;
  const spanishVideoList = data.spanishVideoList;

  if (languages.hindi) videoList = videoList.concat(hindiVideoList);
  else if (languages.spanish) videoList = videoList.concat(spanishVideoList);

  $("#hindiCount").html(hindiVideoList.length);
  $("#spanishCount").html(spanishVideoList.length);

  return videoList;
}

function loadData() {
  const hindiData = [];

  const spanishData = [
    {
      contentDetails: {
        videoId: "dE4xDQbS-9c",
        videoPublishedAt: "",
      },
    },
  ];

  hindiData.sort((a, b) => {
    let videoPublishedAtA = new Date(a.contentDetails.videoPublishedAt);
    let videoPublishedAtB = new Date(b.contentDetails.videoPublishedAt);
    return videoPublishedAtA - videoPublishedAtB;
  });

  const data = { hindiVideoList: [], spanishVideoList: [] };
  let i = 0;
  hindiData.forEach((item) => {
    data.hindiVideoList.push({
      index: i,
      id: item.contentDetails.videoId,
      ln: "hindi",
    });
    i++;
  });

  spanishData.sort((a, b) => {
    let videoPublishedAtA = new Date(a.contentDetails.videoPublishedAt);
    let videoPublishedAtB = new Date(b.contentDetails.videoPublishedAt);
    return videoPublishedAtA - videoPublishedAtB;
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

  return data;
}
