import type { NavItem } from './types';
import { NavView } from './types';
import { CosmicIcon, CelestialpediaIcon, LearningIcon, ChallengesIcon, SpaceSurfIcon, ScannerIcon } from './components/Icons';

export const NAV_ITEMS: NavItem[] = [
  {
    id: NavView.COSMIC_JOURNEYS,
    label: 'Cosmic Journeys',
    icon: CosmicIcon,
  },
  {
    id: NavView.CELESTIALPEDIA,
    label: 'Celestialpedia',
    icon: CelestialpediaIcon,
  },
  {
    id: NavView.LEARNING_MODULES,
    label: 'Learning Modules',
    icon: LearningIcon,
  },
  {
    id: NavView.CHALLENGES,
    label: 'Challenges',
    icon: ChallengesIcon,
  },
  {
    id: NavView.SPACE_SURF,
    label: 'Space Surf',
    icon: SpaceSurfIcon,
  },
  {
    id: NavView.RELATIVITY_SCANNER,
    label: 'Relativity Scanner',
    icon: ScannerIcon,
  },
];

export const G = 6.67430e-11; // Gravitational constant in m^3 kg^-1 s^-2
export const C = 299792458; // Speed of light in m/s
