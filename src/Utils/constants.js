import WaterIcon from "../images/icons/icons8-bottle-of-water-64.png";
import CafeIcon from "../images/icons/icons8-cafe-64.png";
import ChampagneIcon from "../images/icons/icons8-champagne-64.png";
import CocktailIcon from "../images/icons/icons8-cocktail-64.png";
import KFCIcon from "../images/frachiseIcons/KFC_logo.png";
import DominosIcon from "../images/frachiseIcons/Dominos_logo.png";
import McdIcon from "../images/frachiseIcons/McD-logo.png";
import StarbucksIcon from "../images/frachiseIcons/Starbucks_Logo.png";

export const Categories = [
  {
    name: "Food & Beverage",
    logo: WaterIcon,
    id: 1,
    franchises: [
      { id: 1, name: "KFC", logo: KFCIcon, latest: false },
      { id: 2, name: "Dominos", logo: DominosIcon, latest: true },
      { id: 3, name: "McDonalds", logo: McdIcon, latest: false },
      { id: 4, name: "Starbucks", logo: StarbucksIcon, latest: false },
    ],
  },
  {
    name: "Entertainment",
    logo: ChampagneIcon,
    id: 2,
    franchises: [
      { id: 1, name: "KFC", logo: KFCIcon, latest: false },
      { id: 2, name: "Dominos", logo: DominosIcon, latest: false },
      { id: 3, name: "McDonalds", logo: McdIcon, latest: false },
      { id: 4, name: "Starbucks", logo: StarbucksIcon, latest: false },
    ],
  },
  {
    name: "Health",
    logo: ChampagneIcon,
    id: 3,
    franchises: [
      { id: 1, name: "KFC", logo: KFCIcon, latest: false },
      { id: 2, name: "Dominos", logo: DominosIcon, latest: false },
      { id: 3, name: "McDonalds", logo: McdIcon, latest: true },
      { id: 4, name: "Starbucks", logo: StarbucksIcon, latest: false },
    ],
  },
  {
    name: "Retail",
    logo: WaterIcon,
    id: 4,
    franchises: [
      { id: 1, name: "KFC", logo: KFCIcon, latest: false },
      { id: 2, name: "Dominos", logo: DominosIcon, latest: false },
      { id: 3, name: "McDonalds", logo: McdIcon, latest: false },
      { id: 4, name: "Starbucks", logo: StarbucksIcon, latest: false },
    ],
  },
  {
    name: "Service",
    logo: CafeIcon,
    id: 5,
    franchises: [
      { id: 1, name: "KFC", logo: KFCIcon, latest: false },
      { id: 2, name: "Dominos", logo: DominosIcon, latest: false },
      { id: 3, name: "McDonalds", logo: McdIcon, latest: false },
      { id: 4, name: "Starbucks", logo: StarbucksIcon, latest: true },
    ],
  },
  {
    name: "Beauty & SPA",
    logo: CocktailIcon,
    id: 6,
    franchises: [
      { id: 1, name: "KFC", logo: KFCIcon, latest: false },
      { id: 2, name: "Dominos", logo: DominosIcon, latest: false },
      { id: 3, name: "McDonalds", logo: McdIcon, latest: true },
      { id: 4, name: "Starbucks", logo: StarbucksIcon, latest: false },
    ],
  },
  // {
  //     name: 'Service', logo: WaterIcon, id: 7, franchises: [
  //         { id: 1, name: 'KFC', logo: KFCIcon, latest: false }, { id: 2, name: 'Dominos', logo: DominosIcon, latest: false }, { id: 3, name: 'McDonalds', logo: McdIcon, latest: false }, { id: 4, name: 'Starbucks', logo: StarbucksIcon, latest: false }]
  // },
  // {
  //     name: 'Retail', logo: CocktailIcon, id: 8, franchises: [
  //         { id: 1, name: 'KFC', logo: KFCIcon, latest: false }, { id: 2, name: 'Dominos', logo: DominosIcon, latest: false }, { id: 3, name: 'McDonalds', logo: McdIcon, latest: true }, { id: 4, name: 'Starbucks', logo: StarbucksIcon, latest: false }]
  // },
  // {
  //     name: 'Health', logo: CafeIcon, id: 9, franchises: [
  //         { id: 1, name: 'KFC', logo: KFCIcon, latest: false }, { id: 2, name: 'Dominos', logo: DominosIcon, latest: false }, { id: 3, name: 'McDonalds', logo: McdIcon, latest: false }, { id: 4, name: 'Starbucks', logo: StarbucksIcon, latest: false }]
  // },
  // {
  //     name: 'Education', logo: MilkIcon, id: 10, franchises: [
  //         { id: 1, name: 'KFC', logo: KFCIcon, latest: false }, { id: 2, name: 'Dominos', logo: DominosIcon, latest: false }, { id: 3, name: 'McDonalds', logo: McdIcon, latest: false }, { id: 4, name: 'Starbucks', logo: StarbucksIcon, latest: false }]
  // },
  // {
  //     name: 'Entertainment', logo: MilkIcon, id: 11, franchises: [
  //         { id: 1, name: 'KFC', logo: KFCIcon, latest: false }, { id: 2, name: 'Dominos', logo: DominosIcon, latest: false }, { id: 3, name: 'McDonalds', logo: McdIcon, latest: false }, { id: 4, name: 'Starbucks', logo: StarbucksIcon, latest: false }]
  // },
  // {
  //     name: 'Beauty & SPA', logo: CafeIcon, id: 12, franchises: [
  //         { id: 1, name: 'KFC', logo: KFCIcon, latest: false }, { id: 2, name: 'Dominos', logo: DominosIcon, latest: false }, { id: 3, name: 'McDonalds', logo: McdIcon, latest: false }, { id: 4, name: 'Starbucks', logo: StarbucksIcon, latest: false }]
  // },
  // {
  //     name: 'Service', logo: CafeIcon, id: 13, franchises: [
  //         { id: 1, name: 'KFC', logo: KFCIcon, latest: false }, { id: 2, name: 'Dominos', logo: DominosIcon, latest: false }, { id: 3, name: 'McDonalds', logo: McdIcon, latest: false }, { id: 4, name: 'Starbucks', logo: StarbucksIcon, latest: false }]
  // },
  // {
  //     name: 'Retail', logo: MilkIcon, id: 14, franchises: [
  //         { id: 1, name: 'KFC', logo: KFCIcon, latest: false }, { id: 2, name: 'Dominos', logo: DominosIcon, latest: false }, { id: 3, name: 'McDonalds', logo: McdIcon, latest: false }, { id: 4, name: 'Starbucks', logo: StarbucksIcon, latest: false }]
  // },
  // {
  //     name: 'Entertainment', logo: ChampagneIcon, id: 15, franchises: [
  //         { id: 1, name: 'KFC', logo: KFCIcon, latest: false }, { id: 2, name: 'Dominos', logo: DominosIcon, latest: false }, { id: 3, name: 'McDonalds', logo: McdIcon, latest: false }, { id: 4, name: 'Starbucks', logo: StarbucksIcon, latest: false }]
  // },
  // {
  //     name: 'Education', logo: ChampagneIcon, id: 16, franchises: [
  //         { id: 1, name: 'KFC', logo: KFCIcon, latest: false }, { id: 2, name: 'Dominos', logo: DominosIcon, latest: false }, { id: 3, name: 'McDonalds', logo: McdIcon, latest: false }, { id: 4, name: 'Starbucks', logo: StarbucksIcon, latest: false }]
  // },
  // {
  //     name: 'Food & Beverage', logo: MilkIcon, id: 17, franchises: [
  //         { id: 1, name: 'KFC', logo: KFCIcon, latest: false }, { id: 2, name: 'Dominos', logo: DominosIcon, latest: false }, { id: 3, name: 'McDonalds', logo: McdIcon, latest: false }, { id: 4, name: 'Starbucks', logo: StarbucksIcon, latest: false }]
  // },
  // {
  //     name: 'Retail', logo: CocktailIcon, id: 18, franchises: [
  //         { id: 1, name: 'KFC', logo: KFCIcon, latest: false }, { id: 2, name: 'Dominos', logo: DominosIcon, latest: false }, { id: 3, name: 'McDonalds', logo: McdIcon, latest: false }, { id: 4, name: 'Starbucks', logo: StarbucksIcon, latest: false }]
  // },
  // {
  //     name: 'Health', logo: WaterIcon, id: 19, franchises: [
  //         { id: 1, name: 'KFC', logo: KFCIcon, latest: false }, { id: 2, name: 'Dominos', logo: DominosIcon, latest: false }, { id: 3, name: 'McDonalds', logo: McdIcon, latest: false }, { id: 4, name: 'Starbucks', logo: StarbucksIcon, latest: false }]
  // },
  // {
  //     name: 'Education', logo: CafeIcon, id: 20, franchises: [
  //         { id: 1, name: 'KFC', logo: KFCIcon, latest: false }, { id: 2, name: 'Dominos', logo: DominosIcon, latest: false }, { id: 3, name: 'McDonalds', logo: McdIcon, latest: false }, { id: 4, name: 'Starbucks', logo: StarbucksIcon, latest: false }]
  // }
];

