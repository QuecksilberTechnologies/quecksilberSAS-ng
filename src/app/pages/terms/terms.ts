import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeader } from '@shared/components';

@Component({
  selector: 'qs-terms',
  imports: [PageHeader],
  templateUrl: './terms.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Terms {}
