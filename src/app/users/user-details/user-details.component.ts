import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntryListComponent } from '../../entries/entry-list/entry-list.component';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  usuario: { nombre: string; valoracion: number } | undefined;
  userEntries: Array<{ titulo: string, contenido: string }>;
  entradas = EntryListComponent.entradas;
  constructor(private route: ActivatedRoute) {
    const id = 2;
    this.usuario = {nombre:"Username", valoracion:3};
    this.userEntries = this.entradas.filter(e => e.autor === this.usuario?.nombre)
  }
}

