import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toComponent = new EventEmitter<string>()
  collapsed = true;
  constructor() { }

  goToComponent(component){
    this.toComponent.emit(component)
  }
}
