import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { SelectControlValueAccessor } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
 
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Product[]>(this.path).subscribe(data=>{
      this.products=data ;
    });
  }
  title: "Product List"
  filterText = "";
  products: Product[];
  path="http://localhost:3000/products"
  AddToCart(product) {
    this.alertifyService.Warning(product.name + " " + "added to card")
  }
}
