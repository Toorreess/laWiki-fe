import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Wiki } from './wiki.model';
import { DataService } from '../../core/data/data.service';

@Injectable({
  providedIn: 'root'
})
export class WikiService {
  // private wikis: Wiki[] = [
  //   { id: 1, name: 'ingweb', description: 'hasta la polla la vrd', image: 'assets/wiki1.jpg' },
  //   { id: 2, name: 'Gestion de Proyectos', description: 'apisonadora xd', image: 'a.jpg' },
  //   { id: 3, name: 'yokse', description: 'ejemploo', image: 'assets/wiki3.jpg' },
  // ];

  constructor(private dataService: DataService) { }

  public getWikis(): Observable<Wiki[]> {
    let searchParams = {
      limit: 10,
      offset: 0,
    }
    let wikis: Wiki[] = [];

    this.dataService.getEntities('wikis', searchParams).subscribe({
      next: (resp: any) => {
        console.log(resp);
        wikis = resp.items;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => console.log('complete')
    });

    return of(wikis);
  };

  public addWiki(newWiki: Wiki): Observable<void> {
    this.dataService.postEntity('wikis', newWiki).subscribe({
      next: (resp: any) => {
        console.log(resp);
        return of();
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => console.log('complete')
    });

    return of();
  }
}
