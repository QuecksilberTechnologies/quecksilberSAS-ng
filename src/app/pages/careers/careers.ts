import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PageHeader } from '@shared/components';
import { Team } from '@shared/interfaces';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'qs-careers',
  imports: [PageHeader, CardModule],
  templateUrl: './careers.html',
  styleUrl: './careers.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Careers {
  teamMembers = signal<Team[]>([
    {
      name: 'Varun',
      position: 'Chief Executive Officer (Founder)',
      image: 'img/team/avatar-person.svg',
      alt: 'Varun',
    },
    {
      name: 'Poonam Gupta',
      position: 'Human Resources Manager',
      image: 'img/team/avatar-person.svg',
      alt: 'Poonam Gupta',
    },
    {
      name: 'Deepak',
      position: 'Tech Team Lead',
      image: 'img/team/avatar-person.svg',
      alt: 'Deepak',
    },
    {
      name: 'Sujeet',
      position: 'Senior Frontend Developer',
      image: 'img/team/avatar-person.svg',
      alt: 'Sujeet',
    },
    {
      name: 'Deepesh Gupta',
      position: 'Senior Backend Developer',
      image: 'img/team/avatar-person.svg',
      alt: 'Deepesh Gupta',
    },

    {
      name: 'Abhishek',
      position: 'Senior DevOps Engineer',
      image: 'img/team/avatar-person.svg',
      alt: 'Abhishek',
    },
  ]);
}
