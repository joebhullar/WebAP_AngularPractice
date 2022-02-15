import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../Model/Comment';

@Injectable()
export class CommentService {

  constructor(private http:HttpClient)  { }

  getAllCommentsByObservable():Observable<Comment[]>
  {
    return this.http.get<Comment[]>("https://jsonplaceholder.typicode.com/comments");
  }
  getCommentByObservableId(id:number):Observable<Comment>
  {
    return this.http.get<Comment>("https://jsonplaceholder.typicode.com/comments?id="+id)
  }

}
