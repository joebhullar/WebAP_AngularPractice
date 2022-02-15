import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/User';

@Injectable() // we delete the code inside Injectable( <--Here--> )
export class UserService {

  constructor(private http:HttpClient) { }
  getAllUsersByObservable():Observable<User[]>
  {
      return this.http.get<User[]>("http://jsonplaceholder.typicode.com/users");
  }
  getAllUsersByObservableId(id:number):Observable<User[]>{
      return this.http.get<User[]>("http://jsonplaceholder.typicode.com/users?id="+id);
  }
}
