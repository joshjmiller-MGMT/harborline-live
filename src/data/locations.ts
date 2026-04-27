import peabody from "../assets/images/peabody-1.jpg";
import cylburn from "../assets/images/cylburn-1.jpg";
import evergreen from "../assets/images/evergreen-1.jpg";
import belvedere from "../assets/images/belvedere-1.jpg";
import fourSeasons from "../assets/images/four-seasons-1.jpg";
import cloisters from "../assets/images/cloisters-1.jpg";
import boRailroad from "../assets/images/bo-railroad-1.jpg";
import avam from "../assets/images/avam-1.jpg";
import pendry from "../assets/images/pendry-1.jpg";

export type Location = {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  description: string;
  body: string[];
  image: string;
};

export const LOCATIONS: Location[] = [
  {
    slug: "baltimore",
    name: "Baltimore",
    region: "Maryland",
    tagline: "Inner Harbor elegance to countryside charm.",
    description:
      "Live entertainment for weddings, galas, and corporate events at premier Baltimore venues — from the Inner Harbor to Roland Park and beyond.",
    body: [
      "As Baltimore natives, we understand the unique character of each neighborhood and venue. We've performed at the George Peabody Library, Cylburn Arboretum, the Belvedere, and more.",
    ],
    image: peabody,
  },
  {
    slug: "washington-dc",
    name: "Washington, D.C.",
    region: "District of Columbia",
    tagline: "Premier venues throughout the nation's capital.",
    description:
      "Live music for events at premier Washington DC venues — embassies, hotels, museums, and historic estates throughout the District.",
    body: [
      "From Embassy Row to the Wharf, Harborline performs across DC's most distinguished event venues with full-band production travel and setup.",
    ],
    image: fourSeasons,
  },
  {
    slug: "annapolis",
    name: "Annapolis & Eastern Shore",
    region: "Maryland",
    tagline: "Waterfront weddings and historic estates.",
    description:
      "Live entertainment for waterfront weddings and historic-estate events across Annapolis, the Eastern Shore, and the Chesapeake Bay.",
    body: [
      "From Annapolis Waterfront Hotel to private estates along the Bay, Harborline brings full-band production to every Eastern Shore celebration.",
    ],
    image: cloisters,
  },
  {
    slug: "bethesda",
    name: "Bethesda",
    region: "Maryland",
    tagline: "Premier Montgomery County venues.",
    description:
      "Live entertainment for events at premier Bethesda venues including the North Marriott Hotel & Conference Center.",
    body: [
      "Harborline regularly performs across Bethesda and the broader Montgomery County corridor for corporate events, weddings, and private celebrations.",
    ],
    image: belvedere,
  },
  {
    slug: "columbia",
    name: "Columbia",
    region: "Maryland",
    tagline: "Howard County weddings and corporate events.",
    description:
      "Live entertainment for weddings and corporate events across Columbia and Howard County, Maryland.",
    body: [
      "From Merriweather-area corporate events to Columbia-area weddings, Harborline brings the same nonstop set that fills Baltimore dance floors.",
    ],
    image: evergreen,
  },
  {
    slug: "frederick",
    name: "Frederick",
    region: "Maryland",
    tagline: "Historic downtown and countryside venues.",
    description:
      "Live entertainment for weddings and events across Frederick and Western Maryland.",
    body: [
      "From historic downtown Frederick to barn weddings in the surrounding countryside, Harborline travels with full production setup.",
    ],
    image: avam,
  },
  {
    slug: "rockville",
    name: "Rockville",
    region: "Maryland",
    tagline: "Montgomery County corporate and private events.",
    description:
      "Live entertainment for corporate events and private celebrations across Rockville and the Mid-County region.",
    body: [
      "Conference centers, country clubs, and private venues across Rockville rely on Harborline for full-band production and setup.",
    ],
    image: pendry,
  },
  {
    slug: "towson",
    name: "Towson",
    region: "Maryland",
    tagline: "Baltimore County events and university galas.",
    description:
      "Live entertainment for events across Towson and Baltimore County — country clubs, university galas, and private celebrations.",
    body: [
      "Just outside Baltimore, Towson hosts a steady calendar of Harborline performances at country clubs, alumni galas, and private events.",
    ],
    image: boRailroad,
  },
  {
    slug: "eastern-shore",
    name: "Eastern Shore",
    region: "Maryland",
    tagline: "Chesapeake waterfront and Easton estates.",
    description:
      "Live entertainment for waterfront weddings and private events across Maryland's Eastern Shore — Easton, St. Michaels, Oxford, and beyond.",
    body: [
      "Harborline travels across the Bay Bridge for every kind of Eastern Shore celebration, from waterfront weddings to private estate galas.",
    ],
    image: cylburn,
  },
];

export const getLocationBySlug = (slug: string) => LOCATIONS.find((l) => l.slug === slug);
