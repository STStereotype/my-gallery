import { Component, OnInit } from '@angular/core';
import {UsersServices} from "../users/users.services";
import {MyGalleryService} from "./my-gallery.service";

@Component({
  selector: 'app-my-gallery',
  templateUrl: './my-gallery.component.html',
  styleUrls: ['./my-gallery.component.css']
})
export class MyGalleryComponent implements OnInit {

  constructor(private user: UsersServices, private myGallery: MyGalleryService) {
    myGallery.folders = user.user.folders;
  }

  ngOnInit(): void {}
}
