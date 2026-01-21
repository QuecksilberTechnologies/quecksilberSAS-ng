import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Instagram, Linkedin, Twitter, Youtube } from '@shared/icons';
import { FooterSocialLink } from '@shared/interfaces';

@Component({
  selector: 'qs-footer',
  imports: [Linkedin, Twitter, Instagram, RouterModule, Youtube],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly socialLinks = signal<FooterSocialLink[]>([
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/quecksilber-technologies',
      ariaLabel: 'LinkedIn',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Quecksilbe11165',
      ariaLabel: 'x',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/quecksilber999',
      ariaLabel: 'Instagram',
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/@quecksilbertechnologies5555',
      ariaLabel: 'Youtube',
    },
  ]);
}
