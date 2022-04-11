import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterModule} from "@angular/router";
import {MyGalleryService} from "../../../my-gallery.service";

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {

  image: any;
  constructor(private rout: ActivatedRoute, private myGallery: MyGalleryService, private rou: Router) {
    this.SearchImage(rout.snapshot.params["url"]);
  }

  ngOnInit(): void {
  }

  Back() {
    this.rou.navigate([this.rou.url.slice(0, this.rou.url.lastIndexOf("/"))]);
  }

  private SearchImage(imageURL: string) {
    for(let img of this.myGallery.images) {
      if(img.url == imageURL) {
        this.image = img;
        return;
      }
    }
  }
}
