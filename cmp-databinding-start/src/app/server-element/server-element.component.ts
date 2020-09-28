import { 
  Component, 
  Input, 
  OnChanges, 
  OnInit, 
  SimpleChanges, 
  ViewEncapsulation, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  //Type declaration, @Input() to use it globally. It can have alias inside like this: @Input('srvElement')
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  }
  @Input() name: string;
  @ViewChild('heading',{static:true}) header: ElementRef;
  @ContentChild('contentParagraph',{static:true}) paragraph: ElementRef;
  constructor() {
    console.log('Constructor called')
  }

  ngOnInit() {
    console.log('1. ngOnInit called')
    console.log("*Header: " + this.header.nativeElement.textContent)
    console.log("*Content Paragraph: " + this.paragraph.nativeElement.textContent)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges called')
    console.log(changes)
  }

  ngDoCheck(){
    console.log('3. ngDoCheck called')
  }

  ngAfterContentInit(){
    console.log('4. ngAfterContentInit called')
    console.log("*Content Paragraph: " + this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked(){
    console.log('5. ngAfterContentChecked called')
  }

  ngAfterViewInit(){
    console.log('6. ngAfterViewInit called')
    console.log("*Header: " + this.header.nativeElement.textContent)
  }
  ngAfterViewChecked(){
    console.log('7. ngAfterViewChecked called')
  }
  ngOnDestroy() {
    console.log('8. ngOnDestroy called')
  }
}
