import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {AuthenticationGuardService} from "./authentication/authentication-guard.service";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {SignInComponent} from "./authentication/sign-in/sign-in.component";
import {SignUpComponent} from "./authentication/sign-up/sign-up.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: "authentication",
        component: AuthenticationComponent,
        children: [
          {
            path: "sign in",
            component: SignInComponent
          },
          {
            path: "sign un",
            component: SignUpComponent
          }
        ]
      },
    ]
  },
  {
    path: "my-gallery-component", canActivate: [AuthenticationGuardService],
    loadChildren: () => import("./my-gallery/my-gallery.module").then(x => x.MyGalleryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