export const Subcategories = [
  { id: 1, category: 1, name: "Food", logo: WaterIcon },
];
export const Brands = [
  { id: 1, name: "KFC", logo: KFCIcon, latest: false, sub_category: 1 },
  { id: 2, name: "Dominos", logo: DominosIcon, latest: true, sub_category: 1 },
  { id: 3, name: "McDonalds", logo: McdIcon, latest: false, sub_category: 1 },
  {
    id: 4,
    name: "Starbucks",
    logo: StarbucksIcon,
    latest: false,
    sub_category: 1,
  },
];
export const Investment = [
  "$100,000 - $499,999",
  "$500,000 - $999,999",
  "$1,000,000 - $4,999,999",
  "$5,000,000 and more",
];

export const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas (the)",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory (the)",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands (the)",
  "Central African Republic (the)",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands (the)",
  "Colombia",
  "Comoros (the)",
  "Congo (the Democratic Republic of the)",
  "Congo (the)",
  "Cook Islands (the)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic (the)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands (the) [Malvinas]",
  "Faroe Islands (the)",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories (the)",
  "Gabon",
  "Gambia (the)",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See (the)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (the Democratic People's Republic of)",
  "Korea (the Republic of)",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic (the)",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands (the)",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia (Federated States of)",
  "Moldova (the Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands (the)",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger (the)",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands (the)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines (the)",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of North Macedonia",
  "Romania",
  "Russian Federation (the)",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan (the)",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands (the)",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates (the)",
  "United Kingdom of Great Britain and Northern Ireland (the)",
  "United States Minor Outlying Islands (the)",
  "United States of America (the)",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela (Bolivarian Republic of)",
  "Viet Nam",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Åland Islands",
];
