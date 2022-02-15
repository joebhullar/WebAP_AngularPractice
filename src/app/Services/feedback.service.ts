import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../Model/Feedback';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class FeedbackService {
  private headers: HttpHeaders;
  private url:string = 'http://localhost:58052/api/Feedback/FeedbackList';
  private createFeedbackurl:string = 'http://localhost:58052/api/Feedback/CreateFeedback';
  constructor(private http:HttpClient) {   }
  public getFeedback():Observable<Feedback[]>
  {
    // return this.http.get<Feedback[]>(this.url).pipe(catchError(this.handleError));
    return this.http.get<Feedback[]>(this.url)  ;
  }
  handleError(error){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = 'Error: ${error.error.message}';
    }else{
      errorMessage=`Error Code:${error.status}\nMessage:  ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  
  SaveFeedback(temp): Observable<Feedback[]> {
    alert('hi');
    alert(temp.value);
    console.log(temp.value);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    // tslint:disable-next-line:max-line-length
    alert(temp.value.feedbackGiven);
    alert(temp.value.feedbackBy);
    const body = {feedbackGiven: temp.value.feedbackGiven,feedbackBy: temp.value.feedbackBy,feedbackDate: temp.value.feedbackDate };
    return this.http.post<Feedback[]>(this.createFeedbackurl, body, {headers});
}

}
