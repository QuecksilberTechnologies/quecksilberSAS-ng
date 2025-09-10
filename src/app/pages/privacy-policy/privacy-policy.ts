import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeader } from '@shared/components';

@Component({
  selector: 'qs-privacy-policy',
  imports: [PageHeader],
  templateUrl: './privacy-policy.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PrivacyPolicy {}
