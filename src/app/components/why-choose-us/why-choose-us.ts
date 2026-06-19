import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Reason {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-choose-us',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyChooseUs {
  reasons: Reason[] = [
    { icon: 'fa-award', title: 'Expert Guidance', description: 'Certified astrologist with proven expertise' },
    { icon: 'fa-user-shield', title: 'Confidential', description: 'Your privacy and anonymity respected' },
    { icon: 'fa-headset', title: '24/7 Availability', description: 'Always available for consultations' },
    { icon: 'fa-check-double', title: 'Accurate Readings', description: 'Precision in every prediction' },
    { icon: 'fa-bolt', title: 'Quick Solutions', description: 'Effective remedies for your concerns' },
    { icon: 'fa-globe', title: 'Global Reach', description: 'Serving clients worldwide online' }
  ];
}
