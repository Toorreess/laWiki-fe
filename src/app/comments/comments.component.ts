import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { CommentListComponent } from './comment-list/comment-list.component';

@NgModule({
  imports: [
    CommonModule, // Importa módulos necesarios
    CommentDetailsComponent, // Importa el componente standalone
    CommentListComponent // Importa otro componente standalone si aplica
  ],
  exports: [
    CommentDetailsComponent, // Exporta si otros módulos necesitan usar este componente
    CommentListComponent
  ]
})
export class CommentsComponent { }
