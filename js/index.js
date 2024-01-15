$(document).ready(function () {
  const nextVideo = getNextVideo();

  $("#videoIframe").attr("src", `https://www.youtube.com/embed/${nextVideo}`);
});

function getNextVideo() {
  const videoList = [
    // https://www.youtube.com/@easylanguages
    // Easy Spanish - Learning Spanish from the Streets
    "L_-KQ90IiF0", // 1
    "WlknUGwKHtw", // 2
  ];
  const index = Math.floor(Math.random() * videoList.length);

  return videoList[index];
}
