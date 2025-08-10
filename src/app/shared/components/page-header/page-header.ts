import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'qs-page-header',
  imports: [],
  templateUrl: './page-header.html',
  styleUrl: './page-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeader {
  readonly pageTitle = input<string>();
  readonly pageDescription = input<string>();
}
