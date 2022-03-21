import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MyGalleryComponent} from "./my-gallery.component";
import {GalleryComponent} from "./gallery/gallery.component";

const  galleryRouts: Routes = [
  {
    path: "",
    component: MyGalleryComponent,
    children: [
      {
        path: ":id",
        component: GalleryComponent
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
