import { Component } from "@angular/core";
import * as appSettings from "application-settings";
import { keepAwake, allowSleepAgain } from "nativescript-insomnia";

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
  }
  updateDaysLeft() {    
    return Math.max(Math.ceil((this.pensionDate.valueOf() - (new Date()).valueOf())/(1000*60*60*24)),0);
  }
  updateCombWidth() {
    const widthIncrement = 7.833333333333;  
    return Math.max(60 + Math.floor(this.daysLeft*widthIncrement),0);
  }
  toggleModificationVisibility() {
    this.dateModificationVisibility = this.dateModificationVisibility == "hidden" ? "visible" : "hidden";
  }
  editButtonStyle() {
    return (this.dateModificationVisibility == "hidden" ? "btn btn-secondary" : "btn btn-primary");
  }
  pensionDate = new Date(appSettings.getNumber('pensionDate',(new Date(2018,9,3)).valueOf()));
  daysLeft = this.updateDaysLeft();
  fullCombWidth = this.updateCombWidth();
  dateModificationVisibility = "hidden";
  constructor() {
    // comb must be updated to reflect the amount of days left
    setInterval(() => this.updateComb(), 60000);
    keepAwake().then(function() {
      console.log("Insomnia is active");
    })
  }
}