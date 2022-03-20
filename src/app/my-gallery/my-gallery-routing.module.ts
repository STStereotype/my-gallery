import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MyGalleryComponent} from "./my-gallery.component";

const  galleryRouts: Routes = [
  {
    path: "",
    component: MyGalleryComponent
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
