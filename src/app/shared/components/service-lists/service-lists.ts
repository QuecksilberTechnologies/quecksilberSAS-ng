import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { IOurService, OurService } from '@core/services/our-service';
import { LucideAngularModule } from 'lucide-angular';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'qs-service-lists',
  imports: [CardModule, LucideAngularModule],
  templateUrl: './service-lists.html',
  styleUrl: './service-lists.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceLists {
  readonly #ourServices = inject(OurService);
  readonly serviceLists = signal<IOurService[]>(this.#ourServices.getServiceLists());
}
