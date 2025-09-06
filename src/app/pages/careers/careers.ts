import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeader, TeamLists } from '@shared/components';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'qs-careers',
  imports: [PageHeader, CardModule, NgOptimizedImage, TeamLists],
  templateUrl: './careers.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Careers {}
