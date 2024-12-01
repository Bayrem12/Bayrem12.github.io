import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solar-system',
  standalone: true,
  imports: [],
  templateUrl: './solar-system.component.html',
  styleUrl: './solar-system.component.css'
})
export class SolarSystemComponent {
  constructor(private router: Router) {}

  goToPlanet(planetName: string) {
    this.router.navigate(['/planets', planetName]);
  }
}