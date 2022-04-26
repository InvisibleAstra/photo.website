import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {S3Service} from "../services/s3.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  photos:any
  gallery = ''

  constructor(private route: ActivatedRoute, private s3: S3Service) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      this.gallery = params['id'];
    })

  }

}
