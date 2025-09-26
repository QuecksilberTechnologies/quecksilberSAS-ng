import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageHeader } from '@shared/components';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'qs-products',
  imports: [PageHeader, CardModule, BadgeModule, RouterModule],
  templateUrl: './products.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Products {}
