import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Comment } from '../shared/comment.model';
import { CommentService } from '../shared/comment.service';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() entry_id!: string;
  comments: Comment[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    if (this.entry_id) {
      this.loadComments();
    }
  }

  private loadComments(): void {
    this.comments = this.commentService.getComments(this.entry_id);
  }
}

