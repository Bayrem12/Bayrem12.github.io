import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======
import { Router } from '@angular/router';
>>>>>>> feature/planet_pages

@Component({
  selector: 'app-solar-system',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './solar-system.component.html',
  styleUrl: './solar-system.component.css'
})
export class SolarSystemComponent {
  constructor(private router: Router) {}

  goToPlanet(planetName: string) {
    this.router.navigate(['/planets', planetName]);
  }
}