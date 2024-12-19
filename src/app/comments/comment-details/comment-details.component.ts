import { Component, Input } from '@angular/core';
import { Comment } from '../shared/comment.model';

@Component({
  selector: 'app-comment-details',
  imports: [],
  templateUrl: './comment-details.component.html',
  styleUrl: './comment-details.component.css'
})
export class CommentDetailsComponent {
  @Input() comment!: Comment;
}
