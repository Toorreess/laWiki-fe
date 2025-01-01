import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'entry-details',
		loadComponent: () => import('./entries/entry-details/entry-details.component').then(m => m.EntryDetailsComponent)
	}
];
