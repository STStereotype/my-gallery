import {NgModule} from "@angular/core";
import {FolderSidebarComponent} from "./folder-sidebar/folder-sidebar.component";
import {MyGalleryRoutingModule} from "./my-gallery-routing.module";
import {MyGalleryComponent} from "./my-gallery.component";
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesComponent } from './gallery/images/images.component';


@NgModule({
  declarations: [
    MyGalleryComponent,
    FolderSidebarComponent,
    GalleryComponent,
    ImagesComponent
  ],
  exports: [
    FolderSidebarComponent
  ],
  imports: [
    MyGalleryRoutingModule
  ]
})

export class MyGalleryModule {}
