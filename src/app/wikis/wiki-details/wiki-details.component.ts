import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wiki } from '../shared/wiki.model';
import { WikiService } from '../shared/wiki.service';
import { RouterModule } from '@angular/router';
import { EntryListComponent } from '../../entries/entry-list/entry-list.component'; 

@Component({
  selector: 'app-wiki-details',
  standalone: true,
  imports: [RouterModule, EntryListComponent], 
  templateUrl: './wiki-details.component.html',
  styleUrls: ['./wiki-details.component.css'],
})
export class WikiDetailsComponent implements OnInit {
  wiki!: Wiki;

  constructor(
    private route: ActivatedRoute,
    private wikiService: WikiService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Obtén el ID de la URL
    this.wikiService.getWikis().subscribe((wikis) => {
      this.wiki = wikis.find((wiki) => wiki.id === id)!; // Encuentra la wiki por ID
    });
  }
}
