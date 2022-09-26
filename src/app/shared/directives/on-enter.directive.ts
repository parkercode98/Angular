import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[onEnter]'
})
export class OnEnterDirective {

  constructor(private elemRef: ElementRef, private rndr: Renderer2) {
    this.rndr?.listen(this.elemRef.nativeElement, 'keydown', (ev) => {
      this.onEnter(ev);
    });
  }
  
  onEnter(ev: KeyboardEvent) {
    if (ev.code === 'Enter') {
      const parent = this.rndr.parentNode(this.elemRef.nativeElement) ?? null;
      const button = parent.querySelector('button');
      if (parent && button) {
        button.click();
      }
    }
  }
}
