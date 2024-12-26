import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { CommentListComponent } from '../../comments/comment-list/comment-list.component';
import { CommentService } from '../../comments/shared/comment.service';

@Component({
  selector: 'app-entry-details',
  imports: [CommentListComponent],
  templateUrl: './entry-details.component.html',
  styleUrl: './entry-details.component.css'
})
export class EntryDetailsComponent implements OnInit {
  comments: any[] = [];

  constructor(private commentService: CommentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const entryId = params['id'];  
      this.loadComments(entryId);
    });
  }

  loadComments(entryId: number) {
    this.commentService.getCommentsByEntryId(entryId).subscribe({
      next: (comments) => {
        this.comments = comments;
      },
      error: (error) => console.error('Error loading comments:', error)
    });
  }
}
