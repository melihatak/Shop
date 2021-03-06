import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/Product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/products"

  getProducts(categoryId): Observable<Product[]> {
    let newPath = this.path;
    if (categoryId) {
      newPath = newPath + "?categoryId=" + categoryId
    }
    return this.http.get<Product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  addProduct(product: Product): Observable<Product> {
    const headerOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/Json",
        "Authorization": "Token"
      })
    }
    return this.http.post<Product>(this.path, product, headerOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError));

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