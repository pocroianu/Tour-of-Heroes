import {InMemoryDbService} from "angular-in-memory-web-api";
import {Hero} from "../heroClasses/hero";

/**
 *
 */
export class InMemoryDataService implements InMemoryDbService {

  /**
   * Creates the heroes's database.
   */
  public createDb() {
    const heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Guta Nicolae'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'Jean de la Craiova'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];
    return {heroes};
  }

  /**
   *
   * @param heroes
   */
  public genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }


}
