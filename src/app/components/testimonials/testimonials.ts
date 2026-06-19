import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  title: string;
  feedback: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      name: 'Priya Sharma',
      title: 'Business Owner',
      feedback: 'Shri Joshi\'s guidance completely transformed my business. His career astrology advice was exactly what I needed!',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      title: 'Software Engineer',
      feedback: 'Accurate horoscope readings and practical remedies. Highly recommend for anyone seeking genuine astrological help.',
      rating: 5
    },
    {
      name: 'Rajini Desai',
      title: 'Homemaker',
      feedback: 'The marriage compatibility analysis was spot on. Our relationship has improved significantly after the consultation.',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      title: 'Entrepreneur',
      feedback: 'Best investment I made in myself. Vastu consultation brought positive energy to my home and office.',
      rating: 5
    }
  ];
}
