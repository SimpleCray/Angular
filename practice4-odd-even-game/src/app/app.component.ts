import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'practice4-odd-even-game';
  oddNumbers = [];
  evenNumbers = [];
  onGameStarted(number){
    number%2===0 ? this.evenNumbers.push(number) : this.oddNumbers.push(number)
  }
}
