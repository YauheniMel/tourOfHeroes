import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessagesService } from './messages.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);

    this.messagesService.add("I've got a heroes");

    return heroes;
  }

  getHero(id:number): Observable<Hero> {
    const hero = HEROES.find(hero => hero.id === id)!;

    this.messagesService.add(`HeroService: fetched hero id=${id}`);

    return of(hero)
  }
}
