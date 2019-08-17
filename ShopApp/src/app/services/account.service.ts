import { Injectable } from '@angular/core';
import { User } from '../login/User';

@Injectable()
export class AccountService {

  constructor() { }
  loggedIn = false;
  login(user: User): boolean {
    if (user.username == "Aslı" && user.password == 1234) {
      this.loggedIn = true;
      localStorage.setItem("Islogged", user.username)
      return true;

    }
    return false;
  }
  isloggedIn() {
    return this.loggedIn;
  }
  logOut() {
    localStorage.removeItem("Islogged");
    this.loggedIn = false;
  }
}
