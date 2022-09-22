import { Component, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  _scroll: boolean; 
  @Input() set scroll(value: boolean) {this._scroll = value} get scroll() {return this._scroll}
  
  constructor(private elem: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.checkScrollable();
  }

  checkScrollable() {
    if (this.scroll) {
      this.renderer.addClass(this.elem.nativeElement, 'scrollable');
    }
  }
}
