import { Injectable } from '@angular/core';
import { Comment } from './comment.model';
import { DataService } from '../../core/data/data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  // // Datos de ejemplo en memoria (sin uso de HttpClient)
  // private comments: Comment[] = [
  //   {
  //     id: 1,
  //     author: 'Rodrigo',
  //     content: 'Muchas gracias por el post',
  //     entry_id: 1,
  //   },
  //   {
  //     id: 2,
  //     author: 'autor2',
  //     content: 'Bof increible',
  //     entry_id: 2,
  //   },
  //   {
  //     id: 3,
  //     author: 'Explorador Aficionado',
  //     content: 'Descubre las maravillas naturales ocultas en las montañas.',
  //     entry_id: 3,
  //   },
  //   {
  //     id: 4,
  //     author: 'autor2',
  //     content: 'HOLA',
  //     entry_id: 2,
  //   },
  // ];

  public pagination: any = { size: 10, offset: 0, index: 0, total: 0 };

  constructor(
    private dataService: DataService
  ) { }

  public getComments(entry_id: string): Comment[] {
    let searchParams = {
      limit: this.pagination.size,
      offset: this.pagination.offset,
    }

    let comments: Comment[] = [];

    this.dataService.getEntities(`entries/${entry_id}/comments`, searchParams).subscribe({
      next: (resp: any) => {
        console.log(resp);
        comments = resp.items;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => console.log('complete')
    })

    return comments;
  }

  public createComment(entry_id: string, comment: Comment) {
    return this.dataService.postEntity(`entries/${entry_id}/comments`, comment).subscribe({
      next: (resp: any) => {
        console.log(resp);
        return resp;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => console.log('complete')
    })
  }

  // // Método que devuelve los comentarios en memoria, sin necesidad de realizar una solicitud HTTP
  // getComments(entry_id: number): Comment[] {
  //   return this.comments.filter((comment) => comment.entry_id === entry_id);
  // }

  // // Método para crear un comentario, sin necesidad de enviar a un servidor
  // createComment(entry_id: number, comment: Partial<Comment>): Comment {
  //   const newComment = {
  //     ...comment,
  //     entry_id, // Asocia el comentario con la entrada
  //     id: this.comments.length > 0 ? this.comments[this.comments.length - 1].id + 1 : 1, // Genera un ID local
  //   } as Comment;

  //   this.comments.push(newComment);  // Agrega el comentario a los datos locales
  //   return newComment;
  // }
}
