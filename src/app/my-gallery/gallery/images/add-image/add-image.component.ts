import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MyGalleryService} from "../../../my-gallery.service";

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {

  constructor(private reader: FileReader, private gallery: MyGalleryService) {
  }
  ngOnInit(): void {}

  selectedFile!: File;

  @Output('onUpdateList') image = new EventEmitter<{nameImage: string, url: string, image: string, sizeImage: number}>();

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    if(!this.selectedFile) {
      return;
    }
    let reader  = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onloadend = () => {
      let urlImage = URL.createObjectURL(this.selectedFile)
      if(!this.ImageCheck(<string>reader.result))
      {
        this.image.emit({
          nameImage: this.selectedFile.name.slice(0, this.selectedFile.name.lastIndexOf('.')),
          url: urlImage.slice(urlImage.lastIndexOf('/') + 1, urlImage.length),
          image: <string>reader.result,
          sizeImage: this.selectedFile.size
        });
      }
    }
    event.target.value = "";
  }

  private ImageCheck (image: string): boolean {
    for(let img of this.gallery.images) {
      if(img.image == image)
      {
        return true;
      }
    }
    return false;
  }
}
