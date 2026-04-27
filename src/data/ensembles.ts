import groupWaterfront1 from "../assets/images/group-waterfront-1.webp";
import groupWaterfront2 from "../assets/images/group-waterfront-2.webp";
import groupWaterfront3 from "../assets/images/group-waterfront-3.webp";
import groupWaterfront4 from "../assets/images/group-waterfront-4.webp";
import groupPortrait from "../assets/images/group-portrait.jpg";
import groupLaughing from "../assets/images/group-laughing.jpg";

export type Ensemble = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  body: string[];
  image: string;
  idealFor: string[];
};

export const ENSEMBLES: Ensemble[] = [
  {
    slug: "full-band",
    name: "Full Dance Band",
    tagline: "8–12 musicians. One nonstop, feel-good set.",
    description:
      "Experience the ultimate in live entertainment with Harborline's full dance band. 8–12 musicians delivering high-energy performances for weddings, galas, and special events.",
    body: [
      "Our flagship configuration: a wall of sound built from horns, rhythm section, and dynamic vocalists. Designed to pack every dance floor.",
      "From classic Motown and soul to today's hottest hits — the best of the old and the best of the new in one nonstop, feel-good set that reads the room and keeps people dancing.",
    ],
    image: groupWaterfront1,
    idealFor: ["Weddings", "Galas", "Corporate parties", "Milestone celebrations"],
  },
  {
    slug: "jazz-quartet",
    name: "Jazz Quartet",
    tagline: "Refined celebration. Four musicians, all atmosphere.",
    description:
      "Add sophistication to your event with Harborline's jazz quartet. Perfect for cocktail hours, corporate events, and upscale celebrations.",
    body: [
      "From Great American Songbook standards to bossa nova, from swing classics to modern jazz interpretations of contemporary hits — our musicians create an atmosphere of refined celebration that elevates any event.",
      "Four musicians creating the perfect atmosphere of elegance and swing.",
    ],
    image: groupWaterfront2,
    idealFor: ["Cocktail hours", "Corporate dinners", "Upscale receptions"],
  },
  {
    slug: "piano-trio",
    name: "Piano Trio",
    tagline: "Piano-led elegance for sophisticated rooms.",
    description:
      "Create an atmosphere of elegance with Harborline's piano trio. Perfect for weddings, cocktail hours, and sophisticated gatherings.",
    body: [
      "From romantic ballads during dinner to upbeat standards that get toes tapping, our piano trio adapts seamlessly to the mood of your event — sophisticated enough for a black-tie affair, warm enough for an intimate gathering.",
    ],
    image: groupWaterfront3,
    idealFor: ["Weddings", "Cocktail hours", "Intimate dinners"],
  },
  {
    slug: "string-ensemble",
    name: "String Ensemble",
    tagline: "Classical training, modern repertoire.",
    description:
      "Elegant string quartet for wedding ceremonies and formal events. Classical repertoire and modern pop arrangements performed with sophistication.",
    body: [
      "Our classically trained musicians bring conservatory credentials and years of experience to every performance. But they're not stuffy — they love reimagining pop hits and rock classics through the lens of chamber music.",
    ],
    image: groupWaterfront4,
    idealFor: ["Wedding ceremonies", "Formal galas", "Cultural events"],
  },
  {
    slug: "acoustic-duo",
    name: "Acoustic Duo",
    tagline: "Stripped to the emotional core.",
    description:
      "Intimate acoustic duo for ceremonies, cocktail hours, and small gatherings in Baltimore and Maryland.",
    body: [
      "Sometimes less is more. Our acoustic duo strips songs to their emotional core, delivering performances that feel personal and present — like the music is being played just for you.",
    ],
    image: groupPortrait,
    idealFor: ["Ceremonies", "Cocktail hours", "Small gatherings"],
  },
  {
    slug: "solo-performer",
    name: "Solo Performer",
    tagline: "Piano or guitar. Voice that carries the room.",
    description:
      "A single seasoned performer — piano, guitar, or voice — perfect for ceremonies, intimate dinners, and background music that elevates the moment without overwhelming it.",
    body: [
      "Whether it's a solo pianist for a hotel lobby reception or an acoustic guitarist for a vineyard dinner, our solo performers bring presence without imposition.",
    ],
    image: groupLaughing,
    idealFor: ["Ceremonies", "Dinners", "Background ambiance"],
  },
];

export const getEnsembleBySlug = (slug: string) => ENSEMBLES.find((e) => e.slug === slug);
