import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Stats } from './components/stats/stats';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Problems } from './components/problems/problems';
import { WhyChooseUs } from './components/why-choose-us/why-choose-us';
import { Testimonials } from './components/testimonials/testimonials';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
    imports: [
    Navbar,
    Hero,
    Stats,
    About,
    Services,
    Problems,
    WhyChooseUs,
    Testimonials,
    Contact,
    Footer,
    RouterOutlet
  ],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('aadishakti-astro-vastu');
}
