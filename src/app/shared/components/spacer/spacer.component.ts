import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'spacer',
  templateUrl: './spacer.component.html',
  styleUrls: ['./spacer.component.scss']
})
export class SpacerComponent implements OnInit {
  
  private _type: 'horizontal' | 'vertical';
  
  @Input() 
  set type(value: 'horizontal' | 'vertical') {
    this._type = value;
  }
  get type() {
    return this._type;
  }

  constructor(private elem: ElementRef, private rndr: Renderer2) {
    this.elem = elem.nativeElement;
  }

  ngOnInit(): void {
    if (this.type == 'horizontal') {
      this.rndr.addClass(this.elem, 'horizontal');
    }
    else if (this.type == 'vertical') {
      this.rndr.addClass(this.elem, 'vertical');
    }
    else {
      this.rndr.addClass(this.elem, 'contract');
    }
  }
}
