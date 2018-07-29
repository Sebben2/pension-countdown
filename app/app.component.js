"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.daysLeft = 66;
        this.pensionDate = this.updatePensiondate();
        this.fullCombWidth = 577;
    }
    AppComponent.prototype.detractOneDay = function () {
        if (this.daysLeft > 0) {
            this.daysLeft--;
        } // don't go negative
        this.updateComb();
    };
    AppComponent.prototype.addOneDay = function () {
        this.daysLeft++;
        this.updateComb();
    };
    AppComponent.prototype.updateComb = function () {
        var widthIncrement = 7.833333333333;
        this.fullCombWidth = Math.max(60 + Math.floor(this.daysLeft * widthIncrement), 0); // cap min width at 0
        console.log('daysLeft är ' + this.daysLeft + ', satt width till ' + this.fullCombWidth);
        this.pensionDate = this.updatePensiondate();
    };
    AppComponent.prototype.updatePensiondate = function () {
        return (new Date()).setDate((new Date()).getDate() + this.daysLeft);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFPMUM7SUFxQkU7UUFIQSxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsZ0JBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN2QyxrQkFBYSxHQUFHLEdBQUcsQ0FBQztJQUVwQixDQUFDO0lBckJELG9DQUFhLEdBQWI7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFBQSxDQUFDLENBQUUsb0JBQW9CO1FBQzVELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsZ0NBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELGlDQUFVLEdBQVY7UUFDRSxJQUFNLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsY0FBYyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7UUFDckcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBb0IsR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBQ0Qsd0NBQWlCLEdBQWpCO1FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQWpCVSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ2pDLENBQUM7O09BQ1csWUFBWSxDQXVCeEI7SUFBRCxtQkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImRheXMtY291bnRlclwiLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYXBwLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICBkZXRyYWN0T25lRGF5KCkge1xyXG4gICAgaWYodGhpcy5kYXlzTGVmdD4wKSB7dGhpcy5kYXlzTGVmdC0tO30gIC8vIGRvbid0IGdvIG5lZ2F0aXZlXHJcbiAgICB0aGlzLnVwZGF0ZUNvbWIoKTtcclxuICB9XHJcbiAgYWRkT25lRGF5KCkge1xyXG4gICAgdGhpcy5kYXlzTGVmdCsrO1xyXG4gICAgdGhpcy51cGRhdGVDb21iKCk7XHJcbiAgfVxyXG4gIHVwZGF0ZUNvbWIoKSB7XHJcbiAgICBjb25zdCB3aWR0aEluY3JlbWVudCA9IDcuODMzMzMzMzMzMzMzOyAgXHJcbiAgICB0aGlzLmZ1bGxDb21iV2lkdGggPSBNYXRoLm1heCg2MCArIE1hdGguZmxvb3IodGhpcy5kYXlzTGVmdCp3aWR0aEluY3JlbWVudCksMCk7IC8vIGNhcCBtaW4gd2lkdGggYXQgMFxyXG4gICAgY29uc29sZS5sb2coJ2RheXNMZWZ0IMOkciAnK3RoaXMuZGF5c0xlZnQrJywgc2F0dCB3aWR0aCB0aWxsICcrdGhpcy5mdWxsQ29tYldpZHRoKTtcclxuICAgIHRoaXMucGVuc2lvbkRhdGUgPSB0aGlzLnVwZGF0ZVBlbnNpb25kYXRlKCk7XHJcbiAgfVxyXG4gIHVwZGF0ZVBlbnNpb25kYXRlKCkge1xyXG4gICAgcmV0dXJuIChuZXcgRGF0ZSgpKS5zZXREYXRlKChuZXcgRGF0ZSgpKS5nZXREYXRlKCkgKyB0aGlzLmRheXNMZWZ0KTtcclxuICB9XHJcbiAgZGF5c0xlZnQgPSA2NjtcclxuICBwZW5zaW9uRGF0ZSA9IHRoaXMudXBkYXRlUGVuc2lvbmRhdGUoKTtcclxuICBmdWxsQ29tYldpZHRoID0gNTc3O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxufSJdfQ==