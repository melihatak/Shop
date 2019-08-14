import { Component, OnInit } from '@angular/core';
import { Category } from './Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

categories:Category[]=[
  {id:1,name:"ELEKTRONİK"},
  {id:2,name:"HEPSİMODA"},
  {id:3,name:"EV,YAŞAM"},
  {id:4,name:"OTO"},
  {id:5,name:"SPOR"},
  {id:6,name:"SÜPEMARKET"},
  {id:7,name:"EĞLENCE"}

]
 
}
