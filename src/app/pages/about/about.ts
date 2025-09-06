import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Teams } from '@core/services/teams';
import { PageHeader } from '@shared/components';
import { Team } from '@shared/interfaces';
import { Code, LucideAngularModule, Server, Shield } from 'lucide-angular';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'qs-about',
  imports: [PageHeader, NgOptimizedImage, LucideAngularModule, CardModule],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class About {
  readonly #teams = inject(Teams);
  readonly teamMembers = signal<Team[]>(this.#teams.getTeams());

  protected items = [
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
}
