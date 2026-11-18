// Ids of the sections watched by the scroll-spy (order = page order).
export const SPY_IDS = [
  'home', 'atelier-stats', 'collection', 'daytona-spotlight', 'metiers-dart',
  'craftsmanship', 'configurator', 'legacy', 'concierge'
];

// Top navigation (desktop + tablet drawer). `spy` = sections that highlight the link.
export const primaryNav = [
  { label: 'Home', href: '#home', spy: ['home', 'atelier-stats'] },
  { label: 'Collection', href: '#collection', spy: ['collection', 'daytona-spotlight'] },
  { label: "Métiers d'Art", href: '#metiers-dart', spy: ['metiers-dart'] },
  { label: 'Craftsmanship', href: '#craftsmanship', spy: ['craftsmanship'] },
  { label: 'Configurator', href: '#configurator', spy: ['configurator'] },
  { label: 'Legacy', href: '#legacy', spy: ['legacy'] },
  { label: 'Concierge', href: '#concierge', spy: ['concierge'] }
];

// Phone bottom tab bar
export const tabNav = [
  { label: 'Home', icon: 'home', href: '#home', spy: ['home', 'atelier-stats'] },
  { label: 'Catalog', icon: 'watch', href: '#collection', spy: ['collection', 'daytona-spotlight'] },
  { label: 'Atelier', icon: 'brush', href: '#metiers-dart', spy: ['metiers-dart', 'craftsmanship'] },
  { label: 'Configure', icon: 'tune', href: '#configurator', spy: ['configurator', 'legacy'] },
  { label: 'Salon', icon: 'meeting_room', href: '#concierge', spy: ['concierge'] }
];
