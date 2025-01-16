import { Injectable } from '@angular/core';
import { Comment } from './comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  // Datos de ejemplo en memoria (sin uso de HttpClient)
  private comments: Comment[] = [
    {
      id: 1,
      author: 'Rodrigo',
      content: 'Muchas gracias por el post',
      entry_id: 1,
    },
    {
      id: 2,
      author: 'autor2',
      content: 'Bof increible',
      entry_id: 2,
    },
    {
      id: 3,
      author: 'Explorador Aficionado',
      content: 'Descubre las maravillas naturales ocultas en las montañas.',
      entry_id: 3,
    },
    {
      id: 4,
      author: 'autor2',
      content: 'HOLA',
      entry_id: 2,
    },
  ];

  constructor() {}

  // Método que devuelve los comentarios en memoria, sin necesidad de realizar una solicitud HTTP
  getComments(entry_id: number): Comment[] {
    return this.comments.filter((comment) => comment.entry_id === entry_id);
  }

  // Método para crear un comentario, sin necesidad de enviar a un servidor
  createComment(entry_id: number, comment: Partial<Comment>): Comment {
    const newComment = {
      ...comment,
      entry_id, // Asocia el comentario con la entrada
      id: this.comments.length > 0 ? this.comments[this.comments.length - 1].id + 1 : 1, // Genera un ID local
    } as Comment;

    this.comments.push(newComment);  // Agrega el comentario a los datos locales
    return newComment;
  }
}
