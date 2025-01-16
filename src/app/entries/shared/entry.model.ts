export interface Entry {
    id: number;
    titulo: string;
    autor: string;
    contenido: string;
    wikiId: number;
    imagenUrl?: string; // Propiedad opcional para la URL de la imagen
    ubicacion?: { lat: number; lng: number }; // Propiedad opcional para la ubicación del mapa
  }