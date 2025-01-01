import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(entry_id: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`http://localhost:8080/entries/${entry_id}/comments`);
  }

  createComment(entry_id: string, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`http://localhost:8080/entries/${entry_id}/comments`, comment);
  }
}
