import { Injectable, signal } from '@angular/core';
import { Team } from '@shared/interfaces';
import { Linkedin } from 'lucide-angular';

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
        position: 'Investor',
        image: 'img/team/3.png',
        alt: 'Varun',
        socialLinks: [
          {
            name: 'LinkedIn',
            url: '',
            icon: Linkedin,
            ariaLabel: 'LinkedIn',
          },
          // {
          //   name: 'X',
          //   url: '',
          //   icon: Twitter,
          //   ariaLabel: 'x',
          // },
          // {
          //   name: 'Instagram',
          //   url: '',
          //   icon: Instagram,
          //   ariaLabel: 'Instagram',
          // },
        ],
      },
      {
        name: 'Deepesh Gupta',
        position: 'Chief Executive Officer (Founder)',
        image: 'img/team/38.png',
        alt: 'Deepesh Gupta',
        socialLinks: [
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/deepesh-gupta-06a436296',
            icon: Linkedin,
            ariaLabel: 'LinkedIn',
          },
        ],
      },
      {
        name: 'Poonam Gupta',
        position: 'Director of Operations',
        image: 'img/team/Poonam-Gupta.jpg',
        alt: 'Poonam Gupta',
        socialLinks: [
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/poonam-gupta-bb91a03a5',
            icon: Linkedin,
            ariaLabel: 'LinkedIn',
          },
        ],
      },
      {
        name: 'Deepak',
        position: 'Senior Architect',
        image: 'img/team/18.png',
        alt: 'Deepak',
        socialLinks: [
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/deepak-rajput-779b0654',
            icon: Linkedin,
            ariaLabel: 'LinkedIn',
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
        ],
      },
      {
        name: 'Pallavi Vishwakarma',
        position: 'Junior developer',
        image: 'img/team/Pallavi-Vishwakarma.jpg',
        alt: 'Pallavi Vishwakarma',
        socialLinks: [
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/pallavi00',
            icon: Linkedin,
            ariaLabel: 'LinkedIn',
          },
        ],
      },
      {
        name: 'Riya Sharnagat',
        position: 'Intern',
        image: 'img/team/Riya-Sharnagat.jpg',
        alt: 'Riya Sharnagat',
        socialLinks: [
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/riya-sharnagat-9b8923293',
            icon: Linkedin,
            ariaLabel: 'LinkedIn',
          }
        ]        
      },
      {
        name: 'Sakshi Pardhi',
        position: 'Intern',
        image: 'img/team/SakshiPardhi.png',
        alt: 'Sakshi Pardhi',
        socialLinks: [
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/sakshi-pardhi-6243212a5',
            icon: Linkedin,
            ariaLabel: 'LinkedIn',
          }
        ]        
      },
      {
        name: 'Shatakshi Kaushik',
        position: 'Marketing Intern',
        image: 'img/team/Shatakshi-Kaushik.jpeg',
        alt: 'Shatakshi Kaushik',
        socialLinks: [
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/shatakshi427',
            icon: Linkedin,
            ariaLabel: 'LinkedIn',
          }
        ]        
      },
    ];
  }
}
