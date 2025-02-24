$(document).ready(function () {
  init();
});

function init() {
  const spanishSpeakingCountries = [
    {
      name: "Mexico",
      shortCode: "mx",
      capital: "Mexico City",
      population: "132,500,000",
      currency: "Mexican Peso (MXN)",
      knownFor: "Tacos, mariachi, and ancient pyramids",
    },
    {
      name: "Colombia",
      shortCode: "co",
      capital: "Bogotá",
      population: "52,700,000",
      currency: "Colombian Peso (COP)",
      knownFor: "Coffee, biodiversity, and Shakira",
    },
    {
      name: "Spain",
      shortCode: "es",
      capital: "Madrid",
      population: "48,000,000",
      currency: "Euro (EUR)",
      knownFor: "Flamenco, paella, and rich history",
    },
    {
      name: "Argentina",
      shortCode: "ar",
      capital: "Buenos Aires",
      population: "46,000,000",
      currency: "Argentine Peso (ARS)",
      knownFor: "Tango, beef, and soccer legends (Messi & Maradona)",
    },
    {
      name: "Peru",
      shortCode: "pe",
      capital: "Lima",
      population: "34,352,720",
      currency: "Peruvian Sol (PEN)",
      knownFor: "Machu Picchu, llamas, and ceviche",
    },
    {
      name: "Venezuela",
      shortCode: "ve",
      capital: "Caracas",
      population: "32,605,423",
      currency: "Venezuelan Bolívar (VES) (high inflation)",
      knownFor: "Angel Falls, oil reserves, and arepas",
    },
    {
      name: "Chile",
      shortCode: "cl",
      capital: "Santiago",
      population: "19,629,588",
      currency: "Chilean Peso (CLP)",
      knownFor: "Patagonia, wine, and the Atacama Desert",
    },
    {
      name: "Guatemala",
      shortCode: "gt",
      capital: "Guatemala City",
      population: "17,980,803",
      currency: "Guatemalan Quetzal (GTQ)",
      knownFor: "Mayan ruins like Tikal and colorful markets",
    },
    {
      name: "Ecuador",
      shortCode: "ec",
      capital: "Quito",
      population: "17,483,326",
      currency: "United States Dollar (USD)",
      knownFor: "Galápagos Islands and the Equator monument",
    },
    {
      name: "Bolivia",
      shortCode: "bo",
      capital: "Sucre (constitutional), La Paz (administrative)",
      population: "12,186,079",
      currency: "Boliviano (BOB)",
      knownFor: "Uyuni Salt Flats, Lake Titicaca, and high-altitude cities",
    },
    {
      name: "Dominican Republic",
      shortCode: "do",
      capital: "Santo Domingo",
      population: "11,434,005",
      currency: "Dominican Peso (DOP)",
      knownFor: "Merengue, bachata, and stunning beaches",
    },
    {
      name: "Cuba",
      shortCode: "cu",
      capital: "Havana",
      population: "11,089,511",
      currency: "Cuban Peso (CUP), Convertible Peso (previously CUC)",
      knownFor: "Cigars, salsa music, and classic cars",
    },
    {
      name: "Honduras",
      shortCode: "hn",
      capital: "Tegucigalpa",
      population: "9,571,352",
      currency: "Honduran Lempira (HNL)",
      knownFor: "Coral reefs and Mayan ruins (Copán)",
    },
    {
      name: "Puerto Rico",
      shortCode: "pr",
      territory: "U.S. Territory",
      capital: "San Juan",
      population: "9,110,869",
      currency: "United States Dollar (USD)",
      knownFor: "Reggaeton, El Yunque rainforest, and beaches",
    },
    {
      name: "El Salvador",
      shortCode: "sv",
      capital: "San Salvador",
      population: "6,602,370",
      currency: "United States Dollar (USD) and Bitcoin (BTC) (legal tender)",
      knownFor: "Pupusas (stuffed tortillas) and volcanic landscapes",
    },
    {
      name: "Nicaragua",
      shortCode: "ni",
      capital: "Managua",
      population: "6,359,689",
      currency: "Nicaraguan Córdoba (NIO)",
      knownFor: "Volcanoes, colonial cities, and Lake Nicaragua",
    },
    {
      name: "Paraguay",
      shortCode: "py",
      capital: "Asunción",
      population: "6,218,879",
      currency: "Paraguayan Guaraní (PYG)",
      knownFor: "Guarani culture and traditional tereré (cold mate tea)",
    },
    {
      name: "Costa Rica",
      shortCode: "cr",
      capital: "San José",
      population: "5,044,197",
      currency: "Costa Rican Colón (CRC)",
      knownFor: "Eco-tourism, beaches, and rainforests",
    },
    {
      name: "Panama",
      shortCode: "pa",
      capital: "Panama City",
      population: "4,337,768",
      currency: "Balboa (PAB) & United States Dollar (USD)",
      knownFor: "Panama Canal and biodiversity",
    },
    {
      name: "Uruguay",
      shortCode: "uy",
      capital: "Montevideo",
      population: "3,444,263",
      currency: "Uruguayan Peso (UYU)",
      knownFor: "High quality of life, beaches, and mate tea",
    },
    {
      name: "Equatorial Guinea",
      shortCode: "gq",
      capital: "Malabo",
      population: "1,454,789",
      currency: "Central African CFA Franc (XAF)",
      knownFor: "Oil production and Spanish colonial influence",
    },
  ];

  const sscList = $("#ssc-list");
  spanishSpeakingCountries.forEach((country) => {
    const li = $(
      `<li id="dx-ssc-name-${country.shortCode}" class="dx-ssc-name" style="cursor: pointer;"><object data="img/flags/4x3/${country.shortCode}.svg" type="image/svg+xml" style="width: 20px;"></object> <b>${country.name}</b></li>`
    );
    li.append(
      `<p id="dx-ssc-info-${country.shortCode}" class="dx-ssc-info d-none"><b>Capital:</b> ${country.capital}<br><b>Population:</b> ${country.population}<br><b>Currency:</b> ${country.currency}<br><b>Known For:</b> ${country.knownFor}</p>`
    );
    sscList.append(li);
  });

  $(".dx-ssc-name").hover(showDetails);
}

function showDetails() {
  const countryCode = $(this).attr("id").split("-").pop();
  const selector = `#dx-ssc-info-${countryCode}`;
  $(".dx-ssc-info").addClass("d-none");
  $(selector).removeClass("d-none");
}
