import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product/Product';
@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  path="http://localhost:3000/products"

  getProducts()
  {
  return  this.http.get<Product[]>(this.path);
  }
}
