import { Bookmark, PurpleChild } from './../../../../data/schema/bookmarks';
import { Component, OnInit } from '@angular/core';
import * as data from '../../../../data/json/bookmark-json.json';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bookmarkData: Bookmark = (data as any).default;
  bookmarkFolders: PurpleChild[];
  bookmarkLinks: PurpleChild[];
  
  constructor() {}

  ngOnInit(): void {
    let bmks = this.bookmarkData;
    let bmksChilds = bmks.children;
    let tbData = bmksChilds.find(res => res.guid.includes('toolbar'));
    let tbChilds = tbData.children;
    let tbFolders = tbChilds.filter(child => isFolder(child));
    let tbLinks = tbChilds.filter(child => (child.uri != undefined || null || ""))
    this.bookmarkFolders = tbFolders;
    this.bookmarkLinks = tbLinks;
  }

}

function isFolder(obj: any) {
  return (!Object.keys(obj).includes('uri')) && (obj.title != "");
}

function objWithValue(arrOfObj: any, aVal: string) {
  let flat = arrOfObj.flat(99999);
  return flat.find((res: any) => Object.values(res).includes(aVal));
}