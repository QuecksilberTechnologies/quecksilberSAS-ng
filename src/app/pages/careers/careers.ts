import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Teams } from '@core/services/teams';
import { PageHeader } from '@shared/components';
import { Team } from '@shared/interfaces';
import { LucideAngularModule } from 'lucide-angular';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'qs-careers',
  imports: [PageHeader, CardModule, LucideAngularModule, NgOptimizedImage],
  templateUrl: './careers.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Careers {
  readonly #teams = inject(Teams);
  readonly teamMembers = signal<Team[]>(this.#teams.getTeams());
}
