import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // #1. Use two-way binding
  newServerName = '';
  newServerContent = '';
  //@Output() will help to pass serverName and serverContent to globally, so we can use these values in app.component.ts
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>()
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>()

  // #2. Use local reference
  // onAddServer(serverNameInput: HTMLInputElement) {
  //   this.serverCreated.emit({
  //     serverName: serverNameInput.value,
  //     serverContent: this.newServerContent
  //   });
  // }

  // #3. Use @ViewChild
  @ViewChild('serverNameInput') serverNameInput: ElementRef;
  onAddServer() {
    this.serverCreated.emit({
      serverName: this.serverNameInput.nativeElement.value,
      serverContent: this.newServerContent
    });
  }
  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.serverNameInput.nativeElement.value,
      serverContent: this.newServerContent
    });
  }

  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent
  //   });
  // }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent
  //   });
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
