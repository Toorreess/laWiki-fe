import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';  // Asegúrate de importar NgIf también
import { Comment } from '../shared/comment.model';
import { CommentService } from '../shared/comment.service';

@Component({
  selector: 'app-comment-list',
  standalone: true,  // Marca el componente como standalone
  imports: [NgFor, NgIf],  // Asegúrate de importar NgIf y NgFor
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() entry_id!: number;
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    if (this.entry_id) {
      this.loadComments();
    }
  }

  private loadComments(): void {
    // Obtener los comentarios directamente del servicio sin necesidad de observables
    this.comments = this.commentService.getComments(this.entry_id);
  }
}

