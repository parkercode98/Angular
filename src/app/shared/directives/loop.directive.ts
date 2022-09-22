import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[loop]',
})
export class LoopDirective {
  
	@Input()
	set loop(num: any) {
    const numLoops = Number(num) ?? 1;
    const fillArr = Array(numLoops).fill(null);
		this.view.clear();
		fillArr.forEach((item: any, index: any) => {
			this.view.createEmbeddedView(this.template, { $implicit: item, index });
		});
	}
  
	constructor(private view: ViewContainerRef, private template: TemplateRef<any>) {}
  
}
