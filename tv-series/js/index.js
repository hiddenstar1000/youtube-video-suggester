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
  // URL: https://developers.google.com/youtube/v3/docs/playlistItems/list
  // part: contentDetails
  // maxResults: 50
  // playlistId: PLflKcq9o-iW56nmiqS-3g5JNouxcCuxqe
  // pageToken: Should be taken from nextPageToken of the previous response
  // items should be taken from the response and saved in the data object

  const hindiData = [
    {
      kind: "youtube#playlistItem",
      etag: "vumg7LZG95K9opnbp-F4Bjem1PA",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS44Q0Q0NjMwREMzREQ1RkE4",
      contentDetails: {
        videoId: "xXzhaXkJYo0",
        videoPublishedAt: "2021-03-10T09:40:44Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "jrIP1CmJKTPxlD45u-GmPGEElgY",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4zNjNFN0I4ODYzQTQ3QTg2",
      contentDetails: {
        videoId: "y9cLhT51Jr0",
        videoPublishedAt: "2021-01-28T04:45:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "IG6c9_rXPqk9f5sz9mA43mEH3y4",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS44Q0M3MkM5NzExMTIyRDg3",
      contentDetails: {
        videoId: "i9RvbLNPK3Y",
        videoPublishedAt: "2021-01-27T04:59:11Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "187trEpFF4WYbIUtxRU53v7daLg",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5EQTkxMkVFODRENEJBMERF",
      contentDetails: {
        videoId: "twEcqeVhrwI",
        videoPublishedAt: "2021-01-26T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "p14WdqoJBdk73RD45d_MI8gqmxI",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4zODMyNzgxRTc3QzBBMjJE",
      contentDetails: {
        videoId: "zkw-gSXR9ZY",
        videoPublishedAt: "2021-01-25T05:00:30Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "0W4g6pyaZJUtqm0xI63DUizxVrY",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS40Mzg1NEVCNkVCNjNGNDk0",
      contentDetails: {
        videoId: "IRyezZj87Bo",
        videoPublishedAt: "2021-01-23T05:00:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "rIDORnSupTDCYuhmLr-9pRxS9Cg",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS44OEYxMzRDRDg1REM4QjIw",
      contentDetails: {
        videoId: "FBh8tNMXbRI",
        videoPublishedAt: "2021-01-22T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "J1W8jYkYwF7KMtnB-hDxVlWUSAo",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5EMzdGRjBBQzVCNEY2NDhG",
      contentDetails: {
        videoId: "BUN7D-WWzoQ",
        videoPublishedAt: "2021-01-21T04:45:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "K3-ToAf9fLUauJZgFga25owB2aI",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS44QUE0MzNDRkM4RjA0Njcy",
      contentDetails: {
        videoId: "pdrUnrN4tnY",
        videoPublishedAt: "2020-05-02T05:00:09Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "puKO3graFv6NWVU5Jnk2VdBH7qU",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4zOTVGMDIwNzkzODk2QTQ1",
      contentDetails: {
        videoId: "gEx-xsPIwLI",
        videoPublishedAt: "2020-05-04T05:16:21Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "G3DPrlvzsIO3oTZ1WM0cqr6Q6VQ",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS43OTQxRDdENkQwNEZGMkQy",
      contentDetails: {
        videoId: "6UOGZC9eSSQ",
        videoPublishedAt: "2020-05-05T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "D8uXsWrCpCwF6oMuFA855Iyl2Kw",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5FOTM0MjQ2Q0ZDQURDRUFE",
      contentDetails: {
        videoId: "HRFCC_QCxfM",
        videoPublishedAt: "2020-05-06T04:30:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "1crXDUxn62dkyh9Hgvh8mTV6REg",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5BMDNGMkVEMjBGMzNGNEJC",
      contentDetails: {
        videoId: "tY0VYvCHsdg",
        videoPublishedAt: "2020-05-07T04:49:10Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "pa4F1jkV0uKlaW6K0ay62h1--RY",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5BNTZDRUVBRkUwRDU3N0FF",
      contentDetails: {
        videoId: "-95J49XRS8I",
        videoPublishedAt: "2020-05-08T04:53:10Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "QEeYP_HDiNuvUWwfuqy8mexXWEo",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS44QjI0MDE3MzFCMUVBQTkx",
      contentDetails: {
        videoId: "FeeEVi8ksjE",
        videoPublishedAt: "2020-05-09T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "DXUNCObJfXzYxC2rwcQrIMnNTNQ",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS42MzE1QTJBMEI3NjI4Rjk5",
      contentDetails: {
        videoId: "12eJtfBfpSY",
        videoPublishedAt: "2020-05-11T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "lZrND0YiqlkGhfbczCr8AufPIU8",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4wM0I0QUQ0RDU2REQxNjJC",
      contentDetails: {
        videoId: "Zuf6yoFAyhw",
        videoPublishedAt: "2020-05-12T05:00:11Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Yl00eAjdfBtz1QEA_yUWcfC9l6o",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS41NEI5MkYxNzc0MDczQUUw",
      contentDetails: {
        videoId: "HPBPBUW5G-E",
        videoPublishedAt: "2020-05-13T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "5Nla_FBaNJffmju1UXcTQskK3-U",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS43RjU3NEIyMjFBMEIxQ0ZF",
      contentDetails: {
        videoId: "G2SvowBJKFo",
        videoPublishedAt: "2020-05-14T04:25:41Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "EkTk1Z3tLM5v2vzCX2Ek8csblJE",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS41ODJDREU4NjNDRTM2QkNC",
      contentDetails: {
        videoId: "hMdqM6jd-7w",
        videoPublishedAt: "2020-05-15T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "2F9-I3aD0oJmdwSSSbSxwQrfVuI",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5ENjg2QjQ3OTVDOUE2QzYw",
      contentDetails: {
        videoId: "zOP0ZVMu0kg",
        videoPublishedAt: "2020-05-16T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "pAJuYCTKQk0B0XqTjQS_32yRbMI",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5DQTIzMEQyQTJBNDA4ODdF",
      contentDetails: {
        videoId: "NjcT-1oIqOI",
        videoPublishedAt: "2020-05-17T05:00:07Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "xqHyI-AunlsF0xDfZ7wFt3xq2_k",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS43MjE3M0ZBOUE4MjY1QTA1",
      contentDetails: {
        videoId: "4ZOeeY7kn_A",
        videoPublishedAt: "2020-05-18T05:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "vr06Sv3fkmR4Sk0BJRQup6eK_r8",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4yMzk0RjU2NDJBMzI5RDE2",
      contentDetails: {
        videoId: "fs_WwMgWxcU",
        videoPublishedAt: "2020-05-19T05:00:11Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "XggbIcYpBeDbWS8tnaeDv12BBpw",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS40NUU5MjUxOUU1MDRGQzM0",
      contentDetails: {
        videoId: "oeJXisXoy68",
        videoPublishedAt: "2020-05-20T05:00:19Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "URsPz7WUcdrfDBqV2HO-C7_R0Ro",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS43Njc4MTZEMDgzNUM1NEVG",
      contentDetails: {
        videoId: "QOvRnS0AG_w",
        videoPublishedAt: "2020-05-21T05:00:06Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "wCZL6RUUxd_qYqoGMAHOmBz8Ti0",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5DRkY0QzQxNDhEODU4QUJE",
      contentDetails: {
        videoId: "diQHz2WH3ws",
        videoPublishedAt: "2020-05-22T05:00:13Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "DjuFPRPy2sm5EkT5wtja1vM6Ev0",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5BNTdEMTYxNTdFRkRFMUQ0",
      contentDetails: {
        videoId: "tLU-hxVXUGY",
        videoPublishedAt: "2020-05-23T05:00:12Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "b3vWRkJPh4EGzQgBpvh07HoAzxk",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4zNTI2QjhBOThBN0JGQTEx",
      contentDetails: {
        videoId: "zIzTVAkfP0Y",
        videoPublishedAt: "2020-05-25T05:00:30Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "MmJNENEQgDck9R8ZqIF8lmK4ISQ",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5FMUU5ODU1MDE0RTk1Q0Ew",
      contentDetails: {
        videoId: "1DVO9nt7GI4",
        videoPublishedAt: "2020-05-26T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "x-IfK5DC8OiQFpjkRkoY98rg7ks",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS40MkJFNUMzMTJDNkVFQjEy",
      contentDetails: {
        videoId: "qQ7XeK3HXDM",
        videoPublishedAt: "2020-05-27T05:00:17Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "eW2m79qT8fmMbl94a8yu3pyPnEs",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS41MjA2QjlEREM3NTE0RkJG",
      contentDetails: {
        videoId: "DutvHZJOZs0",
        videoPublishedAt: "2020-05-28T05:00:06Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "5n9zvmzqypO8GaYzEV9RXPaai_I",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4xQ0EyNTVGREQ1Nzk5MkVB",
      contentDetails: {
        videoId: "rpyZBZqotBE",
        videoPublishedAt: "2020-05-29T04:29:15Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "jhAM0hGF-JaUcE_M9xlNHzV8-fc",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4yMkNBN0M4QUJEQzYxMjA3",
      contentDetails: {
        videoId: "g-3AMmGtFZQ",
        videoPublishedAt: "2020-05-30T04:29:59Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "eD2N84sLTdNqFMOguSRkxvPP48c",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5BNjBCMUFCN0Q5QzUyMjlG",
      contentDetails: {
        videoId: "Di5CJE2wax0",
        videoPublishedAt: "2020-06-01T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "HPTtZZ0DqN7rOKTWqay5dzh2NSc",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS40MkQ0RjUwRTlGMUU4N0ZG",
      contentDetails: {
        videoId: "V6odqH_E8aE",
        videoPublishedAt: "2020-06-02T07:00:06Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "LGuKlspByRL-ITNx7TuMVVrIfg8",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4wOTkzRUNGQkU5QzI1QTA3",
      contentDetails: {
        videoId: "8yniGPPAJDI",
        videoPublishedAt: "2020-06-03T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "9P0Fh-tZl9GfD8sb2xE2uFsmUTk",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5DQzY2RDZFRUQyRDlDQkMw",
      contentDetails: {
        videoId: "YILTu3MIg9I",
        videoPublishedAt: "2020-06-04T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "dGxVcgDyKbJw-4k0_l2V770-_FE",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS43Q0UyODJENjc3NDRCODU0",
      contentDetails: {
        videoId: "nXGycUKrWpI",
        videoPublishedAt: "2020-06-05T05:00:09Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "l06nAcrUquRCey5OIl5kr66kBIU",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4yM0YxNkQ4MTExRjg4RUI2",
      contentDetails: {
        videoId: "gtQ3pmy1HTU",
        videoPublishedAt: "2020-06-06T05:00:08Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "yF27DbRFgkGxwc06dwZunsydCgQ",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4zQTkyMjEwN0U0QkU3RDg5",
      contentDetails: {
        videoId: "cX_5Hebk0vc",
        videoPublishedAt: "2020-06-08T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "GYP8pD1KZLK150lqF7r6edCPlrc",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5DNzNDRDE1NzhGODQzODI2",
      contentDetails: {
        videoId: "X7WFrGdCNVM",
        videoPublishedAt: "2020-06-09T04:56:36Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Q-tnYPksWaPRFdqEXPebumiFb_0",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS43MzBFRTZDMUM3OTY2RjQ4",
      contentDetails: {
        videoId: "xgbVna9DOq0",
        videoPublishedAt: "2020-06-10T05:18:19Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "nI8T5g6zkkxoBUfHZBAuUumeJs4",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4xREVBMTg1ODg1M0JCQUE1",
      contentDetails: {
        videoId: "xO388d9byUs",
        videoPublishedAt: "2020-06-11T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "OF8uzo7Vyw4D2siLUw_ggUDXTyw",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5CNzAzQzRDMkI3QThEQzZB",
      contentDetails: {
        videoId: "eaOSfhnh9X4",
        videoPublishedAt: "2020-06-12T04:43:25Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "XrDv-hZWVf-9OSnICWkDgXyi-CQ",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS45QzM0OUZCRDUyMTgwREVG",
      contentDetails: {
        videoId: "6ZcnrhkaXis",
        videoPublishedAt: "2020-06-13T05:01:53Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "s_99KUeooZyktpxDzQ3BDTDwoY0",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5DMkM0MjQ3OTgwQzBCMEZB",
      contentDetails: {
        videoId: "J-gTz0YXQ-E",
        videoPublishedAt: "2020-06-15T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Nnsuq374b81yk9bhpwVMtG2A3BQ",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5BRjY4NjdBRjA5RTdCMUMx",
      contentDetails: {
        videoId: "VuB3G7HJulk",
        videoPublishedAt: "2020-06-17T04:38:15Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "1Ew6fpbDRNbbmvVh1vu21npRdCw",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS41RjU0OTVCQThDNUUwQzBD",
      contentDetails: {
        videoId: "IUV04ID8ufM",
        videoPublishedAt: "2020-06-18T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "MT7OUAwh6gkLQFaL_TQO1mjHfkw",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5EREU0QjZERDMzRDBGNTMz",
      contentDetails: {
        videoId: "yVOOS8ydEHU",
        videoPublishedAt: "2020-06-19T10:00:27Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "5Xz3kIQgRtU6QxZnf2cyh2hTEI8",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5CNEFEOUNDRUMzMjVGMjc2",
      contentDetails: {
        videoId: "CH2uNz3LNkY",
        videoPublishedAt: "2020-06-20T04:32:08Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "DS8mKHyJDQdc6cn77p-zeUDUgJA",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS45NDIzMEVBNjk5NTFGRDZC",
      contentDetails: {
        videoId: "9ovPqEhtWs4",
        videoPublishedAt: "2020-06-22T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "_UsmXEEWuf7wBou6PGUiNL6dCWQ",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5CODNEOTFERDNCQjU2ODhE",
      contentDetails: {
        videoId: "BBZsoeKekDU",
        videoPublishedAt: "2020-06-24T04:24:21Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "0XvTbOfPN1_dC2QpXXnMmq9nzPg",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS40QTY5NjQzQkQzMjgwNjhD",
      contentDetails: {
        videoId: "8R1qXjDkLqA",
        videoPublishedAt: "2020-06-25T18:30:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "PQZaoMUvnkMnPsZwtodJwcxsleI",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5DNTU3ODQ4ODAzMjFERTI1",
      contentDetails: {
        videoId: "FC3jXqvm-zA",
        videoPublishedAt: "2020-06-29T06:30:21Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "nyqkwhrCndsBk1w8_eBqhsK2xGA",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4wMTIyMTBBMTA3RDUxNjlD",
      contentDetails: {
        videoId: "gdd9mnEeuts",
        videoPublishedAt: "2020-07-02T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "J2-18DyZUk6102mK_xDoXxCyA3s",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS40Q0JERDMxNzcwNTk1M0Y0",
      contentDetails: {
        videoId: "GYSS3xDmzR4",
        videoPublishedAt: "2020-07-03T05:00:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "xoVk0vzDphI4uYWaye5rKgQgTf0",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS40NTBGRDE5MDg2Q0NEODI4",
      contentDetails: {
        videoId: "Py46nVL6p4U",
        videoPublishedAt: "2020-07-04T04:42:36Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "h5m4c5V6-JciTSrYiIJCmfDSlk4",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS42NjBGMkRFNDcwMjM2NzYx",
      contentDetails: {
        videoId: "xhiSYQ8bFvg",
        videoPublishedAt: "2020-07-06T05:00:08Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "OehkXS8xJMv1esJ3avA1MOmnB7c",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5BNTRGQTE1QjY2NUE5NTAz",
      contentDetails: {
        videoId: "yyOlOL5OcPY",
        videoPublishedAt: "2020-07-07T04:41:45Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "WAs7nNEq8gMxeAYUsPkH4Hq0AjM",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5FOTE3RTBFMjNFMDNEM0Yz",
      contentDetails: {
        videoId: "xcVUmriO4Yw",
        videoPublishedAt: "2020-07-08T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "B5h63c9qGe--uYFx6cNVm23UE_0",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5FMjFERkYxMjI2NjkyMjg5",
      contentDetails: {
        videoId: "oYULIsP4bAk",
        videoPublishedAt: "2020-07-09T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "mf8dqZ2bq0FfFRFMGkIKx-iZjl8",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4zMkY2MjA3RDJERTkxNjkz",
      contentDetails: {
        videoId: "zWU3p3OJIvE",
        videoPublishedAt: "2020-07-10T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "L08LPFWSup5--hgnPANfw6GsErM",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5DNUEzOUFFNkIyOUUzOTRC",
      contentDetails: {
        videoId: "yJsM6NdKQYk",
        videoPublishedAt: "2020-07-11T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Qpwc_gNrwlKp4XnTpoNPe4EM9Eg",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4xRjE1NzQ4MjRCMUNFRDdB",
      contentDetails: {
        videoId: "Nd1oUkWWje4",
        videoPublishedAt: "2020-07-13T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "W6ThRp6Fd8FkJDtsOJhTWom7N4k",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5EQTdFNDU3M0Y3MTM1QjlG",
      contentDetails: {
        videoId: "1THrIzUQ-lE",
        videoPublishedAt: "2020-07-14T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "24lsomzXUYFOE5rmPKJ1BTISpSw",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4wNjIzRDA1OTQ2M0UyODEw",
      contentDetails: {
        videoId: "a7O2zOUZsUU",
        videoPublishedAt: "2020-07-15T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "2CdyDC6v6pGJag3A_IDhV7c77cc",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4wQjA4QkVEQ0RFREIzMjFC",
      contentDetails: {
        videoId: "akjkVjGfFI0",
        videoPublishedAt: "2020-07-16T04:40:33Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "08MJA1g3mrEpzRvgff3gSggXT0c",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS41QTQ4QTIyM0Y1RTBGMUNE",
      contentDetails: {
        videoId: "gECzPmoQxe4",
        videoPublishedAt: "2020-07-17T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "XovGAKN9CRGYqe2TgqC6joqhVEg",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5CRjBFOTUzQTE4Mjg3RUJF",
      contentDetails: {
        videoId: "7piG9y9IZUs",
        videoPublishedAt: "2020-07-20T08:26:50Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "VMYLkD0LnMSBMEnxBxN8qJQplfs",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5ENUI5OTFCQkYxNDUxQjQ3",
      contentDetails: {
        videoId: "2SykjrUSCH8",
        videoPublishedAt: "2020-07-22T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Kdju1e7y_yjDWQNAqNTmv7DGxfo",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5GN0EwRkMxQTJGMTFCNDc1",
      contentDetails: {
        videoId: "IfLQ7Qcag2g",
        videoPublishedAt: "2020-07-23T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "a0E0VcO7-PhGFY6dN4kjbr4C9WM",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS43RjdBQTMwNUUwRTA1QkE3",
      contentDetails: {
        videoId: "MWXWy6A5i0Y",
        videoPublishedAt: "2020-07-24T04:28:16Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "du1rotDrURxqMsEm0YBNeXG2sxo",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5CMDk1Q0MxREYyOTVEOTZF",
      contentDetails: {
        videoId: "qaT3Lnb0fw8",
        videoPublishedAt: "2020-07-25T04:33:43Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Gb7uwV9VX4IlPXZQP23CJIZLYSA",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS44NzQ1OTI1OUFFM0NFRTc5",
      contentDetails: {
        videoId: "kJcVs5tj2vk",
        videoPublishedAt: "2020-07-26T04:18:24Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "ZGThFvFdvPb3OXCDwBpAf6TYR54",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5DODY2Qzc5Mzc1QkZEQ0NF",
      contentDetails: {
        videoId: "w3vvcykarx8",
        videoPublishedAt: "2020-07-27T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "pycr-PrYumsvoBNzATESgwBEwWQ",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS40MzEwNkU4RUE0MjhBRjg4",
      contentDetails: {
        videoId: "hbMsBoBJf30",
        videoPublishedAt: "2020-07-28T04:30:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "SxsPOu7sYKpiFB3BxwceQltj_DU",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS42RDgxQ0M2OUIwREZCNjZF",
      contentDetails: {
        videoId: "i3sKK09hOp8",
        videoPublishedAt: "2020-07-29T05:00:08Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "zksGqIAynj9iM2T4Ec18ihuOnmg",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS40ODU2MTBGM0M5MkIwQzU0",
      contentDetails: {
        videoId: "pRqfYVShyAc",
        videoPublishedAt: "2020-07-30T05:00:08Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "xBY0HyQ_nCLRIALmnoVsiMTXI2w",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS44REI4QUZDRDI5MDc4Q0NF",
      contentDetails: {
        videoId: "10ipgdUCu5E",
        videoPublishedAt: "2020-08-01T04:30:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "od5ipE3oaWvODHOU0KdN61jmjaI",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5FQjcyRDZBMEMyNTY3OTdE",
      contentDetails: {
        videoId: "e-Ajdhpc0kM",
        videoPublishedAt: "2020-08-03T04:48:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "iPV8OvevpIS4pootRZxHu7xhj0E",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4wMEMyQTBBOTUwNTM0OUFG",
      contentDetails: {
        videoId: "BGOqXty8U1g",
        videoPublishedAt: "2020-08-04T04:30:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "1TVoutUd_QK1o6staGgG7q6psLY",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS44M0Q5MzQ0QTcwQzFDMjc5",
      contentDetails: {
        videoId: "F8ZtqoTt95E",
        videoPublishedAt: "2020-08-05T04:30:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "XzJyoMdMtZxL2w5v63HQHmGB_Sg",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5EN0U0NTk3NzIwMjUxN0M3",
      contentDetails: {
        videoId: "doCXpu4Wlg0",
        videoPublishedAt: "2020-08-07T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "6kfc1SW7V57ZHsTW5TyancTJptY",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5BQzRBQzNEOTgzNTU2QkZB",
      contentDetails: {
        videoId: "sVrSCU6Lu2I",
        videoPublishedAt: "2020-08-08T04:56:08Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "WnNAjjbwLMh8jNoIzER9HY1zp4w",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4zNEMzQ0FDREY1MkE1RkQ1",
      contentDetails: {
        videoId: "VvfVUN1QpVk",
        videoPublishedAt: "2020-08-11T04:55:24Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "WGKOtihTg-1gFWIhEcuFvUb2LMQ",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS45MEI3NjgzMTVFQkZGODYx",
      contentDetails: {
        videoId: "WANgShlyfJM",
        videoPublishedAt: "2020-08-13T04:26:52Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "oRL-tFbMhKEd_UbySWYWxe7vCBc",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5ENjg3MEUyQ0IzODMzQThB",
      contentDetails: {
        videoId: "kHQlnCeOy98",
        videoPublishedAt: "2020-08-14T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Dk5j3ZS4rICZREjUBgulX4lT0Tw",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS41MzJFNEYxODEyNzA0QUUx",
      contentDetails: {
        videoId: "if8MDchZWp0",
        videoPublishedAt: "2020-08-17T05:00:05Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "SSmKImVzIssBshahKY4zGErLdHE",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5EODkyNDMzRkJBNkQ2NkMz",
      contentDetails: {
        videoId: "OtkYFp6WW5g",
        videoPublishedAt: "2020-08-19T07:30:48Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "06jLmATeEaJHjWtOAuSRJ2QYp_U",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5BRUVCN0E0MzEwQzAwNjMy",
      contentDetails: {
        videoId: "aZCOsBxi8-I",
        videoPublishedAt: "2020-08-20T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "bHSnDfeECFQgnGV5smym0uWPNMY",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS41NUMwNTVERDNBRDc4REM0",
      contentDetails: {
        videoId: "We4rHyPOaOs",
        videoPublishedAt: "2020-08-23T10:39:42Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "6ZVM2tvECTZpNwWyLlBTnVCS-7M",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4wQTI4OEZFRUE0Q0Q3ODQw",
      contentDetails: {
        videoId: "q8_1-hPSF1k",
        videoPublishedAt: "2020-08-26T07:13:14Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "omj6FWsCNTtfGeccm44l40VJy0s",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4xRDJGOTc4RkUxMzUwMUFG",
      contentDetails: {
        videoId: "OlwMHU-tImw",
        videoPublishedAt: "2020-08-27T04:26:34Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "CS90AqjdlDSti033ay5wZrPlP0c",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4wMDkwRkI3NzExODA2MTFG",
      contentDetails: {
        videoId: "7E9agtnypk8",
        videoPublishedAt: "2020-08-28T05:13:20Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "J2StGcFzeTfCn0hjqoRaha5piFM",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5ERkRDQjY0N0Y0Q0VFOTdC",
      contentDetails: {
        videoId: "Qjko6eVOz9s",
        videoPublishedAt: "2020-08-31T04:21:26Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "7nI6GbH0nLM3a64AGlZte3vsTWA",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5BRDg1NUY1OTY2QzgzOEM0",
      contentDetails: {
        videoId: "FhwbRE5bbw8",
        videoPublishedAt: "2020-09-01T06:49:16Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "RLrq8Y1GnjTjfAasg3M726Fqm_I",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS42NEZDNTU0RTRENDUzRjMz",
      contentDetails: {
        videoId: "FuDZP1ifF3E",
        videoPublishedAt: "2020-09-05T04:54:08Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Di7skljZpPr87xB0me-8jLVnVxM",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5ENEEyOTIwNkY4NzFGMkQ2",
      contentDetails: {
        videoId: "camNLqoe75Q",
        videoPublishedAt: "2020-09-07T07:12:25Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "aWouEPYXivuo1gzky5MlMvjcVUA",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS43NjE5NDdDRTdENjQ3RTkw",
      contentDetails: {
        videoId: "QQ0VyRkMHAQ",
        videoPublishedAt: "2020-09-08T06:58:49Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "PnkceXWeLcURosBoh28DETsZQ7U",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4wRkVBNUY4OTkzN0JCNTA2",
      contentDetails: {
        videoId: "q8ddyyB_N8s",
        videoPublishedAt: "2020-09-09T06:12:17Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "8rwQy1ZU-pCfLlVJ4ICB2pzseno",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS44NjIxNjc5OUQwQkJBODQ5",
      contentDetails: {
        videoId: "ZXh12fiTcv4",
        videoPublishedAt: "2020-09-10T06:15:45Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "myPifYw7_ZX-85cmN-EKDQgvTcY",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS43RDg3MzJDMTRFMTZFOTAw",
      contentDetails: {
        videoId: "l4-RLomn6y0",
        videoPublishedAt: "2020-09-11T05:35:16Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "ac6aB4j7iLJSbkedjImV0KYt_QA",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5BNzdEQzY0REQzQTEyN0U3",
      contentDetails: {
        videoId: "Iv5FwFfK8RA",
        videoPublishedAt: "2020-09-12T04:47:50Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "_WxudQdPUe5wIn6qcI5oxPjwX4g",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5EODgyNjY4MzA3QzY5RTkx",
      contentDetails: {
        videoId: "4QIILvRRovg",
        videoPublishedAt: "2020-09-14T05:12:30Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "5oLqOCfYpSGKT2D7FeJGi1mTYdE",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4wN0FBRUVFNEVBMTZBQ0Mx",
      contentDetails: {
        videoId: "ekKpGf9Wtis",
        videoPublishedAt: "2020-09-15T04:58:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "zLwozvzJ1Simbve5fCUQQ2H4T4g",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4zNDIxRUJGQThFRTg1QzAy",
      contentDetails: {
        videoId: "Y3R-S-n_S1A",
        videoPublishedAt: "2020-09-16T05:05:20Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "3JaLyzAD0ofFo4VKJw7-2ElV0VI",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4yOTZGRTNEQ0ZGNUM5RDgw",
      contentDetails: {
        videoId: "Lnlejmwg65s",
        videoPublishedAt: "2020-09-17T04:57:41Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "bcz4reIVCUHNc7OsxjKIrd_7WBU",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5CQzUwREI3MzkxQjdBM0E0",
      contentDetails: {
        videoId: "hsnwQbVcmEs",
        videoPublishedAt: "2020-09-18T05:10:35Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "q4yI3u0vgQR4d0n2HZobSmh1nXI",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS40OTQ5QjlEMDgzN0FBNUIw",
      contentDetails: {
        videoId: "V0VEChUhOyY",
        videoPublishedAt: "2020-09-19T05:10:32Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "uWyt_geoFKkyjb6kzJPUgrCoDHQ",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS43ODA2MDVCQzY5QzZDMjUw",
      contentDetails: {
        videoId: "kqyya7LkmiA",
        videoPublishedAt: "2020-09-21T05:01:59Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "9Jy0ESPA7dAyl3agnfUj4yITekg",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5GNzk2RTlDQTNCQzJCQzJG",
      contentDetails: {
        videoId: "EffQXkUYL4I",
        videoPublishedAt: "2020-09-22T05:14:52Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Zaj08EHW5hDa1co3T5A3QebrH2M",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS44QjNCNkRENjNFQTBEMUND",
      contentDetails: {
        videoId: "R9FpHick_zg",
        videoPublishedAt: "2020-09-23T05:22:09Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "xEXh6SFMhtgPDgwPLddlw5ZUz38",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5EMUJFNzRCNDRFQjE5RjM4",
      contentDetails: {
        videoId: "3tku6ZI6FR4",
        videoPublishedAt: "2020-09-24T04:54:35Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "hd1DYsX5nF2dwy3KKoC7LUuh7f4",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5CNEYyNTVBNDdGMDI1MDNC",
      contentDetails: {
        videoId: "UJPxz1dXdDw",
        videoPublishedAt: "2020-09-25T04:55:43Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "eyQoAv8urOca51EWNs3BicQ7N1o",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS41ODIyMTgwQzA4NjJCQkZC",
      contentDetails: {
        videoId: "Wm2ur7xNtao",
        videoPublishedAt: "2020-09-26T05:36:12Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "EihBRbRcs_KabyUTEwaGXPplkNs",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5FRjdGNDMzN0I2RTI3MDlG",
      contentDetails: {
        videoId: "Y2IUVLMqiRw",
        videoPublishedAt: "2020-09-28T05:00:22Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "RBU1cL8dq_rLVYToz-N4JBUbhiQ",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS41RDUzRjJFQ0Y0MUI3NzU1",
      contentDetails: {
        videoId: "jklvb2p1TW8",
        videoPublishedAt: "2020-09-29T05:36:49Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "YoJmIwCjymVxnFLF0fRXbrZbZLs",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5ERENFNTk4Q0Q2MTZDMTA5",
      contentDetails: {
        videoId: "Uj03Pf8-hhE",
        videoPublishedAt: "2020-09-30T05:13:07Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "sjsw4d5_QMwqDc6wnIhkfxk0uhk",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4yM0EyQ0U1M0I2RkIwNTQ0",
      contentDetails: {
        videoId: "3Z6wpgx8FoM",
        videoPublishedAt: "2020-10-01T05:35:30Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "I8D1s8D0x07mYiSHGgvVs3Y9vFA",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5DQjg2RDQyMEVGQkZFOEVF",
      contentDetails: {
        videoId: "zUl6-PgZ6h8",
        videoPublishedAt: "2020-10-02T04:41:50Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "dp2Ml0e5-LmeN4S-Cfa-9OHGCGI",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4wQUE0QzM4MkJGQ0YwQjUx",
      contentDetails: {
        videoId: "xRWw2E5jjK0",
        videoPublishedAt: "2020-10-03T05:05:51Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "L5853Ufasgjx1PH_BZc34hzRxUc",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5GMDBDNkJGMzYzREUyMTYw",
      contentDetails: {
        videoId: "VWg5X9i1FsA",
        videoPublishedAt: "2020-10-05T05:04:39Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "SU7ugQaKomm7jqDn52FHsQA5KYA",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5CMUM0NzY5NzdEQzlGRjAx",
      contentDetails: {
        videoId: "5DsFNlBnirI",
        videoPublishedAt: "2020-10-06T05:47:27Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "btuol0uKR_o4pAUOYDeXRG7YNss",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5EMzJDRTUwQjBEOUVFQzAw",
      contentDetails: {
        videoId: "H-Pz9MpIRis",
        videoPublishedAt: "2020-10-07T05:33:50Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "5s44Rv-M0h1n1K2JTmjPkVPdnb0",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS40NzE2MTY1QTM3RUI3QkU3",
      contentDetails: {
        videoId: "aLmOphxfYPE",
        videoPublishedAt: "2020-10-08T05:20:36Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Lzi8aljMdkMDc_bYACPgXJLz8Ak",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS44MkM2RjVEQkQ5N0I2MjVE",
      contentDetails: {
        videoId: "xKvzHZWJI_o",
        videoPublishedAt: "2020-10-09T05:25:20Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Z4QwmPnbKQyfOGSsNoBogBVD8Zo",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS44QTA1QTQyRTc3M0VGQzYx",
      contentDetails: {
        videoId: "h7xJsLUDTQM",
        videoPublishedAt: "2020-10-10T05:04:22Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "S3jQ2u_iYMiYtbW3LbV2yhnbcYc",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4wMDFGNzBEOTU4Q0Y1Q0RG",
      contentDetails: {
        videoId: "Wq7uVsvNefk",
        videoPublishedAt: "2020-10-12T05:05:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "LCSzOm9eFXJ2Ezz3udUZdzgknWs",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4xNTZBNUQxMDZBQzFGMjkw",
      contentDetails: {
        videoId: "ISDGyQ_Zy6g",
        videoPublishedAt: "2020-10-13T05:25:10Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Kw_p6XrR3C4Vks17pWTmp0WJuME",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4zQTkzRjgxRTY0OEU0MkM3",
      contentDetails: {
        videoId: "I64Yht_3T7w",
        videoPublishedAt: "2020-10-14T05:18:19Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "5gDCpKNGGed9gydN_fy6_tuyKtc",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS44QTY2MEEzNzBFQUJCMUQ2",
      contentDetails: {
        videoId: "wBWURtLm-WM",
        videoPublishedAt: "2020-10-15T04:55:58Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "OZu1nOgo7LpQadl0qW0HA3AtafE",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4xNjIyNEE0MDEyRDlCMjBE",
      contentDetails: {
        videoId: "iuSwKgWmpcU",
        videoPublishedAt: "2020-10-16T05:19:34Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "7WW3TGcHs5k6UXXPGkg1zSqNsos",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5CMEVBRUJERkUyNTBENTkz",
      contentDetails: {
        videoId: "529pGnzi3LM",
        videoPublishedAt: "2020-10-17T04:57:11Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Oj-xshILKlQQxWhncPK41lv78cY",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5FQUY2Qzk4RUFDN0ZFRkZF",
      contentDetails: {
        videoId: "iQikE-T63WE",
        videoPublishedAt: "2020-10-19T05:14:56Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "TrONiPnSFlDeDNbaXw1Nu0Dt17o",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4xN0Y2QjVBOEI2MzQ5OUM5",
      contentDetails: {
        videoId: "b7jeFVo_Tm8",
        videoPublishedAt: "2020-10-20T05:25:47Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Vpp1lcUjwSEmTT8U5L_7BbAHr6M",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS45NDlDQUFFOThDMTAxQjUw",
      contentDetails: {
        videoId: "47vIcxfW3O0",
        videoPublishedAt: "2020-10-21T05:11:44Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "wZAy-41lt960X3AY2NU6dP785xo",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4yQzk4QTA5QjkzMTFFOEI1",
      contentDetails: {
        videoId: "r0ejzM40xuU",
        videoPublishedAt: "2020-10-22T04:57:10Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "PH3EuH60qDrMg9hbdFVKkvS9elM",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5EQkE3RTJCQTJEQkFBQTcz",
      contentDetails: {
        videoId: "ECOfVNR5wZM",
        videoPublishedAt: "2020-10-23T05:21:39Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "YMObY_esevmblotlL47vdlNRUHE",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS43QzNCNkZENzIyMDY2MjZB",
      contentDetails: {
        videoId: "nHHIybgZ0oQ",
        videoPublishedAt: "2020-10-24T05:02:16Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "joiTBGCNLbbwBI9Pd9VBW4divrU",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS42RTNCOEMxREI3Q0VDMjU2",
      contentDetails: {
        videoId: "z-gYofbAHXk",
        videoPublishedAt: "2020-10-26T05:00:34Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "EMNdrfAbjtvzPW24GO2_xfB_MeE",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS40MDNEMzA0QTBFRThFMzBE",
      contentDetails: {
        videoId: "CqmI4nZhcPU",
        videoPublishedAt: "2020-10-27T05:04:33Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "ceVW4iwDm5pAufTTqVbBK_5KE-0",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS42MjYzMTMyQjA0QURCN0JF",
      contentDetails: {
        videoId: "K22OYrdaHKQ",
        videoPublishedAt: "2020-10-28T05:53:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Ga9cP4vt5HqaF2TMgEfz0GzO6M0",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4xM0YyM0RDNDE4REQ1NDA0",
      contentDetails: {
        videoId: "HkfWlrDI2VA",
        videoPublishedAt: "2020-10-29T05:24:28Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "kGHtdRXdBbrFhp_TEl08MPaMTAk",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5ERkUyQTM0MzEwQjZCMTY5",
      contentDetails: {
        videoId: "1b9v62zHQHM",
        videoPublishedAt: "2020-10-30T05:13:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "mlCVnxZSwqO-r4XtyRHPGKQnxF4",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5CNTcxMDQ0NThBNzMxODYz",
      contentDetails: {
        videoId: "E5O7FIvEFZs",
        videoPublishedAt: "2020-10-31T04:58:17Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "pxIpugGqxywYtudZH9XQLQZl63M",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5CNTZFOTNGQzZEODg1RUQx",
      contentDetails: {
        videoId: "_Gp3H0B9tyM",
        videoPublishedAt: "2020-11-02T05:48:29Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "bpTaLg5NC9q2rajpbEvpRbowQkU",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4wRjhFM0MxMTU1MEUzQ0VB",
      contentDetails: {
        videoId: "v0Gtny-6Op0",
        videoPublishedAt: "2020-11-03T05:54:25Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "aV1kBhhlkkq7vjRhpGnUXibfRsE",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS41OURENDc2NEM1MDI5Mjky",
      contentDetails: {
        videoId: "3IVw0rsRDu8",
        videoPublishedAt: "2020-11-04T04:58:28Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "WJFNg6CoZC0vpB0pUQ63oQGTmC8",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS42QzdBMzlBQzQzRjQ0QkQy",
      contentDetails: {
        videoId: "YP15Asdblkg",
        videoPublishedAt: "2020-11-05T05:07:16Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "9ZCAGhv37Ujzr1ZJFZEIPVm4L9U",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4zMUEyMkQwOTk0NTg4MDgw",
      contentDetails: {
        videoId: "BwADYN7Znfs",
        videoPublishedAt: "2020-11-06T05:03:57Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "V4RHmQhoHLkriYZSLYYFwO9p1M8",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4wMTYxQzVBRDI1NEVDQUZE",
      contentDetails: {
        videoId: "PHbKihUGUNs",
        videoPublishedAt: "2020-11-07T05:08:05Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "411odH7IYMUI760xrFzSzEQSjZQ",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4wNEU1MTI4NkZEMzVBN0JF",
      contentDetails: {
        videoId: "7WPedHlpTL4",
        videoPublishedAt: "2020-11-09T05:23:36Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "qUKCsCbDrrjSiZePRl1wGi7OwsA",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5CQkEwRDA0MDkwNUM2MDY1",
      contentDetails: {
        videoId: "Jm6PdU4SjXk",
        videoPublishedAt: "2020-11-11T05:24:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "vjtHRzm7FKGee0YzGjm9mzDP6rI",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5GNjAwN0Y0QTFGOTVDMEMy",
      contentDetails: {
        videoId: "heH0dtzhfCY",
        videoPublishedAt: "2020-11-12T05:00:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Zduy5TcBLoD8BesGJjKOC-CX3FU",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS43NERCMDIzQzFBMERCMEE3",
      contentDetails: {
        videoId: "KRkW5oBCHlc",
        videoPublishedAt: "2020-11-13T05:13:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "I8_7EM5CcnrcE-ECTfk_b-Y-J8g",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS41NTZEOThBNThFOUVGQkVB",
      contentDetails: {
        videoId: "cgIcnSLBM0Q",
        videoPublishedAt: "2020-11-16T05:18:55Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "oX8RProCvS4G8jaxEOM4otOKnVk",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS42Qzk5MkEzQjVFQjYwRDA4",
      contentDetails: {
        videoId: "IpajP2tfSMA",
        videoPublishedAt: "2020-11-17T04:53:36Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "vfkxLrfFAvMY0bmXxrZ3sU5ZQJc",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4zMEQ1MEIyRTFGNzhDQzFB",
      contentDetails: {
        videoId: "z4e8bn8EcaM",
        videoPublishedAt: "2020-11-19T04:55:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "ClDBFfytFPnKHYR_aZFLsGxRjFY",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4xMzgwMzBERjQ4NjEzNUE5",
      contentDetails: {
        videoId: "c6kQPKZ7pg4",
        videoPublishedAt: "2020-11-20T05:20:54Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "UP-HC27DNfc1xjy9jqT8Y8W2I5c",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS44QzVGQUU2QjE2NDgxM0M4",
      contentDetails: {
        videoId: "Nb7dY9vwYB4",
        videoPublishedAt: "2020-11-21T05:05:33Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "gF4nu6YNy6xJ30EWmSx4LnWps9w",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5ENjI1QUI0MDI5NEQzODFE",
      contentDetails: {
        videoId: "lKotixh1acE",
        videoPublishedAt: "2020-11-23T05:07:07Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "tslrqNhCGBVMm9oHc39nfPoNuQ8",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS41RTNBREYwMkI5QzU3RkY2",
      contentDetails: {
        videoId: "wemTE9JJm9o",
        videoPublishedAt: "2020-11-24T05:30:35Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "ScVPbg2-T6vldgxE8A3J8TLEd9s",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS40QzRDOEU0QUYwNUIxN0M1",
      contentDetails: {
        videoId: "mN8aikAGVT0",
        videoPublishedAt: "2020-11-25T05:00:09Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "yW06KmgjWQGzkV995-JDQeAz0lw",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4yQUJFNUVCMzVDNjcxRTlF",
      contentDetails: {
        videoId: "FVJk3Y3T7gc",
        videoPublishedAt: "2020-11-26T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "4bmHAOUc-r-78F8Nxstaj-xmJG4",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4yQjZFRkExQjFGODk3RUFD",
      contentDetails: {
        videoId: "NcuJFnWBzYI",
        videoPublishedAt: "2020-11-27T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "d7f7fMHl3zqBIvB0ONwB7aRXCTU",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS41MzY4MzcwOUFFRUU3QzEx",
      contentDetails: {
        videoId: "_XJ--f1MODQ",
        videoPublishedAt: "2020-11-28T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "_1hB1-BeJWNMjWq4TTlbr7ZT3V4",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5DRUQwODMxQzUyRTlGRkY3",
      contentDetails: {
        videoId: "fAuV4sW61K4",
        videoPublishedAt: "2020-11-30T05:17:23Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "9HoNHAMO0I7fXcY-2muCe3ohqOo",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5DNkMwRUI2MkI4QkI4NDFG",
      contentDetails: {
        videoId: "i40GQdVBWNg",
        videoPublishedAt: "2020-12-01T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "9WXzgPITaK9aZD7n2yae4K6-Nc8",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS45NkVENTkxRDdCQUFBMDY4",
      contentDetails: {
        videoId: "Cm80Qy5dheM",
        videoPublishedAt: "2020-12-02T05:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "iRXvzRyz2u6QRfOAG_99z3b1C08",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4zQzFBN0RGNzNFREFCMjBE",
      contentDetails: {
        videoId: "HDaxWPJYOwQ",
        videoPublishedAt: "2020-12-03T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Zj8ZSfitvsk0KD4OC5aZtrEHib4",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5GNDg1Njc1QzZERjlFRjE5",
      contentDetails: {
        videoId: "hDyZDcOAxb4",
        videoPublishedAt: "2020-12-04T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "LK3rjtVau5183YBi1NpuuqqiPWs",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4xOTEzQzhBQzU3MDNDNjcz",
      contentDetails: {
        videoId: "QyG-Y2s_pW0",
        videoPublishedAt: "2020-12-05T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "YfhX1b8nk8g50UKc_3qwoOVWOJI",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5BRjJDODk5REM0NjkzMUIy",
      contentDetails: {
        videoId: "7dFXMTNTaLQ",
        videoPublishedAt: "2020-12-07T05:04:52Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "lvMW8tpfZoFHgN5IMsKDxHhrMJM",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS40QTA3NTU2RkM1QzlCMzYx",
      contentDetails: {
        videoId: "N-Ow_xQZviI",
        videoPublishedAt: "2020-12-08T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "FzNofmpaxyWjDpvXH6CQz8fNxKo",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS45RjNFMDhGQ0Q2RkFCQTc1",
      contentDetails: {
        videoId: "k8YzmYH4hD8",
        videoPublishedAt: "2020-12-09T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "phfkGzRwZXupAhguImVG6cCqNfU",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS42MTI4Njc2QjM1RjU1MjlG",
      contentDetails: {
        videoId: "38af_JBIu8I",
        videoPublishedAt: "2020-12-10T05:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "XNmapJZZNZxz6mpThPVmH5O2aOQ",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5CMEQ2Mjk5NTc3NDZFRUNB",
      contentDetails: {
        videoId: "6EOGqZ5Gm60",
        videoPublishedAt: "2020-12-11T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "yHvs6naZNhrWdw2D3p5NUuxhY5I",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4zRDBDOEZDOUM0MDY5NEEz",
      contentDetails: {
        videoId: "2ufl90Iyeto",
        videoPublishedAt: "2020-12-12T05:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "HN5wmTmv1nVvFwRcFAqz2YOo3XY",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS41QUZGQTY5OTE4QTREQUU4",
      contentDetails: {
        videoId: "kHfZwhOdVoQ",
        videoPublishedAt: "2020-12-14T05:09:09Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "2sctpQRe46ChI3M3A4kIXlSnhPo",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS43NDhFRTgwOTRERTU4Rjg3",
      contentDetails: {
        videoId: "NZD2S_qQwXM",
        videoPublishedAt: "2020-12-15T05:15:05Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "JEQ9gFOOKC4GMBuWy0PqQGVZk-4",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS44Mjc5REFBRUE2MTdFRDU0",
      contentDetails: {
        videoId: "P_VrfL-3BCU",
        videoPublishedAt: "2020-12-16T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "IQ4KSn7as71yfl40VGl2uSynIrE",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5DMkU4NTY1QUFGQTYwMDE3",
      contentDetails: {
        videoId: "Z1QcLetPTKI",
        videoPublishedAt: "2020-12-17T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Dx5HvhaaUIEOeUWWWYbqDMgVCek",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4yQUE2Q0JEMTk4NTM3RTZC",
      contentDetails: {
        videoId: "R4Sab_ly-xw",
        videoPublishedAt: "2020-12-18T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "9w1aEW_LSD2vdxx-K0b6Y-eh4hs",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5DQ0MyQ0Y4Mzg0M0VGOEYw",
      contentDetails: {
        videoId: "uXve5KnMR4Y",
        videoPublishedAt: "2020-12-19T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "8_ekDYanPqCNS_D6ruUCWfj1_Hk",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS43MTI1NDIwOTMwQjIxMzNG",
      contentDetails: {
        videoId: "5R-32qN4X0w",
        videoPublishedAt: "2020-12-21T05:10:51Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "tBp-BhU1utMR_5XpYyiYz0yz13M",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5DNzE1RjZEMUZCMjA0RDBB",
      contentDetails: {
        videoId: "kTu8Fii_Fig",
        videoPublishedAt: "2020-12-22T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "72MWcoJJVFHP3zPZMnB3TlpS1no",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS45NzUwQkI1M0UxNThBMkU0",
      contentDetails: {
        videoId: "w5m228uDD10",
        videoPublishedAt: "2020-12-23T04:45:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "O72nz0uQXOpGowbQzMUZ4Q1OYwA",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4zRjM0MkVCRTg0MkYyQTM0",
      contentDetails: {
        videoId: "ChcwOTE3GIU",
        videoPublishedAt: "2020-12-24T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "H6rsxrBP4WvNxMMBemUf6sZwEOs",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5GM0Q3M0MzMzY5NTJFNTdE",
      contentDetails: {
        videoId: "J2eKB3qJh2Y",
        videoPublishedAt: "2020-12-25T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "iY91LeD6Safhvfx04bV_8SfRiQY",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4yMDhBMkNBNjRDMjQxQTg1",
      contentDetails: {
        videoId: "YrEJZqpRaa0",
        videoPublishedAt: "2020-12-26T04:45:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "dzIvzSuSriDwbSuwMQdNyLH1y9Y",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5ENDU4Q0M4RDExNzM1Mjcy",
      contentDetails: {
        videoId: "vjQyLEPmL4E",
        videoPublishedAt: "2020-12-28T07:59:42Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "1ai4a8SQ-aXggShH3D09hizDpU4",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS45RTgxNDRBMzUwRjQ0MDhC",
      contentDetails: {
        videoId: "1r_78zJ70mU",
        videoPublishedAt: "2020-12-29T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "gazoe2nW1Dk4kiQIG5nyj1f-EoQ",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4yMUQyQTQzMjRDNzMyQTMy",
      contentDetails: {
        videoId: "PIoFM0vkSv8",
        videoPublishedAt: "2020-12-30T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "lwxxtcn3rVsOnk-HXaQZ1H9kBxg",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS41QTY1Q0UxMTVCODczNThE",
      contentDetails: {
        videoId: "MqTb1m6ymDk",
        videoPublishedAt: "2020-12-31T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "BR2UYfPDZmCzzYptv41sHbGT7d0",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5EQUE1NTFDRjcwMDg0NEMz",
      contentDetails: {
        videoId: "wmnfLD70vXg",
        videoPublishedAt: "2021-01-01T04:45:07Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "JYOXuviPiXivvNkEecnm6dsJ8Ms",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS41Mzk2QTAxMTkzNDk4MDhF",
      contentDetails: {
        videoId: "QWfmpcSGH0I",
        videoPublishedAt: "2021-01-02T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "MUOS-BJd--fH-SAU6dyexe1vqvY",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4zMDg5MkQ5MEVDMEM1NTg2",
      contentDetails: {
        videoId: "Ut3pPDlY4Vs",
        videoPublishedAt: "2021-01-04T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "28E39Y-bH4KMDS8GGBFCr52YuaM",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS45ODRDNTg0QjA4NkFBNkQy",
      contentDetails: {
        videoId: "0Qz6DrClCec",
        videoPublishedAt: "2021-01-05T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "GAvMxexKvfaWvs7TTtbKmlmTVaE",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5EMEEwRUY5M0RDRTU3NDJC",
      contentDetails: {
        videoId: "xa9l6Chyve0",
        videoPublishedAt: "2021-01-06T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "pH1zolvDz62ToHG-6y0iwGEw-hk",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS40NzZCMERDMjVEN0RFRThB",
      contentDetails: {
        videoId: "juoLgLDkT-k",
        videoPublishedAt: "2021-01-07T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Uk2fvrIESsbGn7erZ6Pe1lDixek",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5GNjNDRDREMDQxOThCMDQ2",
      contentDetails: {
        videoId: "pONSHF7Aiuo",
        videoPublishedAt: "2021-01-08T04:45:03Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "PavPqiUGOVmnuYz0nBPTeuHoJGc",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS45NDk1REZENzhEMzU5MDQz",
      contentDetails: {
        videoId: "sqe69fpoOhY",
        videoPublishedAt: "2021-01-09T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "X-GJqu3oVdX-YFH6TVwwu_CIRTA",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS5DQUNERDQ2NkIzRUQxNTY1",
      contentDetails: {
        videoId: "PrHH7k6WRBY",
        videoPublishedAt: "2021-01-11T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "5nEmTWfsgo-vk4byn7SVZ7Mslx0",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS41MzJCQjBCNDIyRkJDN0VD",
      contentDetails: {
        videoId: "RWWwVsN7oUw",
        videoPublishedAt: "2021-01-12T04:45:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "RUnly4zmDlkETbij6pJwRClPlcI",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4xMkVGQjNCMUM1N0RFNEUx",
      contentDetails: {
        videoId: "WUnGsvJH9Zw",
        videoPublishedAt: "2021-01-13T04:45:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "6SssFrKF5Z8TxJCi30LaLu7xPYw",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4wOTA3OTZBNzVEMTUzOTMy",
      contentDetails: {
        videoId: "NbwYN0g_Czk",
        videoPublishedAt: "2021-01-14T04:45:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "09bbNR8VrmvHTBxaVSojwFQP6T8",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS41MjE1MkI0OTQ2QzJGNzNG",
      contentDetails: {
        videoId: "7MXHSgNUNoA",
        videoPublishedAt: "2021-01-15T04:45:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "FpyftXceA28qgahICcqSd6xrr98",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4wMTcyMDhGQUE4NTIzM0Y5",
      contentDetails: {
        videoId: "FOn39zEMoL0",
        videoPublishedAt: "2021-01-16T04:45:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "rmXrE5beTm1v24X9KPmCcfDe4VQ",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS4yODlGNEE0NkRGMEEzMEQy",
      contentDetails: {
        videoId: "veMT3hqhIlo",
        videoPublishedAt: "2021-01-18T04:45:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "yl7_TuVLt8tW7qL-HQGvFauYHOc",
      id: "UExmbEtjcTlvLWlXNTZubWlxUy0zZzVKTm91eGNDdXhxZS41NkI0NEY2RDEwNTU3Q0M2",
      contentDetails: {
        videoId: "Weva1_Zuqk8",
        videoPublishedAt: "2021-01-19T04:45:00Z",
      },
    },
  ];

  // URL: https://developers.google.com/youtube/v3/docs/playlistItems/list
  // part: contentDetails
  // maxResults: 50
  // playlistId: PLuS3qy90fem-l3yIckV-WuUyInT_7WgUM
  // pageToken: Should be taken from nextPageToken of the previous response
  // items should be taken from the response and saved in the data object

  const spanishData = [
    {
      kind: "youtube#playlistItem",
      etag: "icYUUsS4MVUTiVK4Ul6CiYroMwg",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS41NkI0NEY2RDEwNTU3Q0M2",
      contentDetails: {
        videoId: "vP5kao1ocBM",
        videoPublishedAt: "2016-02-10T07:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "DzFhEbvusRYtNejguHn4R5i321s",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4yODlGNEE0NkRGMEEzMEQy",
      contentDetails: {
        videoId: "kQNdB2rZlCs",
        videoPublishedAt: "2016-02-11T07:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "rZEsaxCWJAV4-XDEIDvnoZxDdbE",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS41MjE1MkI0OTQ2QzJGNzNG",
      contentDetails: {
        videoId: "_HUdYlZsLKQ",
        videoPublishedAt: "2016-02-12T07:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "WnMUNLhF7HD-cSQXboWr2NA0aEU",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4wOTA3OTZBNzVEMTUzOTMy",
      contentDetails: {
        videoId: "PXomtgwwCek",
        videoPublishedAt: "2016-02-16T08:11:03Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "qThZDtql4QHHpmPynxg9SigvBys",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4wMTcyMDhGQUE4NTIzM0Y5",
      contentDetails: {
        videoId: "E6_02hG--xk",
        videoPublishedAt: "2016-02-13T08:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "UlzfAM7cOG1CB_KXGjQbqxgCu3I",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4xMkVGQjNCMUM1N0RFNEUx",
      contentDetails: {
        videoId: "D97T7f8_GnI",
        videoPublishedAt: "2016-02-17T07:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Fm3HdKRy0BYAynIwawgeFaiGzvU",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS41MzJCQjBCNDIyRkJDN0VD",
      contentDetails: {
        videoId: "rybLoMsW0kg",
        videoPublishedAt: "2016-02-18T07:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "qPG3lfebbrBt9VPSSFXvPbIvhPI",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5DQUNERDQ2NkIzRUQxNTY1",
      contentDetails: {
        videoId: "K200Xlaxba8",
        videoPublishedAt: "2016-02-19T07:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "aF2bHCFFV4etuC23pj9bnIuw55w",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS45NDk1REZENzhEMzU5MDQz",
      contentDetails: {
        videoId: "lQlxj_i5vfM",
        videoPublishedAt: "2016-02-20T07:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "h9oR-r3GCLa9EGAzXZsWGnBYXwI",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5GNjNDRDREMDQxOThCMDQ2",
      contentDetails: {
        videoId: "vkEiMoR5Z8w",
        videoPublishedAt: "2016-02-20T07:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "LBiGMwMP6PzPhv9d9sbx_5JbtrQ",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS40NzZCMERDMjVEN0RFRThB",
      contentDetails: {
        videoId: "fXyhwWRl7cU",
        videoPublishedAt: "2016-02-23T07:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "8B5f31pF2fhR-yxf2lyHvitgvwg",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5EMEEwRUY5M0RDRTU3NDJC",
      contentDetails: {
        videoId: "dp50cKNBYmk",
        videoPublishedAt: "2016-02-24T07:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "dnVxNVm2I77dLEJWBOvq02qCmHE",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS45ODRDNTg0QjA4NkFBNkQy",
      contentDetails: {
        videoId: "tdEBGAtK85Q",
        videoPublishedAt: "2016-02-25T07:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "xafB4U5HwHIHJ2i6htc7-BZ4_Bw",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4zMDg5MkQ5MEVDMEM1NTg2",
      contentDetails: {
        videoId: "3quKtbqMXCI",
        videoPublishedAt: "2016-02-27T07:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "1kKbNM-NOcmqyPUzR9MZE-_Sy8s",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS41Mzk2QTAxMTkzNDk4MDhF",
      contentDetails: {
        videoId: "HtOn-9no2ak",
        videoPublishedAt: "2016-02-27T07:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "8S1L9ksKkCcqWZUkg1RJHZp4iiI",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5EQUE1NTFDRjcwMDg0NEMz",
      contentDetails: {
        videoId: "_VWdjFFWv-A",
        videoPublishedAt: "2016-03-05T07:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "cW_QQePIYXPKP2S_VO3PmsUuTXc",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS41QTY1Q0UxMTVCODczNThE",
      contentDetails: {
        videoId: "z2AtHuar0L0",
        videoPublishedAt: "2016-03-01T07:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "sMlrpiZYNfCrFc5MN1GnLmfYxfs",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4yMUQyQTQzMjRDNzMyQTMy",
      contentDetails: {
        videoId: "pcImddP6qlw",
        videoPublishedAt: "2016-03-02T07:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "fewMCwtv8e7y1okRhjK3V5wwY28",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS45RTgxNDRBMzUwRjQ0MDhC",
      contentDetails: {
        videoId: "uZBUf1HTQ40",
        videoPublishedAt: "2016-03-03T07:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "0qUxm2M8WGH7hTAupgyndIsDHDI",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5ENDU4Q0M4RDExNzM1Mjcy",
      contentDetails: {
        videoId: "0ZIBIFwfEB8",
        videoPublishedAt: "2016-03-04T07:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "LhedWTeeLyEVmJapNEzVdPG8Uz8",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4yMDhBMkNBNjRDMjQxQTg1",
      contentDetails: {
        videoId: "YUGuqeIJhU4",
        videoPublishedAt: "2016-03-05T07:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "HdYp1_Kxz34RGXd9avHIqLwrgas",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5GM0Q3M0MzMzY5NTJFNTdE",
      contentDetails: {
        videoId: "sFhuATScm9Q",
        videoPublishedAt: "2016-03-08T07:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "fO58vQhicadfWA2whbKdSeIm3rI",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4zRjM0MkVCRTg0MkYyQTM0",
      contentDetails: {
        videoId: "7Cz4zR0l4pI",
        videoPublishedAt: "2016-03-09T07:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "0jRsTS8FbdQEhbsINYf3LcrFg04",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS45NzUwQkI1M0UxNThBMkU0",
      contentDetails: {
        videoId: "6OrhzsZ7LVs",
        videoPublishedAt: "2016-03-10T07:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "y91aSKHExeis1b92HeqprL9wBAc",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5DNzE1RjZEMUZCMjA0RDBB",
      contentDetails: {
        videoId: "n5w4g7nEIfs",
        videoPublishedAt: "2016-03-13T07:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "WeBOoQRwEdj_RPj_SuLV5irT-Ww",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS43MTI1NDIwOTMwQjIxMzNG",
      contentDetails: {
        videoId: "Gw5m7kvfdLU",
        videoPublishedAt: "2016-03-11T07:00:30Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "s_oHaYVhvUwLpXK58WxeJVRKVIQ",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5DQ0MyQ0Y4Mzg0M0VGOEYw",
      contentDetails: {
        videoId: "Jh0O4U97tAY",
        videoPublishedAt: "2016-03-12T07:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "7DJR3GLk5DoonuPv4Be7fyaFYkk",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4yQUE2Q0JEMTk4NTM3RTZC",
      contentDetails: {
        videoId: "eoJaL9bX1EU",
        videoPublishedAt: "2016-03-15T06:36:37Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "MkkcMQS4LRc3Vm6V7RXZg6wvd1I",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5DMkU4NTY1QUFGQTYwMDE3",
      contentDetails: {
        videoId: "aCmR6kvMVkI",
        videoPublishedAt: "2016-03-16T06:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Y9Gch4igk9480ON6zxvBBWG6w-Q",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS44Mjc5REFBRUE2MTdFRDU0",
      contentDetails: {
        videoId: "jrQAS236uZw",
        videoPublishedAt: "2016-03-17T06:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "t2_6Ph_zGb79CysvJyJe2XEn05E",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS43NDhFRTgwOTRERTU4Rjg3",
      contentDetails: {
        videoId: "4fjmz_-6nag",
        videoPublishedAt: "2016-03-18T06:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "XHXVjXbVi2P4vZzXI4zCZWg7rhg",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS41QUZGQTY5OTE4QTREQUU4",
      contentDetails: {
        videoId: "G_Qzwpm74l8",
        videoPublishedAt: "2016-03-19T06:14:34Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "93xTGV7cr5_IPGpo2JcxvopLa9Q",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4zRDBDOEZDOUM0MDY5NEEz",
      contentDetails: {
        videoId: "9v_ZGMZ9dMI",
        videoPublishedAt: "2016-03-19T06:18:47Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "VrxS8i8_ft4dHnMoYcMN7FhFZNg",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5CMEQ2Mjk5NTc3NDZFRUNB",
      contentDetails: {
        videoId: "8CsuGicBo8Q",
        videoPublishedAt: "2016-03-22T06:34:29Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "w8W8CcNs_rN9suvHHryjir7ZQbA",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS42MTI4Njc2QjM1RjU1MjlG",
      contentDetails: {
        videoId: "4iVA8JRrtAA",
        videoPublishedAt: "2016-03-23T06:12:14Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "fsSoc2Ma2n1wCEx9csVho8H6zRw",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS45RjNFMDhGQ0Q2RkFCQTc1",
      contentDetails: {
        videoId: "SYaT2n3Fw8c",
        videoPublishedAt: "2016-03-24T06:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "g8_G2azKmpakCCQ51LSn0qyZpbI",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS40QTA3NTU2RkM1QzlCMzYx",
      contentDetails: {
        videoId: "RAR_HeRjxhI",
        videoPublishedAt: "2016-03-25T21:15:53Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "YzEnEFAd-za4VjajLUQX7Q80rCw",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5BRjJDODk5REM0NjkzMUIy",
      contentDetails: {
        videoId: "jUzM_mvjhLc",
        videoPublishedAt: "2016-03-27T06:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "yw5hitgiT3Hdu4xRqpM0vT_IDiw",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4xOTEzQzhBQzU3MDNDNjcz",
      contentDetails: {
        videoId: "RwszxHrs9FY",
        videoPublishedAt: "2016-03-29T07:10:42Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "x_gno7b5TKkJAsXc-IRiG3178sY",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5GNDg1Njc1QzZERjlFRjE5",
      contentDetails: {
        videoId: "ZCF6Ni1Itd4",
        videoPublishedAt: "2016-03-30T06:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "F_pEsUKIv2Q7bQsdUPiGcbRY3uE",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4zQzFBN0RGNzNFREFCMjBE",
      contentDetails: {
        videoId: "Xqk36v--W_o",
        videoPublishedAt: "2016-03-31T06:10:48Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Khw97M6FAmNDztJ31V3_nPoRyZw",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS45NkVENTkxRDdCQUFBMDY4",
      contentDetails: {
        videoId: "36rrU7T3yyc",
        videoPublishedAt: "2016-04-01T18:55:07Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "9nqHBnTMS3NI1N0Xsi_uDfvI1dE",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5DNkMwRUI2MkI4QkI4NDFG",
      contentDetails: {
        videoId: "fNTm4q46WjA",
        videoPublishedAt: "2016-04-02T06:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "1ZVzeU5tEtpUcqWv7j5qkF4HkgQ",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5DRUQwODMxQzUyRTlGRkY3",
      contentDetails: {
        videoId: "TzIra6p5MtE",
        videoPublishedAt: "2016-04-03T06:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Xtb9LAuV5QO7-2IQi3ARFLZZzqo",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS41MzY4MzcwOUFFRUU3QzEx",
      contentDetails: {
        videoId: "lIoUn7FG4Ww",
        videoPublishedAt: "2016-04-05T07:43:04Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "zOkrrpmjrZ8vUmvShWNKRtKIsQU",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4yQjZFRkExQjFGODk3RUFD",
      contentDetails: {
        videoId: "bx9zcyBfHK0",
        videoPublishedAt: "2016-04-06T06:39:35Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "5s_K-if9uSHmw9FWVR2QLu5daQU",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4yQUJFNUVCMzVDNjcxRTlF",
      contentDetails: {
        videoId: "a7Ay7MiauZU",
        videoPublishedAt: "2016-04-07T07:41:42Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "6d8WDlWEwzBrEzaa7PGffmDsADQ",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS40QzRDOEU0QUYwNUIxN0M1",
      contentDetails: {
        videoId: "jMGzW1wXoP0",
        videoPublishedAt: "2016-04-08T06:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "gXsf7ioolDqeuVYobbrul27SUEE",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS41RTNBREYwMkI5QzU3RkY2",
      contentDetails: {
        videoId: "b_ZNI3SQpyQ",
        videoPublishedAt: "2016-04-10T06:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "05mN7KLhbiySRg4y2Vp_RLr8Le0",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5ENjI1QUI0MDI5NEQzODFE",
      contentDetails: {
        videoId: "mZslfU7Xvrc",
        videoPublishedAt: "2016-04-09T07:03:53Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "09k1ZepD2a-rr51M8iSrtuPDZGE",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS44QzVGQUU2QjE2NDgxM0M4",
      contentDetails: {
        videoId: "7hd8jn6KcNE",
        videoPublishedAt: "2016-04-12T06:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "aCxDo6dlGhfi28Ggmug2vCoK2Us",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4xMzgwMzBERjQ4NjEzNUE5",
      contentDetails: {
        videoId: "uz6ZY2HW2Rs",
        videoPublishedAt: "2016-04-13T06:19:18Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "AaTu2i2GJVaptAbxSAtxL83RveA",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4zMEQ1MEIyRTFGNzhDQzFB",
      contentDetails: {
        videoId: "07e_4TZRNzA",
        videoPublishedAt: "2016-04-14T06:18:55Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "24iHvU41D1viJGS8jgJaMpPM7KM",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS42Qzk5MkEzQjVFQjYwRDA4",
      contentDetails: {
        videoId: "sst3L4U1HgA",
        videoPublishedAt: "2016-04-15T06:15:13Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "5WShy5bpqYbvvZJ2kBipuwjkMTQ",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS41NTZEOThBNThFOUVGQkVB",
      contentDetails: {
        videoId: "B2byeT2LJLk",
        videoPublishedAt: "2016-04-16T06:29:34Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "0nyZ0k9WFISORLIuSsa0jONCiCY",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS43NERCMDIzQzFBMERCMEE3",
      contentDetails: {
        videoId: "BUn7ue8FTp4",
        videoPublishedAt: "2016-04-19T06:26:25Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "L3YiMct4Tvm08R50vPvC9GA-ZMo",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5GNjAwN0Y0QTFGOTVDMEMy",
      contentDetails: {
        videoId: "lmml1A-zpX0",
        videoPublishedAt: "2016-04-19T18:40:43Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "K7GEYi7OgyaK71RKm8lH61xWBHI",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5CQkEwRDA0MDkwNUM2MDY1",
      contentDetails: {
        videoId: "EWfG5Eva7GA",
        videoPublishedAt: "2016-04-21T06:50:26Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "TBtxBYkQZmhi3qt0M4RkpDR22OY",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4wNEU1MTI4NkZEMzVBN0JF",
      contentDetails: {
        videoId: "DMZLbmQyN8M",
        videoPublishedAt: "2016-04-22T06:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "fTcGt67M_p7zvZUCgoJUA0hjaBg",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4wMTYxQzVBRDI1NEVDQUZE",
      contentDetails: {
        videoId: "xq6PhUNAMvE",
        videoPublishedAt: "2016-04-23T06:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "0GVVhMaW1dr68nR12Hsx0o2Feq4",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4zMUEyMkQwOTk0NTg4MDgw",
      contentDetails: {
        videoId: "QHQss9WyES4",
        videoPublishedAt: "2016-04-26T20:21:08Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "RUu7CggAcnSIzTb7bEq-qPMqvqs",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS42QzdBMzlBQzQzRjQ0QkQy",
      contentDetails: {
        videoId: "cLjH16NVPNA",
        videoPublishedAt: "2016-04-28T06:07:27Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "uGpOMUI8NBQQ4andGgUoEgYVQWI",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5CNTZFOTNGQzZEODg1RUQx",
      contentDetails: {
        videoId: "Ud5aFUfXb28",
        videoPublishedAt: "2016-05-03T08:15:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "12XkL2-SKvDlJ4gd_-7yJXiI2YU",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS41OURENDc2NEM1MDI5Mjky",
      contentDetails: {
        videoId: "su4khCSNyjk",
        videoPublishedAt: "2016-04-29T06:21:50Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "FoJTj3HXma9PoY5PAbGo4zChlv8",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4wRjhFM0MxMTU1MEUzQ0VB",
      contentDetails: {
        videoId: "fMXc4g8zu5M",
        videoPublishedAt: "2016-05-03T06:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "UfloyVUVnnCwrsOQqwLhXKdCrEU",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5CNTcxMDQ0NThBNzMxODYz",
      contentDetails: {
        videoId: "pADNqwpzC6A",
        videoPublishedAt: "2016-05-04T04:17:50Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "VuJ2RE35KjuUxBWdZZpzvb-DKgA",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5ERkUyQTM0MzEwQjZCMTY5",
      contentDetails: {
        videoId: "iLUJt6jcWmY",
        videoPublishedAt: "2016-05-05T00:54:45Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Eb2H7lzS4GADvPC68kuRA7R-YG4",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4xM0YyM0RDNDE4REQ1NDA0",
      contentDetails: {
        videoId: "5DLhtGMm4D8",
        videoPublishedAt: "2016-05-06T06:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "q8o0EAlZt5nCMvYHzpa_7NY477s",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS42MjYzMTMyQjA0QURCN0JF",
      contentDetails: {
        videoId: "87N8Myfr_jU",
        videoPublishedAt: "2016-05-07T08:06:19Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "XWR2_Yo5_5XC3OklrKPrtZJ702E",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS40MDNEMzA0QTBFRThFMzBE",
      contentDetails: {
        videoId: "vh20WMZkIJI",
        videoPublishedAt: "2016-05-10T06:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "TR8MENFB0pM6bDPpV-VMyULu1T0",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS42RTNCOEMxREI3Q0VDMjU2",
      contentDetails: {
        videoId: "GJnVmtjSsoY",
        videoPublishedAt: "2016-05-10T20:11:39Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "xgBjOss7Hl6q98Gw3u9aGVnIyAw",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS43QzNCNkZENzIyMDY2MjZB",
      contentDetails: {
        videoId: "tWfBuGSRAg0",
        videoPublishedAt: "2016-05-11T07:45:34Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "StBH969QQTe4VGMM-Imn7ke6yyg",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5EQkE3RTJCQTJEQkFBQTcz",
      contentDetails: {
        videoId: "9BcYEStBldI",
        videoPublishedAt: "2016-05-12T06:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "ANgqGp0KsBVP7h-7bRnE8a6POC4",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4yQzk4QTA5QjkzMTFFOEI1",
      contentDetails: {
        videoId: "QnYnqM6fQ2M",
        videoPublishedAt: "2016-05-13T07:42:11Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "hLsk0aUKZyeeApvQ07Wvl6SuZZ4",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS45NDlDQUFFOThDMTAxQjUw",
      contentDetails: {
        videoId: "Zoz0R56gssw",
        videoPublishedAt: "2016-05-14T06:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "5nHBRrNcJfC-1vSB5CDI2v0eNrE",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4xN0Y2QjVBOEI2MzQ5OUM5",
      contentDetails: {
        videoId: "g6a_YuUveJs",
        videoPublishedAt: "2016-05-17T06:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "drBlwj-JJMf5nWiJoFuuDpLI8YY",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5FQUY2Qzk4RUFDN0ZFRkZF",
      contentDetails: {
        videoId: "K6dMHDYy9Uc",
        videoPublishedAt: "2016-05-18T07:44:34Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "D0NRsW7Om2A7dmTRYP5bqfF6P9c",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5CMEVBRUJERkUyNTBENTkz",
      contentDetails: {
        videoId: "fCa5eh1BlEk",
        videoPublishedAt: "2016-05-19T06:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "4UnD7_15tduFwMqUqQ4tzjZcMB0",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4xNjIyNEE0MDEyRDlCMjBE",
      contentDetails: {
        videoId: "nIas_8wp52s",
        videoPublishedAt: "2016-05-20T06:00:06Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "HYIoJYZi4bqfUBKzgDHxWA0Mc-o",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS44QTY2MEEzNzBFQUJCMUQ2",
      contentDetails: {
        videoId: "6YNM0ReH4k8",
        videoPublishedAt: "2016-05-21T06:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "tsTwNgQxVtLjqeSda76V5OMyg6s",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4zQTkzRjgxRTY0OEU0MkM3",
      contentDetails: {
        videoId: "ggSVjyE4DmY",
        videoPublishedAt: "2016-05-22T06:24:46Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "nNQnyP80VKodHsTHHZ01u_ckGGI",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4xNTZBNUQxMDZBQzFGMjkw",
      contentDetails: {
        videoId: "qFVQXRtY6Sc",
        videoPublishedAt: "2016-05-24T06:00:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "JRYINHlJbf4Dx1wUmUUHlqsFRBU",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4wMDFGNzBEOTU4Q0Y1Q0RG",
      contentDetails: {
        videoId: "TlnlErnD7Mw",
        videoPublishedAt: "2016-05-25T07:18:25Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Mive0pKxGg7Yx8N_I7hyYlkszQk",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS44QTA1QTQyRTc3M0VGQzYx",
      contentDetails: {
        videoId: "BONLowrcuys",
        videoPublishedAt: "2016-05-26T06:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "sdks1kTXjmnr522xvcNiEWSlZWk",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS44MkM2RjVEQkQ5N0I2MjVE",
      contentDetails: {
        videoId: "5Dfk-lx3jiQ",
        videoPublishedAt: "2016-05-27T07:46:07Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "HcbJg6_LugezXKbEcLKTuknTqXg",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS40NzE2MTY1QTM3RUI3QkU3",
      contentDetails: {
        videoId: "TfwOJk6XWxw",
        videoPublishedAt: "2016-05-28T10:00:02Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "GAlXjreZe8kQjbbPQR8ZC-GMz-o",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5EMzJDRTUwQjBEOUVFQzAw",
      contentDetails: {
        videoId: "L_1-Q70U3VM",
        videoPublishedAt: "2016-05-28T06:00:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "aw0cHXnH1b3inApT0X4cgwt_gFU",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5CMUM0NzY5NzdEQzlGRjAx",
      contentDetails: {
        videoId: "MDU0U6N7ArE",
        videoPublishedAt: "2016-05-31T05:04:21Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "VtGoLysQlTBvsEZqYU6rrj2OqAU",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5GMDBDNkJGMzYzREUyMTYw",
      contentDetails: {
        videoId: "gavXDo-p-30",
        videoPublishedAt: "2016-06-02T03:20:11Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "uPL0W_CePMU76WmzaPrcM4vfosg",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4wQUE0QzM4MkJGQ0YwQjUx",
      contentDetails: {
        videoId: "x1ikm9mk2cU",
        videoPublishedAt: "2016-06-03T00:48:10Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "lCbMNdXo0GjpeXGmMxJ1gJDf0Dw",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5DQjg2RDQyMEVGQkZFOEVF",
      contentDetails: {
        videoId: "UPh7p-MALQM",
        videoPublishedAt: "2016-06-04T06:08:50Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "QMP9IX7AsY8i144R0PIEZPjrYFg",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5ERENFNTk4Q0Q2MTZDMTA5",
      contentDetails: {
        videoId: "HQ6N463sqUA",
        videoPublishedAt: "2016-06-07T06:09:19Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Wg6wUdn3-3C-0ppY1waw9s2Ngf8",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS41RDUzRjJFQ0Y0MUI3NzU1",
      contentDetails: {
        videoId: "UXNMx0gJqHo",
        videoPublishedAt: "2016-06-08T06:04:26Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "yUh3e2f0wLAynBFcmKghy24rKaI",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS41ODIyMTgwQzA4NjJCQkZC",
      contentDetails: {
        videoId: "xlUfido1JD8",
        videoPublishedAt: "2016-06-09T06:05:47Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "YP0_Lw1XbJt_-6ScadX3wDki4Wc",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5CNEYyNTVBNDdGMDI1MDNC",
      contentDetails: {
        videoId: "nsQllQdnmIw",
        videoPublishedAt: "2016-06-10T06:01:58Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "iHYoGMkQP2446X0geP2AFj21-ng",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5EMUJFNzRCNDRFQjE5RjM4",
      contentDetails: {
        videoId: "CpFTe_8GqbA",
        videoPublishedAt: "2016-06-10T21:26:00Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "RYnpZuSnwMz-tpEN9EuKC8kSQHI",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS44QjNCNkRENjNFQTBEMUND",
      contentDetails: {
        videoId: "s2UTvCTXf2g",
        videoPublishedAt: "2016-06-14T04:17:51Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "xW9WrIV4FkPY1hjfaPuuafBog44",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5GNzk2RTlDQTNCQzJCQzJG",
      contentDetails: {
        videoId: "0XKNyzdlM40",
        videoPublishedAt: "2016-06-14T07:12:45Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "pTk3urgI2ggcV7w76AwpMHhQuf8",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS43ODA2MDVCQzY5QzZDMjUw",
      contentDetails: {
        videoId: "sr6y-TrhwpQ",
        videoPublishedAt: "2016-06-15T06:04:06Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "UZ_rY1_0fpXqs0RRzBn4nGGhG8k",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS40OTQ5QjlEMDgzN0FBNUIw",
      contentDetails: {
        videoId: "RFWotokffWo",
        videoPublishedAt: "2016-06-16T06:02:25Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "L9WgQ_e-B-9KeFDurmObK0oVdB8",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5CQzUwREI3MzkxQjdBM0E0",
      contentDetails: {
        videoId: "WXc58_a9En0",
        videoPublishedAt: "2016-06-17T06:04:01Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "kPipy49a550jhcX1Wj6M2mezwVs",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4yOTZGRTNEQ0ZGNUM5RDgw",
      contentDetails: {
        videoId: "qSc8v33u_aI",
        videoPublishedAt: "2016-06-18T06:03:40Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "zrpDo6iFAHrtCsSGpD80RJOlXGc",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4zNDIxRUJGQThFRTg1QzAy",
      contentDetails: {
        videoId: "GDTER3Mwwus",
        videoPublishedAt: "2016-06-21T06:03:59Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "PFSPFdy5hdlt4oSvuUS6WNjxV9w",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS4wN0FBRUVFNEVBMTZBQ0Mx",
      contentDetails: {
        videoId: "O_yZOIT6v3k",
        videoPublishedAt: "2016-06-22T05:52:46Z",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "wQqaPM2kBJuWHOCb6VgWJsoCmPE",
      id: "UEx1UzNxeTkwZmVtLWwzeUlja1YtV3VVeUluVF83V2dVTS5EODgyNjY4MzA3QzY5RTkx",
      contentDetails: {
        videoId: "GE0mnx7cvWw",
        videoPublishedAt: "2016-06-25T06:00:58Z",
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
