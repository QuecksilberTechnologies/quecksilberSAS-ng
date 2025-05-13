import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'qs-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutComponent {
  items = [
    'Full-stack development, AI, cloud, product engineering',
    'Passionate team solving real-world problems through code',
    'Trusted by startups and enterprises alike',
  ];
}
