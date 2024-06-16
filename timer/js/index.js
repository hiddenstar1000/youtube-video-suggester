let currentSetInterval = null;

$(document).ready(function () {
  init();

  $("#timerIntervalRange").on("change", function () {
    timerIntervalRange();
  });

  $("#activateButton").on("click", function () {
    activate();
  });

  $("#deactivateButton").on("click", function () {
    deactivate();
  });
});

function setTime(date, isHiddenPart5) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const part1 = hours === 1 || hours === 13 ? "Es la" : "Son las";
  const part1m =
    (hours === 0 || hours === 12) && minutes === 0
      ? "Es"
      : minutes !== 40 && minutes !== 45 && minutes !== 50 && minutes !== 55
      ? ""
      : hours === 0 || hours === 12
      ? "Es la"
      : "Son las";
  const part2 =
    hours === 0 || hours === 12
      ? "doce"
      : hours === 1 || hours === 13
      ? "una"
      : hours === 2 || hours === 14
      ? "dos"
      : hours === 3 || hours === 15
      ? "tres"
      : hours === 4 || hours === 16
      ? "cuatro"
      : hours === 5 || hours === 17
      ? "cinco"
      : hours === 6 || hours === 18
      ? "seis"
      : hours === 7 || hours === 19
      ? "siete"
      : hours === 8 || hours === 20
      ? "ocho"
      : hours === 9 || hours === 21
      ? "nueve"
      : hours === 10 || hours === 22
      ? "diez"
      : hours === 11 || hours === 23
      ? "once"
      : "";
  const part2m =
    hours === 0 && minutes === 0
      ? "medianoche"
      : hours === 12 && minutes === 0
      ? "mediodía"
      : hours === 11 || hours === 23
      ? "doce"
      : hours === 0 || hours === 12
      ? "una"
      : hours === 1 || hours === 13
      ? "dos"
      : hours === 2 || hours === 14
      ? "tres"
      : hours === 3 || hours === 15
      ? "cuatro"
      : hours === 4 || hours === 16
      ? "cinco"
      : hours === 5 || hours === 17
      ? "seis"
      : hours === 6 || hours === 18
      ? "siete"
      : hours === 7 || hours === 19
      ? "ocho"
      : hours === 8 || hours === 20
      ? "nueve"
      : hours === 9 || hours === 21
      ? "diez"
      : hours === 10 || hours === 22
      ? "once"
      : "";
  const part3 =
    minutes === 0
      ? ""
      : minutes === 1
      ? "y uno"
      : minutes === 2
      ? "y dos"
      : minutes === 3
      ? "y tres"
      : minutes === 4
      ? "y cuatro"
      : minutes === 5
      ? "y cinco"
      : minutes === 6
      ? "y seis"
      : minutes === 7
      ? "y siete"
      : minutes === 8
      ? "y ocho"
      : minutes === 9
      ? "y nueve"
      : minutes === 10
      ? "y diez"
      : minutes === 11
      ? "y once"
      : minutes === 12
      ? "y doce"
      : minutes === 13
      ? "y trece"
      : minutes === 14
      ? "y catorce"
      : minutes === 15
      ? "y quince"
      : minutes === 16
      ? "y dieciséis"
      : minutes === 17
      ? "y diecisiete"
      : minutes === 18
      ? "y dieciocho"
      : minutes === 19
      ? "y diecinueve"
      : minutes === 20
      ? "y veinte"
      : minutes === 21
      ? "y veintiuno"
      : minutes === 22
      ? "y veintidós"
      : minutes === 23
      ? "y veintitrés"
      : minutes === 24
      ? "y veinticuatro"
      : minutes === 25
      ? "y veinticinco"
      : minutes === 26
      ? "y veintiséis"
      : minutes === 27
      ? "y veintisiete"
      : minutes === 28
      ? "y veintiocho"
      : minutes === 29
      ? "y veintinueve"
      : minutes === 30
      ? "y treinta"
      : minutes === 31
      ? "y treinta y uno"
      : minutes === 32
      ? "y treinta y dos"
      : minutes === 33
      ? "y treinta y tres"
      : minutes === 34
      ? "y treinta y cuatro"
      : minutes === 35
      ? "y treinta y cinco"
      : minutes === 36
      ? "y treinta y seis"
      : minutes === 37
      ? "y treinta y siete"
      : minutes === 38
      ? "y treinta y ocho"
      : minutes === 39
      ? "y treinta y nueve"
      : minutes === 40
      ? "y cuarenta"
      : minutes === 41
      ? "y cuarenta y uno"
      : minutes === 42
      ? "y cuarenta y dos"
      : minutes === 43
      ? "y cuarenta y tres"
      : minutes === 44
      ? "y cuarenta y cuatro"
      : minutes === 45
      ? "y cuarenta y cinco"
      : minutes === 46
      ? "y cuarenta y seis"
      : minutes === 47
      ? "y cuarenta y siete"
      : minutes === 48
      ? "y cuarenta y ocho"
      : minutes === 49
      ? "y cuarenta y nueve"
      : minutes === 50
      ? "y cincuenta"
      : minutes === 51
      ? "y cincuenta y uno"
      : minutes === 52
      ? "y cincuenta y dos"
      : minutes === 53
      ? "y cincuenta y tres"
      : minutes === 54
      ? "y cincuenta y cuatro"
      : minutes === 55
      ? "y ciencuenta y cinco"
      : minutes === 56
      ? "y cincuenta y seis"
      : minutes === 57
      ? "y ciencuenta y siete"
      : minutes === 58
      ? "y cincuenta y ocho"
      : minutes === 59
      ? "y cincuenta y nueve"
      : "";
  const part4 = minutes === 15 ? "y cuarto" : minutes === 30 ? "y media" : "";
  const part4m =
    minutes === 40
      ? "menos veinte"
      : minutes === 45
      ? "menos cuarto"
      : minutes === 50
      ? "menos diez"
      : minutes === 55
      ? "menos cinco"
      : "";
  const part5 =
    hours === 0 && minutes === 0
      ? "de la madrugada"
      : hours === 12 && minutes === 0
      ? "del mediodía"
      : hours === 0 ||
        hours === 1 ||
        hours === 2 ||
        hours === 3 ||
        hours === 4 ||
        hours === 5
      ? "de la madrugada"
      : hours === 6 ||
        hours === 7 ||
        hours === 8 ||
        hours === 9 ||
        hours === 10 ||
        hours === 11
      ? "de la mañana"
      : hours === 12 ||
        hours === 13 ||
        hours === 14 ||
        hours === 15 ||
        hours === 16 ||
        hours === 17 ||
        hours === 18
      ? "de la tarde"
      : hours === 19 ||
        hours === 20 ||
        hours === 21 ||
        hours === 22 ||
        hours === 23
      ? "de la noche"
      : "";
  const part5m =
    (hours === 0 || hours === 12) && minutes === 0
      ? ""
      : hours === 0 || hours === 1 || hours === 2 || hours === 3 || hours === 4
      ? "de la madrugada"
      : hours === 5 ||
        hours === 6 ||
        hours === 7 ||
        hours === 8 ||
        hours === 9 ||
        hours === 10
      ? "de la mañana"
      : hours === 11
      ? "del mediodía"
      : hours === 12 ||
        hours === 13 ||
        hours === 14 ||
        hours === 15 ||
        hours === 16 ||
        hours === 17
      ? "de la tarde"
      : hours === 18 ||
        hours === 19 ||
        hours === 20 ||
        hours === 21 ||
        hours === 22
      ? "de la noche"
      : hours === 23
      ? "de la madrugada"
      : "";

  let message = isHiddenPart5
    ? `${part1} ${part2} ${part3}`
    : `${part1} ${part2} ${part3} ${part5}`;
  message =
    part4 !== ""
      ? isHiddenPart5
        ? `${message} / ${part1} ${part2} ${part4}`
        : `${message} / ${part1} ${part2} ${part4} ${part5}`
      : message;
  message =
    part1m !== ""
      ? isHiddenPart5
        ? `${message} / ${part1m} ${part2m} ${part4m}`
        : `${message} / ${part1m} ${part2m} ${part4m} ${part5m}`
      : message;

  $("title").html(`MyTuber: ¿Qué hora es? ${message}`);
  $("#timeA").html(`${message}`);
}

