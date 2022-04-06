import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  styles: []
})
export class SignUpComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  submitForm(form: any) {
    let user = {
      login: form.controls.login.value,
      password: form.controls.password.value,
      username: form.controls.username.value,
      surname: form.controls.surname.value,
      phoneNumber: form.controls.phoneNumber.value,
      registrationDate: "",
      folders: []
    }
   this.auth.CreateUser(user).subscribe((date: any) => {
     console.log(date);
   });
  }
}
