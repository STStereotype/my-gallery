import {Component} from '@angular/core';
import {MyGalleryService} from "../my-gallery.service";
import {Router} from "@angular/router";

interface Date {
  currentFolderName: string,
  currentFolderSize: number,
  numberImagesCurrentFolder: number,
  creationDateCurrentFolder: number,
  id: number
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent {

  date: Date = { currentFolderName: "not found", currentFolderSize: 0, numberImagesCurrentFolder: 0, creationDateCurrentFolder: 0, id: 0};

  constructor(private myGalleryService: MyGalleryService, private router: Router) {}

  FolderInformation(information: any) {
    this.date = information;
  }

  DeleteFolder() {
    this.myGalleryService.DeleteFolder(this.date.id).subscribe((date: any) => {
      this.router.navigate(['/my-gallery-component']);
      this.myGalleryService.GetDate().subscribe((date:any) => {
        this.myGalleryService.folders = date;
      })
    })
  }
}
