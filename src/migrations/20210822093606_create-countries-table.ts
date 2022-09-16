import * as Knex from "knex";
import { createTable, dropTable } from "../helpers/knex";

export async function up(knex: Knex) {
  await createTable(
    knex,
    "countries",
    table => {
      table.text("name").unique().notNullable();
      table.text("nationality").notNullable();
    },
    "text",
  );

  await knex("countries").insert([
    {
      id: "AFG",
      name: "Afeganistão",
      nationality: "Afegão",
    },
    {
      id: "DEU",
      name: "Alemanha",
      nationality: "Alemão",
    },
    {
      id: "USA",
      name: "Estados Unidos",
      nationality: "Americano",
    },
    {
      id: "AND",
      name: "Andorra",
      nationality: "Andorrano",
    },
    {
      id: "AGO",
      name: "Angola",
      nationality: "Angolano",
    },
    {
      id: "ATG",
      name: "Antígua e Barbuda",
      nationality: "Antiguano",
    },
    {
      id: "DZA",
      name: "Argélia",
      nationality: "Argelino",
    },
    {
      id: "ARG",
      name: "Argentina",
      nationality: "Argentino",
    },
    {
      id: "ARM",
      name: "Armênia",
      nationality: "Armênio",
    },
    {
      id: "AUS",
      name: "Austrália",
      nationality: "Australiano",
    },
    {
      id: "AUT",
      name: "Áustria",
      nationality: "Austríaco",
    },
    {
      id: "AZE",
      name: "Azerbaijão",
      nationality: "Azeri",
    },
    {
      id: "BHS",
      name: "Bahamas",
      nationality: "Bahamense",
    },
    {
      id: "BGD",
      name: "Bangladesh",
      nationality: "Bangladês",
    },
    {
      id: "BRB",
      name: "Barbados",
      nationality: "Barbadiano",
    },
    {
      id: "BHR",
      name: "Barém",
      nationality: "Baremita",
    },
    {
      id: "BWA",
      name: "Botsuana",
      nationality: "Bechuano",
    },
    {
      id: "BEL",
      name: "Bélgica",
      nationality: "Belga",
    },
    {
      id: "BLZ",
      name: "Belize",
      nationality: "Belizenho",
    },
    {
      id: "BEN",
      name: "Benin",
      nationality: "Beninense",
    },
    {
      id: "BLR",
      name: "Bielorrússia",
      nationality: "Bielorrusso",
    },
    {
      id: "MMR",
      name: "Myanmar",
      nationality: "Birmanês",
    },
    {
      id: "BOL",
      name: "Bolívia",
      nationality: "Boliviano",
    },
    {
      id: "BRA",
      name: "Brasil",
      nationality: "Brasileiro",
    },
    {
      id: "GBR",
      name: "Reino Unido",
      nationality: "Britânico",
    },
    {
      id: "BRN",
      name: "Brunei",
      nationality: "Bruneano",
    },
    {
      id: "BFA",
      name: "Burkina Faso",
      nationality: "Burquinense",
    },
    {
      id: "BDI",
      name: "Burundi",
      nationality: "Burundês",
    },
    {
      id: "BTN",
      name: "Butão",
      nationality: "Butanense",
    },
    {
      id: "BIH",
      name: "Bósnia e Herzegovina",
      nationality: "Bósnio",
    },
    {
      id: "BGR",
      name: "Bulgária",
      nationality: "Búlgaro",
    },
    {
      id: "CPV",
      name: "Cabo Verde",
      nationality: "Cabo-verdiano",
    },
    {
      id: "CMR",
      name: "Camarões",
      nationality: "Camaronense",
    },
    {
      id: "KHM",
      name: "Camboja",
      nationality: "Cambojano",
    },
    {
      id: "CAN",
      name: "Canadá",
      nationality: "Canadense",
    },
    {
      id: "QAT",
      name: "Catar",
      nationality: "Catarense",
    },
    {
      id: "KAZ",
      name: "Cazaquistão",
      nationality: "Cazaque",
    },
    {
      id: "CAF",
      name: "República Centro-Africana",
      nationality: "Centroafricano",
    },
    {
      id: "TCD",
      name: "Chade",
      nationality: "Chadiano",
    },
    {
      id: "CHL",
      name: "Chile",
      nationality: "Chileno",
    },
    {
      id: "CHN",
      name: "China",
      nationality: "Chinês",
    },
    {
      id: "CYP",
      name: "Chipre",
      nationality: "Cipriota",
    },
    {
      id: "COL",
      name: "Colômbia",
      nationality: "Colombiano",
    },
    {
      id: "COM",
      name: "Comores",
      nationality: "Comoriano",
    },
    {
      id: "COG",
      name: "Congo",
      nationality: "Congolense",
    },
    {
      id: "COK",
      name: "Ilhas Cook",
      nationality: "Cookiano",
    },
    {
      id: "KOR",
      name: "Coréia do Sul",
      nationality: "Coreano",
    },
    {
      id: "CIV",
      name: "Costa do Marfim",
      nationality: "Costa-marfinense",
    },
    {
      id: "CRI",
      name: "Costa Rica",
      nationality: "Costa-riquenho",
    },
    {
      id: "HRV",
      name: "Croácia",
      nationality: "Croata",
    },
    {
      id: "CUB",
      name: "Cuba",
      nationality: "Cubano",
    },
    {
      id: "DNK",
      name: "Dinamarca",
      nationality: "Dinamarquês",
    },
    {
      id: "DJI",
      name: "Djibuti",
      nationality: "Djibutiense",
    },
    {
      id: "DOM",
      name: "República Dominicana",
      nationality: "Dominicano",
    },
    {
      id: "DMA",
      name: "Dominica",
      nationality: "Dominiquense",
    },
    {
      id: "EGY",
      name: "Egito",
      nationality: "Egípcio",
    },
    {
      id: "ECU",
      name: "Equador",
      nationality: "Equatoriano",
    },
    {
      id: "ERI",
      name: "Eritreia",
      nationality: "Eritreu",
    },
    {
      id: "SCO",
      name: "Escócia",
      nationality: "Escocês",
    },
    {
      id: "SVK",
      name: "Eslováquia",
      nationality: "Eslovaco",
    },
    {
      id: "ESP",
      name: "Espanha",
      nationality: "Espanhol",
    },
    {
      id: "EST",
      name: "Estônia",
      nationality: "Estoniano",
    },
    {
      id: "FJI",
      name: "Fiji",
      nationality: "Fijiano",
    },
    {
      id: "PHL",
      name: "Filipinas",
      nationality: "Filipino",
    },
    {
      id: "FIN",
      name: "Finlândia",
      nationality: "Finlandês",
    },
    {
      id: "FRA",
      name: "França",
      nationality: "Francês",
    },
    {
      id: "GAB",
      name: "Gabão",
      nationality: "Gabonense",
    },
    {
      id: "GAL",
      name: "País de Gales",
      nationality: "Galês",
    },
    {
      id: "GMB",
      name: "Gâmbia",
      nationality: "Gambiano",
    },
    {
      id: "GEO",
      name: "Geórgia",
      nationality: "Geórgico",
    },
    {
      id: "GRD",
      name: "Granada",
      nationality: "Granadino",
    },
    {
      id: "GRC",
      name: "Grécia",
      nationality: "Grego",
    },
    {
      id: "GTM",
      name: "Guatemala",
      nationality: "Guatemalteco",
    },
    {
      id: "GUY",
      name: "Guiana",
      nationality: "Guianense",
    },
    {
      id: "GIN",
      name: "Guiné",
      nationality: "Guineano",
    },
    {
      id: "GNB",
      name: "Guiné-Bissau",
      nationality: "Guineense",
    },
    {
      id: "GNQ",
      name: "Guiné Equatorial",
      nationality: "Guinéu-equatoriano",
    },
    {
      id: "HTI",
      name: "Haiti",
      nationality: "Haitiano",
    },
    {
      id: "NLD",
      name: "Holanda",
      nationality: "Holandês",
    },
    {
      id: "HND",
      name: "Honduras",
      nationality: "Hondurenho",
    },
    {
      id: "HUN",
      name: "Hungria",
      nationality: "Húngaro",
    },
    {
      id: "YEM",
      name: "Iêmen",
      nationality: "Iemenita",
    },
    {
      id: "IND",
      name: "Índia",
      nationality: "Indiano",
    },
    {
      id: "IDN",
      name: "Indonésia",
      nationality: "Indonésio",
    },
    {
      id: "IRN",
      name: "Irã",
      nationality: "Iraniano",
    },
    {
      id: "IRL",
      name: "Irlanda",
      nationality: "Irlandês",
    },
    {
      id: "ISL",
      name: "Islândia",
      nationality: "Islandês",
    },
    {
      id: "ISR",
      name: "Israel",
      nationality: "Israelita",
    },
    {
      id: "ITA",
      name: "Itália",
      nationality: "Italiano",
    },
    {
      id: "JAM",
      name: "Jamaica",
      nationality: "Jamaicano",
    },
    {
      id: "JPN",
      name: "Japão",
      nationality: "Japonês",
    },
    {
      id: "JOR",
      name: "Jordânia",
      nationality: "Jordão",
    },
    {
      id: "KWT",
      name: "Kuwait",
      nationality: "Kuwaitiano",
    },
    {
      id: "LAO",
      name: "Laos",
      nationality: "Laosiano",
    },
    {
      id: "LSO",
      name: "Lesoto",
      nationality: "Lesotiano",
    },
    {
      id: "LVA",
      name: "Letônia",
      nationality: "Letoniano",
    },
    {
      id: "LBN",
      name: "Líbano",
      nationality: "Libanês",
    },
    {
      id: "LBR",
      name: "Libéria",
      nationality: "Liberiano",
    },
    {
      id: "LIE",
      name: "Liechtenstein",
      nationality: "Liechtensteinense",
    },
    {
      id: "LTU",
      name: "Lituânia",
      nationality: "Lituano",
    },
    {
      id: "LUX",
      name: "Luxemburgo",
      nationality: "Luxemburguês",
    },
    {
      id: "LBY",
      name: "Líbia",
      nationality: "Líbio",
    },
    {
      id: "MKD",
      name: "Macedônia",
      nationality: "Macedônio",
    },
    {
      id: "MDG",
      name: "Madagascar",
      nationality: "Madagascarense",
    },
    {
      id: "MYS",
      name: "Malásia",
      nationality: "Malaio",
    },
    {
      id: "MAL",
      name: "Malaui",
      nationality: "Malauiano",
    },
    {
      id: "MDV",
      name: "Maldivas",
      nationality: "Maldivo",
    },
    {
      id: "MLI",
      name: "Mali",
      nationality: "Maliano",
    },
    {
      id: "MLT",
      name: "Malta",
      nationality: "Maltês",
    },
    {
      id: "MAR",
      name: "Marrocos",
      nationality: "Marroquino",
    },
    {
      id: "MHL",
      name: "Ilhas Marshall",
      nationality: "Marshallino",
    },
    {
      id: "MUS",
      name: "Maurício",
      nationality: "Mauriciano",
    },
    {
      id: "MRT",
      name: "Mauritânia",
      nationality: "Mauritano",
    },
    {
      id: "MEX",
      name: "México",
      nationality: "Mexicano",
    },
    {
      id: "FSM",
      name: "Micronésia",
      nationality: "Micronésio",
    },
    {
      id: "MDA",
      name: "Moldavia",
      nationality: "Moldávio",
    },
    {
      id: "MCO",
      name: "Mônaco",
      nationality: "Monegasco",
    },
    {
      id: "MNG",
      name: "Mongólia",
      nationality: "Mongol",
    },
    {
      id: "MNE",
      name: "Montenegro",
      nationality: "Montenegrino",
    },
    {
      id: "MOZ",
      name: "Moçambique",
      nationality: "Moçambicano",
    },
    {
      id: "NAM",
      name: "Namíbia",
      nationality: "Namibiano",
    },
    {
      id: "NRU",
      name: "Nauru",
      nationality: "Nauruano",
    },
    {
      id: "NZL",
      name: "Nova Zelândia",
      nationality: "Neozelandês",
    },
    {
      id: "NPL",
      name: "Nepal",
      nationality: "Nepalês",
    },
    {
      id: "NIC",
      name: "Nicarágua",
      nationality: "Nicaraguense",
    },
    {
      id: "NGA",
      name: "Nigéria",
      nationality: "Nigeriano",
    },
    {
      id: "NER",
      name: "Níger",
      nationality: "Nigerino",
    },
    {
      id: "NIU",
      name: "Niue",
      nationality: "Niuano",
    },
    {
      id: "PRK",
      name: "Coréia do Norte",
      nationality: "Norte-coreano",
    },
    {
      id: "NOR",
      name: "Noruega",
      nationality: "Norueguês",
    },
    {
      id: "OMN",
      name: "Omã",
      nationality: "Omanense",
    },
    {
      id: "PLW",
      name: "Palau",
      nationality: "Palauense",
    },
    {
      id: "PSE",
      name: "Palestina",
      nationality: "Palestino",
    },
    {
      id: "PAN",
      name: "Panamá",
      nationality: "Panamenho",
    },
    {
      id: "PNG",
      name: "Papua Nova Guiné",
      nationality: "Papuásio",
    },
    {
      id: "PAK",
      name: "Paquistão",
      nationality: "Paquistanês",
    },
    {
      id: "PRY",
      name: "Paraguai",
      nationality: "Paraguaio",
    },
    {
      id: "PER",
      name: "Peru",
      nationality: "Peruano",
    },
    {
      id: "POL",
      name: "Polônia",
      nationality: "Polonês",
    },
    {
      id: "PRT",
      name: "Portugal",
      nationality: "Português",
    },
    {
      id: "KEN",
      name: "Quênia",
      nationality: "Queniano",
    },
    {
      id: "KGZ",
      name: "Quirguistão",
      nationality: "Quirguistanês",
    },
    {
      id: "QUI",
      name: "Quiribati",
      nationality: "Quiribatiano",
    },
    {
      id: "ROU",
      name: "Romênia",
      nationality: "Romeno",
    },
    {
      id: "RWA",
      name: "Ruanda",
      nationality: "Ruandês",
    },
    {
      id: "RUS",
      name: "Rússia",
      nationality: "Russo",
    },
    {
      id: "SLB",
      name: "Ilhas Salomão",
      nationality: "Salomônico",
    },
    {
      id: "SLV",
      name: "El Salvador",
      nationality: "Salvadorenho",
    },
    {
      id: "WSM",
      name: "Samoa",
      nationality: "Samoano",
    },
    {
      id: "LCA",
      name: "Santa Lúcia",
      nationality: "Santa-lucense",
    },
    {
      id: "SYC",
      name: "Seicheles",
      nationality: "Seichelense",
    },
    {
      id: "SEN",
      name: "Senegal",
      nationality: "Senegalense",
    },
    {
      id: "SLE",
      name: "Serra Leoa",
      nationality: "Serra-leonês",
    },
    {
      id: "SRB",
      name: "Sérvia",
      nationality: "Servio",
    },
    {
      id: "SGP",
      name: "Singapura",
      nationality: "Singapurense",
    },
    {
      id: "SOM",
      name: "Somália",
      nationality: "Somali",
    },
    {
      id: "LKA",
      name: "Sri Lanka",
      nationality: "Srilankês",
    },
    {
      id: "SWZ",
      name: "Suazilândia",
      nationality: "Suazi",
    },
    {
      id: "SDN",
      name: "Sudão",
      nationality: "Sudanense",
    },
    {
      id: "SWE",
      name: "Suécia",
      nationality: "Sueco",
    },
    {
      id: "SSD",
      name: "Sudão do Sul",
      nationality: "Sul-sudanense",
    },
    {
      id: "ZAF",
      name: "África do Sul",
      nationality: "Sulafricano",
    },
    {
      id: "SUR",
      name: "Suriname",
      nationality: "Surinamês",
    },
    {
      id: "CHE",
      name: "Suíça",
      nationality: "Suíço",
    },
    {
      id: "KNA",
      name: "São Cristóvão e Neves",
      nationality: "São-cristovense",
    },
    {
      id: "SMR",
      name: "São Marino",
      nationality: "São-marinense",
    },
    {
      id: "STP",
      name: "São Tomé e Príncipe",
      nationality: "São-tomense",
    },
    {
      id: "VCT",
      name: "São Vicente e Granadinas",
      nationality: "São-vicentino",
    },
    {
      id: "SYR",
      name: "Síria",
      nationality: "Sírio",
    },
    {
      id: "THA",
      name: "Tailândia",
      nationality: "Tailandês",
    },
    {
      id: "TJK",
      name: "Tajiquistão",
      nationality: "Tajique",
    },
    {
      id: "TZA",
      name: "Tanzânia",
      nationality: "Tanzaniano",
    },
    {
      id: "CZE",
      name: "República Tcheca",
      nationality: "Tcheco",
    },
    {
      id: "TLS",
      name: "Timor Leste",
      nationality: "Timorense",
    },
    {
      id: "TGO",
      name: "Togo",
      nationality: "Togolês",
    },
    {
      id: "TON",
      name: "Tonga",
      nationality: "Tonganês",
    },
    {
      id: "TTO",
      name: "Trindade e Tobago",
      nationality: "Trinitário",
    },
    {
      id: "TUN",
      name: "Tunísia",
      nationality: "Tunisiano",
    },
    {
      id: "TUR",
      name: "Turquia",
      nationality: "Turco",
    },
    {
      id: "TKM",
      name: "Turcomenistão",
      nationality: "Turcomeno",
    },
    {
      id: "TUV",
      name: "Tuvalu",
      nationality: "Tuvaluano",
    },
    {
      id: "UKR",
      name: "Ucrânia",
      nationality: "Ucraniano",
    },
    {
      id: "UGA",
      name: "Uganda",
      nationality: "Ugandês",
    },
    {
      id: "URY",
      name: "Uruguai",
      nationality: "Uruguaio",
    },
    {
      id: "UZB",
      name: "Usbequistão",
      nationality: "Uzbeque",
    },
    {
      id: "VUT",
      name: "Vanuatu",
      nationality: "Vanuatuano",
    },
    {
      id: "VEN",
      name: "Venezuela",
      nationality: "Venezuelano",
    },
    {
      id: "VNM",
      name: "Vietnã",
      nationality: "Vietnamita",
    },
    {
      id: "ZMB",
      name: "Zâmbia",
      nationality: "Zambiano",
    },
    {
      id: "ZWE",
      name: "Zimbábue",
      nationality: "Zimbabueano",
    },
    {
      id: "ARE",
      name: "Emirados árabes Unidos",
      nationality: "Árabe",
    },
  ]);
}

export async function down(knex: Knex) {
  await dropTable(knex, "countries");
}
