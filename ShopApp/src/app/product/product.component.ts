import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { SelectControlValueAccessor } from '@angular/forms';
import {AlertifyService} from '../services/alertify.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService:AlertifyService) { }

  ngOnInit() {
  }
  title: "Product List"
  filterText = "";
  products: Product[] =
    [
      { id: 1, name: "Laptop", price: 2500, description: "Asus ZenBook", imgUrl: "https://media.istockphoto.com/photos/using-blank-white-screen-laptop-picture-id992747452", categoryId: 1 },
      // {id:2,name:"Elbise",price:100,description:"Kırmızı Elbise",imgUrl:"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj30YH5t4LkAhWBUlAKHc49BQkQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.lidyana.com%2Fkirmizi-elbise&psig=AOvVaw0AW6na-bO9gV4Fx_q5jY4U&ust=1565874692916694",categoryId:2},
      { id: 3, name: "Mouse", price: 25, description: "A4 Tech", imgUrl: "https://media.istockphoto.com/photos/computer-mouse-isolated-on-white-picture-id1091778794", categoryId: 1 },
      //  {id:4,name:"Tornovida",price:15,description:"Özdemir ",imgUrl:"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwil98z7uILkAhXGZlAKHZL0AMcQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.hepsiburada.com%2Fizeltas-lokma-uclu-tornavida-10-mm-pm-HB000002LYS9&psig=AOvVaw1O1PJhwPc6KAIZVZi3dUa7&ust=1565874965738890",categoryId:4},
      { id: 5, name: "Pride and Prejudice", price: 30, description: "Zen Book", imgUrl: "https://media.istockphoto.com/photos/textbooks-on-wooden-school-desk-with-chalkboard-picture-id1009498682", categoryId: 7 },
      // {id:6,name:"Halı",price:250,description:"Kaşmir",imgUrl:"https://media.istockphoto.com/photos/gri-desenli-hal-picture-id847000242",categoryId:3},
      { id: 7, name: "Cips", price: 5, description: "harras", imgUrl: "https://media.istockphoto.com/photos/close-up-of-banana-chips-from-kerala-cuisine-picture-id502624829", categoryId: 6 },
      { id: 8, name: "Kola", price: 3, description: "cococale", imgUrl: "https://media.istockphoto.com/photos/splashing-coke-soda-picture-id953699392", categoryId: 6 },
      { id: 9, name: "Power Bank", price: 120, description: "Samsung ", imgUrl: "https://media.istockphoto.com/photos/powerbank-isolated-on-black-surface-picture-id1054368722", categoryId: 1 },
      { id: 10, name: "Bisiklet", price: 600, description: "Cason", imgUrl: "https://media.istockphoto.com/photos/the-red-bicyclekrmz-bisiklet-picture-id891707536", categoryId: 5 }

    ]

  AddToCart(product) {
this.alertifyService.Warning(product.name +" " +"added to card")
  }
}
