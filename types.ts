export enum NavView {
  COSMIC_JOURNEYS = 'COSMIC_JOURNEYS',
  CELESTIALPEDIA = 'CELESTIALPEDIA',
  LEARNING_MODULES = 'LEARNING_MODULES',
  CHALLENGES = 'CHALLENGES',
  SPACE_SURF = 'SPACE_SURF',
  RELATIVITY_SCANNER = 'RELATIVITY_SCANNER',
}

export interface NavItem {
  id: NavView;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}
