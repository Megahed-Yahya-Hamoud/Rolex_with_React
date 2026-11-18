import { asset } from '../utils/asset';

export const DEFAULT_CONFIG = { dia: '40 mm', metal: '18 ct Yellow Gold', brc: 'President' };

export const diameters = ['36 mm', '39 mm', '40 mm'];
export const diaScale = { '36 mm': 0.88, '39 mm': 0.95, '40 mm': 1 };

export const metals = [
  { value: '18 ct Yellow Gold', type: 'gold', color: '#e9c176' },
  { value: 'Oystersteel 904L', type: 'steel', color: '#d0d4dc' },
  { value: '18 ct Everose Gold', type: 'everose', color: '#dfa489' },
  { value: '950 Platinum', type: 'plat', color: '#b8c6d1' }
];

export const bracelets = ['President', 'Jubilee', 'Oyster'];

export const configImages = {
  gold: { src: asset('day-date-40-studio.webp'), alt: 'Configured timepiece in 18 ct yellow gold' },
  steel: { src: asset('submariner-hulk-dark.webp'), alt: 'Configured timepiece in Oystersteel' }
};

export const metalFilters = {
  everose: 'sepia(.25) hue-rotate(-14deg) saturate(1.15)',
  plat: 'saturate(.85) brightness(1.04)'
};
