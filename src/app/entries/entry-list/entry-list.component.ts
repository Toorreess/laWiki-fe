import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lista-entradas',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent {
  static entradas = [
    { titulo: 'Entrada 1', contenido: 'Descripcion de la entrada 1', autor: 'Username' },
    { titulo: 'Entrada 2', contenido: 'Descripcion de la entrada 2', autor: 'autor2' },
    { titulo: 'Entrada 3', contenido: 'Descripcion de la entrada 3', autor: 'Username' }
  ];
}
