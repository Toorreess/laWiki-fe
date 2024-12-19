import { Component } from '@angular/core';
import { CommentListComponent } from '../../comments/comment-list/comment-list.component';
@Component({
  selector: 'app-entry-details',
  imports: [CommentListComponent],
  templateUrl: './entry-details.component.html',
  styleUrl: './entry-details.component.css'
})
export class EntryDetailsComponent {

}
