import { NgModule } from "@angular/core";
import { FolderSidebarComponent } from "./folder-sidebar/folder-sidebar.component";
import { MyGalleryRoutingModule } from "./my-gallery-routing.module";
import { MyGalleryComponent } from "./my-gallery.component";
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesComponent } from './gallery/images/images.component';
import { AddImageComponent } from './gallery/images/add-image/add-image.component';
import { AddFolderComponent } from './folder-sidebar/add-folder/add-folder.component';
import { CommonModule } from "@angular/common";
import { MyGalleryService } from "./my-gallery.service";
import { ImageComponent } from './gallery/images/image/image.component';

@NgModule({
  declarations: [
    MyGalleryComponent,
    FolderSidebarComponent,
    GalleryComponent,
    ImagesComponent,
    AddImageComponent,
    AddFolderComponent,
    ImageComponent
  ],
  exports: [
    FolderSidebarComponent
  ],
  imports: [
    MyGalleryRoutingModule,
    CommonModule
  ],
  providers: [
    MyGalleryService
  ]
})

export class MyGalleryModule {}
