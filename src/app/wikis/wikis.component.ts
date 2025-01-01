import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiListComponent } from './wiki-list/wiki-list.component';
import { WikiCardComponent } from './wiki-card/wiki-card.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, // Importa las herramientas básicas de Angular
    WikiListComponent, // Importa el componente principal de la lista
    WikiCardComponent // Importa el componente de la tarjeta
  ],
  exports: [
    WikiListComponent, // Exportar si necesitas usarlo fuera del módulo
  ]
})
export class WikisModule {}





// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-wikis',
//   imports: [],
//   templateUrl: './wikis.component.html',
//   styleUrl: './wikis.component.css'
// })
// export class WikisComponent {

// }
