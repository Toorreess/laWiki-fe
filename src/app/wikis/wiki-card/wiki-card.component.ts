import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { Wiki } from '../shared/wiki.model';

@Component({
  selector: 'app-wiki-card',
  standalone: true,
  imports: [CommonModule, RouterModule], // Agrega RouterModule aquí
  templateUrl: './wiki-card.component.html',
  styleUrls: ['./wiki-card.component.css']
})
export class WikiCardComponent {
  @Input() wiki!: Wiki; // Recibe un objeto Wiki como entrada
}
