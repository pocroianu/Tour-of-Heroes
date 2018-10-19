import {Injectable} from '@angular/core';
import {Hero} from "../hero";
import {HEROES} from "../simple-heroes";
import {Observable, of} from "rxjs";
import {MessageService} from "../message-service/message.service";

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
  constructor(private messageService: MessageService) {
  }

  /**
   *
   */
  public getHeroes(): Observable<Hero[]> {
    //TODO : send a message after the heroes are fetched
    this.messageService.add('HeroService : fetched heroes');
    return of(HEROES);
  }
}
