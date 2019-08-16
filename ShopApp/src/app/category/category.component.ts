import { Component, OnInit } from '@angular/core';
import { Category } from './Category';
import { CategoryService } from '../services/category.service';
import { Observable } from 'rxjs'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  
  constructor(private categoryService: CategoryService) { }

  categories: Category[];
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => { this.categories = data });
  }

}
