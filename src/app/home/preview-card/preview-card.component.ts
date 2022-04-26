import {Component, Input, OnInit, Output} from '@angular/core';
import {S3Service} from "../../services/s3.service";

@Component({
  selector: 'app-preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss']
})
export class PreviewCardComponent implements OnInit {
  @Input() folderName = '';
  logoUrl = '';
  title = '';
  date = '';
  routeLink = '';

  constructor(private s3Service: S3Service) {
  }


  async ngOnInit() {
    this.title = this.folderName.split('.')[0];
    this.date = this.folderName.split('.')[1].replace(/_/g,' ');
    console.log('data = ', this.date);
    this.logoUrl = await this.getLogoUrl();
    this.routeLink = `gallery/${this.folderName}`
    console.log(this.logoUrl);
  }


  async getLogoUrl() {
    return this.s3Service.getPreSignedGetUrl(`${this.folderName}/logo.jpeg`, 'galleries2');
  }
}
