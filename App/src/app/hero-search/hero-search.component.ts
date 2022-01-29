import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  @Input() name:string = '';

  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHero(term)),
    )
  }

  search(term:string): void {
    this.searchTerms.next(term);
  }

}
