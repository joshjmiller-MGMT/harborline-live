import groupWaterfront1 from "../assets/images/group-waterfront-1.webp";
import groupWaterfront2 from "../assets/images/group-waterfront-2.webp";
import groupWaterfront3 from "../assets/images/group-waterfront-3.webp";
import groupWaterfront4 from "../assets/images/group-waterfront-4.webp";

export type Occasion = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  body: string[];
  image: string;
};

export const OCCASIONS: Occasion[] = [
  {
    slug: "weddings",
    name: "Weddings",
    tagline: "Your wedding day deserves live music that moves hearts.",
    description:
      "Harborline delivers the best of the old and the best of the new — timeless classics and today's hits woven into one nonstop, feel-good celebration.",
    body: [
      "From ceremony to last dance, we read the room and keep the energy where you want it. Acoustic duo for vows, jazz quartet for cocktails, full band for the reception — all under one roof.",
      "Custom song requests, first-dance arrangements, and seamless transitions between every moment of the day.",
    ],
    image: groupWaterfront1,
  },
  {
    slug: "corporate",
    name: "Corporate Events",
    tagline: "Polished, professional, and legitimately fun.",
    description:
      "Top-rated live entertainment for company offsites, holiday parties, conferences, and client appreciation events across the DMV.",
    body: [
      "Corporate-friendly repertoire, professional sound and lighting, and a band that knows how to read a room of execs and turn it into a dance floor.",
      "We've performed for Fortune 500 holiday parties, conference galas, and brand activations — all with the same nonstop, feel-good set.",
    ],
    image: groupWaterfront2,
  },
  {
    slug: "galas",
    name: "Galas & Fundraisers",
    tagline: "Black-tie energy. Real fundraising lift.",
    description:
      "Live entertainment for nonprofit galas, museum benefits, and fundraisers across Baltimore, Washington DC, and the Mid-Atlantic.",
    body: [
      "From cocktail-hour jazz to the after-program dance set, we calibrate to the arc of the evening — supporting the program, not stepping on it.",
      "Trusted by Baltimore-area arts organizations, museums, and civic groups for events that need to feel both celebratory and deeply professional.",
    ],
    image: groupWaterfront3,
  },
  {
    slug: "private-parties",
    name: "Private Parties",
    tagline: "Birthdays, anniversaries, milestone moments.",
    description:
      "Anniversary parties, milestone birthdays, and private celebrations — Harborline brings the same band that headlines the venue down to your backyard.",
    body: [
      "Whether it's a 50th anniversary, a Bat Mitzvah, or a backyard reception, we tailor the band size and song selection to fit the room and the moment.",
      "Acoustic duo for cocktail hour, full band when it's time to dance — your call, your night.",
    ],
    image: groupWaterfront4,
  },
];

export const getOccasionBySlug = (slug: string) => OCCASIONS.find((o) => o.slug === slug);
