import { Component } from "@angular/core";

@Component({
  selector: "days-counter",
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  detractOneDay() {
    if(this.daysLeft>0) {this.daysLeft--;}  // don't go negative
    this.updateComb();
  }
  addOneDay() {
    this.daysLeft++;
    this.updateComb();
  }
  updateComb() {
    const widthIncrement = 7.833333333333;  
    this.fullCombWidth = Math.max(60 + Math.floor(this.daysLeft*widthIncrement),0); // cap min width at 0
    console.log('daysLeft är '+this.daysLeft+', satt width till '+this.fullCombWidth);
  }
  daysLeft = 66;
  pensionDate = (new Date()).setDate((new Date()).getDate() + this.daysLeft);
  fullCombWidth = 577;
  constructor() {
  }
}