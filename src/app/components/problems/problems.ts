import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Problem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-problems',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './problems.html',
  styleUrl: './problems.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Problems {
  problems: Problem[] = [
    { icon: 'fa-heart', title: 'Marriage Problems', description: 'Resolve conflicts and strengthen relationships with astrological guidance' },
    { icon: 'fa-briefcase', title: 'Career Obstacles', description: 'Overcome workplace challenges and advance your professional life' },
    { icon: 'fa-coins', title: 'Financial Issues', description: 'Attract wealth and achieve lasting financial stability' },
    { icon: 'fa-book', title: 'Education Struggles', description: 'Improve academic performance and focus with remedies' },
    { icon: 'fa-stethoscope', title: 'Health Concerns', description: 'Holistic wellness through medical astrology insights' },
    { icon: 'fa-users', title: 'Family Disputes', description: 'Harmonize family relationships and restore peace' },
    { icon: 'fa-brain', title: 'Mental Peace', description: 'Find inner calm, clarity and relief from anxiety' },
    { icon: 'fa-ring', title: 'Relationship Issues', description: 'Love and compatibility guidance for lasting bonds' }
  ];
}
