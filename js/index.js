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
  const data = loadData();

  // https://www.youtube.com/@EnglishSpeeches
  // Learn English with Speeches
  const englishVideoList = data.englishVideoList;

  // https://www.youtube.com/@EasySpanish
  // Easy Spanish - Learning Spanish from the Streets
  const spanishVideoList = data.spanishVideoList;

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

function loadData() {
  // URL: https://developers.google.com/youtube/v3/docs/playlistItems/list
  // part: contentDetails
  // maxResults: 1000
  // playlistId: PLosaC3gb0kGDhmBVm6M47jcU8BbEhTnlP

  const englishData = {
    kind: "youtube#playlistItemListResponse",
    etag: "GycBn32dEQtJ8T1h8_VbSXTtNNE",
    nextPageToken:
      "EAAajQFQVDpDRElpRURBd09UQkdRamMzTVRFNE1EWXhNVVlvQVVqLXFhTDAwbzZFQTFBQldrUWlRMmxLVVZSSE9YcFpWVTE2V2pKSmQyRXdaRVZoUnpGRFZtMHdNbFJVVVROaGJVNVdUMFZLYVZKWGFGVmliWGhSUldkelNYVjBZak55VVZsUmMxQnBXVmRCSWc",
    items: [
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
    ],
    pageInfo: {
      totalResults: 276,
      resultsPerPage: 50,
    },
  };

  const data = { englishVideoList: [], spanishVideoList: [] };
  let i = 0;
  englishData.items.forEach((item) => {
    data.englishVideoList.push({
      index: i++,
      id: item.contentDetails.videoId,
      ln: "english",
    });
  });

  return data;
}
