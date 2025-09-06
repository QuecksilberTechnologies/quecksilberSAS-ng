import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PageHeader } from '@shared/components';
import { Team } from '@shared/interfaces';
import {
  Code,
  Instagram,
  Linkedin,
  LucideAngularModule,
  Server,
  Shield,
  Twitter,
} from 'lucide-angular';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'qs-about',
  imports: [PageHeader, NgOptimizedImage, LucideAngularModule, CardModule],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class About {
  items = [
    {
      text: 'Expertise Across Domains: Full-stack development, AI, cloud, and product engineering',
      icon: Server,
    },
    {
      text: 'Driven by Impact: A passionate team dedicated to solving real-world problems through technology',
      icon: Code,
    },
    {
      text: 'Trusted Worldwide: Partnering with startups and enterprises to accelerate growth and innovation',
      icon: Shield,
    },
  ];

  readonly teamMembers = signal<Team[]>([
    {
      name: 'Varun',
      position: 'Chief Executive Officer (Founder)',
      image: 'img/team/3.png',
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
      position: 'Human Resources Manager (HR)',
      image: 'img/team/73.png',
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
      image: 'img/team/18.png',
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
      image: 'img/team/47.png',
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
      image: 'img/team/38.png',
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
      image: 'img/team/41.png',
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
