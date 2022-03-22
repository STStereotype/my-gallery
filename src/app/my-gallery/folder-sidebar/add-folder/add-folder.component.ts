import { Component, OnInit } from '@angular/core';
import {MyGalleryService} from "../../my-gallery.service";

@Component({
  selector: 'app-add-folder',
  templateUrl: './add-folder.component.html',
  styleUrls: ['./add-folder.component.css']
})
export class AddFolderComponent implements OnInit {

  constructor(public myGalleryService: MyGalleryService) { }

  AddFolder(folderName: any) {
    if(folderName.value != "")
    this.myGalleryService.SetFolder(folderName.value).subscribe((date: any) => {
      this.myGalleryService.folders.push(date);
    });
    folderName.value = "";
  }

  ngOnInit(): void {
  }
}
