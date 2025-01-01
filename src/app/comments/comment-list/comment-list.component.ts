import { Component } from '@angular/core';
import { CommentDetailsComponent } from '../comment-details/comment-details.component';
import { CommentService } from '../shared/comment.service';


@Component({
  selector: 'app-comment-list',
  imports: [CommentDetailsComponent],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.css'
})

export class CommentListComponent {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments("").subscribe((comments) => {
      this.comments = comments;
    })
  }
}
