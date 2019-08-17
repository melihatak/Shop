import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { User } from './User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountservice:AccountService) { }
model:User=new User();
  ngOnInit() {
  }
  login(ngform:NgForm)
  {
this.accountservice.login(this.model)
  }
}
