import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeader, ServiceLists, TechStacks } from '@shared/components';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'qs-our-services',
  imports: [PageHeader, ServiceLists, ProgressSpinnerModule, TechStacks],
  templateUrl: './our-services.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OurServices {}
