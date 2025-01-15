import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';

@Component({
  selector: 'app-mapa',
  standalone: true,
  template: `
    <div #mapContainer class="map-container"></div>
  `,
  styles: [`
    .map-container {
      width: 50%;
      height: 500px;
      border: 1px solid #ccc;
    }
  `]
})
export class MapaComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;

  private map!: Map;

  ngAfterViewInit(): void {
    if (this.mapContainer) {
      this.map = new Map({
        target: this.mapContainer.nativeElement,
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: fromLonLat([-4.42034, 36.72016]), // Coordenadas del mapa
          zoom: 13 //zoom por defecto
        })
      });
    } else {
      console.error('El contenedor del mapa no está definido.');
    }
  }
}