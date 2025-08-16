import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceLists } from '@shared/components';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'qs-home',
  imports: [NgOptimizedImage, ButtonModule, LucideAngularModule, CardModule, ServiceLists],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Home {
  readonly #router = inject(Router);

  handleNavClick(route: string) {
    this.#router.navigate([route]);
  }
}
