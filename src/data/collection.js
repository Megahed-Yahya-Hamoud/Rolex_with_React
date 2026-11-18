import { asset } from '../utils/asset';

// radial: 'green' | 'gold'          → background glow behind the watch
// shadow: 'gold35' | 'green35' | 'gold25' → hover shadow of the card
export const collection = [
  {
    key: 'daydate', ref: 'REF. 228238', delay: '0s', radial: 'green', shadow: 'gold35',
    bookmarkLabel: 'Bookmark Day-Date 40 Yellow Gold',
    tagline: 'The Sovereign Choice', title: 'Day-Date 40 Yellow Gold',
    description: 'The ultimate watch of prestige. Radiating an intense emerald green sunburst dial set inside an 18 ct yellow gold fluted bezel and iconic President bracelet.',
    image: asset('day-date-40-studio.webp'),
    alt: 'Rolex Day-Date 40 in 18ct yellow gold with olive green dial'
  },
  {
    key: 'submariner', ref: 'REF. 126610LV', delay: '0.06s', radial: 'green', shadow: 'green35',
    bookmarkLabel: "Bookmark Submariner Date 'Kermit/Hulk'",
    tagline: "The Divers' Benchmark", title: "Submariner Date 'Kermit/Hulk'",
    description: 'Forged from impervious Oystersteel with an intense emerald green Cerachrom unidirectional rotatable bezel, Triplock winding crown, and 300m waterproof hermetic case.',
    image: asset('submariner-hulk-hand.webp'),
    alt: 'Rolex Submariner Date Kermit Hulk edition in Oystersteel with emerald Cerachrom bezel'
  },
  {
    key: 'gmtmaster', ref: 'REF. 126718GRNR', delay: '0.12s', radial: 'gold', shadow: 'gold35',
    bookmarkLabel: 'Bookmark GMT-Master II Yellow Gold',
    tagline: 'The Cosmopolitan Traveler', title: 'GMT-Master II Yellow Gold',
    description: 'Cast in solid 18 ct yellow gold featuring a bi-colour 24-hour rotatable Cerachrom bezel, luminous emerald sunburst dial, and an integrated solid link Oyster bracelet.',
    image: asset('gmt-master-ii.webp'),
    alt: 'Rolex GMT-Master II in 18k yellow gold with green dial and Cerachrom bezel'
  },
  {
    key: 'daydate36', ref: 'REF. 128238', delay: '0.18s', radial: 'green', shadow: 'green35',
    bookmarkLabel: 'Bookmark Day-Date 36 Roman Emerald',
    tagline: 'The Roman Aristocracy', title: 'Day-Date 36 Roman Emerald',
    description: 'A bespoke expression of classical majesty. Sculpted in 18 ct yellow gold featuring faceted Roman numeral indices, deep green lacquer dial, and the signature President bracelet.',
    image: asset('day-date-36-roman.webp'),
    alt: 'Rolex Day-Date 36 in 18ct yellow gold with Roman emerald green lacquer dial'
  },
  {
    key: '1908', ref: 'REF. 52508-0002', delay: '0.24s', radial: 'gold', shadow: 'gold25',
    bookmarkLabel: 'Bookmark Perpetual 1908 Masterpiece',
    tagline: 'Grand Horology Dress', title: 'Perpetual 1908 Masterpiece',
    description: 'An immaculate classical dress piece. Featuring a slim 39 mm 18 ct yellow gold case with dual bezel (part fluted, part domed), pristine white lacquer dial, and transparent sapphire back.',
    image: asset('perpetual-1908.webp'),
    alt: 'Rolex Perpetual 1908 in 18k yellow gold with intense white dial and fluted bezel'
  },
  {
    key: 'daytona', ref: 'REF. 116508-0013', delay: '0.3s', radial: 'green', shadow: 'gold35',
    bookmarkLabel: 'Bookmark Cosmograph Daytona 18 ct Gold',
    tagline: 'The Ultimate Racing Chronograph', title: 'Cosmograph Daytona 18 ct Gold',
    description: 'A benchmark of horological power. Cast in solid 18 ct yellow gold featuring an emerald green sunburst dial, engraved tachymetric scale bezel, and high-beat chronograph calibre.',
    image: asset('daytona-studio.webp'),
    alt: 'Rolex Cosmograph Daytona front studio reference in 18 ct yellow gold with radiant champagne counters'
  }
];
