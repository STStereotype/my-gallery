import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  @Input() isSignIn: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
