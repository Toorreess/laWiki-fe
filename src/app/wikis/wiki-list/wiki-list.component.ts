import { Component, OnInit } from '@angular/core';
import { WikiService } from '../shared/wiki.service';
import { Wiki } from '../shared/wiki.model';
import { WikiCardComponent } from '../wiki-card/wiki-card.component';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";


@Component({
  selector: 'app-wiki-list',
  imports: [CommonModule, RouterModule, WikiCardComponent, RouterLink, RouterLinkActive, NavbarComponent], // Agrega WikiCardComponent y RouterModule aquí
  templateUrl: './wiki-list.component.html',
  styleUrls: ['./wiki-list.component.css']
})
export class WikiListComponent implements OnInit {
  wikis: Wiki[] = [];

  constructor(private wikiService: WikiService) { }

  ngOnInit(): void {
    this.wikiService.getWikis().subscribe({
      next: (data: Wiki[]) => {
        this.wikis = data;
      },
      error: (error: any) => {
        console.error('Error fetching wikis', error);
      },
      complete: () => {
        console.log('Wiki fetching completed');
      }
    });
  }

  loadMore(): void {
    // Lógica para cargar más wikis (si aplica)
    console.log('Cargar más wikis...');
  }
}
