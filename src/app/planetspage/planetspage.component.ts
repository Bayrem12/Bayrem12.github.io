import { Component } from '@angular/core';

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
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Venus_Rotation_Movie.gif/640px-Venus_Rotation_Movie.gif", 
      description: "Venus is the second planet from the Sun, and the sixth largest planet. It's the hottest planet in our solar system." 
    }, 
    { 
      name: 'Earth', 
      subtitle: 'planet3', 
      image: "https://i.pinimg.com/originals/b6/98/f5/b698f5cc2ca55f1e9285696f92bb0ae4.gif", 
      description: "Earth - our home planet - is the third planet from the Sun, and the fifth largest planet. It's the only place we know of inhabited by living things."
    },
    { 
      name: 'Mars', 
      subtitle: 'planet4', 
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/573633121359165.60c3f5cc6b35e.gif", 
      description: "Mars is the fourth planet from the Sun, and the seventh largest. It’s the only planet we know of inhabited entirely by robots." 
    }, 
    { 
      name: 'Jupiter', 
      subtitle: 'planet5', 
      image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Voyager_Jupiter_Rotation_Movie.gif", 
      description: "Jupiter is the fifth planet from the Sun, and the largest in the solar system – more than twice as massive as the other planets combined." 
    }, 
    { 
      name: 'Saturn', 
      subtitle: 'planet6', 
      image: "https://media.tenor.com/X41MtjA-OJUAAAAM/mercury-space.gif", 
      description: "Saturn is the sixth planet from the Sun, and the second largest in the solar system. It’s surrounded by beautiful rings." 
    }, 
    { 
      name: 'Uranus', 
      subtitle: 'planet7', 
      image: "https://i.gifer.com/PAx.gif", 
      description: "Uranus is the seventh planet from the Sun, and the third largest planet in our solar system. It appears to spin sideways." 
    }, 
    { name: 'Neptune', 
      subtitle: 'planet8', 
      image: "https://i.gifer.com/origin/e6/e6b88fc1488ae2cdf5758d17b7ac94a5_w200.gif", 
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
