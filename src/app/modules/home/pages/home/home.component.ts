import { Component, HostBinding, OnInit } from '@angular/core';
import { catchError, of, switchMap, Observable } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';


@Component({
	selector: 'home-page',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	@HostBinding('class') class = 'home';
  
  superheroData$: Observable<any>;

	constructor() {}

	ngOnInit(): void {}

	findSuperHero(value: string) {
		if (value) {
			this.superHeroApi(value);
		}
	}

	superHeroApi(value: string) {
    if (!value) {
      value = 'Spiderman';
    }
    
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '6790a647c5msh63e1d29d286d149p195629jsn4c4af69e8471',
				'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
			},
		};

		const data$ = fromFetch(`https://superhero-search.p.rapidapi.com/api/?hero=${value}`, options)
    .pipe(
			switchMap((response) => {
				if (response.ok) {
					// OK return data
					return response.json();
				} else {
					// Server is returning a status requiring the client to try something else.
					return of({ error: true, message: `Error ${response.status}` });
				}
			}),
			catchError((err) => {
				// Network or other error, handle appropriately
				console.error(err);
				return of({ error: true, message: err.message });
			})
		);

		data$.subscribe({
			next: (result) => {this.superheroData$ = result; console.log(result)},
			complete: () => console.log('done'),
		});
	}
}
