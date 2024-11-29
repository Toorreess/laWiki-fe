import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent {
  entrada: { titulo: string; contenido: string } | undefined;

  entradas = [
    { id: 1, titulo: 'Primera Entrada', contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis convallis dui, et semper felis iaculis et. In a metus id augue dapibus tincidunt. Duis eget commodo nibh. Sed auctor ullamcorper dui, sit amet gravida massa euismod sed. Phasellus in ex mauris. Nullam finibus tempor eros, in elementum mi pretium sed. Duis ligula nunc, mattis a mattis vel, placerat eget arcu. Curabitur malesuada ullamcorper sollicitudin. Aliquam lacus nibh, ornare ut sodales varius, dignissim ut velit. Quisque eget eros a eros laoreet lacinia in et augue. Pellentesque quam urna, aliquam ac eros et, interdum dignissim tellus. Proin vehicula sagittis purus, ac pellentesque turpis.' },
    { id: 2, titulo: 'Segunda Entrada', contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis convallis dui, et semper felis iaculis et. In a metus id augue dapibus tincidunt. Duis eget commodo nibh. Sed auctor ullamcorper dui, sit amet gravida massa euismod sed. Phasellus in ex mauris. Nullam finibus tempor eros, in elementum mi pretium sed. Duis ligula nunc, mattis a mattis vel, placerat eget arcu. Curabitur malesuada ullamcorper sollicitudin. Aliquam lacus nibh, ornare ut sodales varius, dignissim ut velit. Quisque eget eros a eros laoreet lacinia in et augue. Pellentesque quam urna, aliquam ac eros et, interdum dignissim tellus. Proin vehicula sagittis purus, ac pellentesque turpis.' },
    { id: 3, titulo: 'Tercera Entrada', contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis convallis dui, et semper felis iaculis et. In a metus id augue dapibus tincidunt. Duis eget commodo nibh. Sed auctor ullamcorper dui, sit amet gravida massa euismod sed. Phasellus in ex mauris. Nullam finibus tempor eros, in elementum mi pretium sed. Duis ligula nunc, mattis a mattis vel, placerat eget arcu. Curabitur malesuada ullamcorper sollicitudin. Aliquam lacus nibh, ornare ut sodales varius, dignissim ut velit. Quisque eget eros a eros laoreet lacinia in et augue. Pellentesque quam urna, aliquam ac eros et, interdum dignissim tellus. Proin vehicula sagittis purus, ac pellentesque turpis.' },
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.entrada = this.entradas.find(e => e.id === id);
  }
}
