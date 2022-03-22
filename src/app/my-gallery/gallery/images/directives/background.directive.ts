import {Directive, HostBinding, Input, OnInit} from "@angular/core";

@Directive({
  selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit{

  constructor() {}

  @HostBinding('style.background') background!: string;
  @HostBinding('style.background-size') backgroundSize!: string;

  @Input() img!: string;

  ngOnInit() {
    this.background = "url(" + this.img + ") no-repeat center center";
    this.backgroundSize = "cover";
  }
}