function readTimeOnTime(date, readTimeInterval) {
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  if (
    readTimeInterval === 0 ||
    seconds !== 0 ||
    minutes % readTimeInterval !== 0
  )
    return;

  readTime();
}

function readText(message) {
  const trimmedMessage = message.trim();
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance(trimmedMessage);

  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices.filter(
    (voice) => voice.name === "Google español"
  )[0]; // Choose a specific voice
  utterance.lang = "es";

  // Speak the text
  speechSynthesis.speak(utterance);
  console.log(`'${trimmedMessage}' is being read`);
}

function init() {
  currentSetInterval = setInterval(function () {
    const date = getDate();
    setDate(date, 0);
    readDateOnTime(date, 0);
    setTime(date, true);
    readTimeOnTime(date, 0);
  }, 1000);

  const timerIntervalRangeLabelMessage = "Decir la hora está deshabilitado";
  $("#timerIntervalRange").val(0);
  $("#timerIntervalRangeLabel").html(timerIntervalRangeLabelMessage);
}

function timerIntervalRange() {
  clearInterval(currentSetInterval);

  const timerSettings = {
    readTimeInterval: parseInt($("#timerIntervalRange").val()),
    isHiddenPart5: true,
  };

  currentSetInterval = setInterval(function () {
    const date = getDate();
    setDate(date, timerSettings.readTimeInterval);
    readDateOnTime(date, timerSettings.readTimeInterval);
    setTime(date, timerSettings.isHiddenPart5);
    readTimeOnTime(date, timerSettings.readTimeInterval);
  }, 1000);

  const timerIntervalRangeLabelMessage =
    timerSettings.readTimeInterval === 0
      ? "No me digas la hora"
      : timerSettings.readTimeInterval === 1
      ? "Dime la hora una vez cada minuto"
      : `Dime la hora una vez cada ${timerSettings.readTimeInterval} minutos`;

  $("#timerIntervalRangeLabel").html(timerIntervalRangeLabelMessage);

  localStorage.setItem("timerSettings", JSON.stringify(timerSettings));
}

function setDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const dateValue = date.getDate();
  const day = date.getDay();
  const monthName =
    month === 0
      ? "enero"
      : month === 1
      ? "febrero"
      : month === 2
      ? "marzo"
      : month === 3
      ? "abril"
      : month === 4
      ? "mayo"
      : month === 5
      ? "junio"
      : month === 6
      ? "julio"
      : month === 7
      ? "agosto"
      : month === 8
      ? "septiembre"
      : month === 9
      ? "octubre"
      : month === 10
      ? "noviembre"
      : month === 11
      ? "diciembre"
      : "";
  const dayName =
    day === 0
      ? "domingo"
      : day === 1
      ? "lunes"
      : day === 2
      ? "martes"
      : day === 3
      ? "miércoles"
      : day === 4
      ? "jueves"
      : day === 5
      ? "viernes"
      : day === 6
      ? "sábado"
      : "";
  $("#dateA").html(
    `Hoy es ${dayName}, el ${dateValue} de ${monthName} de ${year}`
  );
}

function readDateOnTime(date, readTimeInterval) {
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  if (readTimeInterval === 0 || seconds !== 0 || minutes !== 0) return;

  readDate();
}

function readDate() {
  const message = $("#dateA").html();
  readText(message);
}

function readTime() {
  const messageContent = $("#timeA").html();
  const messages = messageContent.split("/");

  for (const message of messages) {
    readText(message);
  }
}

function activate() {
  $("#activateButton").prop("disabled", true);
  clearInterval(currentSetInterval);

  const timerSettings = JSON.parse(localStorage.getItem("timerSettings")) || {
    readTimeInterval: 5,
    isHiddenPart5: true,
  };

  currentSetInterval = setInterval(function () {
    const date = getDate();
    setDate(date, timerSettings.readTimeInterval);
    readDateOnTime(date, timerSettings.readTimeInterval);
    setTime(date, timerSettings.isHiddenPart5);
    readTimeOnTime(date, timerSettings.readTimeInterval);
  }, 1000);

  if (timerSettings.readTimeInterval === 0) timerSettings.readTimeInterval = 5;

  const timerIntervalRangeLabelMessage =
    timerSettings.readTimeInterval === 1
      ? "Dime la hora una vez cada minuto"
      : `Dime la hora una vez cada ${timerSettings.readTimeInterval} minutos`;

  $("#timerIntervalRange").val(timerSettings.readTimeInterval);
  $("#timerIntervalRangeLabel").html(timerIntervalRangeLabelMessage);

  readDate();
  readTime();

  $("#activateButton").addClass("d-none");
  $("#deactivateButton").prop("disabled", false);
  $("#deactivateButton").removeClass("d-none");
}

function getDate() {
  const date = new Date();
  const testing = {
    enable: true, // Set to true to test the timer
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (testing.enable) {
    date.setHours(testing.hours);
    date.setMinutes(testing.minutes);
    date.setSeconds(testing.seconds);
  }

  return date;
}

function deactivate() {
  $("#deactivateButton").prop("disabled", true);
  clearInterval(currentSetInterval);

  const timerIntervalRangeLabelMessage = "Decir la hora está deshabilitado";
  $("#timerIntervalRange").val(0);
  $("#timerIntervalRangeLabel").html(timerIntervalRangeLabelMessage);

  $("#deactivateButton").addClass("d-none");
  $("#activateButton").prop("disabled", false);
  $("#activateButton").removeClass("d-none");
}
