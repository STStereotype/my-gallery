import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  OpenMyGallery() {
    if(!this.auth.isLoggedIn) {
      this.router.navigate(["/authentication/sign in"])
    }
  }
}
