"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require("application-settings");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pensionDate = new Date(appSettings.getNumber('pensionDate', (new Date(2018, 8, 15)).valueOf()));
        this.daysLeft = this.updateDaysLeft();
        this.fullCombWidth = this.updateCombWidth();
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
        return Math.max(Math.round((this.pensionDate.valueOf() - (new Date()).valueOf()) / (1000 * 60 * 60 * 24)), 0);
    };
    AppComponent.prototype.updateCombWidth = function () {
        var widthIncrement = 7.833333333333;
        return Math.max(60 + Math.floor(this.daysLeft * widthIncrement), 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsa0RBQW9EO0FBT3BEO0lBcUJFO1FBSEEsZ0JBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0YsYUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNqQyxrQkFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUV2QyxDQUFDO0lBckJELDhCQUFPLEdBQVAsVUFBUSxJQUFJO1FBQ1YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekYsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsaUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsbUJBQW1CLEdBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFDRCxxQ0FBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBQyxDQUFDLElBQUksR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQUNELHNDQUFlLEdBQWY7UUFDRSxJQUFNLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxjQUFjLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBakJVLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDakMsQ0FBQzs7T0FDVyxZQUFZLENBdUJ4QjtJQUFELG1CQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImRheXMtY291bnRlclwiLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYXBwLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICBhZGREYXlzKGRheXMpIHtcclxuICAgIHRoaXMucGVuc2lvbkRhdGUgPSBuZXcgRGF0ZSh0aGlzLnBlbnNpb25EYXRlLnNldERhdGUodGhpcy5wZW5zaW9uRGF0ZS5nZXREYXRlKCkgKyBkYXlzKSk7XHJcbiAgICBhcHBTZXR0aW5ncy5zZXROdW1iZXIoJ3BlbnNpb25EYXRlJyx0aGlzLnBlbnNpb25EYXRlLnZhbHVlT2YoKSk7XHJcbiAgICB0aGlzLnVwZGF0ZUNvbWIoKTtcclxuICB9XHJcbiAgdXBkYXRlQ29tYigpIHtcclxuICAgIHRoaXMuZGF5c0xlZnQgPSB0aGlzLnVwZGF0ZURheXNMZWZ0KCk7XHJcbiAgICB0aGlzLmZ1bGxDb21iV2lkdGggPSB0aGlzLnVwZGF0ZUNvbWJXaWR0aCgpO1xyXG4gICAgY29uc29sZS5sb2coJ2RheXNMZWZ0IMOkciAnK3RoaXMuZGF5c0xlZnQrJywgcGVuc2lvbkRhdGUgw6RyICcrYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCdwZW5zaW9uRGF0ZScpKTtcclxuICB9XHJcbiAgdXBkYXRlRGF5c0xlZnQoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5yb3VuZCgodGhpcy5wZW5zaW9uRGF0ZS52YWx1ZU9mKCkgLSAobmV3IERhdGUoKSkudmFsdWVPZigpKS8oMTAwMCo2MCo2MCoyNCkpLDApO1xyXG4gIH1cclxuICB1cGRhdGVDb21iV2lkdGgoKSB7XHJcbiAgICBjb25zdCB3aWR0aEluY3JlbWVudCA9IDcuODMzMzMzMzMzMzMzOyAgXHJcbiAgICByZXR1cm4gTWF0aC5tYXgoNjAgKyBNYXRoLmZsb29yKHRoaXMuZGF5c0xlZnQqd2lkdGhJbmNyZW1lbnQpLDApO1xyXG4gIH1cclxuICBwZW5zaW9uRGF0ZSA9IG5ldyBEYXRlKGFwcFNldHRpbmdzLmdldE51bWJlcigncGVuc2lvbkRhdGUnLChuZXcgRGF0ZSgyMDE4LDgsMTUpKS52YWx1ZU9mKCkpKTtcclxuICBkYXlzTGVmdCA9IHRoaXMudXBkYXRlRGF5c0xlZnQoKTtcclxuICBmdWxsQ29tYldpZHRoID0gdGhpcy51cGRhdGVDb21iV2lkdGgoKTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcbn0iXX0=