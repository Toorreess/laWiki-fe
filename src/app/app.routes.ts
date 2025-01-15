import { Routes } from '@angular/router';
import { WikiListComponent } from './wikis/wiki-list/wiki-list.component';
import { WikiDetailsComponent } from './wikis/wiki-details/wiki-details.component';
import { WikiCreateComponent } from './wikis/wiki-create/wiki-create.component';
import { EntryFormComponent } from './entries/entry-form/entry-form.component'; 
import { EntryDetailsComponent } from './entries/entry-details/entry-details.component'; 

export const routes: Routes = [
  { path: '', redirectTo: '/wikis', pathMatch: 'full' },
  { path: 'wikis', component: WikiListComponent },
  { path: 'wikis/create', component: WikiCreateComponent },
  { path: 'wikis/:id', component: WikiDetailsComponent },
  { path: 'wikis/:id/create-entry', component: EntryFormComponent }, 
  { path: 'entries/:id', component: EntryDetailsComponent }, // Cambié 'entry' por 'entries'
];



