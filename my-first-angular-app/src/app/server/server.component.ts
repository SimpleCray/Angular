import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      background-color: lightgreen;
    }
  `]
})
export class ServerComponent {
  //serverID = setInterval(()=>{ return Math.round((Math.random()*100))}, 1000)
  serverID = Math.round((Math.random()*100));
  serverStatus: string = "offline";

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  getServerStatus(){
    return this.serverStatus
  }
  getColor(){
    return this.serverStatus == "online" ? "green" : "red"
  }
}