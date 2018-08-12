"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require("application-settings");
var nativescript_insomnia_1 = require("nativescript-insomnia");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.pensionDate = new Date(appSettings.getNumber('pensionDate', (new Date(2018, 9, 3)).valueOf()));
        this.daysLeft = this.updateDaysLeft();
        this.fullCombWidth = this.updateCombWidth();
        this.dateModificationVisibility = "hidden";
        // comb must be updated to reflect the amount of days left
        setInterval(function () { return _this.updateComb(); }, 60000);
        nativescript_insomnia_1.keepAwake().then(function () {
            console.log("Insomnia is active");
        });
    }
    AppComponent.prototype.addDays = function (days) {
        this.pensionDate = new Date(this.pensionDate.setDate(this.pensionDate.getDate() + days));
        appSettings.setNumber('pensionDate', this.pensionDate.valueOf());
        this.updateComb();
    };
    AppComponent.prototype.updateComb = function () {
        this.daysLeft = this.updateDaysLeft();
        this.fullCombWidth = this.updateCombWidth();
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
    AppComponent.prototype.editButtonStyle = function () {
        return (this.dateModificationVisibility == "hidden" ? "btn btn-secondary" : "btn btn-primary");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsa0RBQW9EO0FBQ3BELCtEQUFtRTtBQU9uRTtJQTJCRTtRQUFBLGlCQU1DO1FBVkQsZ0JBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUYsYUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNqQyxrQkFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QywrQkFBMEIsR0FBRyxRQUFRLENBQUM7UUFFcEMsMERBQTBEO1FBQzFELFdBQVcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsRUFBRSxFQUFqQixDQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVDLGlDQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBaENELDhCQUFPLEdBQVAsVUFBUSxJQUFJO1FBQ1YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekYsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsaUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFDRCxxQ0FBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBQyxDQUFDLElBQUksR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUNELHNDQUFlLEdBQWY7UUFDRSxJQUFNLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxjQUFjLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0QsbURBQTRCLEdBQTVCO1FBQ0UsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQywwQkFBMEIsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ3ZHLENBQUM7SUFDRCxzQ0FBZSxHQUFmO1FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLDBCQUEwQixJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDakcsQ0FBQztJQXRCVSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ2pDLENBQUM7O09BQ1csWUFBWSxDQWtDeEI7SUFBRCxtQkFBQztDQUFBLEFBbENELElBa0NDO0FBbENZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IGtlZXBBd2FrZSwgYWxsb3dTbGVlcEFnYWluIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbnNvbW5pYVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZGF5cy1jb3VudGVyXCIsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydhcHAuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIGFkZERheXMoZGF5cykge1xyXG4gICAgdGhpcy5wZW5zaW9uRGF0ZSA9IG5ldyBEYXRlKHRoaXMucGVuc2lvbkRhdGUuc2V0RGF0ZSh0aGlzLnBlbnNpb25EYXRlLmdldERhdGUoKSArIGRheXMpKTtcclxuICAgIGFwcFNldHRpbmdzLnNldE51bWJlcigncGVuc2lvbkRhdGUnLHRoaXMucGVuc2lvbkRhdGUudmFsdWVPZigpKTtcclxuICAgIHRoaXMudXBkYXRlQ29tYigpO1xyXG4gIH1cclxuICB1cGRhdGVDb21iKCkge1xyXG4gICAgdGhpcy5kYXlzTGVmdCA9IHRoaXMudXBkYXRlRGF5c0xlZnQoKTtcclxuICAgIHRoaXMuZnVsbENvbWJXaWR0aCA9IHRoaXMudXBkYXRlQ29tYldpZHRoKCk7ICAgIFxyXG4gIH1cclxuICB1cGRhdGVEYXlzTGVmdCgpIHsgICAgXHJcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5jZWlsKCh0aGlzLnBlbnNpb25EYXRlLnZhbHVlT2YoKSAtIChuZXcgRGF0ZSgpKS52YWx1ZU9mKCkpLygxMDAwKjYwKjYwKjI0KSksMCk7XHJcbiAgfVxyXG4gIHVwZGF0ZUNvbWJXaWR0aCgpIHtcclxuICAgIGNvbnN0IHdpZHRoSW5jcmVtZW50ID0gNy44MzMzMzMzMzMzMzM7ICBcclxuICAgIHJldHVybiBNYXRoLm1heCg2MCArIE1hdGguZmxvb3IodGhpcy5kYXlzTGVmdCp3aWR0aEluY3JlbWVudCksMCk7XHJcbiAgfVxyXG4gIHRvZ2dsZU1vZGlmaWNhdGlvblZpc2liaWxpdHkoKSB7XHJcbiAgICB0aGlzLmRhdGVNb2RpZmljYXRpb25WaXNpYmlsaXR5ID0gdGhpcy5kYXRlTW9kaWZpY2F0aW9uVmlzaWJpbGl0eSA9PSBcImhpZGRlblwiID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiO1xyXG4gIH1cclxuICBlZGl0QnV0dG9uU3R5bGUoKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuZGF0ZU1vZGlmaWNhdGlvblZpc2liaWxpdHkgPT0gXCJoaWRkZW5cIiA/IFwiYnRuIGJ0bi1zZWNvbmRhcnlcIiA6IFwiYnRuIGJ0bi1wcmltYXJ5XCIpO1xyXG4gIH1cclxuICBwZW5zaW9uRGF0ZSA9IG5ldyBEYXRlKGFwcFNldHRpbmdzLmdldE51bWJlcigncGVuc2lvbkRhdGUnLChuZXcgRGF0ZSgyMDE4LDksMykpLnZhbHVlT2YoKSkpO1xyXG4gIGRheXNMZWZ0ID0gdGhpcy51cGRhdGVEYXlzTGVmdCgpO1xyXG4gIGZ1bGxDb21iV2lkdGggPSB0aGlzLnVwZGF0ZUNvbWJXaWR0aCgpO1xyXG4gIGRhdGVNb2RpZmljYXRpb25WaXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIGNvbWIgbXVzdCBiZSB1cGRhdGVkIHRvIHJlZmxlY3QgdGhlIGFtb3VudCBvZiBkYXlzIGxlZnRcclxuICAgIHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlQ29tYigpLCA2MDAwMCk7XHJcbiAgICBrZWVwQXdha2UoKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkluc29tbmlhIGlzIGFjdGl2ZVwiKTtcclxuICAgIH0pXHJcbiAgfVxyXG59Il19