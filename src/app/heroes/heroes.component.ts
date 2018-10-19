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
  heroes: Hero[];

  /**
   *
   * @param heroService
   */
  constructor(private heroService: HeroService) {
  }

  /**
   *
   */
  public ngOnInit() {
    this.getHeroes();
  }

  /**
   *
   */
  public getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
