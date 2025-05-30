const spanishSpeakingCountries = [
  {
    name: "Mexico",
    shortCode: "mx",
    capital: "Mexico City",
    population: "132,500,000",
    currency: "Mexican Peso (MXN)",
    knownFor: "Tacos, mariachi, and ancient pyramids",
    timeZoneString: "America/Mexico_City",
    nationalAnthem: "Himno Nacional Mexicano",
    nationalAnthemUrl: "https://www.youtube.com/embed/Q8T9g7memUk",
  },
  {
    name: "Colombia",
    shortCode: "co",
    capital: "Bogotá",
    population: "52,700,000",
    currency: "Colombian Peso (COP)",
    knownFor: "Coffee, biodiversity, and Shakira",
    timeZoneString: "America/Bogota",
    nationalAnthem: "Himno Nacional Colombiano",
    nationalAnthemUrl: "https://www.youtube.com/embed/yPSL78YDyZY",
  },
  {
    name: "Spain",
    shortCode: "es",
    capital: "Madrid",
    population: "48,000,000",
    currency: "Euro (EUR)",
    knownFor: "Flamenco, paella, and rich history",
    timeZoneString: "Europe/Madrid",
    nationalAnthem: "Himno Nacional Español",
    nationalAnthemUrl: "https://www.youtube.com/embed/Ue4p3CoNjv0",
  },
  {
    name: "Argentina",
    shortCode: "ar",
    capital: "Buenos Aires",
    population: "46,000,000",
    currency: "Argentine Peso (ARS)",
    knownFor: "Tango, beef, and soccer legends (Messi & Maradona)",
    timeZoneString: "America/Argentina/Buenos_Aires",
    nationalAnthem: "Himno Nacional Argentino",
    nationalAnthemUrl: "https://www.youtube.com/embed/ezpqn_Fwqyk",
  },
  {
    name: "Peru",
    shortCode: "pe",
    capital: "Lima",
    population: "34,352,720",
    currency: "Peruvian Sol (PEN)",
    knownFor: "Machu Picchu, llamas, and ceviche",
    timeZoneString: "America/Lima",
    nationalAnthem: "Himno Nacional Peruano",
    nationalAnthemUrl: "https://www.youtube.com/embed/4NIUhpCaUIU",
  },
  {
    name: "Venezuela",
    shortCode: "ve",
    capital: "Caracas",
    population: "32,605,423",
    currency: "Venezuelan Bolívar (VES) (high inflation)",
    knownFor: "Angel Falls, oil reserves, and arepas",
    timeZoneString: "America/Caracas",
    nationalAnthem: "Himno Nacional Venezolano",
    nationalAnthemUrl: "https://www.youtube.com/embed/W2YtFykr8CM",
  },
  {
    name: "Chile",
    shortCode: "cl",
    capital: "Santiago",
    population: "19,629,588",
    currency: "Chilean Peso (CLP)",
    knownFor: "Patagonia, wine, and the Atacama Desert",
    timeZoneString: "America/Santiago",
    nationalAnthem: "Himno Nacional Chileno",
    nationalAnthemUrl: "https://www.youtube.com/embed/f9IeLVWFOS0",
  },
  {
    name: "Guatemala",
    shortCode: "gt",
    capital: "Guatemala City",
    population: "17,980,803",
    currency: "Guatemalan Quetzal (GTQ)",
    knownFor: "Mayan ruins like Tikal and colorful markets",
    timeZoneString: "America/Guatemala",
    nationalAnthem: "Himno Nacional Guatemalteco",
    nationalAnthemUrl: "https://www.youtube.com/embed/fHKnuWxgI9w",
  },
  {
    name: "Ecuador",
    shortCode: "ec",
    capital: "Quito",
    population: "17,483,326",
    currency: "United States Dollar (USD)",
    knownFor: "Galápagos Islands and the Equator monument",
    timeZoneString: "America/Guayaquil",
    nationalAnthem: "Himno Nacional Ecuatoriano",
    nationalAnthemUrl: "https://www.youtube.com/embed/POE_fHCCzxU",
  },
  {
    name: "Bolivia",
    shortCode: "bo",
    capital: "Sucre (constitutional), La Paz (administrative)",
    population: "12,186,079",
    currency: "Boliviano (BOB)",
    knownFor: "Uyuni Salt Flats, Lake Titicaca, and high-altitude cities",
    timeZoneString: "America/La_Paz",
    nationalAnthem: "Himno Nacional Boliviano",
    nationalAnthemUrl: "https://www.youtube.com/embed/biWph53e7N4",
  },
  {
    name: "Dominican Republic",
    shortCode: "do",
    capital: "Santo Domingo",
    population: "11,434,005",
    currency: "Dominican Peso (DOP)",
    knownFor: "Merengue, bachata, and stunning beaches",
    timeZoneString: "America/Santo_Domingo",
    nationalAnthem: "Himno Nacional Dominicano",
    nationalAnthemUrl: "https://www.youtube.com/embed/4ULeDsRcWyk",
  },
  {
    name: "Cuba",
    shortCode: "cu",
    capital: "Havana",
    population: "11,089,511",
    currency: "Cuban Peso (CUP), Convertible Peso (previously CUC)",
    knownFor: "Cigars, salsa music, and classic cars",
    timeZoneString: "America/Havana",
    nationalAnthem: "Himno Nacional Cubano",
    nationalAnthemUrl: "https://www.youtube.com/embed/m_iXh_iwrwA",
  },
  {
    name: "Honduras",
    shortCode: "hn",
    capital: "Tegucigalpa",
    population: "9,571,352",
    currency: "Honduran Lempira (HNL)",
    knownFor: "Coral reefs and Mayan ruins (Copán)",
    timeZoneString: "America/Tegucigalpa",
    nationalAnthem: "Himno Nacional Hondureño",
    nationalAnthemUrl: "https://www.youtube.com/embed/tTuucJhx_iA",
  },
  {
    name: "Puerto Rico",
    shortCode: "pr",
    territory: "U.S. Territory",
    capital: "San Juan",
    population: "9,110,869",
    currency: "United States Dollar (USD)",
    knownFor: "Reggaeton, El Yunque rainforest, and beaches",
    timeZoneString: "America/Puerto_Rico",
    nationalAnthem: "Himno Nacional Puertorriqueño",
    nationalAnthemUrl: "https://www.youtube.com/embed/vIEU-qKsqek",
  },
  {
    name: "El Salvador",
    shortCode: "sv",
    capital: "San Salvador",
    population: "6,602,370",
    currency: "United States Dollar (USD) and Bitcoin (BTC) (legal tender)",
    knownFor: "Pupusas (stuffed tortillas) and volcanic landscapes",
    timeZoneString: "America/El_Salvador",
    nationalAnthem: "Himno Nacional Salvadoreño",
    nationalAnthemUrl: "https://www.youtube.com/embed/LqVWPM-S3gc",
  },
  {
    name: "Nicaragua",
    shortCode: "ni",
    capital: "Managua",
    population: "6,359,689",
    currency: "Nicaraguan Córdoba (NIO)",
    knownFor: "Volcanoes, colonial cities, and Lake Nicaragua",
    timeZoneString: "America/Managua",
    nationalAnthem: "Himno Nacional Nicaragüense",
    nationalAnthemUrl: "https://www.youtube.com/embed/J3C4dwc9vRw",
  },
  {
    name: "Paraguay",
    shortCode: "py",
    capital: "Asunción",
    population: "6,218,879",
    currency: "Paraguayan Guaraní (PYG)",
    knownFor: "Guarani culture and traditional tereré (cold mate tea)",
    timeZoneString: "America/Asuncion",
    nationalAnthem: "Himno Nacional Paraguayo",
    nationalAnthemUrl: "https://www.youtube.com/embed/jKiBSoRRbi4",
  },
  {
    name: "Costa Rica",
    shortCode: "cr",
    capital: "San José",
    population: "5,044,197",
    currency: "Costa Rican Colón (CRC)",
    knownFor: "Eco-tourism, beaches, and rainforests",
    timeZoneString: "America/Costa_Rica",
    nationalAnthem: "Himno Nacional Costarricense",
    nationalAnthemUrl: "https://www.youtube.com/embed/tdPULEgeFi0",
  },
  {
    name: "Panama",
    shortCode: "pa",
    capital: "Panama City",
    population: "4,337,768",
    currency: "Balboa (PAB) & United States Dollar (USD)",
    knownFor: "Panama Canal and biodiversity",
    timeZoneString: "America/Panama",
    nationalAnthem: "Himno Nacional Panameño",
    nationalAnthemUrl: "https://www.youtube.com/embed/q98udmYA1u0",
  },
  {
    name: "Uruguay",
    shortCode: "uy",
    capital: "Montevideo",
    population: "3,444,263",
    currency: "Uruguayan Peso (UYU)",
    knownFor: "High quality of life, beaches, and mate tea",
    timeZoneString: "America/Montevideo",
    nationalAnthem: "Himno Nacional Uruguayo",
    nationalAnthemUrl: "https://www.youtube.com/embed/jc6L_0NZlqk",
  },
  {
    name: "Equatorial Guinea",
    shortCode: "gq",
    capital: "Malabo",
    population: "1,454,789",
    currency: "Central African CFA Franc (XAF)",
    knownFor: "Oil production and Spanish colonial influence",
    timeZoneString: "Africa/Malabo",
    nationalAnthem: "Himno Nacional Guiné Equatorial",
    nationalAnthemUrl: "https://www.youtube.com/embed/qLmAbyW3sFY",
  },
];

