import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers:[UserService]
})
export class UserDetailComponent implements OnInit {
  userDetail:any;
  userIdComponentInput:number;
  @Input() userIdNum:number;
  showUserDetailComp:boolean = false;
  constructor(private objUserService:UserService) {
    alert(this.userIdNum);
  }
  
  showUserDetailFunction(){ //Variable FROM USER-DETAIL PAGE
    alert(this.userIdComponentInput);
    this.showUserDetailComp= true;
    this.objUserService.getAllUsersByObservableId(this.userIdComponentInput).subscribe((data=>(this.userDetail=data))); 
  }

  showUserDetailComponent(){ //VARIABLE PASSED IN FROM PARENT USER COMPONENT!
    alert(this.userIdNum);
    this.showUserDetailComp= true;
    this.objUserService.getAllUsersByObservableId(this.userIdNum).subscribe((data=>(this.userDetail=data))); 
  }
  ngOnInit(): void {
  }

}
