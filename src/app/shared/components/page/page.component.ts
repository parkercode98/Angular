import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  
  constructor(private elem: ElementRef, private renderer: Renderer2) {
    this.elem = elem.nativeElement;
  }

  ngOnInit(): void {
  }

}
