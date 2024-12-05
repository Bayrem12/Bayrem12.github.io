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
      description: " The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system.Its gravity holds the solar system together, keeping everything – from the biggest planets to the smallest particles of debris – in its orbit. The connection and interactions between the Sun and Earth drive the seasons, ocean currents, weather, climate, radiation belts and auroras. Though it is special to us, there are billions of stars like our Sun scattered across the Milky Way galaxy.The Sun has many names in many cultures. The Latin word for Sun is “sol,” which is the main adjective for all things Sun-related: solar."
     }, 
    { 
      name: 'Mercury',
      subtitle: 'planet1', 
      image: "https://i.pinimg.com/originals/42/ba/ed/42baeddb9c19d8e5e363823463425a28.gif", 
      description: "Mercury is the smallest planet in our solar system and the nearest to the Sun.Mercury is only slightly larger than Earth's Moon. Its surface is covered in tens of thousands of impact craters. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere. But Mercury is the fastest planet, zipping around the Sun every 88 Earth days. Mercury is appropriately named for the swiftest of the ancient Roman gods."
     }, 
    { 
      name: 'Venus', 
      subtitle: 'planet2', 
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Venus_Rotation_Movie.gif/640px-Venus_Rotation_Movie.gif", 
      description: "Venus is the second planet from the Sun, and the sixth largest planet. It’s the hottest planet in our solar system. Venus is a cloud-swaddled planet named for a love goddess, and often called Earth’s twin. But pull up a bit closer, and Venus turns hellish. Our nearest planetary neighbor, the second planet from the Sun, has a surface hot enough to melt lead. The atmosphere is so thick that, from the surface, the Sun is just a smear of light." 
    }, 
    { 
      name: 'Earth', 
      subtitle: 'planet3', 
      image: "https://i.pinimg.com/originals/b6/98/f5/b698f5cc2ca55f1e9285696f92bb0ae4.gif", 
      description: 'While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal. Earth is the only planet in the solar system whose English name does not come from Greek or Roman mythology. The name was taken from Old English and Germanic. It simply means "the ground." There are, of course, many names for our planet in the thousands of languages spoken by the people of the third planet from the Sun.'
    },
    { 
      name: 'Mars', 
      subtitle: 'planet4', 
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/573633121359165.60c3f5cc6b35e.gif", 
      description: "Mars is no place for the faint-hearted. It’s dry, rocky, and bitter cold. The fourth planet from the Sun, Mars, is one of Earth's two closest planetary neighbors (Venus is the other). Mars is one of the easiest planets to spot in the night sky — it looks like a bright red point of light.Despite being inhospitable to humans, robotic explorers — like NASA's Perseverance rover and Mars Reconnaissance Orbiter — serve as pathfinders to eventually get astronauts to the surface of the Red Planet." 
    }, 
    { 
      name: 'Jupiter', 
      subtitle: 'planet5', 
      image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Voyager_Jupiter_Rotation_Movie.gif", 
      description: "Jupiter is a world of extremes.Jupiter is the largest planet in our solar system. If Jupiter was a hollow shell, 1,000 Earths could fit inside. Jupiter also is the oldest planet, forming from the dust and gases left over from the Sun's formation 4.5 billion years ago. But it has the shortest day in the solar system, taking only 10.5 hours to spin around once on its axis." 
    }, 
    { 
      name: 'Saturn', 
      subtitle: 'planet6', 
      image: "https://media.tenor.com/X41MtjA-OJUAAAAM/mercury-space.gif", 
      description: "Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets.Saturn is a massive ball made mostly of hydrogen and helium. The farthest planet from Earth discovered by the unaided human eye, Saturn has been known since ancient times. The planet is named for the Roman god of agriculture and wealth, who was also the father of Jupiter." 
    }, 
    { 
      name: 'Uranus', 
      subtitle: 'planet7', 
      image: "https://i.gifer.com/PAx.gif", 
      description: "Uranus is the seventh planet from the Sun, and it's the third largest planet in our solar system – about four times wider than Earth.Uranus is a very cold and windy planet. It is surrounded by faint rings, and more than two dozen small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side. Uranus is blue-green in color due to large amounts of methane, which absorbs red light but allows blues to be reflected back into space." 
    }, 
    { name: 'Neptune', 
      subtitle: 'planet8', 
      image: "https://i.gifer.com/origin/e6/e6b88fc1488ae2cdf5758d17b7ac94a5_w200.gif", 
      description: "Dark, cold and whipped by supersonic winds, giant Neptune is the eighth and most distant major planet orbiting our Sun. More than 30 times as far from the Sun as Earth, Neptune is not visible to the naked eye. The planet’s blue color comes from methane in its atmosphere, which absorbs red wavelengths of light, but allows blue ones to be reflected back into space – very much like its neighbor, Uranus. Neptune was the first planet located using math. German astronomer Johann Galle was the first to observe the planet in 1846. The planet is named after the Roman god of the sea."
    } 
  ];
  selectedPlanet: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const planetName = this.route.snapshot.paramMap.get('name');
    this.selectedPlanet = this.planets.find(planet => planet.name === planetName);
  }

}
