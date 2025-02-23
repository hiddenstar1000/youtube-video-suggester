$(document).ready(function () {
  init();
});

function init() {
  const spanishSpeakingCountries = [
    {
      name: "Mexico",
      shortCode: "mx",
      capital: "Mexico City",
      currency: "Mexican Peso (MXN)",
      knownFor: "Tacos, mariachi, and ancient pyramids",
    },
    {
      name: "Colombia",
      shortCode: "co",
      capital: "Bogotá",
      currency: "Colombian Peso (COP)",
      knownFor: "Coffee, biodiversity, and Shakira",
    },
    {
      name: "Spain",
      shortCode: "es",
      capital: "Madrid",
      currency: "Euro (EUR)",
      knownFor: "Flamenco, paella, and rich history",
    },
    {
      name: "Argentina",
      shortCode: "ar",
      capital: "Buenos Aires",
      currency: "Argentine Peso (ARS)",
      knownFor: "Tango, beef, and soccer legends (Messi & Maradona)",
    },
    {
      name: "Peru",
      shortCode: "pe",
      capital: "Lima",
      currency: "Peruvian Sol (PEN)",
      knownFor: "Machu Picchu, llamas, and ceviche",
    },
    {
      name: "Venezuela",
      shortCode: "ve",
      capital: "Caracas",
      currency: "Venezuelan Bolívar (VES) (high inflation)",
      knownFor: "Angel Falls, oil reserves, and arepas",
    },
    {
      name: "Chile",
      shortCode: "cl",
      capital: "Santiago",
      currency: "Chilean Peso (CLP)",
      knownFor: "Patagonia, wine, and the Atacama Desert",
    },
    {
      name: "Ecuador",
      shortCode: "ec",
      capital: "Quito",
      currency: "United States Dollar (USD)",
      knownFor: "Galápagos Islands and the Equator monument",
    },
    {
      name: "Guatemala",
      shortCode: "gt",
      capital: "Guatemala City",
      currency: "Guatemalan Quetzal (GTQ)",
      knownFor: "Mayan ruins like Tikal and colorful markets",
    },
    {
      name: "Bolivia",
      shortCode: "bo",
      capital: "Sucre (constitutional), La Paz (administrative)",
      currency: "Boliviano (BOB)",
      knownFor: "Uyuni Salt Flats, Lake Titicaca, and high-altitude cities",
    },
    {
      name: "Cuba",
      shortCode: "cu",
      capital: "Havana",
      currency: "Cuban Peso (CUP), Convertible Peso (previously CUC)",
      knownFor: "Cigars, salsa music, and classic cars",
    },
    {
      name: "Dominican Republic",
      shortCode: "do",
      capital: "Santo Domingo",
      currency: "Dominican Peso (DOP)",
      knownFor: "Merengue, bachata, and stunning beaches",
    },
    {
      name: "Honduras",
      shortCode: "hn",
      capital: "Tegucigalpa",
      currency: "Honduran Lempira (HNL)",
      knownFor: "Coral reefs and Mayan ruins (Copán)",
    },
    {
      name: "Paraguay",
      shortCode: "py",
      capital: "Asunción",
      currency: "Paraguayan Guaraní (PYG)",
      knownFor: "Guarani culture and traditional tereré (cold mate tea)",
    },
    {
      name: "Nicaragua",
      shortCode: "ni",
      capital: "Managua",
      currency: "Nicaraguan Córdoba (NIO)",
      knownFor: "Volcanoes, colonial cities, and Lake Nicaragua",
    },
    {
      name: "El Salvador",
      shortCode: "sv",
      capital: "San Salvador",
      currency: "United States Dollar (USD) and Bitcoin (BTC) (legal tender)",
      knownFor: "Pupusas (stuffed tortillas) and volcanic landscapes",
    },
    {
      name: "Costa Rica",
      shortCode: "cr",
      capital: "San José",
      currency: "Costa Rican Colón (CRC)",
      knownFor: "Eco-tourism, beaches, and rainforests",
    },
    {
      name: "Panama",
      shortCode: "pa",
      capital: "Panama City",
      currency: "Balboa (PAB) & United States Dollar (USD)",
      knownFor: "Panama Canal and biodiversity",
    },
    {
      name: "Uruguay",
      shortCode: "uy",
      capital: "Montevideo",
      currency: "Uruguayan Peso (UYU)",
      knownFor: "High quality of life, beaches, and mate tea",
    },
    {
      name: "Puerto Rico",
      shortCode: "pr",
      territory: "U.S. Territory",
      capital: "San Juan",
      currency: "United States Dollar (USD)",
      knownFor: "Reggaeton, El Yunque rainforest, and beaches",
    },
    {
      name: "Equatorial Guinea",
      shortCode: "gq",
      capital: "Malabo",
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
      `<p id="dx-ssc-info-${country.shortCode}" class="dx-ssc-info d-none"><b>Capital:</b> ${country.capital}<br><b>Currency:</b> ${country.currency}<br><b>Known For:</b> ${country.knownFor}</p>`
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
