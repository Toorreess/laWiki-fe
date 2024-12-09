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

  addWiki(newWiki: Wiki): Observable<void> {
    // Generar un nuevo ID basado en el tamaño del arreglo existente
    newWiki.id = this.wikis.length > 0 ? this.wikis[this.wikis.length - 1].id + 1 : 1;

    // Agregar la nueva wiki al arreglo
    this.wikis.push(newWiki);

    // Retornar un observable vacío para confirmar que la operación se completó
    return of();
  }
}
