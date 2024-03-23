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
  const languages = JSON.parse(localStorage.getItem("languages")) || {
    english: true,
    hindi: true,
    japanese: true,
    spanish: true,
    russian: true,
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
  localStorage.removeItem("languages");
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

function loadPlaylists(languages) {
  const watchedList = JSON.parse(localStorage.getItem("watchedList")) || {
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
  const fairyTalesVideoList = data.fairyTalesVideoList;

  if (watchedList.english.length > 0) {
    watchedList.english.forEach((index) => {
      fairyTalesVideoList.splice(index, 1);
    });
  }

  if (languages.english) videoList = videoList.concat(fairyTalesVideoList);

  $("#englishCount").html(fairyTalesVideoList.length);

  return videoList;
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
        videoId: "fBnAMUkNM2k",
        videoPublishedAt: "2018-07-07T02:30:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "8IjA6MnX6vozeUszbqgw1LO7S1Y",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41ODJDREU4NjNDRTM2QkNC",
      contentDetails: {
        videoId: "s5BMcaQsjbM",
        videoPublishedAt: "2022-01-22T05:00:33Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "-hHY1_b41R7THARFgLKvSxEzPbA",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4yODlGNEE0NkRGMEEzMEQy",
      contentDetails: {
        videoId: "1i9kcBHX2Nw",
        videoPublishedAt: "2017-03-28T05:03:40Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "DpZBbvz4Of26fHB87jPYm4FPwxQ",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41QTY1Q0UxMTVCODczNThE",
      contentDetails: {
        videoId: "iBBB-vJZB50",
        videoPublishedAt: "2018-05-26T02:30:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "4i-804od8xGyl8b61y04cFF004w",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5CQzUwREI3MzkxQjdBM0E0",
      contentDetails: {
        videoId: "jG-4kBIDAzA",
        videoPublishedAt: "2020-05-02T01:00:09Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "pzTePd-_PigtbbXybwgnCTNcSZY",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC42RDgxQ0M2OUIwREZCNjZF",
      contentDetails: {
        videoId: "r01DOmPpxjg",
        videoPublishedAt: "2020-12-05T02:00:05Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "P12WEY_3VY6jHu-S7n3I2Q3WIr8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4wMTcyMDhGQUE4NTIzM0Y5",
      contentDetails: {
        videoId: "nIwU-9ZTTJc",
        videoPublishedAt: "2017-06-22T17:26:31Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "WD6cs-UcafvOqZEmQ_LkkbYoUqA",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5EQTdFNDU3M0Y3MTM1QjlG",
      contentDetails: {
        videoId: "aDG1T0kJnd4",
        videoPublishedAt: "2021-03-13T05:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "jkjtQdhjxSdfAzlKRhOQ3QNpKmg",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4xNTZBNUQxMDZBQzFGMjkw",
      contentDetails: {
        videoId: "_nUDuXRh3zM",
        videoPublishedAt: "2019-12-07T02:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "1dvLI7K3KJ9uSJvH9bTl1i_hpIg",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43MTI1NDIwOTMwQjIxMzNG",
      contentDetails: {
        videoId: "_POoaOQ2Xuc",
        videoPublishedAt: "2018-09-23T10:00:11Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "8S09sZm-HoqCfS_f4V_FE2QPrg0",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5FQjcyRDZBMEMyNTY3OTdE",
      contentDetails: {
        videoId: "EQYWOQ-12c8",
        videoPublishedAt: "2020-11-14T02:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "ZMF4oMByboAwqTO7uWKZEm5wfmQ",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40NzE2MTY1QTM3RUI3QkU3",
      contentDetails: {
        videoId: "U8iy5zvXhJc",
        videoPublishedAt: "2020-01-18T02:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "V-dMBOMLl0xSiZTPzLdQKrC4UjA",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4wRjhFM0MxMTU1MEUzQ0VB",
      contentDetails: {
        videoId: "2mqQMA7CSLQ",
        videoPublishedAt: "2019-07-27T01:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "EXrPmwd8KL1kBYXZxqgm_EiX7FI",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4yQzk4QTA5QjkzMTFFOEI1",
      contentDetails: {
        videoId: "mK53d6aIG48",
        videoPublishedAt: "2019-10-12T01:00:03Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Vnw9fiw4iF54WnZcg7NqSw49HC8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44NjIxNjc5OUQwQkJBODQ5",
      contentDetails: {
        videoId: "KLe7Rxkrj94",
        videoPublishedAt: "2020-06-20T01:00:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "BiIdScPFwj4MfFFdRX4paprXLG0",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5ENjI1QUI0MDI5NEQzODFE",
      contentDetails: {
        videoId: "MvJSyU_zuLY",
        videoPublishedAt: "2019-04-13T01:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "WEl0_7EzUEjLB3PEqW8wHKUeD7Q",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5DNkMwRUI2MkI4QkI4NDFG",
      contentDetails: {
        videoId: "gkr57P0fwbI",
        videoPublishedAt: "2019-02-23T02:00:03Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "LlRdrP5zhFI3VYmAwJj5b1OAYQM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4yM0EyQ0U1M0I2RkIwNTQ0",
      contentDetails: {
        videoId: "Hq7a4qvYQqI",
        videoPublishedAt: "2020-02-29T02:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "YNsKENiFcWq1qPJL_uyBnlF2zrM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5GM0Q3M0MzMzY5NTJFNTdE",
      contentDetails: {
        videoId: "_S955fkSZd8",
        videoPublishedAt: "2018-08-04T02:30:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "9a0xSlCNefhtfoI4tydbnC82-x8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44Mjc5REFBRUE2MTdFRDU0",
      contentDetails: {
        videoId: "KMEe2ni92rQ",
        videoPublishedAt: "2018-12-01T07:38:14Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "IroiHI-dDx-aw7t0O6FH702Zxko",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5CMEQ2Mjk5NTc3NDZFRUNB",
      contentDetails: {
        videoId: "ksZpu1s1LV0",
        videoPublishedAt: "2018-12-22T07:52:47Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "0YIjN72-Rc0Hm9TBchibPPCzGDQ",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC42MjYzMTMyQjA0QURCN0JF",
      contentDetails: {
        videoId: "BZ7v0wVrKDo",
        videoPublishedAt: "2019-09-09T01:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "lNqMgWABosTHllJV2oSvTvg1Gq0",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5CQkEwRDA0MDkwNUM2MDY1",
      contentDetails: {
        videoId: "46yStqMV4eY",
        videoPublishedAt: "2019-06-08T01:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "_c8ZcGG8Fy4jrZ1ycWO4-ccBEH8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44QjI0MDE3MzFCMUVBQTkx",
      contentDetails: {
        videoId: "2rmRzAdLgWk",
        videoPublishedAt: "2022-03-09T12:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "FMCDNevL4my5-YusAdrXJbSkGHk",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5DMkU4NTY1QUFGQTYwMDE3",
      contentDetails: {
        videoId: "SZR2nVKkcuI",
        videoPublishedAt: "2018-11-16T19:00:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "zpoTBvBqTJa5bFuhGm4doZEW2Po",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4yQUE2Q0JEMTk4NTM3RTZC",
      contentDetails: {
        videoId: "bz7yYu_w2HY",
        videoPublishedAt: "2018-10-28T15:58:23Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "6BTBmKPU6NjIIvUZhNMI6cY6dvY",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41NkI0NEY2RDEwNTU3Q0M2",
      contentDetails: {
        videoId: "6dKimoybmEo",
        videoPublishedAt: "2017-04-14T00:56:54Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "6LnpSee10TRSiYt6caX9aogYId8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44MkM2RjVEQkQ5N0I2MjVE",
      contentDetails: {
        videoId: "jkZizIN5aEg",
        videoPublishedAt: "2020-01-11T02:00:07Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Y-QKuQzMErDOxGWrsMMmQOFVfQ4",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5DODY2Qzc5Mzc1QkZEQ0NF",
      contentDetails: {
        videoId: "pdYwZhCAeB0",
        videoPublishedAt: "2020-12-19T03:00:09Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "yItNK2EA7m6nsLpkTdTTSo2td4Q",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40N0VCMzcxQTEyREU1NDND",
      contentDetails: {
        videoId: "S1dNuCG3sOA",
        videoPublishedAt: "2022-08-06T04:00:10Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "f1rZGxblirKM0zCGZpZYoJPQe2s",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4zQTkzRjgxRTY0OEU0MkM3",
      contentDetails: {
        videoId: "Iw363WNPReQ",
        videoPublishedAt: "2019-11-30T04:30:11Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "xVy9XuTz7dCsKBCEh5fka-NpGww",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC45MEI3NjgzMTVFQkZGODYx",
      contentDetails: {
        videoId: "3AIoHLr8nTI",
        videoPublishedAt: "2020-10-03T01:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "0jj7-aJlc8LSuYOQd_9vprfef3I",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4yOTZGRTNEQ0ZGNUM5RDgw",
      contentDetails: {
        videoId: "S4lTtvlFvyk",
        videoPublishedAt: "2020-05-09T01:00:11Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "_czzYpF-SWLOkHM6ftFEAKSzYVc",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC42MTI4Njc2QjM1RjU1MjlG",
      contentDetails: {
        videoId: "r3aCv8b2OfE",
        videoPublishedAt: "2018-12-29T06:56:50Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "nlz6XMs-_11EkVQBQm-my3Rrt6o",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43RDg3MzJDMTRFMTZFOTAw",
      contentDetails: {
        videoId: "CZfp0ZUsBdM",
        videoPublishedAt: "2020-06-13T01:00:06Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "mHkI36hIWEtAbmmhs_t694kQkYo",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43ODA2MDVCQzY5QzZDMjUw",
      contentDetails: {
        videoId: "9rFsLcVYbWg",
        videoPublishedAt: "2020-04-18T01:00:06Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "TZpo1tf--qKSwLcCE4Yn29-plXg",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5DNzNDRDE1NzhGODQzODI2",
      contentDetails: {
        videoId: "d4mrO13trBY",
        videoPublishedAt: "2021-08-21T04:00:15Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "7dPrlPoStuvcUp9OeL-VNJUx8uM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5BNjBCMUFCN0Q5QzUyMjlG",
      contentDetails: {
        videoId: "AwA0Jnfj3ao",
        videoPublishedAt: "2021-10-09T04:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "BAkiscdl4Xjj-rK6QjWa7LjtlXM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43Njc4MTZEMDgzNUM1NEVG",
      contentDetails: {
        videoId: "R0XXNgHsSVc",
        videoPublishedAt: "2021-12-11T05:00:07Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "74G7o68VKoBF6erLcLtsiwuSi9U",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41ODIyMTgwQzA4NjJCQkZC",
      contentDetails: {
        videoId: "q9VUpHsnGYw",
        videoPublishedAt: "2020-03-14T01:00:08Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "WGwwYUCPnevMPt2ZDu5fTfmh-yI",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4zQzFBN0RGNzNFREFCMjBE",
      contentDetails: {
        videoId: "bDth6cv5raI",
        videoPublishedAt: "2019-02-10T02:00:03Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "6cDV5e86-9LZnuZ4exgGiAai2JQ",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40QzRDOEU0QUYwNUIxN0M1",
      contentDetails: {
        videoId: "ovFSiwmQq7o",
        videoPublishedAt: "2019-03-30T01:00:07Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "11WPJ9KOQTHy0TjeT8WdDCRln-A",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5CNEFEOUNDRUMzMjVGMjc2",
      contentDetails: {
        videoId: "fnCW1NWngP4",
        videoPublishedAt: "2021-06-19T05:00:12Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "nJ3BhaxsdPVVut1sJl_hGd-bQoI",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43QzNCNkZENzIyMDY2MjZB",
      contentDetails: {
        videoId: "l2ojUrbq8EM",
        videoPublishedAt: "2019-09-28T01:00:03Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "pxfEgB1z4AksU7h8brAArVEuhCI",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5DQ0MyQ0Y4Mzg0M0VGOEYw",
      contentDetails: {
        videoId: "o4gEmLpxHHk",
        videoPublishedAt: "2018-10-13T06:02:55Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "pt-N6_h23wpc4a_FR1DQLmmwtgY",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC45REM1NzQ1MDM2OUZDNDMx",
      contentDetails: {
        videoId: "BVgnIYSKUjY",
        videoPublishedAt: "2022-10-29T04:00:09Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "3xAlrDsUbpkTiOvdyeJEqh_m40Y",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5ENjg2QjQ3OTVDOUE2QzYw",
      contentDetails: {
        videoId: "SLEvWp8JS1c",
        videoPublishedAt: "2022-01-15T05:00:17Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "9tGO5evXr_jXLrb7t8kJt0BlYXw",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44QTA1QTQyRTc3M0VGQzYx",
      contentDetails: {
        videoId: "wSzT7aI6lh8",
        videoPublishedAt: "2019-12-21T02:00:09Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "DuJHQpz4HKRymBl3PXCZw4_UwmE",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5BRDg1NUY1OTY2QzgzOEM0",
      contentDetails: {
        videoId: "ZHpyfTC_Ovo",
        videoPublishedAt: "2020-07-25T01:00:05Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "iYeUN5FdL4q-2EHvwfXKBS0NV4U",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43OEQ1OTk4ODU2N0E5RUYz",
      contentDetails: {
        videoId: "rxzBfvi-_sA",
        videoPublishedAt: "2022-06-25T04:00:30Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "n-pmKMZSVcmxB6Mts8MYbaJuLik",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4wMDkwRkI3NzExODA2MTFG",
      contentDetails: {
        videoId: "e6_spMLKR6c",
        videoPublishedAt: "2020-08-08T01:00:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "PQM9sxZWZ0GlvEa7k7ZJm5ASKlU",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41RTNBREYwMkI5QzU3RkY2",
      contentDetails: {
        videoId: "kM8HJPbFnJg",
        videoPublishedAt: "2019-04-06T01:00:08Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "bEwioXMZ90gO5V7aGCp3Iy-4384",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5ENjg3MEUyQ0IzODMzQThB",
      contentDetails: {
        videoId: "UUheH1seQuE",
        videoPublishedAt: "2020-09-26T01:00:03Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Sd8vNvgzvoiaocy-MliE-IfrC2g",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44REI4QUZDRDI5MDc4Q0NF",
      contentDetails: {
        videoId: "DgTReERU7Bw",
        videoPublishedAt: "2020-11-21T02:00:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "XKuSJzt9hfB0cSIHu4WsxJQFLhs",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43Q0UyODJENjc3NDRCODU0",
      contentDetails: {
        videoId: "dr7-xoQyDxI",
        videoPublishedAt: "2021-09-11T05:00:21Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "u8jTDWIjvNufSlu7vC6aTNKzchg",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5DNzE1RjZEMUZCMjA0RDBB",
      contentDetails: {
        videoId: "lJP4b36pTuw",
        videoPublishedAt: "2018-09-05T01:07:03Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "5JJbwCbsPi-UFIvP00liRyuRXBo",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4yMzk0RjU2NDJBMzI5RDE2",
      contentDetails: {
        videoId: "2D6qaZTOAXs",
        videoPublishedAt: "2021-12-18T05:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "l1k3NQ96GnRSi5e7MXqUbbZIKuw",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40QTY5NjQzQkQzMjgwNjhD",
      contentDetails: {
        videoId: "65v4EyR774E",
        videoPublishedAt: "2021-05-29T04:00:03Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "UkiYG0sg1k11clGakuINUf1857Q",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4zODMyNzgxRTc3QzBBMjJE",
      contentDetails: {
        videoId: "Y0B32z3WwwA",
        videoPublishedAt: "2022-05-22T04:00:10Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "b8zObH6kCXNLeTWJ4578jEpSItw",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5DQTIzMEQyQTJBNDA4ODdF",
      contentDetails: {
        videoId: "ckFokCksaXA",
        videoPublishedAt: "2022-01-10T07:30:06Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "QHIcnBksRKMb-ALwaoxUlxpu8BU",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4wM0I0QUQ0RDU2REQxNjJC",
      contentDetails: {
        videoId: "LEtP7HgGTu0",
        videoPublishedAt: "2022-02-19T05:00:16Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "cdo7sSZ2bFt10L10mW2IqbDwU7k",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4xODVDRjcwQzY3NkIxNjYz",
      contentDetails: {
        videoId: "mgWv-ezYxgU",
        videoPublishedAt: "2022-09-10T04:00:15Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "igbckzZK1l1cWyufGjUmkhdei4c",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43RjU3NEIyMjFBMEIxQ0ZF",
      contentDetails: {
        videoId: "AkH83ipU1wQ",
        videoPublishedAt: "2022-02-05T05:00:03Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "PVgJ1Zkz5QJ2rFzKuH8cJdQlojs",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5GNjAwN0Y0QTFGOTVDMEMy",
      contentDetails: {
        videoId: "9FVVUMTVch8",
        videoPublishedAt: "2019-06-02T01:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "O3lWt8KyGEFMDXQQaHLQonbZ40w",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5CMUM0NzY5NzdEQzlGRjAx",
      contentDetails: {
        videoId: "9MLd7kt2lKQ",
        videoPublishedAt: "2020-02-01T02:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "UvQIQA9iLAGjoihBiawVTA-s0Ns",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4wMTIyMTBBMTA3RDUxNjlD",
      contentDetails: {
        videoId: "A9fGG8gvE9U",
        videoPublishedAt: "2021-05-15T04:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "YG-ZLKdo1wh9g_lgUvYVs1bSVoI",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5EQUE1NTFDRjcwMDg0NEMz",
      contentDetails: {
        videoId: "42QjAxty_1o",
        videoPublishedAt: "2018-05-13T21:13:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "smklyRl5UTPhDzcTSjUvWloCPlQ",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40NzZCMERDMjVEN0RFRThB",
      contentDetails: {
        videoId: "mi8N5gDVpeg",
        videoPublishedAt: "2017-11-11T02:33:12Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "NL7V4jnqukaojBcZHWdlXTkaGXM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41QUU4MjI2RjNBNjFENEY3",
      contentDetails: {
        videoId: "HqVoqEHl1-4",
        videoPublishedAt: "2023-01-07T05:00:05Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "EqX1GNr-E4XOp5gZ-g9xjqSXtI4",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4zRDBDOEZDOUM0MDY5NEEz",
      contentDetails: {
        videoId: "AjxbqKcPX_4",
        videoPublishedAt: "2018-12-17T04:21:56Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "w8nPpljUsvJzy2LapoQsvo4FFKM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4xODJEMEQ5M0RCMDRGMzcy",
      contentDetails: {
        videoId: "-Z9b_v612QQ",
        videoPublishedAt: "2023-10-21T04:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "7sEmcbVP4q056fKpgclqd5HvuVM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40M0Y4MEVDM0MxRTYxRERE",
      contentDetails: {
        videoId: "yAYVPoGWPhg",
        videoPublishedAt: "2023-07-30T04:00:24Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "BRt9_knE9xkl8V2ZGOU2FGIeeNo",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4yQUJFNUVCMzVDNjcxRTlF",
      contentDetails: {
        videoId: "kaypQCpYuNk",
        videoPublishedAt: "2019-03-23T01:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "lDkzo_YH2QlVgXnf7g65riwCz0g",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4yQUYyOTAwNjkwNDE5QjlE",
      contentDetails: {
        videoId: "vPDQOB7pRRM",
        videoPublishedAt: "2023-03-18T04:00:31Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "_6KxMzR48ixueXnhVfFiJC_P01k",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41MzY4MzcwOUFFRUU3QzEx",
      contentDetails: {
        videoId: "ftlHd9Bu530",
        videoPublishedAt: "2019-03-09T02:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "RKUwGKdhJ04rDtXV9Zm8VjV2H4M",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5BNTZDRUVBRkUwRDU3N0FF",
      contentDetails: {
        videoId: "RqmAj38t3RI",
        videoPublishedAt: "2022-01-29T05:00:11Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Nvhec7FkJZOrXEhZCLaUR5IN7EQ",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5DNTU3ODQ4ODAzMjFERTI1",
      contentDetails: {
        videoId: "kTw_KyXcHIc",
        videoPublishedAt: "2021-05-22T04:00:12Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "idsQB_vdYgcx8LHL3n3QQIYe26E",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40MzEwNkU4RUE0MjhBRjg4",
      contentDetails: {
        videoId: "N_H7qoPLOYU",
        videoPublishedAt: "2020-12-12T03:00:03Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "oPD8F2swIC9TjlXvGe_tDYFvUYU",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4yRjU0MzcwMkYwRkVDNDhC",
      contentDetails: {
        videoId: "NLY8_ZnGGcU",
        videoPublishedAt: "2023-05-06T04:00:10Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "bVb3dtErTNQQqSft9L3D5ZRjrJQ",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4wNEU1MTI4NkZEMzVBN0JF",
      contentDetails: {
        videoId: "xwbI8VOsDTo",
        videoPublishedAt: "2019-06-15T01:00:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "84s7Mmxp_zzQVyZUNuPZOrxKK4E",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5BRUVCN0E0MzEwQzAwNjMy",
      contentDetails: {
        videoId: "dTHloCrFB90",
        videoPublishedAt: "2020-09-05T01:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "-W_9dJVvgDDICMjZmGtabgI6uvk",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4xRjE1NzQ4MjRCMUNFRDdB",
      contentDetails: {
        videoId: "1qfB9wExiy8",
        videoPublishedAt: "2021-03-20T04:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "q4G5jJ3rZl9GyI_Ah4tG5WERmws",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40QTA3NTU2RkM1QzlCMzYx",
      contentDetails: {
        videoId: "7XO7kVaEgpM",
        videoPublishedAt: "2019-01-12T01:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "14kPJlCigA81awt_L1abduxhX0s",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC45QUZGQkMzMEZDNTZBREY3",
      contentDetails: {
        videoId: "DFCnootv6Wc",
        videoPublishedAt: "2023-04-08T04:00:07Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "bfDrF1CMtCz0FZyh6NxK6zwdbG4",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41RTFEM0JFNjc4MDNBMzA5",
      contentDetails: {
        videoId: "HewtIPiQueU",
        videoPublishedAt: "2023-01-14T05:00:05Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "FupQ692HtATazUYqHHVrpJx2Frk",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4wMkM3QkFEQzQ4QTU0MTNB",
      contentDetails: {
        videoId: "wa_8XKf_f54",
        videoPublishedAt: "2023-02-04T05:00:20Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "fKplcBjvdSgTAHofJVa44sxm-mg",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41Mzk2QTAxMTkzNDk4MDhF",
      contentDetails: {
        videoId: "i_t_vjxZrJQ",
        videoPublishedAt: "2018-05-07T20:38:40Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "RFah0cKSkEIXa4XWCM03lyW97ZI",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41NTZEOThBNThFOUVGQkVB",
      contentDetails: {
        videoId: "-54zUwySKCg",
        videoPublishedAt: "2019-05-18T01:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "F7su1Z-T9hGPDJ3GaGXGBsEqXP0",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44MjZDNDYzQjgwQzkzQzkz",
      contentDetails: {
        videoId: "wSVajQn90HM",
        videoPublishedAt: "2022-10-15T04:00:23Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "z5wis4gmPTTPNxNTYYOj2PdXcN4",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41MzJCQjBCNDIyRkJDN0VD",
      contentDetails: {
        videoId: "9fEurt2OZ0I",
        videoPublishedAt: "2017-08-01T00:11:49Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "lqyi4GYgAJKhBrrDMAwEgYNmx2M",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43NjE5NDdDRTdENjQ3RTkw",
      contentDetails: {
        videoId: "m7-tKX7aZXM",
        videoPublishedAt: "2020-07-04T01:00:10Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "ESws_y9YnDwIDYR5yxmW2pt3Zmg",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4wQjA4QkVEQ0RFREIzMjFC",
      contentDetails: {
        videoId: "DBMYqkuHvew",
        videoPublishedAt: "2021-02-20T02:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "NCc40tm2gPYOLXzUTSnWm5ldKmQ",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4xM0YyM0RDNDE4REQ1NDA0",
      contentDetails: {
        videoId: "hqwGR86zoTI",
        videoPublishedAt: "2019-08-24T03:00:03Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "IL18YF2py5afsCvCho64zJ-_pI0",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5EQTkxMkVFODRENEJBMERF",
      contentDetails: {
        videoId: "IzOgf2Ww0OQ",
        videoPublishedAt: "2022-05-28T04:00:05Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "pJktvqTKvzg6I4OtNDwj2OfXlos",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4yMUQyQTQzMjRDNzMyQTMy",
      contentDetails: {
        videoId: "tfsfrWxXKFA",
        videoPublishedAt: "2018-06-09T02:30:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "gBpt7wsMa3GgWdiIhujPVLVZsBM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5GMzY4RDIwMjU1MkMwOTRB",
      contentDetails: {
        videoId: "_jbF_GsMOUE",
        videoPublishedAt: "2023-03-04T05:00:13Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "B7NeFu-mPTdtsDcwgKZoLd8flXo",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5DMkM0MjQ3OTgwQzBCMEZB",
      contentDetails: {
        videoId: "1DXo2fcfleY",
        videoPublishedAt: "2021-07-17T04:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "FYkgu_B_pLTBtQnRxKIRNDsbEk8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4xREVBMTg1ODg1M0JCQUE1",
      contentDetails: {
        videoId: "69vFAHLkAlI",
        videoPublishedAt: "2021-08-07T04:00:07Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "gxj8ixuEyG6V6Ajl9tdaeJxPc8o",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5DRUQwODMxQzUyRTlGRkY3",
      contentDetails: {
        videoId: "2u2Sd9MeFUc",
        videoPublishedAt: "2019-03-02T02:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "RPDq5qUX8SNuVnPXRQlUfn08laE",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5CMDU4Mjk2QjA2QTIwODZB",
      contentDetails: {
        videoId: "3Z4TsHqyssc",
        videoPublishedAt: "2022-11-19T06:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "9O7zvlAQ3iu40QVcMFVJpjAagNk",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5FN0MwOEIwNDJFMDI5RDhB",
      contentDetails: {
        videoId: "TPN-vyGozyM",
        videoPublishedAt: "2023-03-11T05:00:23Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "f5oLnY9cEh0EEAo4EzTgE1gVzuI",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4yMDhBMkNBNjRDMjQxQTg1",
      contentDetails: {
        videoId: "vHKn4ZijM1o",
        videoPublishedAt: "2018-07-21T02:30:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "bMBxhiX5dnNVyWwAlSEq7Dhf4mI",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4xMTE0RDU2NTlEMTkxNzZB",
      contentDetails: {
        videoId: "vD4mbkicc3U",
        videoPublishedAt: "2023-10-14T06:00:31Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Hlx5Vcjfqi2XdaigS2ZJHbLZvoY",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4zNTI2QjhBOThBN0JGQTEx",
      contentDetails: {
        videoId: "9MR_i8xpse0",
        videoPublishedAt: "2021-11-20T06:00:03Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "9l2DOp6rYk0X59ARFv2xv9ZqZpU",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5DNUEzOUFFNkIyOUUzOTRC",
      contentDetails: {
        videoId: "BDIRabVP24o",
        videoPublishedAt: "2021-03-27T04:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "aomEhWj5V1Pr8bc_5DGKCQywYeU",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5EQkE3RTJCQTJEQkFBQTcz",
      contentDetails: {
        videoId: "Elv-c3ZTkYg",
        videoPublishedAt: "2019-10-05T01:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "vC7svJHnu042MpOVe6XfGt024D4",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4xRUU4M0JFMUQ4QTA2MjVB",
      contentDetails: {
        videoId: "61nJRs4mF5o",
        videoPublishedAt: "2023-08-13T04:00:03Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "KObYjZnYJm6XroQQEcYJWTiTsjQ",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC42ODgwQ0RBNTY1OTRERDQy",
      contentDetails: {
        videoId: "T1g_rLFwSC4",
        videoPublishedAt: "2023-02-11T05:00:17Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "iqJ-AB_gSQcbkvP3GypweZ6XU3E",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5GOUJEOERGNDg1N0QyNDA3",
      contentDetails: {
        videoId: "1QvLB4yEHsI",
        videoPublishedAt: "2022-07-04T04:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "ZCmtuRLGi4MZrIiQVKOyXatzG-4",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44OEI3NUQ0QTlFM0FCOUU4",
      contentDetails: {
        videoId: "0nUDkCgyppM",
        videoPublishedAt: "2023-08-06T04:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "T3riqwUoLul79F11XAowz58w8oI",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4zNEMzQ0FDREY1MkE1RkQ1",
      contentDetails: {
        videoId: "da2N4KMGuFo",
        videoPublishedAt: "2020-10-10T01:00:09Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "cSP2h2CsZKYL79jGlJiOgDT3bGw",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4wMDFGNzBEOTU4Q0Y1Q0RG",
      contentDetails: {
        videoId: "HpGU95aVckc",
        videoPublishedAt: "2019-12-14T02:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "LRDpc5kVoWFTvcGh8I71o5b0rsA",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5ENEEyOTIwNkY4NzFGMkQ2",
      contentDetails: {
        videoId: "BRfkJ2tkS94",
        videoPublishedAt: "2020-07-11T01:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "mVN6yi3XuLioF2G4XSK8Xx-gj1U",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5BNTRGQTE1QjY2NUE5NTAz",
      contentDetails: {
        videoId: "MME0I87oiJI",
        videoPublishedAt: "2021-04-24T04:00:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "dY8MNxPLQ7-TjDI0u-_2LG8f46k",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5CMDk1Q0MxREYyOTVEOTZF",
      contentDetails: {
        videoId: "sjfKL5vYThs",
        videoPublishedAt: "2021-01-09T02:00:06Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "zELiplEK3xEQaoRbmszJBebRzBM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC45RTgxNDRBMzUwRjQ0MDhC",
      contentDetails: {
        videoId: "bV5uKHsWQtY",
        videoPublishedAt: "2018-06-23T02:30:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "0OfpTfHE0_zUU5YuEH8924lHOqs",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5CNTZFOTNGQzZEODg1RUQx",
      contentDetails: {
        videoId: "wjTGbS4JqXk",
        videoPublishedAt: "2019-08-03T01:00:05Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "eyUbt8WucVnG3jZtOrTtapcNrcE",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC42Qzk5MkEzQjVFQjYwRDA4",
      contentDetails: {
        videoId: "RaLXDIJW3_M",
        videoPublishedAt: "2019-05-11T01:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "qSYgDIN3JAOZ_Gn9T7a5ELgcXKw",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5DMTA0RkI2RTNGNUQ0Njgw",
      contentDetails: {
        videoId: "SIQnLs6m5VM",
        videoPublishedAt: "2022-11-05T04:00:20Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "VdDOVrbSbWPL_ZbJ4LJpeUfuNnU",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5EREU0QjZERDMzRDBGNTMz",
      contentDetails: {
        videoId: "lUmWWTMFjZE",
        videoPublishedAt: "2021-06-26T04:00:31Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "VcV1Nz9Zj7QlgX6m3cTuDE1RjAI",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43OTNDNTk0OUNGMDA1MUNG",
      contentDetails: {
        videoId: "l4JRQorvEQ4",
        videoPublishedAt: "2023-09-17T04:00:20Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "krzl15FP3TzwyBU0ePwhlNcYQ2w",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC45NTBGQjA2RDUzMTJFM0VF",
      contentDetails: {
        videoId: "3x4zM7O8pZI",
        videoPublishedAt: "2023-06-10T04:30:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "D3uPKIpy0JdYe1NfXBqpvjPj6rM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4wRkVBNUY4OTkzN0JCNTA2",
      contentDetails: {
        videoId: "Mt_3yRHYmj4",
        videoPublishedAt: "2020-06-27T01:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Okk8erzyDKx0FghYU-bQJTsRU0I",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41NEM3RjdGQ0FDRjkwNUQ5",
      contentDetails: {
        videoId: "Rc_TA3b9dP4",
        videoPublishedAt: "2022-07-30T04:00:17Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Z8e4ZS51GBsi8Vd3Lan3ENJZ73g",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44QTY2MEEzNzBFQUJCMUQ2",
      contentDetails: {
        videoId: "w42rHdvFpVM",
        videoPublishedAt: "2019-11-23T02:00:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "jXkot06T9llP74qXHLrviL94-sc",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC42MzYyQ0E2MUE4ODAzQkU5",
      contentDetails: {
        videoId: "6uUblznfrsk",
        videoPublishedAt: "2023-11-25T06:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "f3TFBGtjPIg9DXeP4YDCW2Wdjg0",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4zNjNFN0I4ODYzQTQ3QTg2",
      contentDetails: {
        videoId: "r2kP2Pqdx6w",
        videoPublishedAt: "2022-06-12T04:00:15Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "vXMKbZpq3x8TYYnoVQqGsC7Uw8g",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4zRjM0MkVCRTg0MkYyQTM0",
      contentDetails: {
        videoId: "G6OP-lPF-Mo",
        videoPublishedAt: "2018-08-18T04:55:49Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "uWW1bq2oAPQM5mfpxL9-2Et2DBQ",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44NzQ1OTI1OUFFM0NFRTc5",
      contentDetails: {
        videoId: "KtjaB1SnA7Y",
        videoPublishedAt: "2020-12-26T02:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "bMCi-Ry88I65ceL0ek1hnxMCty0",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40MzQwRDA4N0ZGRTNBNTE2",
      contentDetails: {
        videoId: "347BmIcERfc",
        videoPublishedAt: "2022-12-24T03:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "9vPJAOy8ENKJ5SzcUgZjzWu1wUw",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43RjgyNkZCNjkwMkZDMzcz",
      contentDetails: {
        videoId: "FT-X07WGgI8",
        videoPublishedAt: "2023-02-18T05:00:11Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "P4ZE3djeYsqUJ5JCXzQ2AB7KtxY",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44M0Q5MzQ0QTcwQzFDMjc5",
      contentDetails: {
        videoId: "ya7DNE1YZVs",
        videoPublishedAt: "2020-10-31T01:00:12Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "J5ySngfTRy7gUUqlDuw6Fi3gyuc",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4xQzNEQjU3NzFFNzQ1M0Q0",
      contentDetails: {
        videoId: "AXznQhUA-5o",
        videoPublishedAt: "2023-06-24T04:00:08Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "jFrth0krpOBimHI26kmtXiko5OM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5BMDNGMkVEMjBGMzNGNEJC",
      contentDetails: {
        videoId: "Xn1adsMTIVU",
        videoPublishedAt: "2022-03-17T11:00:22Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "YSn7PAoXdamwwy3HKqK0ylFZv7o",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41OURENDc2NEM1MDI5Mjky",
      contentDetails: {
        videoId: "4_3qH9QZCz0",
        videoPublishedAt: "2019-07-20T01:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "_cpR8fKY_CkNKdfqhBKgoYuHaEE",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4yNDgyN0RCRjQ1QTUxRUMy",
      contentDetails: {
        videoId: "n434ha4QwU0",
        videoPublishedAt: "2023-06-03T04:00:31Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "1GQAzp0Q9ZI_R7Q-nygsCpf43C8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5BQzRBQzNEOTgzNTU2QkZB",
      contentDetails: {
        videoId: "BWPIRnS4Gyo",
        videoPublishedAt: "2020-10-17T01:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "WoQaV2Y0zr6Q0UUYyFzrMOwyyBw",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5GNDg1Njc1QzZERjlFRjE5",
      contentDetails: {
        videoId: "iX11qgYyxUU",
        videoPublishedAt: "2019-02-02T14:00:05Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "LC660x_1yqnD27xOLvZ2Eg-YzZ4",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44QzVGQUU2QjE2NDgxM0M4",
      contentDetails: {
        videoId: "XkZhzc7b4jg",
        videoPublishedAt: "2019-04-20T01:00:05Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "rEQ5MY3V4Kj3koF0wJlg5Vsa-k0",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4wOTkzRUNGQkU5QzI1QTA3",
      contentDetails: {
        videoId: "s-i3Z7EZRpA",
        videoPublishedAt: "2021-09-25T04:00:30Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "EkrD90CS4I-X7kQiKHwHEquEnj8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5EODgyNjY4MzA3QzY5RTkx",
      contentDetails: {
        videoId: "dKe3WbGR7Xs",
        videoPublishedAt: "2020-05-30T01:00:05Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "vcfGFQGhXbmRSOxJ2WzVWCC9qLc",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4yQjZFRkExQjFGODk3RUFD",
      contentDetails: {
        videoId: "r5-5nFa6oW0",
        videoPublishedAt: "2019-03-16T01:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "piuwIi1k9Xo1ZwngcZIDfxUJ7FM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43MjE3M0ZBOUE4MjY1QTA1",
      contentDetails: {
        videoId: "UDzuZhjo1RI",
        videoPublishedAt: "2021-12-25T05:00:23Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "EQJlB0vq_7rMS2ikeOWutvshDw4",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44OEYxMzRDRDg1REM4QjIw",
      contentDetails: {
        videoId: "g6EC6gY95fU",
        videoPublishedAt: "2022-05-05T11:00:35Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "rzTHHDLo8anLbkyK4l0286-Wg4E",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5CNTcxMDQ0NThBNzMxODYz",
      contentDetails: {
        videoId: "ssc3G5-uAoM",
        videoPublishedAt: "2019-08-10T01:00:10Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "yH_e_KJglRc1LgFFB-KdZDhM89c",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4xQ0EyNTVGREQ1Nzk5MkVB",
      contentDetails: {
        videoId: "r2fWl3S7Wmk",
        videoPublishedAt: "2021-10-23T04:00:15Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "J3ltjsmNOPYt5AVs7lLRjJ4keGQ",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5GNEUwNzhEMDZFMDNDQTM1",
      contentDetails: {
        videoId: "NSiR8FKsAnA",
        videoPublishedAt: "2023-01-21T05:00:11Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "B-rZlBOl5-e4bTUlTNxXQZ4fAjE",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4zMDg5MkQ5MEVDMEM1NTg2",
      contentDetails: {
        videoId: "hZ0YhrgYejI",
        videoPublishedAt: "2018-03-31T22:26:57Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "JODLmEQp9fayvHksGReq0a1BDVY",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41MzJFNEYxODEyNzA0QUUx",
      contentDetails: {
        videoId: "tRm1bwWHPkE",
        videoPublishedAt: "2020-09-19T01:00:12Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "ii9aAigzSr7wXR8E-O2xN95LFk4",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4wMEMyQTBBOTUwNTM0OUFG",
      contentDetails: {
        videoId: "-Unkvng_jp8",
        videoPublishedAt: "2020-11-07T02:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "dYc5B2JYM4OqLVBPqh1Z8nOuwos",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5FQUY2Qzk4RUFDN0ZFRkZF",
      contentDetails: {
        videoId: "z5jGGYuep2Q",
        videoPublishedAt: "2019-11-02T01:00:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "H2DOk-XV8ADNJOfsUco4CtSODB4",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5FRjdGNDMzN0I2RTI3MDlG",
      contentDetails: {
        videoId: "T6cqSxGyomI",
        videoPublishedAt: "2020-03-07T02:30:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "7mGWVIocguSZ6g4e2z00Vj7Dd7g",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4zMEQ1MEIyRTFGNzhDQzFB",
      contentDetails: {
        videoId: "Cw-WF2bmojk",
        videoPublishedAt: "2019-05-04T01:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "FB6FZZhOGmPLzh75tNxeguKFB88",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5BNTdEMTYxNTdFRkRFMUQ0",
      contentDetails: {
        videoId: "5rbyzJf4ZuQ",
        videoPublishedAt: "2021-11-27T05:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "wO7Iag9oryATAVaU43OmYPZnuP8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5BNEEyNDAyQThDNDA5MEU0",
      contentDetails: {
        videoId: "tqmYgFGlgAI",
        videoPublishedAt: "2023-04-22T04:00:21Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "nauobY5uMSs2S5YrP-wLhakmnaM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44QUE0MzNDRkM4RjA0Njcy",
      contentDetails: {
        videoId: "63u_9rPDSeM",
        videoPublishedAt: "2022-04-14T11:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Kqle79spz15otirOJzK3Wq2lgnY",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43RjdBQTMwNUUwRTA1QkE3",
      contentDetails: {
        videoId: "JFd8bnupsQY",
        videoPublishedAt: "2021-01-16T03:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "kJfiOfjIQb_TatMvYN0sFhsFD_Y",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40Q0JERDMxNzcwNTk1M0Y0",
      contentDetails: {
        videoId: "oFyh5YMmB80",
        videoPublishedAt: "2021-05-08T04:00:09Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "b-E11BSANBemgDvR2qTFBT31D6Y",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5BRjJDODk5REM0NjkzMUIy",
      contentDetails: {
        videoId: "GOkFLs8MZyc",
        videoPublishedAt: "2019-01-20T01:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "m78iswpf_c-cyPmFbTCsDsd39jA",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43OTZFNzk1NjVDNDVBRjZG",
      contentDetails: {
        videoId: "EBVPjuxNflY",
        videoPublishedAt: "2023-03-25T04:00:10Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Xsq3VJndM6hm_dF5w9Z3fVhQ-Yk",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC45NkM5QURGMTI1Rjg4NDRC",
      contentDetails: {
        videoId: "QTR4l60l910",
        videoPublishedAt: "2022-11-12T06:00:18Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "I8iDCcFkiZEhDnTRlTz8P3vgJe8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC45NkVENTkxRDdCQUFBMDY4",
      contentDetails: {
        videoId: "Y4znQWi_V98",
        videoPublishedAt: "2019-02-16T02:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "YxedmwKIqYDAJmNs1al5JIkL5kE",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40ODU2MTBGM0M5MkIwQzU0",
      contentDetails: {
        videoId: "4u71aIcrxtQ",
        videoPublishedAt: "2020-11-28T02:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "XNexkxqES8-1J6shxx_baLnuiGA",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4zQTkyMjEwN0U0QkU3RDg5",
      contentDetails: {
        videoId: "GRiDVoMFxcU",
        videoPublishedAt: "2021-08-28T04:00:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "qrzyNpxVmtVlaIdl_tzOO1Ae6Dc",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC42QzdBMzlBQzQzRjQ0QkQy",
      contentDetails: {
        videoId: "1c4QHf5Ul3c",
        videoPublishedAt: "2019-07-13T01:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "8Ohq0wJOwUC0WqGtCMM3SLv6CJA",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41QUZGQTY5OTE4QTREQUU4",
      contentDetails: {
        videoId: "fN_AV29Ra74",
        videoPublishedAt: "2018-12-08T02:30:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "uWXmADjn8zKB1H-WtDE7dod6G6M",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5DQjg2RDQyMEVGQkZFOEVF",
      contentDetails: {
        videoId: "kesjJp7H5uE",
        videoPublishedAt: "2020-02-22T02:00:03Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "NvPPo_eoKOg3lOLvLs7Gz333PXY",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC45NDlDQUFFOThDMTAxQjUw",
      contentDetails: {
        videoId: "A1hcbdWEEO8",
        videoPublishedAt: "2019-10-19T01:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "za0TDT7g6wLdZpkdmYbo3OANCD8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5CODNEOTFERDNCQjU2ODhE",
      contentDetails: {
        videoId: "PwQrtzi8ozc",
        videoPublishedAt: "2021-06-05T04:00:07Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "vRQgs4qIHR5pXIpX6iJw7IzztME",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43OTQxRDdENkQwNEZGMkQy",
      contentDetails: {
        videoId: "fetkfl5hN_c",
        videoPublishedAt: "2022-03-31T03:00:27Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "-QEWsQGmyr2OHbjkWKzAYtAFD7c",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5FMjFERkYxMjI2NjkyMjg5",
      contentDetails: {
        videoId: "iStBvF0ALUc",
        videoPublishedAt: "2021-04-10T06:00:14Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "8JWhtuwjd5SgbLHR_uHqjIp1cZc",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4wNjIzRDA1OTQ2M0UyODEw",
      contentDetails: {
        videoId: "K9Ah9seEDFI",
        videoPublishedAt: "2021-03-06T05:00:03Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "e7dRwFhvrIusCfHoDWjFwnNjNrc",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC45RjNFMDhGQ0Q2RkFCQTc1",
      contentDetails: {
        videoId: "5mXFlne4JB8",
        videoPublishedAt: "2019-01-05T03:30:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "F-hCgr-aQWFofZ0x3mxuFJtazlA",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44Q0M3MkM5NzExMTIyRDg3",
      contentDetails: {
        videoId: "AFbZYgXCSY4",
        videoPublishedAt: "2022-06-04T04:00:03Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "REgdJ3EaISx2MMN7UgQvHp-FR-Q",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44QjNCNkRENjNFQTBEMUND",
      contentDetails: {
        videoId: "H5bSGdZk8pQ",
        videoPublishedAt: "2020-04-04T01:00:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Lb4vAE5DtmJtYrspLDrkv2QYM0g",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40QUQ5MEY1QTZCMzdFNkNC",
      contentDetails: {
        videoId: "KeFCggucPGs",
        videoPublishedAt: "2022-08-27T04:00:07Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Ha6UpgeQypjWYM7UPd6Tc8ROnm8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41QTQ4QTIyM0Y1RTBGMUNE",
      contentDetails: {
        videoId: "Jye58Lh-UD0",
        videoPublishedAt: "2021-02-13T02:00:03Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "PQp4Zqp9o_Si_7yBElB4akyT7os",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4wMTYxQzVBRDI1NEVDQUZE",
      contentDetails: {
        videoId: "aWo5xbRfY4M",
        videoPublishedAt: "2019-06-22T01:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "ie8PjPpOSNHkxPu8uoZWR-nrDrc",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43MzBFRTZDMUM3OTY2RjQ4",
      contentDetails: {
        videoId: "s_vZ5lMRkpA",
        videoPublishedAt: "2021-08-14T04:00:32Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "QlGwY-wxXcppaYXVZgJOjVdUBeE",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4zOTVGMDIwNzkzODk2QTQ1",
      contentDetails: {
        videoId: "aRL2VdFhNjs",
        videoPublishedAt: "2022-04-07T11:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "q6gB5pHyH1JoGYwHZr2XzPv1scg",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4yM0YxNkQ4MTExRjg4RUI2",
      contentDetails: {
        videoId: "MgeynGHmA2s",
        videoPublishedAt: "2021-09-04T06:00:05Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Gol3aChrf7m1XmqeBWUwWZCcWaE",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4zMzg4MjBBNzZCQzY5MDk4",
      contentDetails: {
        videoId: "5pKnMJOq0Sk",
        videoPublishedAt: "2022-07-16T04:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "GW1PqW-Ted_U09h0NjFSYjA7ns8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4xMzgwMzBERjQ4NjEzNUE5",
      contentDetails: {
        videoId: "ipGmWHe24Is",
        videoPublishedAt: "2019-04-27T01:00:07Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "LCckFGsTOH4h5adx44Ilwx5FrbY",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5CNTQ4NEJFQThFNzg4Q0Qz",
      contentDetails: {
        videoId: "E7bpYaxgC5o",
        videoPublishedAt: "2022-12-17T03:00:08Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "LBQ_cIX_jr_QmDobieAQ0DmZeNU",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41NEI5MkYxNzc0MDczQUUw",
      contentDetails: {
        videoId: "i_uFmNDzVFQ",
        videoPublishedAt: "2022-02-12T05:30:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "8P85A3i-YSFL0Is8Tfq6QehlKrE",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC42QTlDMjkyRjNGMEYwQzcz",
      contentDetails: {
        videoId: "EIzpPoRFF08",
        videoPublishedAt: "2022-09-17T04:00:09Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "z76ziMn8ZAKiWrSJ3E6EdbU4XOs",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40MkJFNUMzMTJDNkVFQjEy",
      contentDetails: {
        videoId: "dgkxN6RASpg",
        videoPublishedAt: "2021-11-06T04:00:12Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Qb-mOoPwnyAprsTm8UENHFXLmAA",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5GMDBDNkJGMzYzREUyMTYw",
      contentDetails: {
        videoId: "kBh--e1sa5o",
        videoPublishedAt: "2020-02-08T02:00:03Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "GhRekd5SRtm0u36U_imHQ2MrChM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5FOTM0MjQ2Q0ZDQURDRUFE",
      contentDetails: {
        videoId: "mhsa6u6kJQ0",
        videoPublishedAt: "2022-03-24T04:00:30Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "5M597H13QQewdDcrMJ7hXAKJDZU",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5DQzY2RDZFRUQyRDlDQkMw",
      contentDetails: {
        videoId: "kCK3cR3Pz2c",
        videoPublishedAt: "2021-09-19T04:00:22Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "GEQNJJkbn-V3ofudsLL1aamyCO8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43RDFFNUM4NkUwRDhEMjRD",
      contentDetails: {
        videoId: "5DU16MQYzDw",
        videoPublishedAt: "2023-11-11T05:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "QyoemLSGPr0Niacl_1fhYlKYUlo",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41NUMwNTVERDNBRDc4REM0",
      contentDetails: {
        videoId: "yjo8chlSbQE",
        videoPublishedAt: "2020-08-29T01:00:05Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "txHsnwQWjKSSD6uYZFGWDHtGi9I",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC45NDIzMEVBNjk5NTFGRDZC",
      contentDetails: {
        videoId: "rZRLLI-_3ME",
        videoPublishedAt: "2021-06-12T04:00:29Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "ZSP4BMlQulJZFNKmsJge_QbQCa0",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5EODkyNDMzRkJBNkQ2NkMz",
      contentDetails: {
        videoId: "vAn96hY1LGw",
        videoPublishedAt: "2020-09-12T01:00:08Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "z7QWE8tf7yMdWm9WQka-GlhsvIU",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4wN0FBRUVFNEVBMTZBQ0Mx",
      contentDetails: {
        videoId: "DQjESgK96Pw",
        videoPublishedAt: "2020-05-23T01:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "OM9C9Hmai01esrCrPYy2uxba85E",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4xRDJGOTc4RkUxMzUwMUFG",
      contentDetails: {
        videoId: "lmpOfO30L5g",
        videoPublishedAt: "2020-08-15T01:00:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "XQiq7tXKeh1TwMY-rqVXJcCbmFY",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5CRjBFOTUzQTE4Mjg3RUJF",
      contentDetails: {
        videoId: "m_DL4xytjCo",
        videoPublishedAt: "2021-02-06T03:00:10Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "x9lWOwaJCjWla82A8FiYJLosVoM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4xN0Y2QjVBOEI2MzQ5OUM5",
      contentDetails: {
        videoId: "8R4TMmU_Ig0",
        videoPublishedAt: "2019-10-26T01:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "HnIEYn4wOMlTfTggTYs5MWzD_LU",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41MjE1MkI0OTQ2QzJGNzNG",
      contentDetails: {
        videoId: "u1gg_L-syCw",
        videoPublishedAt: "2017-07-19T03:08:19Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "B6ZC0c0-7fcPaMDN5csbOsYWkTo",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4xNjIyNEE0MDEyRDlCMjBE",
      contentDetails: {
        videoId: "FvcWRYuGSTg",
        videoPublishedAt: "2019-11-16T02:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "l69RwrXH2wOD2WmXoCDsmOkcNN8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41MUY0NzFFRjMwMkI3RTI1",
      contentDetails: {
        videoId: "L9lIWfz7Exw",
        videoPublishedAt: "2022-09-24T04:00:17Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "icGplKnYXjBAMVQEXyNP-lB8LSg",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5GN0EwRkMxQTJGMTFCNDc1",
      contentDetails: {
        videoId: "vs5A3ZgBx1k",
        videoPublishedAt: "2021-01-23T03:00:08Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "zOhONi6p_YjDdrFKZwufFJQYLg8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43NERCMDIzQzFBMERCMEE3",
      contentDetails: {
        videoId: "1TAuuyvIZjA",
        videoPublishedAt: "2019-05-25T01:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "W_q691MuXdbJirDl77MBvJIqc2M",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5CNzAzQzRDMkI3QThEQzZB",
      contentDetails: {
        videoId: "2wf1qE7AC8Y",
        videoPublishedAt: "2021-07-31T04:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "zOB6ookqa2dukT8pEvWqQheIXio",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4zNDIxRUJGQThFRTg1QzAy",
      contentDetails: {
        videoId: "TJi24wyCaOs",
        videoPublishedAt: "2020-05-16T01:00:16Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "2V7OKCEFN30J3g0mYb4a9MxmB0g",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40QkU3RjBCMjgzQUIzNjg2",
      contentDetails: {
        videoId: "E4Q7-CGO9Ik",
        videoPublishedAt: "2022-06-29T04:00:06Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "zqvYtJEScFEgc3SgfTaheUptLOQ",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5FOTE3RTBFMjNFMDNEM0Yz",
      contentDetails: {
        videoId: "bLCoSu2KiEA",
        videoPublishedAt: "2021-04-17T04:00:18Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "guuNFeQ8ZQnfTqhyh1DYqHclqoE",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44NEFDRUNBRDQwODFGNEU1",
      contentDetails: {
        videoId: "h4vlcM-5X1E",
        videoPublishedAt: "2022-12-03T05:00:15Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "6a7Ixr_-BdkgFC002d1FxD6Uav4",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40Mzg1NEVCNkVCNjNGNDk0",
      contentDetails: {
        videoId: "3XFalEtQ4xE",
        videoPublishedAt: "2022-05-14T04:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "ae7c6ephkB03vQfESU5IIECL9fQ",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40OEMzNzFDQjA5Q0YxMjQ3",
      contentDetails: {
        videoId: "qHc3FY9il1s",
        videoPublishedAt: "2023-12-23T05:00:22Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "ubCuLZZxiPKQ3XeDnquYpHwPw-4",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40MkQ0RjUwRTlGMUU4N0ZG",
      contentDetails: {
        videoId: "yrwhd4coEAU",
        videoPublishedAt: "2021-10-02T04:00:27Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "k-UnKPa3t_4hb8D1Bxw4fUVzk-4",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41RjU0OTVCQThDNUUwQzBD",
      contentDetails: {
        videoId: "rK9DlTZ4fKA",
        videoPublishedAt: "2021-07-03T04:00:14Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "GGGjs0_BAaXFMvbBBA8PKNMNjA8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5COUU4NzEzMzg1MkZFQjlE",
      contentDetails: {
        videoId: "7iHNwOAr-9E",
        videoPublishedAt: "2023-12-30T05:00:05Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Dpbmtfhh5U7mRRGjxqos-fS6tRE",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC42RTNCOEMxREI3Q0VDMjU2",
      contentDetails: {
        videoId: "RH58QUkNVis",
        videoPublishedAt: "2019-09-21T03:00:05Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "pefbkC7YXT4lUd81oNcKqvcROY0",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4zMkY2MjA3RDJERTkxNjkz",
      contentDetails: {
        videoId: "3Q4sL85cLIQ",
        videoPublishedAt: "2021-04-03T04:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "id_LPdrSGkh6N2CQuYhmhvmP2_s",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44ODU0NUVGNEZGMDI3QTdF",
      contentDetails: {
        videoId: "X5KDjN7xkUg",
        videoPublishedAt: "2022-08-13T04:00:12Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "kqdexPqSHF_rfNgo8-m6YgD-hwo",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4zNEM4RkZDQUU4MEYwQzJE",
      contentDetails: {
        videoId: "MpMtBWwXCLU",
        videoPublishedAt: "2024-01-14T05:00:18Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "OXWysnJJSd0GSD9SImddiSGonfs",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4xMUQ5ODk0Q0I0MjZBQjhG",
      contentDetails: {
        videoId: "C8-twwwTETE",
        videoPublishedAt: "2023-06-17T04:00:07Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "AtKgjenkGJDM2Dk_mAEu0z77ChI",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5FMUU5ODU1MDE0RTk1Q0Ew",
      contentDetails: {
        videoId: "mmcJdoKftnM",
        videoPublishedAt: "2021-11-13T05:00:12Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Sna98CZaYoS_aSM8oLn5MBmLfWY",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5DRkY0QzQxNDhEODU4QUJE",
      contentDetails: {
        videoId: "ar1hltV1QzI",
        videoPublishedAt: "2021-12-04T05:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Q1UGgBXpji5hZAyQ9D3V2oVLDR8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5BRjY4NjdBRjA5RTdCMUMx",
      contentDetails: {
        videoId: "rZ58eU07Ul4",
        videoPublishedAt: "2021-07-10T04:00:28Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Q-9EBCizeqAVo1afdyUCxDWhGeM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41MkJFMDEwMDIxMkRDREQ3",
      contentDetails: {
        videoId: "kUDCygomLyo",
        videoPublishedAt: "2022-09-03T04:00:21Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "N2z8OUukPfIdG_JmNxBtSH3kANg",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC45MTRCQjE3QzVGNDREODIz",
      contentDetails: {
        videoId: "A1KcUE8f5Og",
        videoPublishedAt: "2023-09-02T04:00:05Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "ctJSMQ2Iv-OgVg_fTo7KRzDoyRc",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40NTBGRDE5MDg2Q0NEODI4",
      contentDetails: {
        videoId: "pqQBl-cMY84",
        videoPublishedAt: "2021-05-01T05:00:14Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "35tTyT-lWFCEWkTjGHIfONbm5yo",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC41MjA2QjlEREM3NTE0RkJG",
      contentDetails: {
        videoId: "g3xLEDJeU2E",
        videoPublishedAt: "2021-10-31T02:00:20Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "EOLomGs-vXNn-_GRz4rFybneQ6E",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4wQUE0QzM4MkJGQ0YwQjUx",
      contentDetails: {
        videoId: "3FtDXPHua9o",
        videoPublishedAt: "2020-02-15T02:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "-1qSNT8e8r4i6se8M6zJm4bYDi4",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5GNzk2RTlDQTNCQzJCQzJG",
      contentDetails: {
        videoId: "RLklwFPNQ_g",
        videoPublishedAt: "2020-04-11T01:00:06Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "2OW0ne73lRXq11gCpJXv8thT_dY",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5GNzRBRjZBMTFFRDU2OERD",
      contentDetails: {
        videoId: "kmvrJoGJ84U",
        videoPublishedAt: "2022-07-10T04:00:14Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "E2RmG_9-_kJKK5hX_tqnmY-WwmU",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4wMUIwQkI1NEQ1RTFBNTND",
      contentDetails: {
        videoId: "eW_G2yO0b2w",
        videoPublishedAt: "2023-11-18T05:00:30Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "ZsqtjTobV_HGXSdX5H5Iw-eZkGk",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4xOTEzQzhBQzU3MDNDNjcz",
      contentDetails: {
        videoId: "yizq7R0r7iQ",
        videoPublishedAt: "2019-01-25T15:00:10Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "zlDheeEewvAR8MtHEPkQAaOGALo",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40OTQ5QjlEMDgzN0FBNUIw",
      contentDetails: {
        videoId: "VEZ84WM84F0",
        videoPublishedAt: "2020-04-25T01:00:11Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Yl1ft_Zpv9Kf2NBYNvwrPtIqYJM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4wQTI4OEZFRUE0Q0Q3ODQw",
      contentDetails: {
        videoId: "t6P_BxhGINk",
        videoPublishedAt: "2020-08-22T01:00:14Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "KAZUO6n0wGGtJd7KD5_7k0ckHSc",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5EMzgyRkY2QzI3NjdDMDM4",
      contentDetails: {
        videoId: "IlzsvE6roZ0",
        videoPublishedAt: "2023-10-01T05:00:15Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "tRpF41CtrduTCP4V3qeoWiVheVg",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4wMjVEMzc2NzY2ODVBOERB",
      contentDetails: {
        videoId: "eRrhqEYsahw",
        videoPublishedAt: "2023-04-29T04:00:20Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "R4oD4hjsIahv2-KSJDUUDBBIKlA",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC42NEZDNTU0RTRENDUzRjMz",
      contentDetails: {
        videoId: "AvUF24Z8iFA",
        videoPublishedAt: "2020-07-18T01:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "L5hbotlNnKPoSQomw6glCksET4c",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5EQkEyODM0NTk2MUFEQkYz",
      contentDetails: {
        videoId: "71c6FmZwCW4",
        videoPublishedAt: "2023-10-28T04:00:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "vFN-zxR7Li4MIQ2lMYSU71Tpgg0",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40MDNEMzA0QTBFRThFMzBE",
      contentDetails: {
        videoId: "5xRv-eOuras",
        videoPublishedAt: "2019-09-14T02:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "_AiDPtPGOOgdiFV7R-YDzs1EKHk",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5EN0U0NTk3NzIwMjUxN0M3",
      contentDetails: {
        videoId: "ivpmUTIe6PU",
        videoPublishedAt: "2020-10-24T01:00:08Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "O0zxAidq-D_RkKJ4RwYTMFJkI1M",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4yMkNBN0M4QUJEQzYxMjA3",
      contentDetails: {
        videoId: "S43F1BZfQKY",
        videoPublishedAt: "2021-10-16T04:00:08Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "eKc6xdJZJkYSHriHScElp_73ZcQ",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5FRjZBRjlFMTZFQkZCNzE5",
      contentDetails: {
        videoId: "_D3HIqX1OVk",
        videoPublishedAt: "2022-10-08T04:00:20Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "a5rAnTc1b3uKgVZsPuRJiv47Yl8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5EMUJFNzRCNDRFQjE5RjM4",
      contentDetails: {
        videoId: "zgDnvVaoV98",
        videoPublishedAt: "2020-03-28T02:00:11Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "bg8q_I42FWwE6naVyXeL_oQJt7I",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40NjI5ODZCQUE5NkRBMDI0",
      contentDetails: {
        videoId: "UtJDpOUIEd8",
        videoPublishedAt: "2023-04-15T04:00:12Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "vHNJ6G7t5AlN5GUI1ag7Id_hjys",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5FRDc0QkQxMzlEMTZBMzg0",
      contentDetails: {
        videoId: "GVc4wTaczdY",
        videoPublishedAt: "2022-10-22T04:00:12Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "xI-fDsIj_4j9oYUgV9XzGeICbJs",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4yOUY5MUNBMTM5RDMyREQ5",
      contentDetails: {
        videoId: "c2xqHLIb-d4",
        videoPublishedAt: "2022-07-23T04:00:19Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "g7ZjUqUA1r0UL76Qx1csARhr2q0",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4xNUMzRTJBOEYwRTBDOTBD",
      contentDetails: {
        videoId: "f0uqUzEf3A8",
        videoPublishedAt: "2023-04-01T04:00:16Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "UkfdWvpf51yGDdmzvCXsBLlEO8M",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43RkJGOTAwRDhCOEQ1RjIy",
      contentDetails: {
        videoId: "Y_uOqhhm_8s",
        videoPublishedAt: "2023-11-04T04:00:17Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "e4mxGpMb5rqGD5XWnzrvYWmS27U",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC42MzE1QTJBMEI3NjI4Rjk5",
      contentDetails: {
        videoId: "BnRMUaYgJPs",
        videoPublishedAt: "2022-02-27T05:00:08Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "HFr01P23XCDZI75XlCjo6nO5Gf0",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4yNkZBOTQyMkYxQkQyMzc2",
      contentDetails: {
        videoId: "QGR2xQDb4-4",
        videoPublishedAt: "2023-09-23T04:00:12Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "EeV-EIB_U4spUgZ-FlM2UE9b-5c",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4yQjdDRUQyQ0M0MEZCQkEx",
      contentDetails: {
        videoId: "fg-yS7YJb4Y",
        videoPublishedAt: "2023-07-16T04:00:17Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "CCfuV6JbpHzYmrYN2YFk3kODw1g",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5EMzdGRjBBQzVCNEY2NDhG",
      contentDetails: {
        videoId: "Jxl26V0n-9Q",
        videoPublishedAt: "2022-04-27T11:00:20Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "BV029uOQK6UUPtPJAJ_u3RRdrKM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5FRkU3NjdFNDBDMjFBNTlF",
      contentDetails: {
        videoId: "oHUKk0chEqw",
        videoPublishedAt: "2023-08-20T04:00:20Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "kTBZTutXeIlwuN44fUBTJYzQkg8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5CMEVBRUJERkUyNTBENTkz",
      contentDetails: {
        videoId: "N6ROB3Q_iXg",
        videoPublishedAt: "2019-11-09T02:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "ZvbvM11S52DA3w3UZ3IzTw39wx0",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5EMzJDRTUwQjBEOUVFQzAw",
      contentDetails: {
        videoId: "cLp3pxq7Dj0",
        videoPublishedAt: "2020-01-25T02:00:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "pzN5SVyLnbp2LLeaT5ufnUNKoRw",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44Q0Q0NjMwREMzREQ1RkE4",
      contentDetails: {
        videoId: "2fWJh-_UG5s",
        videoPublishedAt: "2022-06-18T04:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "r1Lp8frksCTL9g4MetLYucYmyvY",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5CNEYyNTVBNDdGMDI1MDNC",
      contentDetails: {
        videoId: "AYk3v6HV1D0",
        videoPublishedAt: "2020-03-21T01:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "VQ2ApVXJCSxhCNzo2v805rKHI14",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4zMUEyMkQwOTk0NTg4MDgw",
      contentDetails: {
        videoId: "szXreq7f924",
        videoPublishedAt: "2019-07-06T01:00:03Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Eq4tKPrFd9whF3jT0ExFERN0SS0",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5CNDEwQURGQjkwNDIzRUYw",
      contentDetails: {
        videoId: "a1nvnY2csUw",
        videoPublishedAt: "2024-01-06T05:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "cZuBe1xAyMZZJNLDp3pqnHfRa9A",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC45QzM0OUZCRDUyMTgwREVG",
      contentDetails: {
        videoId: "w7WoqBL57Fk",
        videoPublishedAt: "2021-07-24T04:00:14Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "8JFtJvsdrLPYy1H5LPSErIyxKv0",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5FRUEzOUYxQTE4OEIyMTI3",
      contentDetails: {
        videoId: "KIamZaWHzB0",
        videoPublishedAt: "2023-02-25T05:00:10Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "qVBJ52WddUtG4jrKH4JA7WdJDB4",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44RDBENkUzRTI5QTNGMTI4",
      contentDetails: {
        videoId: "0eNEz2lhyk8",
        videoPublishedAt: "2023-01-28T05:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "0FYvzTLQ58swEAwVbec2vINFAUM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC44OUE4RUIwOURGRUM0MDdG",
      contentDetails: {
        videoId: "DY2s25yRa3M",
        videoPublishedAt: "2023-12-17T05:00:11Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "YBtY9j6UKq7zC97IdnU5hCnN9tU",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4xM0YyQUYxQTg5OTgyQ0Y5",
      contentDetails: {
        videoId: "JDfP3thQYrM",
        videoPublishedAt: "2023-07-09T04:00:08Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "victx-8_RTdSYpoG7xLGKaI8rYQ",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43OEM5M0IwMkQ1MzBCMUI1",
      contentDetails: {
        videoId: "5p6G4r9PT6E",
        videoPublishedAt: "2022-08-20T04:00:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "rGUaphx9k_vSAry9gD4qt4eEhMo",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4xNkVFQkQwQzlCOTczN0FG",
      contentDetails: {
        videoId: "p5XZZfQ9L9c",
        videoPublishedAt: "2023-07-01T04:00:22Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "8FwP1qu97wUuYdZUYBBd0rhS7z4",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC43NkI3M0NGOUE4ODY2OTE1",
      contentDetails: {
        videoId: "nkMpdI5sQQM",
        videoPublishedAt: "2023-12-02T06:00:20Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "JHFADZpBqKFRVMnb1F_Xm2TkZWM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5EQjk2Mzc4OTUzQTQ4NDlB",
      contentDetails: {
        videoId: "SX08ZKy-WY4",
        videoPublishedAt: "2023-05-13T04:00:12Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "u4wNGotp9IpoS-wqAxElE07fKd0",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC42MTk5OTRCREQ5RkNFODZF",
      contentDetails: {
        videoId: "HNS6MjiSCZw",
        videoPublishedAt: "2023-05-28T05:00:12Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "cIpb4YlQb_HAeG8NPIy0vPhW6Ls",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5FRkIzNkJFQkQ3RkUwOUY5",
      contentDetails: {
        videoId: "NWXjLo8xOlw",
        videoPublishedAt: "2023-07-22T04:00:21Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "X5Gx9af8X7ZrihFkujyeihtwdYY",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC40MkE4OTk2MUZBMEQ4NEFE",
      contentDetails: {
        videoId: "74ZgwDcjeGc",
        videoPublishedAt: "2024-01-21T05:00:08Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "6OncAgdlJDV6EYK4JquiHV6DSIg",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5BNEY4RDc0MzMyNDAyQjAx",
      contentDetails: {
        videoId: "vzLmRomOP4Q",
        videoPublishedAt: "2023-05-21T04:21:29Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "oFImSuT4kAc07hPu_r2uzzjKahU",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4zNDY1MzYwMjYwQUE2QTlD",
      contentDetails: {
        videoId: "S_PGpWTnlfw",
        videoPublishedAt: "2023-10-07T04:00:16Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Ip1HUd-HLItFvYh0tiuGHPcRwoI",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4wQ0ZGQjRENTMyMzJBNzUz",
      contentDetails: {
        videoId: "_tnXsK5qwAk",
        videoPublishedAt: "2024-01-28T05:00:16Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "cwziyGhvWID0LPjGxAjy02yF4eo",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC4xNzI4OTE0NTlBN0QyQUY0",
      contentDetails: {
        videoId: "XR8aTbvRhxQ",
        videoPublishedAt: "2023-12-09T05:00:13Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "zx-RWwHwR5yhIGOH0Z5Vz_QvOOM",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5BNzdEQzY0REQzQTEyN0U3",
      contentDetails: {
        videoId: "y0oWA2yVB3s",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "xL_wjEHfdhvrtz3dq-dGcvhBvJ8",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5ERkUyQTM0MzEwQjZCMTY5",
      contentDetails: {
        videoId: "tWhHf7IeFmo",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "IIZum3I1kqnKW_xuvNA-a_IgDg4",
      id: "UExvc2FDM2diMGtHRGhtQlZtNk00N2pjVThCYkVoVG5sUC5GQkE1RUQxMTA5RkRDNDZB",
      contentDetails: {
        videoId: "gWziScXTR_4",
        videoPublishedAt: "2024-02-03T08:30:10Z",
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
      id: item.contentDetails.videoId,
      ln: "english",
    });
    i++;
  });

  return data;
}
