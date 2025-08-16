import { Injectable, signal } from '@angular/core';
import { Bot, Laptop, Link, Lock, LucideIconData, Phone, Sparkle } from 'lucide-angular';

export interface IOurService {
  icon: LucideIconData;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class OurService {
  readonly serviceLists = signal<IOurService[]>([
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

  getServiceLists() {
    return this.serviceLists();
  }
}
