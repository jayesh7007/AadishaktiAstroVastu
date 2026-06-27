import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {
  services: Service[] = [
    {
      image: '/Horoscope & Birth Chart.jpg',
      title: 'Horoscope & Birth Chart',
      description: 'Detailed analysis of your birth chart and personalized horoscope readings'
    },
    {
      image: '/Career & Business.jpg',
      title: 'Career & Business',
      description: 'Expert guidance for career advancement and business success'
    },
    {
      image: '/Finance & Wealth.jpg',
      title: 'Finance & Wealth',
      description: 'Wealth astrology and financial guidance for prosperity'
    },
    {
      image: '/Education & Study.jpg',
      title: 'Education & Study',
      description: 'Astrological solutions for academic excellence and learning'
    },
    {
      image: '/Marriage & Compatibility.jpg',
      title: 'Marriage & Compatibility',
      description: 'Matchmaking and marital compatibility analysis'
    },
    {
      image: '/Love & Relationships.jpg',
      title: 'Love & Relationships',
      description: 'Solutions for relationship issues and love concerns'
    },
    {
      image: '/Childbirth & Progeny.jpg',
      title: 'Childbirth & Progeny',
      description: 'Progeny astrology and auspicious timing for childbirth'
    },
    {
      image: '/Health & Medical.jpeg',
      title: 'Health & Medical',
      description: 'Health predictions and medical astrology consultations'
    },
    {
      image: '/Foreign Settlement.jpg',
      title: 'Foreign Settlement',
      description: 'Guidance for international relocation and visa success'
    },
    {
      image: '/Palmistry.jpg',
      title: 'Palmistry',
      description: 'Palm reading and life line analysis for your future'
    },
    {
      image: '/Numerology.jpg',
      title: 'Numerology',
      description: 'Numerology analysis and lucky number predictions'
    },
    {
      image: '/Vastu Consultation.jpg',
      title: 'Vastu Consultation',
      description: 'Home and office Vastu solutions for positive energy'
    },
    {
      image: '/Auspicious Timing.jpg',
      title: 'Auspicious Timing',
      description: 'Muhurat calculations for important life events'
    }
  ];
}
