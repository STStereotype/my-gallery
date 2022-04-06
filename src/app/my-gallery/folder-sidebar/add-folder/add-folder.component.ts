import { Component, OnInit } from '@angular/core';
import {MyGalleryService} from "../../my-gallery.service";
import {UsersServices} from "../../../users/users.services";

@Component({
  selector: 'app-add-folder',
  templateUrl: './add-folder.component.html',
  styleUrls: ['./add-folder.component.css']
})
export class AddFolderComponent implements OnInit {

  constructor(public myGalleryService: MyGalleryService, private user: UsersServices) { }

  AddFolder(folderName: any) {
    if(folderName.value != "") {
      this.myGalleryService.SetFolder(folderName.value).subscribe((date: any) => {
        this.myGalleryService.folders = this.user.user.folders;
      });
    }
    folderName.value = "";
  }

  ngOnInit(): void {}
}
