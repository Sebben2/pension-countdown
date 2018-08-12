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
        // comb must be updated to reflect the amount of days left
        setInterval(function () { return _this.updateComb(); }, 60000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsa0RBQW9EO0FBT3BEO0lBMkJFO1FBQUEsaUJBR0M7UUFQRCxnQkFBVyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RixhQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2pDLGtCQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZDLCtCQUEwQixHQUFHLFFBQVEsQ0FBQztRQUVwQywwREFBMEQ7UUFDMUQsV0FBVyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxFQUFFLEVBQWpCLENBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQTdCRCw4QkFBTyxHQUFQLFVBQVEsSUFBSTtRQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELGlDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBQ0QscUNBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFDRCxzQ0FBZSxHQUFmO1FBQ0UsSUFBTSxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsY0FBYyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNELG1EQUE0QixHQUE1QjtRQUNFLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsMEJBQTBCLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUN2RyxDQUFDO0lBQ0Qsc0NBQWUsR0FBZjtRQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQywwQkFBMEIsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUF0QlUsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNqQyxDQUFDOztPQUNXLFlBQVksQ0ErQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJkYXlzLWNvdW50ZXJcIixcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2FwcC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgYWRkRGF5cyhkYXlzKSB7XHJcbiAgICB0aGlzLnBlbnNpb25EYXRlID0gbmV3IERhdGUodGhpcy5wZW5zaW9uRGF0ZS5zZXREYXRlKHRoaXMucGVuc2lvbkRhdGUuZ2V0RGF0ZSgpICsgZGF5cykpO1xyXG4gICAgYXBwU2V0dGluZ3Muc2V0TnVtYmVyKCdwZW5zaW9uRGF0ZScsdGhpcy5wZW5zaW9uRGF0ZS52YWx1ZU9mKCkpO1xyXG4gICAgdGhpcy51cGRhdGVDb21iKCk7XHJcbiAgfVxyXG4gIHVwZGF0ZUNvbWIoKSB7XHJcbiAgICB0aGlzLmRheXNMZWZ0ID0gdGhpcy51cGRhdGVEYXlzTGVmdCgpO1xyXG4gICAgdGhpcy5mdWxsQ29tYldpZHRoID0gdGhpcy51cGRhdGVDb21iV2lkdGgoKTsgICAgXHJcbiAgfVxyXG4gIHVwZGF0ZURheXNMZWZ0KCkgeyAgICBcclxuICAgIHJldHVybiBNYXRoLm1heChNYXRoLmNlaWwoKHRoaXMucGVuc2lvbkRhdGUudmFsdWVPZigpIC0gKG5ldyBEYXRlKCkpLnZhbHVlT2YoKSkvKDEwMDAqNjAqNjAqMjQpKSwwKTtcclxuICB9XHJcbiAgdXBkYXRlQ29tYldpZHRoKCkge1xyXG4gICAgY29uc3Qgd2lkdGhJbmNyZW1lbnQgPSA3LjgzMzMzMzMzMzMzMzsgIFxyXG4gICAgcmV0dXJuIE1hdGgubWF4KDYwICsgTWF0aC5mbG9vcih0aGlzLmRheXNMZWZ0KndpZHRoSW5jcmVtZW50KSwwKTtcclxuICB9XHJcbiAgdG9nZ2xlTW9kaWZpY2F0aW9uVmlzaWJpbGl0eSgpIHtcclxuICAgIHRoaXMuZGF0ZU1vZGlmaWNhdGlvblZpc2liaWxpdHkgPSB0aGlzLmRhdGVNb2RpZmljYXRpb25WaXNpYmlsaXR5ID09IFwiaGlkZGVuXCIgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCI7XHJcbiAgfVxyXG4gIGVkaXRCdXR0b25TdHlsZSgpIHtcclxuICAgIHJldHVybiAodGhpcy5kYXRlTW9kaWZpY2F0aW9uVmlzaWJpbGl0eSA9PSBcImhpZGRlblwiID8gXCJidG4gYnRuLXNlY29uZGFyeVwiIDogXCJidG4gYnRuLXByaW1hcnlcIik7XHJcbiAgfVxyXG4gIHBlbnNpb25EYXRlID0gbmV3IERhdGUoYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCdwZW5zaW9uRGF0ZScsKG5ldyBEYXRlKDIwMTgsOSwzKSkudmFsdWVPZigpKSk7XHJcbiAgZGF5c0xlZnQgPSB0aGlzLnVwZGF0ZURheXNMZWZ0KCk7XHJcbiAgZnVsbENvbWJXaWR0aCA9IHRoaXMudXBkYXRlQ29tYldpZHRoKCk7XHJcbiAgZGF0ZU1vZGlmaWNhdGlvblZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gY29tYiBtdXN0IGJlIHVwZGF0ZWQgdG8gcmVmbGVjdCB0aGUgYW1vdW50IG9mIGRheXMgbGVmdFxyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGVDb21iKCksIDYwMDAwKTtcclxuICB9XHJcbn0iXX0=