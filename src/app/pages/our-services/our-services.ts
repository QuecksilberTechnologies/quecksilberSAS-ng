import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { IOurService, OurService } from '@core/services/our-service';
import { PageHeader } from '@shared/components';
import { LucideAngularModule } from 'lucide-angular';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'qs-our-services',
  imports: [
    PageHeader,
    CardModule,
    LucideAngularModule,
    // NgOptimizedImage
  ],
  templateUrl: './our-services.html',
  styleUrl: './our-services.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OurServices {
  readonly #ourServices = inject(OurService);
  readonly serviceLists = signal<IOurService[]>(this.#ourServices.getServiceLists());
}
