import { Routes } from '@angular/router';
import { WikiListComponent } from './wikis/wiki-list/wiki-list.component';
import { WikiDetailsComponent } from './wikis/wiki-details/wiki-details.component';
import { WikiCreateComponent } from './wikis/wiki-create/wiki-create.component';

export const routes: Routes = [
  { path: '', redirectTo: '/wikis', pathMatch: 'full' }, // Redirige a /wikis por defecto
  { path: 'wikis', component: WikiListComponent },       // Ruta para el componente de wikis
  { path: 'wikis/create', component: WikiCreateComponent },
  { path: 'wikis/:id', component: WikiDetailsComponent }, // Ruta con parámetro `id`
  // Ruta para crear un nuevo wiki
];

