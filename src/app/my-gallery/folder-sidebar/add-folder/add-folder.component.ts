import { Component, OnInit } from '@angular/core';
import {MyGalleryService} from "../../my-gallery.service";

@Component({
  selector: 'app-add-folder',
  templateUrl: './add-folder.component.html',
  styleUrls: ['./add-folder.component.css']
})
export class AddFolderComponent implements OnInit {

  constructor(public myGalleryService: MyGalleryService) { }

  AddFolder() {
    this.myGalleryService.SetFolder("Folder").subscribe((date: any) => {
      this.myGalleryService.folders.push(date);
    });
  }

  ngOnInit(): void {
  }
}
