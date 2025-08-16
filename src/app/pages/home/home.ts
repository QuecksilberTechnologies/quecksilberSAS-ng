import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { IOurService, OurService } from '@core/services/our-service';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'qs-home',
  imports: [NgOptimizedImage, ButtonModule, LucideAngularModule, CardModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Home {
  readonly #router = inject(Router);
  readonly #ourServices = inject(OurService);
  readonly serviceLists = signal<IOurService[]>(this.#ourServices.getServiceLists());

  handleNavClick(route: string) {
    this.#router.navigate([route]);
  }
}
