import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { EntryService } from '../shared/entry.service';
import { Entry } from '../shared/entry.model';
import { MapaComponent } from '../mapa/mapa.component';

@Component({
  selector: 'app-entry-details',
  standalone: true,
  imports: [CommonModule, MapaComponent],
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
      const entryId = +params['id']; // Obtén el ID de la URL
      this.entry = this.entryService.getEntries().find(entry => entry.id === entryId)!; // Encuentra la entrada por ID
    });
  }
}

