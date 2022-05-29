import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {catchError, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {
  //Default Code
  basePath = 'http://localhost:3000/api/v1/competences'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if(error.error instanceof  ErrorEvent) {
      console.log(`Ann error occurred: ${error.error.message}`);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      )
    }
    return throwError('Something happened with request, please try again later');
  }

  //My code put a lot of functions
  getCompetences() {
    return this.http.get(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
    );
  }
}
