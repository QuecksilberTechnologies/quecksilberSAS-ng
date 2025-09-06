import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Instagram, Linkedin, LucideAngularModule, LucideIconData, Twitter } from 'lucide-angular';

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIconData;
  ariaLabel: string;
}

@Component({
  selector: 'qs-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly socialLinks = signal<SocialLink[]>([
    {
      name: 'LinkedIn',
      url: '',
      icon: Linkedin,
      ariaLabel: 'LinkedIn',
    },
    {
      name: 'X',
      url: '',
      icon: Twitter,
      ariaLabel: 'x',
    },
    {
      name: 'Instagram',
      url: '',
      icon: Instagram,
      ariaLabel: 'Instagram',
    },
    // {
    //   name: 'Bsky',
    //   url: 'https://bsky.app',
    //   icon: Twitter,
    //   ariaLabel: 'bsky',
    // },
  ]);
}
