import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted= new EventEmitter<number>()
  interval;
  onGameStarted(){
    this.interval = setInterval(()=>{
      let randomNumber = Math.round(Math.random()*100);
    }, 1000)
  }
  constructor() { }

  ngOnInit(): void {
  }

  onGameStart(){
    this.interval = setInterval(()=>{
      let randomNumber = Math.round(Math.random()*100);
      this.gameStarted.emit(randomNumber)
    }, 1000)
  }
  onGameStop(){
    clearInterval(this.interval)
  }
}
