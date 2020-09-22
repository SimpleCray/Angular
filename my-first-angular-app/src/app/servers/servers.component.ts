import { Component, OnInit } from '@angular/core';

@Component({
  //---Selector method 1 - element
  //selector: 'app-servers',
  //---Selector Method 2 - attribute
  //selector: '[app-servers]',
  //---Selector Method 2 - class
  selector: '.app-servers',
  //---Template method 1 - external
  templateUrl: './servers.component.html',
  //---Template Method 2 - internal
  // template: `
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = "No server created !"
  serverName=''
  userName=''
  serverCreated=false
  onCreateServer() {
    this.serverCreated = true
    this.serverCreationStatus = "Server created successful with name: " + this.serverName
  }
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true
    }, 2000);
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUserName(){
    this.userName = ''
  }

  ngOnInit(): void {
  }
}
