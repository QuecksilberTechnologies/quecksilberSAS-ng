import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeader } from '@shared/components';

@Component({
  selector: 'qs-contact',
  imports: [PageHeader],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Contact {}
