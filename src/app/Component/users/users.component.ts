import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UserService]
})
export class UsersComponent implements OnInit {
  showUserDetails:boolean=false;
  userIdSelected:number = 0;
  users:any;
  
  constructor(private objUserService:UserService) {
    this.objUserService.getAllUsersByObservable().subscribe((data=>(this.users=data)))
   }
   
   showUserIdDetails(){
     alert(this.userIdSelected);
    this.showUserDetails= true;
   }
  ngOnInit(): void {
  }

}
