import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input() photo:any = '';
  url = '';

  constructor() {
  }


  ngOnInit(): void {
    this.url = `https://storage.yandexcloud.net/galleries2/${this.photo.Key}`;
  }

}
