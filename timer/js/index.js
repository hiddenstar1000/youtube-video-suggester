$(document).ready(function () {
  setInterval(function () {
    setTime();
  }, 1000);
});

function setTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const part1 =
    (hours === 0 || hours === 12) && minutes === 0
      ? "Es"
      : hours === 1 || hours === 13
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
      : "";
  const part4 =
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

  const message = `¿Qué hora es? ${part1} ${part2} ${part3} ${part4}`;

  $("title").html(`MyTuber: ${message}`);
  $("h1").html(`${message}`);
}
