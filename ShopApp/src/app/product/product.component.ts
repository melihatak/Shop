import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { SelectControlValueAccessor } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
 providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data=>{
      this.products=data;
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
