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

  @Output('onUpdateList') image = new EventEmitter<{image: string, sizeImage: number}>();

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    let reader  = new FileReader();
    let result!: string;
    reader.onloadend = () => {
      result = <string>reader.result;
      this.image.emit({
        image: result,
        sizeImage: this.selectedFile.size
      });
    }
    if (this.selectedFile) {
      reader.readAsDataURL(this.selectedFile);
    } else {
      result = "";
    }
    event.target.value = "";
  }
}
