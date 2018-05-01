import { Component } from "@angular/core";

@Component({
  selector: "days-counter",
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  changeDate() {
    this.daysLeft--;
    const widthIncrement = 7.833333333333;  
    this.fullCombWidth = 60 + Math.floor(this.daysLeft*widthIncrement);
    console.log('daysLeft är '+this.daysLeft+', satt width till '+this.fullCombWidth);
  }
  daysLeft = 66;
  fullCombWidth = 577;
  constructor() {
  }
}