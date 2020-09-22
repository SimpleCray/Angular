import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //---Style Method 1: external, you can use multiple style templates here
  // styleUrls: ['./app.component.css']
  //---incline
  //---Style Method 2: internal
  styles: [`
    h3 {
      color : dodgerblue;
    }
  `]
})
export class AppComponent {
  title = 'your-first-angular-app';
  name = 'Hai Duong'
}
