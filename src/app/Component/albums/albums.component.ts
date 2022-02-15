import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/Services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers:[AlbumService]
})
export class AlbumsComponent implements OnInit {
  albums:any;
  albumById:any;
  albumIdSelected:number;
  showAlbumIdFlag:boolean = false;
  constructor(private objAlbumService:AlbumService) { 
    this.objAlbumService.getAllAlbumsByObservable().subscribe((data=>(this.albums=data)));
  }

  showAlbumIdDetails(){
    this.showAlbumIdFlag = true;
    alert(this.albumIdSelected);
    this.objAlbumService.getAllAlbumsByObservableId(this.albumIdSelected).subscribe((data =>(this.albumById=data[0])));
  }
  ngOnInit(): void {
  }

}
