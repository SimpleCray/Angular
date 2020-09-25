import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges {
  //Type declaration, @Input() to use it globally. It can have alias inside like this: @Input('srvElement')
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  }
  @Input() name: string;
  constructor() {
    console.log('constructor called')
  }

  ngOnInit() {
    console.log('ngOnInit called')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called')
    console.log(changes)
  }

}
