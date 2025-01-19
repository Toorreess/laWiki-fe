// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Wiki } from '../shared/wiki.model';
// import { WikiService } from '../shared/wiki.service';
// import { EntryListComponent } from '../../entries/entry-list/entry-list.component';

// @Component({
//   selector: 'app-wiki-details',
//   standalone: true,
//   imports: [EntryListComponent],//EntryListComponent
//   templateUrl: './wiki-details.component.html',
//   styleUrls: ['./wiki-details.component.css']
// })
// export class WikiDetailsComponent implements OnInit {
//   wiki!: Wiki;

//   constructor(
//     private route: ActivatedRoute,
//     private wikiService: WikiService
//   ) {}

//   ngOnInit(): void {
//     const id = Number(this.route.snapshot.paramMap.get('id')); // Obtén el ID de la URL
//     this.wikiService.getWikis().subscribe((wikis) => {
//       this.wiki = wikis.find((wiki) => wiki.id === id)!; // Encuentra la wiki por ID
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Wiki } from '../shared/wiki.model';
import { WikiService } from '../shared/wiki.service';
import { EntryService } from '../../entries/shared/entry.service';
import { Entry } from '../../entries/shared/entry.model';
import { EntryListComponent } from '../../entries/entry-list/entry-list.component';

@Component({
  selector: 'app-wiki-details',
  standalone: true,
  imports: [CommonModule, EntryListComponent],
  templateUrl: './wiki-details.component.html',
  styleUrls: ['./wiki-details.component.css']
})
export class WikiDetailsComponent implements OnInit {
  wiki!: Wiki;
  entries: Entry[] = [];

  constructor(
    private route: ActivatedRoute,
    private wikiService: WikiService,
    private entryService: EntryService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Obtén el ID de la URL
    this.wikiService.getWikis().subscribe((wikis) => {
      this.wiki = wikis.find((wiki) => wiki.id === id)!; // Encuentra la wiki por ID
      this.entries = this.entryService.getEntriesByWikiId(id); // Obtén las entradas por wikiId
    });
  }
}