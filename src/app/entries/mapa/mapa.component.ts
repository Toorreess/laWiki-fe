import { Component, AfterViewInit, ElementRef, Input, ViewChild } from '@angular/core';
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
      width: 80%;
      height: 500px;
      border: 1px solid #ccc;
    }
  `]
})
export class MapaComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;

  @Input() latitude: number = 0; // Coordenada de latitud
  @Input() longitude: number = 0; // Coordenada de longitud

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
          center: fromLonLat([this.longitude, this.latitude]), // Usar coordenadas dinámicas
          zoom: 13 // Zoom por defecto
        })
      });
    } else {
      console.error('El contenedor del mapa no está definido.');
    }
  }
}
