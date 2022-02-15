import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/Model/Feedback';
import { FeedbackService } from 'src/app/Services/feedback.service';

@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.css'],
  providers:[FeedbackService]
})
export class CreateFeedbackComponent implements OnInit {
  createFeedback:Feedback[];
  constructor(private _feedbackservice:FeedbackService, private _router:Router) { }

  ngOnInit(): void {
  }
  SaveFeedback(temp: any) {
    this._feedbackservice.SaveFeedback(temp).subscribe( Successfully => {
          console.log('Feedback Created Successfully');
          alert('Feedback Successfully');
         },
    Error => {
       console.log('Something Error');
       alert('Something Error');
    });
 }

 ViewFeedback(){
  this._router.navigate(['Feedback'])
}
}
