import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';                       // Imports the Hero class from hero.ts
import { HeroService } from '../hero.service';        // Imports the HeroService

@Component({                                          // Decorator marking this as a component. Determines processes at run time
  selector: 'app-heroes',                             // The CSS selector that identifies and triggers the 'app-heroes' directive.
  templateUrl: './heroes.component.html',             // Uses the heroes.component.html as a template file for this component.
  styleUrls: ['./heroes.component.scss']              // Uses the heroes.component.scss as the CSS stylesheet for this component.
})

export class HeroesComponent implements OnInit {      // initializes things.

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    // Reserve the constructor for simple initialization such as wiring constructor parameters to properties.
    // The constructor shouldn't do anything.
  }

  ngOnInit() {  // called after constructor. additional initialization
    this.getHeroes();
  }

  onSelect(hero: Hero): void {      // when clicked, assignes the parameter as the selectedHero
    this.selectedHero = hero;
    // this.playAudio();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    // asynchronously emits the array of heroes and sets the compenent's hero property
  }

  playAudio() {
    const audio = new Audio();
    // const path = 'C:/Users/phwang/code/my-app/Sounds/';
    // const file = this.selectedHero.name;
    audio.src =  'C:/Users/phwang/code/my-app/Sounds/The_Quickster'; // path.concat(file);
    audio.load();
    audio.play();
  }
}
