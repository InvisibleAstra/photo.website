import {Component, OnInit} from '@angular/core';
import {S3Service} from "../services/s3.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  titles = [''];


  constructor(private s3Service: S3Service) {
  }


  async ngOnInit() {
    console.log('home')
    let objects = (await this.s3Service.listObjects('20', 'galleries2')).Contents!.filter((obj)=>obj.Size===0);
    console.log(objects);
    //
    let folderKeys = objects.map((obj) => obj.Key)
    console.log(folderKeys)
    let titles = folderKeys.map((key) => {
      if (key) {
        return key.slice(0, -1)
      } else {
        throw Error('invalid folder name');
      }
    })
    this.titles = titles;
  }

}
