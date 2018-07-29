"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pensionDate = new Date(2018, 8, 15);
        this.daysLeft = this.updateDaysLeft();
        this.fullCombWidth = 577;
    }
    AppComponent.prototype.detractOneDay = function () {
        this.pensionDate = new Date(this.pensionDate.setDate(this.pensionDate.getDate() - 1));
        this.updateComb();
    };
    AppComponent.prototype.addOneDay = function () {
        this.pensionDate = new Date(this.pensionDate.setDate(this.pensionDate.getDate() + 1));
        this.updateComb();
    };
    AppComponent.prototype.updateComb = function () {
        var widthIncrement = 7.833333333333;
        this.daysLeft = this.updateDaysLeft();
        this.fullCombWidth = Math.max(60 + Math.floor(this.daysLeft * widthIncrement), 0); // cap min width at 0
        console.log('daysLeft är ' + this.daysLeft + ', satt width till ' + this.fullCombWidth);
    };
    AppComponent.prototype.updateDaysLeft = function () {
        return Math.max(Math.round((this.pensionDate.valueOf() - (new Date()).valueOf()) / (1000 * 60 * 60 * 24)), 0);
    };
    AppComponent.prototype.pensionDateFormatted = function () {
        return this.pensionDate.toLocaleDateString();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFPMUM7SUF3QkU7UUFIQSxnQkFBVyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEMsYUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNqQyxrQkFBYSxHQUFHLEdBQUcsQ0FBQztJQUVwQixDQUFDO0lBeEJELG9DQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELGdDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELGlDQUFVLEdBQVY7UUFDRSxJQUFNLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsY0FBYyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7UUFDckcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBb0IsR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUNELHFDQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFDLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBQ0QsMkNBQW9CLEdBQXBCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBcEJVLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDakMsQ0FBQzs7T0FDVyxZQUFZLENBMEJ4QjtJQUFELG1CQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZGF5cy1jb3VudGVyXCIsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydhcHAuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIGRldHJhY3RPbmVEYXkoKSB7XHJcbiAgICB0aGlzLnBlbnNpb25EYXRlID0gbmV3IERhdGUodGhpcy5wZW5zaW9uRGF0ZS5zZXREYXRlKHRoaXMucGVuc2lvbkRhdGUuZ2V0RGF0ZSgpIC0gMSkpO1xyXG4gICAgdGhpcy51cGRhdGVDb21iKCk7XHJcbiAgfVxyXG4gIGFkZE9uZURheSgpIHtcclxuICAgIHRoaXMucGVuc2lvbkRhdGUgPSBuZXcgRGF0ZSh0aGlzLnBlbnNpb25EYXRlLnNldERhdGUodGhpcy5wZW5zaW9uRGF0ZS5nZXREYXRlKCkgKyAxKSk7XHJcbiAgICB0aGlzLnVwZGF0ZUNvbWIoKTtcclxuICB9XHJcbiAgdXBkYXRlQ29tYigpIHtcclxuICAgIGNvbnN0IHdpZHRoSW5jcmVtZW50ID0gNy44MzMzMzMzMzMzMzM7ICBcclxuICAgIHRoaXMuZGF5c0xlZnQgPSB0aGlzLnVwZGF0ZURheXNMZWZ0KCk7XHJcbiAgICB0aGlzLmZ1bGxDb21iV2lkdGggPSBNYXRoLm1heCg2MCArIE1hdGguZmxvb3IodGhpcy5kYXlzTGVmdCp3aWR0aEluY3JlbWVudCksMCk7IC8vIGNhcCBtaW4gd2lkdGggYXQgMFxyXG4gICAgY29uc29sZS5sb2coJ2RheXNMZWZ0IMOkciAnK3RoaXMuZGF5c0xlZnQrJywgc2F0dCB3aWR0aCB0aWxsICcrdGhpcy5mdWxsQ29tYldpZHRoKTtcclxuICB9XHJcbiAgdXBkYXRlRGF5c0xlZnQoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5yb3VuZCgodGhpcy5wZW5zaW9uRGF0ZS52YWx1ZU9mKCkgLSAobmV3IERhdGUoKSkudmFsdWVPZigpKS8oMTAwMCo2MCo2MCoyNCkpLDApO1xyXG4gIH1cclxuICBwZW5zaW9uRGF0ZUZvcm1hdHRlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnBlbnNpb25EYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xyXG4gIH1cclxuICBwZW5zaW9uRGF0ZSA9IG5ldyBEYXRlKDIwMTgsOCwxNSk7XHJcbiAgZGF5c0xlZnQgPSB0aGlzLnVwZGF0ZURheXNMZWZ0KCk7XHJcbiAgZnVsbENvbWJXaWR0aCA9IDU3NztcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcbn0iXX0=