import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
  Bot,
  Laptop,
  Link,
  Lock,
  LucideAngularModule,
  LucideIconData,
  Phone,
  Sparkle,
} from 'lucide-angular';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

export interface OurService {
  icon: LucideIconData;
  title: string;
  description: string;
}

@Component({
  selector: 'qs-home',
  imports: [NgOptimizedImage, ButtonModule, LucideAngularModule, CardModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Home {
  readonly #router = inject(Router);

  handleNavClick(route: string) {
    this.#router.navigate([route]);
  }

  readonly serviceLists = signal<OurService[]>([
    {
      icon: Laptop,
      title: 'Web Development',
      description:
        'Custom web applications and responsive websites built with modern technologies.',
    },
    {
      icon: Phone, //'📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
    },
    {
      icon: Lock, //'🔒',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
    },
    {
      icon: Bot, //'🤖',
      title: 'AI Agents',
      description: 'Custom AI agents and chatbots to automate and enhance your business processes.',
    },
    {
      icon: Sparkle, //'✨',
      title: 'Vibe Coding',
      description:
        "Modern, aesthetic, and user-friendly interfaces that capture your brand's essence.",
    },
    {
      icon: Link, // '🔗',
      title: 'AI Integration',
      description:
        'Seamless integration of AI technologies into your existing systems and workflows.',
    },
  ]);
}
