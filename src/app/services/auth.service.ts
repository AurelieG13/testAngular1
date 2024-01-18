import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = [
    {"username": "admin", "password": "123", "roles": ["ADMIN"], "email": "admin@example.com", "enabled": false},
    {"username": "user", "password": "123", "roles": ["USER"], "email": "user@example.com", "enabled": false},
  ];

  public loggedUser!: string;
  public isloggedIn: boolean = false;
  public roles!: string[];


  constructor(public router: Router) { }

  logout() {
    this.isloggedIn=false;
    this.loggedUser=undefined!;
    this.roles=undefined!;
    localStorage.removeItem("loggedUser");
    localStorage.setItem("isloggedIn",String(this.isloggedIn));
    this.router.navigate(["/login"]);
  }


  SignIn(user: User) {
    let validUser: boolean = false;
    this.users.forEach((curUser) => {
      if (user.username === curUser.username && user.password === curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem("loggedUser", this.loggedUser);
        localStorage.setItem("isloggedIn",String(this.isloggedIn)
        );
      }
    });

    return validUser;
  }

  isAdmin(): boolean {
    if (!this.roles)
      return false;
    return (this.roles.indexOf("ADMIN") > -1);
  }


}
