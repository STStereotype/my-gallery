import {Component, Input, OnInit} from '@angular/core';

interface Image {
  nameImage: string,
  url: string,
  image: string,
  sizeImage: number
}

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() image!: Image;

  constructor() { }

  ngOnInit(): void {
  }

  OpenImage() {
  }
}
