import peabody1 from "../assets/images/peabody-1.jpg";
import peabody2 from "../assets/images/peabody-2.jpg";
import cylburn1 from "../assets/images/cylburn-1.jpg";
import cylburn2 from "../assets/images/cylburn-2.jpg";
import evergreen1 from "../assets/images/evergreen-1.jpg";
import evergreen2 from "../assets/images/evergreen-2.jpg";
import belvedere1 from "../assets/images/belvedere-1.jpg";
import belvedere2 from "../assets/images/belvedere-2.jpg";
import fourSeasons1 from "../assets/images/four-seasons-1.jpg";
import fourSeasons2 from "../assets/images/four-seasons-2.jpg";
import cloisters1 from "../assets/images/cloisters-1.jpg";
import cloisters2 from "../assets/images/cloisters-2.jpg";
import boRailroad1 from "../assets/images/bo-railroad-1.jpg";
import boRailroad2 from "../assets/images/bo-railroad-2.jpg";
import avam1 from "../assets/images/avam-1.jpg";
import pendry1 from "../assets/images/pendry-1.jpg";
import pendry2 from "../assets/images/pendry-2.jpg";
import leggMason1 from "../assets/images/legg-mason-1.jpg";

export type Venue = {
  slug: string;
  name: string;
  city: string;
  tagline: string;
  description: string;
  body: string[];
  image: string;
  gallery?: string[];
};

export const VENUES: Venue[] = [
  {
    slug: "george-peabody-library",
    name: "George Peabody Library",
    city: "Baltimore, MD",
    tagline: "Five tiers of cast-iron balconies, gilded ceiling, marble floor.",
    description:
      "Live music for weddings and galas at the George Peabody Library — a five-story cathedral of books in Mount Vernon.",
    body: [
      "The Peabody is one of the most architecturally stunning event spaces on the East Coast. Our acoustic duo and string ensemble are tuned to the room's natural reverb; for the reception, we scale down the full band to keep the literature unrattled.",
      "Adjacent to Peabody Institute — a short walk from many Mount Vernon hotels.",
    ],
    image: peabody1,
    gallery: [peabody1, peabody2],
  },
  {
    slug: "cylburn-arboretum",
    name: "Cylburn Arboretum",
    city: "Baltimore, MD",
    tagline: "Victorian mansion, formal gardens, tented reception.",
    description:
      "Live entertainment for garden weddings and receptions at Cylburn Arboretum — a 207-acre estate in north Baltimore.",
    body: [
      "Cylburn's tented receptions are a Harborline staple. Outdoor sound built for the gardens, smooth transitions from ceremony in the formal lawn to dance floor under the tent.",
    ],
    image: cylburn1,
    gallery: [cylburn1, cylburn2],
  },
  {
    slug: "evergreen-museum",
    name: "Evergreen Museum & Library",
    city: "Baltimore, MD",
    tagline: "Gilded Age mansion, exposed-brick carriage house.",
    description:
      "Live music for weddings and private events at the Evergreen Museum — a Gilded Age mansion in Roland Park.",
    body: [
      "From the formal gardens to the exposed-brick carriage house, Evergreen is one of Baltimore's most romantic venues. We scale to fit the space: jazz quartet for cocktail hour, full band for the carriage-house reception.",
    ],
    image: evergreen1,
    gallery: [evergreen1, evergreen2],
  },
  {
    slug: "the-belvedere",
    name: "The Belvedere",
    city: "Baltimore, MD",
    tagline: "Historic Mount Vernon ballroom with Beaux-Arts grandeur.",
    description:
      "Live entertainment for weddings, galas, and corporate events in the Belvedere's historic ballroom.",
    body: [
      "The Belvedere's John Eager Howard Room is one of Baltimore's classic event spaces. Excellent acoustics, beautiful chandeliers, and a stage built for full-band production.",
    ],
    image: belvedere1,
    gallery: [belvedere1, belvedere2],
  },
  {
    slug: "four-seasons-baltimore",
    name: "Four Seasons Baltimore",
    city: "Baltimore, MD",
    tagline: "Crystal chandeliers, harbor views, waterfront terraces.",
    description:
      "Live entertainment for weddings and corporate events at the Four Seasons Baltimore — Inner Harbor's premier waterfront hotel.",
    body: [
      "From terrace ceremonies at sunset to ballroom receptions under crystal chandeliers, the Four Seasons brings a level of polish that Harborline's full band production matches step for step.",
    ],
    image: fourSeasons1,
    gallery: [fourSeasons1, fourSeasons2],
  },
  {
    slug: "cloisters-castle",
    name: "Cloisters Castle",
    city: "Lutherville-Timonium, MD",
    tagline: "Fairytale castle, candlelit grand hall.",
    description:
      "Live music for fairytale castle weddings at Cloisters Castle in Baltimore County.",
    body: [
      "The Cloisters' grand hall is built for candlelight and celebration. Acoustic ceremonies in the gardens, full band in the hall — our setup adapts to every transition of the day.",
    ],
    image: cloisters1,
    gallery: [cloisters1, cloisters2],
  },
  {
    slug: "b-and-o-railroad-museum",
    name: "B&O Railroad Museum",
    city: "Baltimore, MD",
    tagline: "Historic roundhouse with domed ceiling and vintage locomotives.",
    description:
      "Live entertainment for weddings and large galas at the B&O Railroad Museum's iconic roundhouse.",
    body: [
      "One of Baltimore's most distinctive event spaces — the roundhouse domed ceiling delivers natural acoustics that pair beautifully with our full-band sound.",
    ],
    image: boRailroad1,
    gallery: [boRailroad1, boRailroad2],
  },
  {
    slug: "american-visionary-art-museum",
    name: "American Visionary Art Museum",
    city: "Baltimore, MD",
    tagline: "Whimsical art installations and harbor-side rooftop terraces.",
    description:
      "Live music for weddings, galas, and creative events at the American Visionary Art Museum on Baltimore's Inner Harbor.",
    body: [
      "AVAM is one-of-one. A venue with its own personality — and a band that knows how to turn a colorful, whimsical room into a packed dance floor.",
    ],
    image: avam1,
  },
  {
    slug: "pendry-baltimore",
    name: "Sagamore Pendry Baltimore",
    city: "Baltimore, MD",
    tagline: "Fell's Point waterfront, French Revival ballroom.",
    description:
      "Live entertainment for weddings and corporate events at the Sagamore Pendry Baltimore in historic Fell's Point.",
    body: [
      "From waterfront pier ceremonies at golden hour to French Revival ballroom receptions, the Pendry pairs naturally with full-band production. Loading dock access makes setup clean.",
    ],
    image: pendry1,
    gallery: [pendry1, pendry2],
  },
  {
    slug: "legg-mason-tower",
    name: "Legg Mason Tower",
    city: "Baltimore, MD",
    tagline: "Penthouse event space with panoramic city views.",
    description:
      "Live entertainment for corporate events and private parties at Legg Mason Tower's penthouse event space.",
    body: [
      "Floor-to-ceiling glass, panoramic city views, and a refined corporate aesthetic — Legg Mason Tower is a go-to for executive holiday parties and brand activations.",
    ],
    image: leggMason1,
  },
];

export const getVenueBySlug = (slug: string) => VENUES.find((v) => v.slug === slug);
