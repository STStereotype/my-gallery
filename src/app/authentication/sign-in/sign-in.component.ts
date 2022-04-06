import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";
import {UsersServices} from "../../users/users.services";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router, private user: UsersServices) { }

  ngOnInit(): void {
  }

  async Continue(login: string, password: string) {
    this.auth.GetUsers().subscribe((users: any) => {
      for (let user of users) {
        if (user.login == login) {
          if(user.password == password) {
            this.user.user = user;
            this.auth.LogIn();
            this.router.navigate(["/my-gallery-component"])
          }
        }
      }
    });
  }
}
