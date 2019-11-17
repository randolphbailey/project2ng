import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {JradUser} from 'src/app/models/JradUser';
import { Observable, throwError } from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class JradUserService {

  //lets us know that something went wrong
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // user view error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  constructor(private http: HttpClient) { }
  jradUrl = "http://api.jradrecipes.club/jradUser/create";



   addjradUser(jraduser: JradUser): Observable<JradUser> {
     return this.http.post<JradUser>(this.jradUrl, jraduser)
     .pipe(
       catchError(this.handleError));

   }
}
