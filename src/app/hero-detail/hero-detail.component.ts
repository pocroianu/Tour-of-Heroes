import {Component, OnInit, Input} from '@angular/core';
import {Hero} from "../heroClasses/hero";
import {HeroService} from "../hero-service/hero.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
/**
 *
 */
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  /**
   *
   * @param route
   * @param heroService
   * @param location
   */
  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) {
  }

  /**
   *
   */
  public ngOnInit(): void {
    this.getHero();
  }

  /**
   * Get this specific hero.
   */
  public getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  /**
   * Function used to go back from this hero-detail tab.
   */
  public goBack(): void {
    this.location.back();
  }

  /**
   * Save the new hero's name to hte db.
   */
  public save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());

  }


}
