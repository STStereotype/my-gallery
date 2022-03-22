import {NgModule} from "@angular/core";
import {BackgroundDirective} from "../my-gallery/gallery/images/directives/background.directive";

@NgModule({
  declarations: [
    BackgroundDirective
  ],
  exports: [
    BackgroundDirective
  ]
})

export class GeneralModule {}
