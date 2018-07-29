import { Component } from "@angular/core";
import * as appSettings from "application-settings";

@Component({
  selector: "days-counter",
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  addDays(days) {
    this.pensionDate = new Date(this.pensionDate.setDate(this.pensionDate.getDate() + days));
    appSettings.setNumber('pensionDate',this.pensionDate.valueOf());
    this.updateComb();
  }
  updateComb() {
    this.daysLeft = this.updateDaysLeft();
    this.fullCombWidth = this.updateCombWidth();
    console.log('daysLeft är '+this.daysLeft+', pensionDate är '+appSettings.getNumber('pensionDate'));
  }
  updateDaysLeft() {
    return Math.max(Math.round((this.pensionDate.valueOf() - (new Date()).valueOf())/(1000*60*60*24)),0);
  }
  updateCombWidth() {
    const widthIncrement = 7.833333333333;  
    return Math.max(60 + Math.floor(this.daysLeft*widthIncrement),0);
  }
  toggleModificationVisibility() {
    this.dateModificationVisibility = this.dateModificationVisibility == "hidden" ? "visible" : "hidden";
  }
  pensionDate = new Date(appSettings.getNumber('pensionDate',(new Date(2018,9,3)).valueOf()));
  daysLeft = this.updateDaysLeft();
  fullCombWidth = this.updateCombWidth();
  dateModificationVisibility = "hidden";
  constructor() {
  }
}