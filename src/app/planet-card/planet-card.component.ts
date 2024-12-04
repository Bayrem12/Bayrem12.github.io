import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-planet-card',
  standalone: true,
  imports: [],
  templateUrl: './planet-card.component.html',
  styleUrl: './planet-card.component.css'
})
export class PlanetCardComponent {
  @Input() planet: any;
}
