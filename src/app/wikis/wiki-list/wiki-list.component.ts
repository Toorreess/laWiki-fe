import { Component, OnInit } from '@angular/core';
import { WikiService } from '../shared/wiki.service';
import { Wiki } from '../shared/wiki.model';
import { WikiCardComponent } from '../wiki-card/wiki-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wiki-list',
  imports: [CommonModule, WikiCardComponent],
  templateUrl: './wiki-list.component.html',
  styleUrls: ['./wiki-list.component.css']
})
export class WikiListComponent implements OnInit {
  wikis: Wiki[] = [];

  constructor(private wikiService: WikiService) {}

  ngOnInit(): void {
    this.wikiService.getWikis().subscribe((data) => {
      this.wikis = data;
    });
  }

  loadMore(): void {
    // Lógica para cargar más wikis (si aplica)
    console.log('Cargar más wikis...');
  }
}
