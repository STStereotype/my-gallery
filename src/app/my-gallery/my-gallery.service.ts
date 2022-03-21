import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, throwError} from "rxjs";

interface Date {
  nameFolder: string,
  sizeFolder: number,
  images: Array<string>,
  id: number
}

@Injectable()

export class MyGalleryService {

  folders: Array<Date> = [];
  images: Array<string> = [];

  constructor(private http: HttpClient) {
    this.GetDate().subscribe((date: any) =>{
      this.folders = date;
    })
  }

  SetFolder(name: string) {
    let folder = {nameFolder: name, sizeFolder: 0, images: [], id: 0};
    return this.http.post("http://localhost:3000/folders", folder).pipe(
      catchError(error => {
        return throwError(error);
      })
    )
  }

  GetDate() {
    return this.http.get("http://localhost:3000/folders").pipe(
      catchError(error => {
        return throwError(error);
      })
    )
  }
}
