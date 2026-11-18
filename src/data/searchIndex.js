import { watchData } from './watchData';

const watchItems = Object.entries(watchData).map(([key, w]) => ({
  type: 'watch',
  key,
  label: w.name,
  hint: w.ref,
  icon: 'watch',
  words: `${w.name} ${w.ref} ${w.material} ${w.calibre} ${w.dial}`.toLowerCase()
}));

const sectionItems = [
  { type: 'go', key: 'daytona-spotlight', label: 'Cosmograph Daytona spotlight', hint: 'Section', icon: 'speed', words: 'daytona spotlight speed racing chronograph 4130 4131' },
  { type: 'go', key: 'metiers-dart', label: "Métiers d'Art & bespoke", hint: 'Section', icon: 'brush', words: 'art metier bespoke enamel engraving atelier' },
  { type: 'go', key: 'craftsmanship', label: 'Craftsmanship', hint: 'Section', icon: 'lens_blur', words: 'craftsmanship guilloche dial hands macro' },
  { type: 'go', key: 'configurator', label: 'Timepiece configurator', hint: 'Section', icon: 'tune', words: 'configure configurator custom alloy bracelet diameter' },
  { type: 'go', key: 'legacy', label: 'Heritage & legacy', hint: 'Section', icon: 'history_edu', words: 'legacy heritage history wilsdorf' },
  { type: 'go', key: 'concierge', label: 'Book a private viewing', hint: 'Section', icon: 'meeting_room', words: 'salon book visit viewing concierge appointment' }
];

export const searchIndex = [...watchItems, ...sectionItems];
