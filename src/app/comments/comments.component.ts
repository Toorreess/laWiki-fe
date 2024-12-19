import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { CommentListComponent } from './comment-list/comment-list.component';

@NgModule({
  declarations: [
    CommonModule,
    CommentDetailsComponent,
    CommentListComponent
  ]
})

export class CommentsModule { }
