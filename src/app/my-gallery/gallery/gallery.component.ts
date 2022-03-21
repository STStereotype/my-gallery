import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {MyGalleryService} from "../my-gallery.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  currentFolderName!: string;
  currentFolderSize!: number;
  numberImagesCurrentFolder!: number;
  creationDateCurrentFolder!: string;

  constructor(private route: ActivatedRoute, private myGalleryService: MyGalleryService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      for(let folder of this.myGalleryService.folders) {
        if(folder.id == params["id"]) {
          this.currentFolderName =  folder.nameFolder;
          this.currentFolderSize = folder.sizeFolder;
          this.numberImagesCurrentFolder = folder.images.length;
          this.creationDateCurrentFolder = "01.01.2000"
        }
      }
    })
  }
}
