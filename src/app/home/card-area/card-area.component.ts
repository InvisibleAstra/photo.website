import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-area',
  templateUrl: './card-area.component.html',
  styleUrls: ['./card-area.component.scss']
})
export class CardAreaComponent implements OnInit {
  @Input() titles = [''];

  constructor() {
  }


  ngOnInit(): void {
  }

}
