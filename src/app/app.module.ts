import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from "@angular/common/http";
import {AuthenticationService} from "./authentication/authentication.service";
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import {AuthenticationGuardService} from "./authentication/authentication-guard.service";
import {MyGalleryService} from "./my-gallery/my-gallery.service";
import {UsersServices} from "./users/users.services";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    AuthenticationComponent,
    SignInComponent,
    SignUpComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [
    AuthenticationService,
    MyGalleryService,
    AuthenticationGuardService,
  UsersServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
