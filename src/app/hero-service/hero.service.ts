import {Injectable} from '@angular/core';
import {Hero} from "../hero";
import {HEROES} from "../simple-heroes";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
/**
 *
 */
export class HeroService {
  /**
   *
   */
  constructor() {
  }

  /**
   *
   */
  public getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
