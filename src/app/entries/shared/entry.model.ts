export interface Entry {
  id: string;
  titulo: string;
  autor: string;
  contenido: string;
  wikiId: string;
  imagenUrl?: string; // Propiedad opcional para la URL de la imagen
  ubicacion?: { lat: number; lng: number }; // Propiedad opcional para la ubicación del mapa
}