import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, throwError} from "rxjs";

interface Folder {
  nameFolder: string,
  sizeFolder: number,
  images: Array<string>,
  id: number
}

interface User {
  login: string,
  password: string,
  username: string,
  surname?: string,
  phoneNumber?: string,
  registrationDate: string,
  folders: Array<Folder>,
  id: number
}

@Injectable()
export class AuthenticationService {

  isLoggedIn: boolean = false;
  user!: User;

  constructor(private http: HttpClient) {}

  isAuthentication() {
    return new Promise((resolve, rejects) => {
        resolve(this.isLoggedIn);
    })
  }

  LogIn() {
    this.isLoggedIn = true;
  }

  LogOut() {
    this.isLoggedIn = false;
  }

  GetUsers() {
    return this.http.get("http://localhost:3000/users");
  }

  CreateUser(newUser: any) {
    return this.http.post("http://localhost:3000/users", newUser).pipe(
      catchError(error => {
        return throwError(error);
      })
    )
  }
}
