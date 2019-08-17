import { Component } from '@angular/core';
import { CategoryService } from './services/category.service';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private accoutservice: AccountService){

  }
  title = 'ShopApp';
  islogedIn():boolean
  {
    return this.accoutservice.isloggedIn();
  }
  logout()
  {
    this.accoutservice.logOut();
  }
}
