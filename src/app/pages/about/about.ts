import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeader } from '@shared/components';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'qs-about',
  imports: [PageHeader, NgOptimizedImage],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class About {
  items = [
    'Full-stack development, AI, cloud, product engineering',
    'Passionate team solving real-world problems through code',
    'Trusted by startups and enterprises alike',
  ];
}
