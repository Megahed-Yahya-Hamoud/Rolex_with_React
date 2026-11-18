import { asset } from '../utils/asset';

// NOTE: '1908' is an integer-like key, so JS iterates it first (same as the original script).
export const watchData = {
  submariner: {
    ref: 'REF. 126610LV', name: "Submariner Date 'Kermit/Hulk' Edition", diameter: '41 mm',
    material: 'Oystersteel 904L', bezel: 'Unidirectional 60-Minute Rotatable Emerald Cerachrom',
    dial: 'Intense Emerald Sunburst Dial with Chromalight', calibre: 'Calibre 3235, Manufacture Rolex',
    precision: '-2/+2 sec/day (Superlative Chronometer)', power: 'Approximately 70 Hours',
    water: '300 metres / 1,000 feet', price: 'Price Upon Request',
    image: asset('submariner-hulk-hand.webp'),
    alt: 'Rolex Submariner Date Kermit Hulk edition in Oystersteel with emerald Cerachrom bezel'
  },
  gmtmaster: {
    ref: 'REF. 126718GRNR', name: 'GMT-Master II Everose & Yellow Gold', diameter: '40 mm',
    material: '18 ct Yellow Gold', bezel: 'Bidirectional 24-Hour Cerachrom Grey/Black Insert',
    dial: 'Luminous Emerald Green Sunburst with Gold Indices', calibre: 'Calibre 3285, Dual Time Zone Escapement',
    precision: '-2/+2 sec/day (Superlative Chronometer)', power: 'Approximately 70 Hours',
    water: '100 metres / 330 feet', price: 'Price Upon Request',
    image: asset('gmt-master-ii.webp'),
    alt: 'Rolex GMT-Master II in 18 ct yellow gold with green dial'
  },
  daydate36: {
    ref: 'REF. 128238', name: 'Day-Date 36 Roman Emerald', diameter: '36 mm',
    material: '18 ct Yellow Gold', bezel: 'Fluted 18 ct Yellow Gold',
    dial: 'Deep Green Lacquer with Deconstructed Roman Numerals', calibre: 'Calibre 3255, Manufacture Rolex',
    precision: '-2/+2 sec/day (Superlative Chronometer)', power: 'Approximately 70 Hours',
    water: '100 metres / 330 feet', price: 'Price Upon Request',
    image: asset('day-date-36-roman.webp'),
    alt: 'Rolex Day-Date 36 with Roman numeral emerald green lacquer dial'
  },
  daytona: {
    ref: 'REF. 116508', name: "Cosmograph Daytona 'John Mayer' Legend", diameter: '40 mm',
    material: 'Solid 18 ct Yellow Gold', bezel: 'Fixed 18 ct Gold with Engraved Tachymetric Scale',
    dial: 'Bright Emerald Green Sunburst with Crimson Subdial Rings', calibre: 'Calibre 4130, Column-Wheel Mechanical Chronograph',
    precision: '-2/+2 sec/day (Superlative Chronometer)', power: 'Approximately 72 Hours',
    water: '100 metres / 330 feet', price: 'Price Upon Request',
    image: asset('daytona-studio.webp'),
    alt: 'Rolex Cosmograph Daytona front studio reference in 18 ct yellow gold'
  },
  daydate: {
    ref: 'REF. 228238-0061', name: 'Oyster Perpetual Day-Date 40', diameter: '40 mm',
    material: '18 ct Yellow Gold', bezel: 'Fluted 18 ct Yellow Gold',
    dial: 'Olive / Emerald Green Sunburst with Chromalight', calibre: 'Calibre 3255, Manufacture Rolex',
    precision: '-2/+2 sec/day (Superlative Chronometer)', power: 'Approximately 70 Hours',
    water: '100 metres / 330 feet', price: 'Price Upon Request',
    image: asset('day-date-40-studio.webp'),
    alt: 'Rolex Day-Date 40 in 18 ct yellow gold with green dial'
  },
  1908: {
    ref: 'REF. 52508-0002', name: 'Perpetual 1908 Masterpiece', diameter: '39 mm',
    material: '18 ct Yellow Gold with Sapphire Back', bezel: 'Dual Bezel (Part fluted, part domed 18k)',
    dial: 'Intense White Lacquer with Arabic Appliqués', calibre: 'Calibre 7140, Syloxi silicon hairspring',
    precision: '-2/+2 sec/day (Superlative Chronometer)', power: 'Approximately 66 Hours',
    water: '50 metres / 165 feet', price: 'Price Upon Request',
    image: asset('perpetual-1908.webp'),
    alt: 'Rolex Perpetual 1908 in yellow gold with white dial'
  }
};

// Rows shown in the specifications modal: [label, key in watchData]
export const specRows = [
  ['Model Reference', 'ref'],
  ['Case Diameter', 'diameter'],
  ['Material', 'material'],
  ['Bezel', 'bezel'],
  ['Dial', 'dial'],
  ['Movement', 'calibre'],
  ['Precision', 'precision'],
  ['Power Reserve', 'power'],
  ['Water Resistance', 'water']
];
