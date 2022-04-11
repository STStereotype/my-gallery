import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MyGalleryComponent} from "./my-gallery.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ImagePreviewComponent} from "./gallery/images/image-preview/image-preview.component";

const  galleryRouts: Routes = [
  {
    path: "",
    component: MyGalleryComponent,
    children: [
      {
        path: ":id",
        component: GalleryComponent,
        children: [
          {
            path: ":url",
            component: ImagePreviewComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(galleryRouts)
  ],
  exports: [
    RouterModule
  ]
})

export class MyGalleryRoutingModule {}
