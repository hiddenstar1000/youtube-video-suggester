$(document).ready(function () {
  const date = new Date();

  setInterval(function () {
    setTime(date);
  }, 1000);

  setInterval(function () {
    readTime(date);
  }, 1000);

  $("body").click(function () {
    setTime(false);
  });
});

function setTime(date, isHiddenPart5 = true) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const part1 =
    (hours === 0 || hours === 12) && minutes === 0
      ? "Es"
      : hours === 1 || hours === 13
      ? "Es la"
      : "Son las";
  const part1m =
    minutes !== 40 && minutes !== 45 && minutes !== 50 && minutes !== 55
      ? ""
      : hours === 0 || hours === 12
      ? "Es la"
      : "Son las";
  const part2 =
    hours === 0 && minutes === 0
      ? "medianoche"
      : hours === 12 && minutes === 0
      ? "mediodía"
      : hours === 0 || hours === 12
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
    hours === 11 || hours === 23
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
    (hours === 0 || hours === 12) && minutes === 0
      ? ""
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
    hours === 0 || hours === 1 || hours === 2 || hours === 3 || hours === 4
      ? "de la madrugada"
      : hours === 5 ||
        hours === 6 ||
        hours === 7 ||
        hours === 8 ||
        hours === 9 ||
        hours === 10
      ? "de la mañana"
      : hours === 11 ||
        hours === 12 ||
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
        hours === 22 ||
        hours === 23
      ? "de la noche"
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
  $("h2").html(`${message}`);
}

function readTime() {
  const minutes = date.getMinutes();
  if (minutes % 5 !== 0) return;

  const message = $("h2").html();

  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance(message.split("/")[0]);

  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[2]; // Choose a specific voice
  utterance.lang = "es-ES";

  // Speak the text
  speechSynthesis.speak(utterance);
}
