import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {

  constructor(private reader: FileReader) {
  }
  ngOnInit(): void {}

  selectedFile!: File;

  @Output('onUpdateList') image = new EventEmitter<{nameImage: string, url: string, image: string, sizeImage: number}>();

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    let reader  = new FileReader();
    if (this.selectedFile) {
      reader.readAsDataURL(this.selectedFile);
      reader.onloadend = () => {
        let urlImage = URL.createObjectURL(this.selectedFile)
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
}