$(document).ready(function () {
  init();
});

function init() {
  const sscList = $("#ssc-list");
  spanishSpeakingCountries.forEach((country) => {
    const li = $(
      `<li id="dx-ssc-name-${country.shortCode}" class="dx-ssc-name" style="cursor: pointer;"><object data="img/flags/4x3/${country.shortCode}.svg" type="image/svg+xml" style="width: 20px;"></object> <b>${country.name}</b></li>`
    );
    li.append(
      `<p id="dx-ssc-info-${country.shortCode}" class="dx-ssc-info d-none"><b>Capital:</b> ${country.capital}<br><b>Population:</b> ${country.population}<br><b>Currency:</b> ${country.currency}<br><b>Current Time:</b> <span id="dx-ssc-time-${country.shortCode}"></span><br><b>Known For:</b> ${country.knownFor}<br><b>National Anthem:</b> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#nationalAnthemModal">Play</button></p>`
    );
    sscList.append(li);
  });

  $(".dx-ssc-name").hover(showDetails);
  setInterval(updateTime, 1000);
}

function showDetails() {
  const countryCode = $(this).attr("id").split("-").pop();
  const selector = `#dx-ssc-info-${countryCode}`;
  $(".dx-ssc-info").addClass("d-none");
  $(selector).removeClass("d-none");

  const matchingCountries = spanishSpeakingCountries.filter(
    (country) => country.shortCode === countryCode
  );

  if (matchingCountries.length > 0) {
    $("#videoIframe").attr("src", matchingCountries[0].nationalAnthemUrl);
    $("#nationalAnthemModalLabel").html(matchingCountries[0].nationalAnthem);
  }
}

function updateTime() {
  spanishSpeakingCountries.forEach((country) => {
    const currentTime = new Date().toLocaleString("en-US", {
      timeZone: country.timeZoneString,
    });
    $(`#dx-ssc-time-${country.shortCode}`).html(currentTime);
  });

  const currentTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Colombo",
  });
  $(`#dx-ssc-time-lk`).html(currentTime);
}
