import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from "rxjs/operators";


import {Hero} from "../heroClasses/hero";
import {MessageService} from "../message-service/message.service";
import {HEROES} from "../heroClasses/simple-heroes";


@Injectable({providedIn: 'root'})
/**
 *Acts like a mediator for the hero class.
 */
export class HeroService {

  private heroesUrl = 'api/heroes';

  /**
   *
   * @param messageService
   * @param http
   */
  constructor(private messageService: MessageService, private http: HttpClient) {
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Returns the heroes using http..get .
   */
  public getHeroes(): Observable<Hero[]> {


    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  /**
   * Return a single hero by an id using http.get .
   * @param id
   */
  public getHero(id: number): Observable<Hero> {

    const url = `${this.heroesUrl}/${id}`;

    return this.http.get<Hero>(url)
      .pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );

  }

  /**
   *
   * @param operation
   * @param result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
