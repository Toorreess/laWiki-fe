import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule aquí
import { EntryService } from '../shared/entry.service';
import { Entry } from '../shared/entry.model';
import { MapaComponent } from '../mapa/mapa.component';
import { CommentListComponent } from '../../comments/comment-list/comment-list.component'; 

@Component({
  selector: 'app-entry-details',
  standalone: true,
  imports: [CommonModule, MapaComponent, CommentListComponent, HttpClientModule],
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {
  entry!: Entry;

  constructor(
    private entryService: EntryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const entryId = params['id'];  // Obtén el ID de la URL
      console.log('entryId:', entryId);  // Verifica que el ID esté bien
      this.entry = this.entryService.getAllEntries().find(entry => entry.id === entryId)!; // Encuentra la entrada por ID
    });
  }
}

