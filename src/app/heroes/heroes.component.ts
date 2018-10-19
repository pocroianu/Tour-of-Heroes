import {Component, OnInit} from '@angular/core';
import {Hero} from "../heroClasses/hero";
import {HeroService} from "../hero-service/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
/**
 *
 */
export class HeroesComponent implements OnInit {

  public heroes: Hero[];


  /**This variable is used to store the selected hero from the list by the player */
  public selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  /**Function used to select a hero chosen by the player */
  public onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  /**
   *
   */
  public getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  /**
   *
   */
  public ngOnInit() {
    this.getHeroes();
  }

}
