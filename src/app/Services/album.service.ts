import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../Model/Album';

@Injectable()
export class AlbumService {

  constructor(private http:HttpClient) { }

    getAllAlbumsByObservable():Observable<Album[]>
    {
        return this.http.get<Album[]>("https://jsonplaceholder.typicode.com/albums");
    }
    getAllAlbumsByObservableId(id:number):Observable<Album[]>
    {
        return this.http.get<Album[]>("https://jsonplaceholder.typicode.com/albums?id="+id);
    }


}
