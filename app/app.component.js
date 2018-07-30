"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require("application-settings");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.pensionDate = new Date(appSettings.getNumber('pensionDate', (new Date(2018, 9, 3)).valueOf()));
        this.daysLeft = this.updateDaysLeft();
        this.fullCombWidth = this.updateCombWidth();
        this.dateModificationVisibility = "hidden";
        this.currentTime = new Date();
        setInterval(function () { return (_this.currentTime = new Date()); }, 5000);
    }
    AppComponent.prototype.addDays = function (days) {
        this.pensionDate = new Date(this.pensionDate.setDate(this.pensionDate.getDate() + days));
        appSettings.setNumber('pensionDate', this.pensionDate.valueOf());
        this.updateComb();
    };
    AppComponent.prototype.updateComb = function () {
        this.daysLeft = this.updateDaysLeft();
        this.fullCombWidth = this.updateCombWidth();
        console.log('daysLeft är ' + this.daysLeft + ', pensionDate är ' + appSettings.getNumber('pensionDate'));
    };
    AppComponent.prototype.updateDaysLeft = function () {
        return Math.max(Math.ceil((this.pensionDate.valueOf() - (new Date()).valueOf()) / (1000 * 60 * 60 * 24)), 0);
    };
    AppComponent.prototype.updateCombWidth = function () {
        var widthIncrement = 7.833333333333;
        return Math.max(60 + Math.floor(this.daysLeft * widthIncrement), 0);
    };
    AppComponent.prototype.toggleModificationVisibility = function () {
        this.dateModificationVisibility = this.dateModificationVisibility == "hidden" ? "visible" : "hidden";
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "days-counter",
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsa0RBQW9EO0FBUXBEO0lBMEJFO1FBQUEsaUJBRUM7UUFQRCxnQkFBVyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RixhQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2pDLGtCQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZDLCtCQUEwQixHQUFHLFFBQVEsQ0FBQztRQUN0QyxnQkFBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFdkIsV0FBVyxDQUFDLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxFQUEvQixDQUErQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUEzQkQsOEJBQU8sR0FBUCxVQUFRLElBQUk7UUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RixXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxpQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxtQkFBbUIsR0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUNELHFDQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFDLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBQ0Qsc0NBQWUsR0FBZjtRQUNFLElBQU0sY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLGNBQWMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDRCxtREFBNEIsR0FBNUI7UUFDRSxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDdkcsQ0FBQztJQXBCVSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ2pDLENBQUM7O09BQ1csWUFBWSxDQTZCeEI7SUFBRCxtQkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpYmVyfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZGF5cy1jb3VudGVyXCIsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydhcHAuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIGFkZERheXMoZGF5cykge1xyXG4gICAgdGhpcy5wZW5zaW9uRGF0ZSA9IG5ldyBEYXRlKHRoaXMucGVuc2lvbkRhdGUuc2V0RGF0ZSh0aGlzLnBlbnNpb25EYXRlLmdldERhdGUoKSArIGRheXMpKTtcclxuICAgIGFwcFNldHRpbmdzLnNldE51bWJlcigncGVuc2lvbkRhdGUnLHRoaXMucGVuc2lvbkRhdGUudmFsdWVPZigpKTtcclxuICAgIHRoaXMudXBkYXRlQ29tYigpO1xyXG4gIH1cclxuICB1cGRhdGVDb21iKCkge1xyXG4gICAgdGhpcy5kYXlzTGVmdCA9IHRoaXMudXBkYXRlRGF5c0xlZnQoKTtcclxuICAgIHRoaXMuZnVsbENvbWJXaWR0aCA9IHRoaXMudXBkYXRlQ29tYldpZHRoKCk7XHJcbiAgICBjb25zb2xlLmxvZygnZGF5c0xlZnQgw6RyICcrdGhpcy5kYXlzTGVmdCsnLCBwZW5zaW9uRGF0ZSDDpHIgJythcHBTZXR0aW5ncy5nZXROdW1iZXIoJ3BlbnNpb25EYXRlJykpO1xyXG4gIH1cclxuICB1cGRhdGVEYXlzTGVmdCgpIHsgICAgXHJcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5jZWlsKCh0aGlzLnBlbnNpb25EYXRlLnZhbHVlT2YoKSAtIChuZXcgRGF0ZSgpKS52YWx1ZU9mKCkpLygxMDAwKjYwKjYwKjI0KSksMCk7XHJcbiAgfVxyXG4gIHVwZGF0ZUNvbWJXaWR0aCgpIHtcclxuICAgIGNvbnN0IHdpZHRoSW5jcmVtZW50ID0gNy44MzMzMzMzMzMzMzM7ICBcclxuICAgIHJldHVybiBNYXRoLm1heCg2MCArIE1hdGguZmxvb3IodGhpcy5kYXlzTGVmdCp3aWR0aEluY3JlbWVudCksMCk7XHJcbiAgfVxyXG4gIHRvZ2dsZU1vZGlmaWNhdGlvblZpc2liaWxpdHkoKSB7XHJcbiAgICB0aGlzLmRhdGVNb2RpZmljYXRpb25WaXNpYmlsaXR5ID0gdGhpcy5kYXRlTW9kaWZpY2F0aW9uVmlzaWJpbGl0eSA9PSBcImhpZGRlblwiID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiO1xyXG4gIH1cclxuICBwZW5zaW9uRGF0ZSA9IG5ldyBEYXRlKGFwcFNldHRpbmdzLmdldE51bWJlcigncGVuc2lvbkRhdGUnLChuZXcgRGF0ZSgyMDE4LDksMykpLnZhbHVlT2YoKSkpO1xyXG4gIGRheXNMZWZ0ID0gdGhpcy51cGRhdGVEYXlzTGVmdCgpO1xyXG4gIGZ1bGxDb21iV2lkdGggPSB0aGlzLnVwZGF0ZUNvbWJXaWR0aCgpO1xyXG4gIGRhdGVNb2RpZmljYXRpb25WaXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiAodGhpcy5jdXJyZW50VGltZSA9IG5ldyBEYXRlKCkpLCA1MDAwKTtcclxuICB9XHJcbn0iXX0=