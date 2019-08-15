import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { SelectControlValueAccessor } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category/Category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data;
      });
    })
   
  }
  title: "Product List"
  filterText = "";
  products: Product[];

  AddToCart(product) {
    this.alertifyService.Warning(product.name + " " + "added to card")
  }
}
