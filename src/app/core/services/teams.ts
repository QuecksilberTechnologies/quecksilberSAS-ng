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
        name: 'Varun Viswaari',
        position: 'Founder & CEO',
        image: 'https://placehold.net/9.png',
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
        name: 'Poonam Gupta',
        position: 'Head of Operations',
        image: 'https://placehold.net/3.png',
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
        position: 'Lead Solutions Architect',
        image: 'https://placehold.net/7.png',
        alt: 'Deepak',
        socialLinks: [
          {
            name: 'LinkedIn',
            url: '',
            icon: Linkedin,
            ariaLabel: 'LinkedIn',
          },
        ],
      },
      {
        name: 'Abhishek',
        position: 'Lead DevOps Engineer',
        image: 'https://placehold.net/10.png',
        alt: 'Abhishek',
        socialLinks: [
          {
            name: 'LinkedIn',
            url: '',
            icon: Linkedin,
            ariaLabel: 'LinkedIn',
          },
        ],
      },
      {
        name: 'Deepesh Gupta',
        position: 'Lead Backend Developer',
        image: 'https://placehold.net/8.png',
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
        name: 'Pallavi Vishwakarma',
        position: 'Software Engineer',
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
        position: 'Software Engineer',
        image: 'img/team/Riya-Sharnagat.jpg',
        alt: 'Riya Sharnagat',
        socialLinks: [
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/riya-sharnagat-9b8923293',
            icon: Linkedin,
            ariaLabel: 'LinkedIn',
          },
        ],
      },
      {
        name: 'Sakshi Pardhi',
        position: 'Software Engineer',
        image: 'img/team/SakshiPardhi.png',
        alt: 'Sakshi Pardhi',
        socialLinks: [
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/sakshi-pardhi-6243212a5',
            icon: Linkedin,
            ariaLabel: 'LinkedIn',
          },
        ],
      },
      {
        name: 'Shatakshi Kaushik',
        position: 'Growth Marketing',
        image: 'img/team/Shatakshi-Kaushik.jpeg',
        alt: 'Shatakshi Kaushik',
        socialLinks: [
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/shatakshi427',
            icon: Linkedin,
            ariaLabel: 'LinkedIn',
          },
        ],
      },
    ];
  }
}
