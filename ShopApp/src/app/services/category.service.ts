import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
import { Category } from '../category/Category';
@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/categories"

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errormessage = "";
    if (err.error instanceof ErrorEvent) {
      errormessage = "Bir hata oluştu" + err.error.message
    }
    else {
      errormessage = "Sistemsel bir hata "

    }
    return throwError(errormessage)

  }




}