$(document).ready(function () {
  const languages = JSON.parse(localStorage.getItem("languagesTs")) || {
    hindi: false,
    spanish: true,
  };

  $("#hindi").prop("checked", languages.hindi);
  $("#spanish").prop("checked", languages.spanish);

  loadNextVideo(languages);

  $(".languages").click(function () {
    const languages = {
      hindi: $("#hindi").is(":checked"),
      spanish: $("#spanish").is(":checked"),
    };

    if ($(this).attr("id") === "hindi") {
      languages.spanish = false;
      $("#spanish").prop("checked", false);
    } else {
      languages.hindi = false;
      $("#hindi").prop("checked", false);
    }

    loadNextVideo(languages);
  });

  $("#hindiCountBadge").click(function () {
    $("#hindi").trigger("click");
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
});

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

function removeVideo(video) {
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
  // playlistId: PLIhvrpwTgKyrMQ9rN91KAzAbvoY5nuV5k
  // pageToken: Should be taken from nextPageToken of the previous response
  // items should be taken from the response and saved in the data object

  const hindiData = [];

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
