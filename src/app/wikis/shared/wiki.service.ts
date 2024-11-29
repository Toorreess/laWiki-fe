import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Wiki } from './wiki.model';

@Injectable({
  providedIn: 'root'
})
export class WikiService {
  private wikis: Wiki[] = [
    { id: 1, name: 'ingweb', description: 'hasta la polla la vrd', image: 'assets/wiki1.jpg' },
    { id: 2, name: 'Gestion de Proyectos', description: 'apisonadora xd', image: 'a.jpg' },
    { id: 3, name: 'yokse', description: 'ejemploo', image: 'assets/wiki3.jpg' },
  ];

  getWikis(): Observable<Wiki[]> {
    return of(this.wikis);
  }
}
