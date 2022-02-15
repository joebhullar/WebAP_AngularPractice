import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/Model/Feedback';
import { FeedbackService } from 'src/app/Services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  providers:[FeedbackService]
})
export class FeedbackComponent implements OnInit {
  feedbacks:Feedback[];
  constructor(private _feedbackservice:FeedbackService) {
    this._feedbackservice.getFeedback().subscribe((data=>{
      this.feedbacks = data;
    }));
   }

  ngOnInit(): void {
  }

}
