import { Injectable, signal } from '@angular/core';
import { Team } from '@shared/interfaces';
import { Instagram, Linkedin, Twitter } from 'lucide-angular';

@Injectable({
  providedIn: 'root',
})
export class Teams {
  readonly teams = signal<Team[]>(this.fetchTeams());

  getTeams() {
    return this.teams();
  }

  fetchTeams() {
    return [
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
    ];
  }
}
