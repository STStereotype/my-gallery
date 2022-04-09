import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MyGalleryService} from "../../my-gallery.service";
import {ActivatedRoute, Params} from "@angular/router";

interface Date {
  currentFolderName: string,
  currentFolderSize: number,
  numberImagesCurrentFolder: number,
  creationDateCurrentFolder: number,
  id: number
}

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})

export class ImagesComponent implements OnInit {

  @Output('folderInformation') folderInformation = new EventEmitter<Date>();

  constructor(public myGalleryService: MyGalleryService, private route: ActivatedRoute) {
    let delay: number = myGalleryService.folders.length == 0 ? 500 : 0;
    setTimeout( () => {
      this.route.params.subscribe((params: Params) => {
        for(let folder of myGalleryService.folders) {
          if(params['id'] == folder.id.toString()) {
            this.UpdateFolderInformation(folder);
            myGalleryService.images = folder.images;
          }
        }
      })
    }, delay);
  }

  ngOnChanges(): void {
    console.log("ngOnChanges");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  UpdateFolderInformation(folder: any) {
    this.folderInformation.emit({
      currentFolderName: folder.nameFolder,
      currentFolderSize: Number((folder.sizeFolder / 1000000).toFixed(2)),
      numberImagesCurrentFolder: folder.images.length,
      creationDateCurrentFolder: 0,
      id: folder.id
    })
  }

  updateImageList(image: {nameImage: string, url: string, image: string, sizeImage: number}) {
    let subscription = this.route.params.subscribe((params: Params) => {
      for (let folder of this.myGalleryService.folders){
        if(folder.id.toString() === params['id']) {
          this.myGalleryService.SetImage(folder, image).subscribe((images: any) => {
            this.UpdateFolderInformation(folder);
            subscription.unsubscribe();
          });
        }
      }
    })
  }
}
