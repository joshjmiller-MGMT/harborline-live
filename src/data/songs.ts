export type SongCategory = {
  name: string;
  blurb: string;
  artists: string[];
};

export const SONG_CATEGORIES: SongCategory[] = [
  {
    name: "Motown & Soul",
    blurb: "The bedrock of every great dance floor.",
    artists: [
      "Stevie Wonder",
      "Marvin Gaye",
      "Aretha Franklin",
      "Al Green",
      "James Brown",
      "Otis Redding",
      "Sam Cooke",
      "The Temptations",
      "Bill Withers",
      "Frankie Beverly & Maze",
      "Earth, Wind & Fire",
      "Diana Ross",
    ],
  },
  {
    name: "Classic Rock & Pop",
    blurb: "Timeless, sing-along, room-filling.",
    artists: [
      "The Beatles",
      "Elton John",
      "Queen",
      "Fleetwood Mac",
      "Hall & Oates",
      "Toto",
      "Journey",
      "Pink Floyd",
      "The Police",
      "James Taylor",
      "Bee Gees",
      "ABBA",
    ],
  },
  {
    name: "Modern Hits",
    blurb: "Today's chart-toppers, woven into the set.",
    artists: [
      "Bruno Mars",
      "Beyoncé",
      "Adele",
      "Justin Timberlake",
      "John Legend",
      "Ariana Grande",
      "Maroon 5",
      "Lizzo",
      "Olivia Dean",
      "SZA",
      "Hozier",
      "Sam Smith",
    ],
  },
  {
    name: "Jazz & Standards",
    blurb: "Cocktail hour and the Great American Songbook.",
    artists: [
      "Frank Sinatra",
      "Ella Fitzgerald",
      "Nat King Cole",
      "Billie Holiday",
      "Sade",
      "Bobby Caldwell",
      "Michael McDonald",
      "Amy Winehouse",
    ],
  },
  {
    name: "Funk, Disco & Dance",
    blurb: "When it's time, it's time.",
    artists: [
      "Prince",
      "Michael Jackson",
      "Chic",
      "KC & the Sunshine Band",
      "Donna Summer",
      "Kool & the Gang",
      "Cake",
      "Bobby Brown",
    ],
  },
];
