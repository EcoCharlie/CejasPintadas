import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, retry, throwError } from "rxjs";
import {Person} from "../models/person";

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //variables
  dialogData: any;

  //Default Code
  basePath = 'http://localhost:3000/api/v1/persons'
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
  getDialogData() {
    return this.dialogData;
  }
  //-> Get
  getPerson() {
    return this.http.get(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  //-> Post
  postPerson(person:Person){
    return this.http.post(this.basePath, person, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  //-> Delete
  deletePerson(person:Person) {
    return this.http.delete(`${this.basePath}/${person.id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  //-> Update
  updatePerson(person:Person) {
    return this.http.put(`${this.basePath}/${person.id}`, person, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
