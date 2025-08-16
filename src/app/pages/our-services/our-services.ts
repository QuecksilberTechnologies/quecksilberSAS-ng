import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeader, ServiceLists } from '@shared/components';

@Component({
  selector: 'qs-our-services',
  imports: [PageHeader, ServiceLists],
  templateUrl: './our-services.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OurServices {}
