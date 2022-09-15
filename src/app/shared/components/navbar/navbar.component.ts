import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  _title: string;
  
  @Input()
  set title(value: string) {
    this._title = value;
  }
  get title() {
    return this._title;
  }

  constructor(private elem: ElementRef, private rndr: Renderer2) {
    this.elem = elem.nativeElement;
    this.rndr.addClass(this.elem, 'navbar');
  }

  ngOnInit(): void {
  }
  
}
