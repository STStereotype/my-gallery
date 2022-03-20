import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.currentFolderName =  params['name'];
      this.currentFolderSize = 0;
      this.numberImagesCurrentFolder = 0;
      this.creationDateCurrentFolder = "01.01.2000"
    })
  }
}
