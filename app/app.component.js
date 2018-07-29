"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require("application-settings");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pensionDate = new Date(appSettings.getNumber('pensionDate', (new Date(2018, 9, 3)).valueOf()));
        this.daysLeft = this.updateDaysLeft();
        this.fullCombWidth = this.updateCombWidth();
        this.dateModificationVisibility = "hidden";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsa0RBQW9EO0FBT3BEO0lBeUJFO1FBSkEsZ0JBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUYsYUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNqQyxrQkFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QywrQkFBMEIsR0FBRyxRQUFRLENBQUM7SUFFdEMsQ0FBQztJQXpCRCw4QkFBTyxHQUFQLFVBQVEsSUFBSTtRQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELGlDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLG1CQUFtQixHQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBQ0QscUNBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFDRCxzQ0FBZSxHQUFmO1FBQ0UsSUFBTSxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsY0FBYyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNELG1EQUE0QixHQUE1QjtRQUNFLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsMEJBQTBCLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUN2RyxDQUFDO0lBcEJVLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDakMsQ0FBQzs7T0FDVyxZQUFZLENBMkJ4QjtJQUFELG1CQUFDO0NBQUEsQUEzQkQsSUEyQkM7QUEzQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImRheXMtY291bnRlclwiLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYXBwLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICBhZGREYXlzKGRheXMpIHtcclxuICAgIHRoaXMucGVuc2lvbkRhdGUgPSBuZXcgRGF0ZSh0aGlzLnBlbnNpb25EYXRlLnNldERhdGUodGhpcy5wZW5zaW9uRGF0ZS5nZXREYXRlKCkgKyBkYXlzKSk7XHJcbiAgICBhcHBTZXR0aW5ncy5zZXROdW1iZXIoJ3BlbnNpb25EYXRlJyx0aGlzLnBlbnNpb25EYXRlLnZhbHVlT2YoKSk7XHJcbiAgICB0aGlzLnVwZGF0ZUNvbWIoKTtcclxuICB9XHJcbiAgdXBkYXRlQ29tYigpIHtcclxuICAgIHRoaXMuZGF5c0xlZnQgPSB0aGlzLnVwZGF0ZURheXNMZWZ0KCk7XHJcbiAgICB0aGlzLmZ1bGxDb21iV2lkdGggPSB0aGlzLnVwZGF0ZUNvbWJXaWR0aCgpO1xyXG4gICAgY29uc29sZS5sb2coJ2RheXNMZWZ0IMOkciAnK3RoaXMuZGF5c0xlZnQrJywgcGVuc2lvbkRhdGUgw6RyICcrYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCdwZW5zaW9uRGF0ZScpKTtcclxuICB9XHJcbiAgdXBkYXRlRGF5c0xlZnQoKSB7ICAgIFxyXG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGguY2VpbCgodGhpcy5wZW5zaW9uRGF0ZS52YWx1ZU9mKCkgLSAobmV3IERhdGUoKSkudmFsdWVPZigpKS8oMTAwMCo2MCo2MCoyNCkpLDApO1xyXG4gIH1cclxuICB1cGRhdGVDb21iV2lkdGgoKSB7XHJcbiAgICBjb25zdCB3aWR0aEluY3JlbWVudCA9IDcuODMzMzMzMzMzMzMzOyAgXHJcbiAgICByZXR1cm4gTWF0aC5tYXgoNjAgKyBNYXRoLmZsb29yKHRoaXMuZGF5c0xlZnQqd2lkdGhJbmNyZW1lbnQpLDApO1xyXG4gIH1cclxuICB0b2dnbGVNb2RpZmljYXRpb25WaXNpYmlsaXR5KCkge1xyXG4gICAgdGhpcy5kYXRlTW9kaWZpY2F0aW9uVmlzaWJpbGl0eSA9IHRoaXMuZGF0ZU1vZGlmaWNhdGlvblZpc2liaWxpdHkgPT0gXCJoaWRkZW5cIiA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIjtcclxuICB9XHJcbiAgcGVuc2lvbkRhdGUgPSBuZXcgRGF0ZShhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ3BlbnNpb25EYXRlJywobmV3IERhdGUoMjAxOCw5LDMpKS52YWx1ZU9mKCkpKTtcclxuICBkYXlzTGVmdCA9IHRoaXMudXBkYXRlRGF5c0xlZnQoKTtcclxuICBmdWxsQ29tYldpZHRoID0gdGhpcy51cGRhdGVDb21iV2lkdGgoKTtcclxuICBkYXRlTW9kaWZpY2F0aW9uVmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG59Il19