import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Instagram, Linkedin, Threads, Twitter } from '@shared/icons';
import { FooterSocialLink } from '@shared/interfaces';

@Component({
  selector: 'qs-footer',
  imports: [Linkedin, Twitter, Instagram, Threads, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly socialLinks = signal<FooterSocialLink[]>([
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/quecksilber-technologies-hr-06b095128',
      ariaLabel: 'LinkedIn',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/quecksilber-technologies',
      ariaLabel: 'x',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/quecksilber-technologies',
      ariaLabel: 'Instagram',
    },
    {
      name: 'Threads',
      url: 'https://www.threads.com/quecksilber-technologies',
      ariaLabel: 'Threads',
    },
  ]);
}
