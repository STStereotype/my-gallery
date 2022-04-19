import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, throwError} from "rxjs";
import {UsersServices} from "../users/users.services";
import {Router} from "@angular/router";

interface Image {
  nameImage: string,
  url: string,
  image: string,
  sizeImage: number
}

interface Folder {
  nameFolder: string,
  sizeFolder: number,
  images: Array<Image>,
  id: number
}

@Injectable()

export class MyGalleryService {

  folders: Array<Folder> = [];
  images: Array<Image> = [];

  constructor(private http: HttpClient, private  user: UsersServices, private rout: Router) {}

  SetFolder(name: string) {
    let folderId = 1;
    if(this.user.user.folders.length !== 0) {
      folderId = this.user.user.folders[this.user.user.folders.length - 1].id + 1;
    }
    let folder = {nameFolder: name, sizeFolder: 0, images: [], id: folderId};
    this.user.user.folders.push(folder);
    return this.PutUser();
  }

  DeleteFolder(id: any) {
    for(let i = 0; i < this.user.user.folders.length; i++) {
      if(this.user.user.folders[i].id === id) {
        this.user.user.folders.splice(i, 1);
      }
    }
    return this.PutUser();
  }

  SetImage(folder: any, image: {nameImage: string, url: string, image: string, sizeImage: number}) {
    console.log(folder);
    console.log(this.user.user.folders);
    console.log(this.user.user.folders.indexOf(folder));
    let index = this.user.user.folders.indexOf(folder);
    console.log(this.user.user.folders[index].images);
    this.user.user.folders[index].images.push(image);
    this.user.user.folders[index].sizeFolder += image.sizeImage;
    return this.PutUser();
  }

  DeleteImage(urlImage: string) {
    for(let i = 0; i < this.user.user.folders.length; i++) {
      if(this.user.user.folders[i].images[1].url === urlImage) {
        this.user.user.folders.splice(i, 1);
        this.rout.navigate([this.rout.url.slice(0, this.rout.url.lastIndexOf("/"))]);
      }
    }
    return this.PutUser();
  }

  GetUser() {
    return this.http.get(`http://localhost:3000/Users/${this.user.user.id}`).pipe(
      catchError(error => {
        return throwError(error);
      })
    )
  }

  private PutUser() {
    return this.http.put(`http://localhost:3000/Users/${this.user.user.id}`,  this.user.user).pipe(
      catchError(error => {
        return throwError(error);
      })
    )
  }
}
