import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  number: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-stats',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Stats {
  stats: Stat[] = [
    { number: '30K+', label: 'Satisfied Clients', icon: 'fa-users' },
    { number: '10+', label: 'Years Experience', icon: 'fa-calendar' },
    { number: '100%', label: 'Client Success', icon: 'fa-check' },
    { number: '15+', label: 'Countries Served', icon: 'fa-globe' }
  ];
}
