import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeader, TeamLists } from '@shared/components';
import { Code, LucideAngularModule, Server, Shield } from 'lucide-angular';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'qs-about',
  imports: [PageHeader, NgOptimizedImage, LucideAngularModule, CardModule, TeamLists],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class About {
  protected items = [
    {
      text: 'Expertise Across Domains: Full-stack development, AI, cloud, and product engineering',
      icon: Server,
    },
    {
      text: 'Driven by Impact: A passionate team dedicated to solving real-world problems through technology',
      icon: Code,
    },
    {
      text: 'Trusted Worldwide: Partnering with startups and enterprises to accelerate growth and innovation',
      icon: Shield,
    },
  ];
}
