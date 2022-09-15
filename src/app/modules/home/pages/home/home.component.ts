import { Component, OnInit } from '@angular/core';
import * as data from '../../../../data/json/bookmark-json.json';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bookmarkData: any = (data as any).default;
  
  constructor() { }

  ngOnInit(): void {
    console.log(data)
  }

}
