import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PageHeader } from '@shared/components';
import { Team } from '@shared/interfaces';
import { Instagram, Linkedin, LucideAngularModule, Twitter } from 'lucide-angular';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'qs-careers',
  imports: [PageHeader, CardModule, LucideAngularModule, NgOptimizedImage],
  templateUrl: './careers.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Careers {
  readonly teamMembers = signal<Team[]>([
    {
      name: 'Varun',
      position: 'Chief Executive Officer (Founder)',
      image: 'img/team/avatar-person.svg',
      alt: 'Varun',
      socialLinks: [
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
      ],
    },
    {
      name: 'Poonam Gupta',
      position: 'Human Resources Manager',
      image: 'img/team/avatar-person.svg',
      alt: 'Poonam Gupta',
      socialLinks: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/quecksilber-technologies-hr-06b095128',
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
      ],
    },
    {
      name: 'Deepak',
      position: 'Tech Team Lead',
      image: 'img/team/avatar-person.svg',
      alt: 'Deepak',
      socialLinks: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/deepak-rajput-779b0654',
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
      ],
    },
    {
      name: 'Sujeet',
      position: 'Senior Frontend Developer',
      image: 'img/team/avatar-person.svg',
      alt: 'Sujeet',
      socialLinks: [
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
      ],
    },
    {
      name: 'Deepesh Gupta',
      position: 'Senior Backend Developer',
      image: 'img/team/avatar-person.svg',
      alt: 'Deepesh Gupta',
      socialLinks: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/deepesh-gupta-06a436296',
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
      ],
    },
    {
      name: 'Abhishek',
      position: 'Senior DevOps Engineer',
      image: 'img/team/avatar-person.svg',
      alt: 'Abhishek',
      socialLinks: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/abhishek-kanojia-58312716b',
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
      ],
    },
  ]);
}
