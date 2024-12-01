import { Component } from '@angular/core';
import { PlanetCardComponent } from '../planet-card/planet-card.component';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-planetspage',
  standalone: true,
  imports: [NgIf],
  templateUrl: './planetspage.component.html',
  styleUrl: './planetspage.component.css'
})
export class PlanetspageComponent {
  planets = [
    { 
      name: 'sun',
      subtitle: 'planet9', 
      image: "https://i.pinimg.com/originals/3d/e3/e1/3de3e16d804e38a3415a43d266e4f137.gif", 
      description: "Mercury is the closest planet to the Sun, and the smallest planet in our solar system - only slightly larger than Earth's Moon."
     }, 
    { 
      name: 'Mercury',
      subtitle: 'planet1', 
      image: "https://i.pinimg.com/originals/42/ba/ed/42baeddb9c19d8e5e363823463425a28.gif", 
      description: "Mercury is the closest planet to the Sun, and the smallest planet in our solar system - only slightly larger than Earth's Moon."
     }, 
    { 
      name: 'Venus', 
      subtitle: 'planet2', 
      image: "https://i.pinimg.com/736x/d6/f9/e1/d6f9e18efa63e100e95d6190c55b513e.jpg", 
      description: "Venus is the second planet from the Sun, and the sixth largest planet. It's the hottest planet in our solar system." 
    }, 
    { 
      name: 'Earth', 
      subtitle: 'planet3', 
      image: "https://i.pinimg.com/originals/fc/c6/0a/fcc60a6044f5ea1b7d16025b951ca307.gif", 
      description: "Earth - our home planet - is the third planet from the Sun, and the fifth largest planet. It's the only place we know of inhabited by living things."
    },
    { 
      name: 'Mars', 
      subtitle: 'planet4', 
      image: "https://i.pinimg.com/originals/f8/d6/88/f8d688b8b4c45922162154b35763e04c.png", 
      description: "Mars is the fourth planet from the Sun, and the seventh largest. It’s the only planet we know of inhabited entirely by robots." 
    }, 
    { 
      name: 'Jupiter', 
      subtitle: 'planet5', 
      image: "https://p7.hiclipart.com/preview/552/71/642/agar-io-jupiter-planet-solar-system-jupiter.jpg", 
      description: "Jupiter is the fifth planet from the Sun, and the largest in the solar system – more than twice as massive as the other planets combined." 
    }, 
    { 
      name: 'Saturn', 
      subtitle: 'planet6', 
      image: "https://i.pinimg.com/736x/3e/ed/03/3eed03899bfdd291450d13a059c6908a.jpg", 
      description: "Saturn is the sixth planet from the Sun, and the second largest in the solar system. It’s surrounded by beautiful rings." 
    }, 
    { 
      name: 'Uranus', 
      subtitle: 'planet7', 
      image: "https://img.freepik.com/premium-psd/uranus-planet-isolated-transparent-background_220739-145918.jpg", 
      description: "Uranus is the seventh planet from the Sun, and the third largest planet in our solar system. It appears to spin sideways." 
    }, 
    { name: 'Neptune', 
      subtitle: 'planet8', 
      image: "https://p7.hiclipart.com/preview/238/252/990/discovery-of-neptune-earth-planet-solar-system-earth.jpg", 
      description: "Neptune is the eighth, and most distant planet from the Sun. It’s the fourth-largest, and the first planet discovered with math."
    } 
  ];
  selectedPlanet: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const planetName = this.route.snapshot.paramMap.get('name');
    this.selectedPlanet = this.planets.find(planet => planet.name === planetName);
  }

}
