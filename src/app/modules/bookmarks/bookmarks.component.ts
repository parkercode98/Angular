import { PurpleChild } from './../../data/schema/bookmarks';
import { Component } from '@angular/core';
import { BookmarkService } from '@core/services/bookmark.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface PurpleChildFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  uri: string;
}

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent {
  private _transformer = (node: PurpleChild, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.title,
      level: level,
      uri: node.uri,
    };
  };
  
  treeControl = new FlatTreeControl<PurpleChildFlatNode>(
    node => node.level,
    node => node.expandable,
  );
  
  
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );
  
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  
  constructor(public bmService: BookmarkService) {
    this.dataSource.data = this.bmService.bookmarkFolders;
    // console.log(this.bmService.bookmarkFolders)
  }
  
  hasChild = (_: number, node: PurpleChildFlatNode) => node.expandable;

}
