import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { Teams } from '@core/services/teams';
import { Team } from '@shared/interfaces';
import { LucideAngularModule } from 'lucide-angular';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'qs-team-lists',
  imports: [CardModule, LucideAngularModule, NgOptimizedImage],
  templateUrl: './team-lists.html',
  styleUrl: './team-lists.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamLists {
  readonly #teams = inject(Teams);
  readonly teamMembers = signal<Team[]>(this.#teams.getTeams());
  readonly heading = input<string>('');
  readonly subHeading = input<string>('');
}
