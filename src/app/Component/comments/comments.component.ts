import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/Services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers:[CommentService]
})
export class CommentsComponent implements OnInit {

  comments:any;
  commentById:any;
  commentIdSelected:number;
  showCommentIdDetailsFlag:boolean = false;
  constructor(private objCommentsService:CommentService) { 
    this.objCommentsService.getAllCommentsByObservable().subscribe((data=>(this.comments=data)));
  }

 
  showCommentIdDetails(){
    this.showCommentIdDetailsFlag = true;
    this.objCommentsService.getCommentByObservableId(this.commentIdSelected).subscribe((data =>(this.commentById=data[0])));
  }

  ngOnInit(): void {
  }

}
