import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {HEROES} from "../heroClasses/simple-heroes";
import {Hero} from "../heroClasses/hero";
import {MessageService} from "../message-service/message.service";


@Injectable({providedIn: 'root'})
/**
 *
 */
export class HeroService {

  /**
   *
   * @param messageService
   */
  constructor(private messageService: MessageService) {
  }

  /**
   *
   */
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  /**
   *
   * @param id
   */
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
