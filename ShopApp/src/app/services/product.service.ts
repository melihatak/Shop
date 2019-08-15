import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/Product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/products"

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.path).pipe(
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