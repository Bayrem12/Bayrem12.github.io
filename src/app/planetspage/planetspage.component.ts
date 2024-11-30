import { Component } from '@angular/core';
import { PlanetCardComponent } from '../planet-card/planet-card.component';

@Component({
  selector: 'app-planetspage',
  standalone: true,
  imports: [PlanetCardComponent],
  templateUrl: './planetspage.component.html',
  styleUrl: './planetspage.component.css'
})
export class PlanetspageComponent {
  planets = [
    { 
      name: 'Mercury',
      subtitle: 'planet1', 
      image: "https://static.wikia.nocookie.net/thesolarsystem6361/images/4/41/Mercury.png/revision/latest?cb=20221208101853", 
      description: "Mercury is the closest planet to the Sun, and the smallest planet in our solar system - only slightly larger than Earth's Moon."
     }, 
    { 
      name: 'Venus', 
      subtitle: 'planet2', 
      image: "https://i2.pngimg.me/thumb/f/720/comdlpng6972890.jpg", 
      description: "Venus is the second planet from the Sun, and the sixth largest planet. It's the hottest planet in our solar system." 
    }, 
    { 
      name: 'Earth', 
      subtitle: 'planet3', 
      image: "https://p1.hiclipart.com/preview/148/398/515/unrestricted-planet-earth-planet-earth-png-clipart.jpg", 
      description: "Earth – our home planet – is the third planet from the Sun, and the fifth largest planet. It's the only place we know of inhabited by living things."
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
      image: "https://i2.pngimg.me/thumb/f/720/m2i8H7m2G6G6Z5A0.jpg", 
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

}
