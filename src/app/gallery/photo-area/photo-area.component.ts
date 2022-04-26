import {Component, Input, OnInit} from '@angular/core';
import {S3Service} from "../../services/s3.service";

@Component({
  selector: 'app-photo-area',
  templateUrl: './photo-area.component.html',
  styleUrls: ['./photo-area.component.scss']
})
export class PhotoAreaComponent implements OnInit {
  @Input() gallery = ''
  photos:any
  url = ''
  constructor(private s3: S3Service) {
  }


  async ngOnInit() {
    this.photos = (await this.s3.listObjects('200', 'galleries2', `${this.gallery}/`)).Contents!.filter((obj)=> obj.Size!==0);
    console.log(this.photos)
  }

}
