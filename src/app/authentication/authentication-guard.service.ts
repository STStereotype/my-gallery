import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot, UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import {Injectable} from "@angular/core";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class AuthenticationGuardService implements CanActivate {
  constructor(private auth: AuthenticationService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.isAuthentication().then((isLoggendIn: any) => {
      return isLoggendIn;
    });
  }
}
