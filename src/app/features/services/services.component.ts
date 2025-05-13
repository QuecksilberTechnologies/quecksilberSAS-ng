import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'qs-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ServicesComponent {
  serviceLists = [
    {
      icon: '💻',
      title: 'Web Development',
      description:
        'Custom web applications and responsive websites built with modern technologies.',
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
    },
    {
      icon: '🤖',
      title: 'AI Agents',
      description: 'Custom AI agents and chatbots to automate and enhance your business processes.',
    },
    {
      icon: '✨',
      title: 'Vibe Coding',
      description:
        "Modern, aesthetic, and user-friendly interfaces that capture your brand's essence.",
    },
    {
      icon: '🔗',
      title: 'AI Integration',
      description:
        'Seamless integration of AI technologies into your existing systems and workflows.',
    },
  ];
}
