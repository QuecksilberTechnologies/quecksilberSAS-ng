import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeader } from '@shared/components';

@Component({
  selector: 'qs-our-services',
  imports: [PageHeader],
  templateUrl: './our-services.html',
  styleUrl: './our-services.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OurServices {}
