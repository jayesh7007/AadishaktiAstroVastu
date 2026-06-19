import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
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
      icon: 'fa-star',
      title: 'Horoscope & Birth Chart',
      description: 'Detailed analysis of your birth chart and personalized horoscope readings'
    },
    {
      icon: 'fa-briefcase',
      title: 'Career & Business',
      description: 'Expert guidance for career advancement and business success'
    },
    {
      icon: 'fa-coins',
      title: 'Finance & Wealth',
      description: 'Wealth astrology and financial guidance for prosperity'
    },
    {
      icon: 'fa-book',
      title: 'Education & Study',
      description: 'Astrological solutions for academic excellence and learning'
    },
    {
      icon: 'fa-ring',
      title: 'Marriage & Compatibility',
      description: 'Matchmaking and marital compatibility analysis'
    },
    {
      icon: 'fa-heart',
      title: 'Love & Relationships',
      description: 'Solutions for relationship issues and love concerns'
    },
    {
      icon: 'fa-baby',
      title: 'Childbirth & Progeny',
      description: 'Progeny astrology and auspicious timing for childbirth'
    },
    {
      icon: 'fa-stethoscope',
      title: 'Health & Medical',
      description: 'Health predictions and medical astrology consultations'
    },
    {
      icon: 'fa-plane',
      title: 'Foreign Settlement',
      description: 'Guidance for international relocation and visa success'
    },
    {
      icon: 'fa-hand',
      title: 'Palmistry',
      description: 'Palm reading and life line analysis for your future'
    },
    {
      icon: 'fa-calculator',
      title: 'Numerology',
      description: 'Numerology analysis and lucky number predictions'
    },
    {
      icon: 'fa-home',
      title: 'Vastu Consultation',
      description: 'Home and office Vastu solutions for positive energy'
    },
    {
      icon: 'fa-clock',
      title: 'Auspicious Timing',
      description: 'Muhurat calculations for important life events'
    }
  ];
}
