import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userInfo = false;
  constructor(private router: Router, public  authentication: AuthenticationService) { }

  ngOnInit(): void {
  }

  HomePage() {
    this.router.navigate([""]);
  }

  UserInfo() {
    console.log("dwqdwq");
  }
}
