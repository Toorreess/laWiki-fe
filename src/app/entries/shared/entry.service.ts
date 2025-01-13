import { Injectable } from '@angular/core';
import { Entry } from './entry.model';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private entris: Entry[] = [
    { id: 1, titulo: '2123', autor: 'autor1', contenido: '13123123', wikiId: 1 },
    { id: 2, titulo: 'PMBOK', autor: 'autor2', contenido: 'apisonadora xd', wikiId: 2 },
    { id: 3, titulo: 'aaaaaa', autor: 'autor3', contenido: 'ababB', wikiId: 3 },
    { id: 4, titulo: 'PRUEBAAAA', autor: 'autor2', contenido: 'HOLA', wikiId: 2 },
  ];

  getEntries(): Entry[] {
    return this.entris;
  }

  addEntry(newEntry: Entry): void {
    newEntry.id = this.entris.length > 0 ? this.entris[this.entris.length - 1].id + 1 : 1;
    this.entris.push(newEntry);
  }

  getEntriesByWikiId(wikiId: number): Entry[] {
    return this.entris.filter(entry => entry.wikiId === wikiId);
  }
}