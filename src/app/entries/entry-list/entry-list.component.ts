import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { Entry } from '../shared/entry.model';
import { EntryService } from '../shared/entry.service';

@Component({
  selector: 'app-entry-list',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  @Input() wikiId!: number;
  entradas: Entry[] = [];

  constructor(private entryService: EntryService) {}

  ngOnInit(): void {
    if (this.wikiId) {
      this.entradas = this.entryService.getEntriesByWikiId(this.wikiId);
    } 
  }
}