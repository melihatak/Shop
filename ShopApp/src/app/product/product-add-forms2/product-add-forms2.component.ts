import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../Product';
import { Category } from 'src/app/category/Category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers: [CategoryService, ProductService]
})
export class ProductAddForms2Component implements OnInit {

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService, private productService: ProductService, private alertifyService: AlertifyService) { }
  product: Product = new Product();
  categories: Category[];
  productAddForm: FormGroup;
  createPrdoctAddForm() {
    this.productAddForm = this.formBuilder.group(
      {
        name: ["", Validators.required],
        description: ["", Validators.required],
        price: ["", Validators.required],
        categoryId: ["", Validators.required],
        imgUrl: ["", Validators.required]
      });
  }
  ngOnInit() {
    this.createPrdoctAddForm();
    this.categoryService.getCategories().subscribe(data => { this.categories = data });

  }
  add() {
    if (this.productAddForm.valid) 
    {
      this.product = Object.assign({}, this.productAddForm.value);

    }
    this.productService.addProduct(this.product).subscribe(data => {
      this.alertifyService.Success(data.name + " " + "başarıyla eklendi.")});

}}
