import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Coding';
  @HostBinding("class") class = 'app-root';
  
  debugContent: string;
  
  ngOnInit(): void {
    this.getDebugContent();
  }
  
  getDebugContent() {
    let debugContent = window.getComputedStyle(document.body, '::before')?.['content'] ?? null;
    if (debugContent == 'none') {
      debugContent = null;
    }
    if (debugContent != null) {
      debugContent = replaceAll(debugContent, '\\a', '\n');
      debugContent = replaceAll(debugContent, '"', '');
      this.debugContent = debugContent;
    }
  }
  
}


function replaceAll(string:string, search: string, replace: string) {
  return string.split(search).join(replace);
}