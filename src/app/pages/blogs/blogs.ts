import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeader } from '@shared/components';

@Component({
  selector: 'qs-blogs',
  imports: [PageHeader],
  templateUrl: './blogs.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Blogs {}
