import { Injectable } from '@angular/core';
import { Entry } from './entry.model';
import { DataService } from '../../core/data/data.service';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  // private entris: Entry[] = [
  //   {
  //     id: 1,
  //     titulo: 'Visita al Parque Central',
  //     autor: 'Guía Local',
  //     contenido: 'Un recorrido inolvidable por el parque central de la ciudad.',
  //     wikiId: 1,
  //     imagenUrl: 'centralPark.jpg',
  //     ubicacion: { lat: 40.785091, lng: -73.968285 }, 
  //   },
  //   {
  //     id: 2,
  //     titulo: 'Historia del PMBOK',
  //     autor: 'autor2',
  //     contenido: 'Explorando los estándares y prácticas de gestión de proyectos.',
  //     wikiId: 2,
  //   },
  //   {
  //     id: 3,
  //     titulo: 'Explorando las Montañas',
  //     autor: 'Explorador Aficionado',
  //     contenido: 'Descubre las maravillas naturales ocultas en las montañas.',
  //     wikiId: 3,
  //     ubicacion: { lat: 46.8523, lng: -121.7603 }, // Ubicación cerca del Monte Rainier
  //   },
  //   {
  //     id: 4,
  //     titulo: 'PRUEBAAAA',
  //     autor: 'autor2',
  //     contenido: 'HOLA',
  //     wikiId: 2,
  //   },
  // ];


  constructor(private dataService: DataService) { }

  public getEntries(wiki_id: string): Entry[] {
    let entries: Entry[] = [];

    this.dataService.getEntities(`wikis/${wiki_id}/entries`).subscribe({
      next: (resp: any) => {
        console.log(resp);
        entries = resp.items;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => console.log('complete')
    });

    return entries;
  }



  addEntry(wiki_id: string, newEntry: Entry): void {
    this.dataService.postEntity(`wikis/${wiki_id}/entries`, newEntry).subscribe({
      next: (resp: any) => {
        console.log(resp);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => console.log('complete')
    });
  }

  getEntriesByWikiId(wikiId: number): Entry[] {
    this.dataService.getEntities(`wikis/${wikiId}/entries`).subscribe({
      next: (resp: any) => {
        console.log(resp);
        return resp.items;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => console.log('complete')
    });

    return [];
  }
}
