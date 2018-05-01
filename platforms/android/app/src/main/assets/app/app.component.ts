import { Component } from "@angular/core";

@Component({
  selector: "days-counter",
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  changeDate() {
    console.log('KLICKAD dateumbytare...');
  }
  // constructor() {
  //   // width 576 = 66+ dagar kvar
  // }
}