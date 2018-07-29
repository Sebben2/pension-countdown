import { Component } from "@angular/core";

@Component({
  selector: "days-counter",
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  detractOneDay() {
    this.pensionDate = new Date(this.pensionDate.setDate(this.pensionDate.getDate() - 1));
    this.updateComb();
  }
  addOneDay() {
    this.pensionDate = new Date(this.pensionDate.setDate(this.pensionDate.getDate() + 1));
    this.updateComb();
  }
  updateComb() {
    this.daysLeft = this.updateDaysLeft();
    this.fullCombWidth = this.updateCombWidth();
    console.log('daysLeft är '+this.daysLeft+', satt width till '+this.fullCombWidth);
  }
  updateDaysLeft() {
    return Math.max(Math.round((this.pensionDate.valueOf() - (new Date()).valueOf())/(1000*60*60*24)),0);
  }
  updateCombWidth() {
    const widthIncrement = 7.833333333333;  
    return Math.max(60 + Math.floor(this.daysLeft*widthIncrement),0);
  }
  pensionDate = new Date(2018,8,15);
  daysLeft = this.updateDaysLeft();
  fullCombWidth = this.updateCombWidth();
  constructor() {
  }
}