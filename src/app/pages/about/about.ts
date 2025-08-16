import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeader } from '@shared/components';
import { Code, LucideAngularModule, Server, Shield } from 'lucide-angular';

@Component({
  selector: 'qs-about',
  imports: [PageHeader, NgOptimizedImage, LucideAngularModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class About {
  items = [
    {
      text: 'Full-stack development, AI, cloud, product engineering',
      icon: Server,
    },
    {
      text: 'Passionate team solving real-world problems through code',
      icon: Code,
    },
    {
      text: 'Trusted by startups and enterprises alike',
      icon: Shield,
    },
  ];
}
