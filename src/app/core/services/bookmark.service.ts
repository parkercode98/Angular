import { Injectable } from '@angular/core';
import { Bookmark, BookmarkChild, PurpleChild } from '@data/schema/bookmarks';
import * as data from '../../data/json/bookmark-json.json';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  
  Data: Bookmark = (data as any).default;
  bookmarkData: BookmarkChild;
  bookmarkFolders: PurpleChild[];
  bookmarkLinks: PurpleChild[];

  constructor() {
    this.bookmarkData = this.Data.children.find(res => res.guid.includes('toolbar'));
    this.bookmarkFolders = this.bookmarkData.children.filter(child => this.isFolder(child));
    this.bookmarkLinks = this.bookmarkData.children.filter(child => (child.uri != undefined || null || ""))
  }
  
  isFolder(obj: any) {
    return (!Object.keys(obj).includes('uri')) && (obj.title != "");
  }
  
}
