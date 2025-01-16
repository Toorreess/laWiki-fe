import { Injectable } from '@angular/core';
import { Entry } from './entry.model';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private entris: Entry[] = [
    {
      id: 1,
      titulo: 'Visita al Parque Central',
      autor: 'Guía Local',
      contenido: 'Un recorrido inolvidable por el parque central de la ciudad.',
      wikiId: 1,
      imagenUrl: 'centralPark.jpg',
      ubicacion: { lat: 40.785091, lng: -73.968285 }, 
    },
    {
      id: 2,
      titulo: 'Historia del PMBOK',
      autor: 'autor2',
      contenido: 'Explorando los estándares y prácticas de gestión de proyectos.',
      wikiId: 2,
    },
    {
      id: 3,
      titulo: 'Explorando las Montañas',
      autor: 'Explorador Aficionado',
      contenido: 'Descubre las maravillas naturales ocultas en las montañas.',
      wikiId: 3,
      ubicacion: { lat: 46.8523, lng: -121.7603 }, // Ubicación cerca del Monte Rainier
    },
    {
      id: 4,
      titulo: 'PRUEBAAAA',
      autor: 'autor2',
      contenido: 'HOLA',
      wikiId: 2,
    },
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
