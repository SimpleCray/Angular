import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-theBasics';
  currentPage='recipes';

  displayComponent(component){
    return this.currentPage=component
  }
}