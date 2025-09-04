import { LucideIconData } from 'lucide-angular';

export interface Team {
  name: string;
  position: string;
  image: string;
  alt: string;
  socialLinks?: TeamSocialLink[];
}

export interface TeamSocialLink {
  name: string;
  url: string;
  icon: LucideIconData;
  ariaLabel: string;
}
