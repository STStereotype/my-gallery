import { NgModule } from "@angular/core";
import { FolderSidebarComponent } from "./folder-sidebar/folder-sidebar.component";
import { MyGalleryRoutingModule } from "./my-gallery-routing.module";
import { MyGalleryComponent } from "./my-gallery.component";
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesComponent } from './gallery/images/images.component';
import { AddImageComponent } from './gallery/images/add-image/add-image.component';
import { AddFolderComponent } from './folder-sidebar/add-folder/add-folder.component';
import { CommonModule } from "@angular/common";
import { ImageComponent } from './gallery/images/image/image.component';
import {GeneralModule} from "../common/general.module";
import { ImageEditingComponent } from './gallery/images/image-editing/image-editing.component';
import { ImagePreviewComponent } from './gallery/images/image-preview/image-preview.component';

@NgModule({
  declarations: [
    MyGalleryComponent,
    FolderSidebarComponent,
    GalleryComponent,
    ImagesComponent,
    AddImageComponent,
    AddFolderComponent,
    ImageComponent,
    ImageEditingComponent,
    ImagePreviewComponent
  ],
  exports: [
    FolderSidebarComponent
  ],
  imports: [
    MyGalleryRoutingModule,
    CommonModule,
    GeneralModule
  ],
  providers: [
    FileReader
  ]
})

export class MyGalleryModule {}
