import { Component, OnInit } from '@angular/core';
import {MyGalleryService} from "../my-gallery.service";

@Component({
  selector: 'app-folder-sidebar',
  templateUrl: './folder-sidebar.component.html',
  styleUrls: ['./folder-sidebar.component.css']
})
export class FolderSidebarComponent implements OnInit {

  constructor(public myGalleryService: MyGalleryService) {}

  ngOnInit(): void {
  }

}
