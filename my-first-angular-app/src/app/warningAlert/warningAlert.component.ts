import { Component } from '@angular/core';

@Component({
  selector: 'app-warningAlert',
  template: `
  <div class="col-sm-6">
    <div class="alert alert-warning">Warning message</div>
  </div>`,
  styles: [`
    div.alert-warning:hover {
      color : darkred;
      font-size: 130%
    }
  `]
})
export class WarningAlertComponent {

}