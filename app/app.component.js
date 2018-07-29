"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.daysLeft = 66;
        this.pensionDate = (new Date()).setDate((new Date()).getDate() + this.daysLeft);
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
        this.updatePensiondate();
    };
    AppComponent.prototype.updatePensiondate = function () {
        this.pensionDate = (new Date()).setDate((new Date()).getDate() + this.daysLeft);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFPMUM7SUFxQkU7UUFIQSxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsZ0JBQVcsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNFLGtCQUFhLEdBQUcsR0FBRyxDQUFDO0lBRXBCLENBQUM7SUFyQkQsb0NBQWEsR0FBYjtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFBLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUFBLENBQUMsQ0FBRSxvQkFBb0I7UUFDNUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxnQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsaUNBQVUsR0FBVjtRQUNFLElBQU0sY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxjQUFjLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtRQUNyRyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFvQixHQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsd0NBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFqQlUsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNqQyxDQUFDOztPQUNXLFlBQVksQ0F1QnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJkYXlzLWNvdW50ZXJcIixcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2FwcC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgZGV0cmFjdE9uZURheSgpIHtcclxuICAgIGlmKHRoaXMuZGF5c0xlZnQ+MCkge3RoaXMuZGF5c0xlZnQtLTt9ICAvLyBkb24ndCBnbyBuZWdhdGl2ZVxyXG4gICAgdGhpcy51cGRhdGVDb21iKCk7XHJcbiAgfVxyXG4gIGFkZE9uZURheSgpIHtcclxuICAgIHRoaXMuZGF5c0xlZnQrKztcclxuICAgIHRoaXMudXBkYXRlQ29tYigpO1xyXG4gIH1cclxuICB1cGRhdGVDb21iKCkge1xyXG4gICAgY29uc3Qgd2lkdGhJbmNyZW1lbnQgPSA3LjgzMzMzMzMzMzMzMzsgIFxyXG4gICAgdGhpcy5mdWxsQ29tYldpZHRoID0gTWF0aC5tYXgoNjAgKyBNYXRoLmZsb29yKHRoaXMuZGF5c0xlZnQqd2lkdGhJbmNyZW1lbnQpLDApOyAvLyBjYXAgbWluIHdpZHRoIGF0IDBcclxuICAgIGNvbnNvbGUubG9nKCdkYXlzTGVmdCDDpHIgJyt0aGlzLmRheXNMZWZ0KycsIHNhdHQgd2lkdGggdGlsbCAnK3RoaXMuZnVsbENvbWJXaWR0aCk7XHJcbiAgICB0aGlzLnVwZGF0ZVBlbnNpb25kYXRlKCk7XHJcbiAgfVxyXG4gIHVwZGF0ZVBlbnNpb25kYXRlKCkge1xyXG4gICAgdGhpcy5wZW5zaW9uRGF0ZSA9IChuZXcgRGF0ZSgpKS5zZXREYXRlKChuZXcgRGF0ZSgpKS5nZXREYXRlKCkgKyB0aGlzLmRheXNMZWZ0KTtcclxuICB9XHJcbiAgZGF5c0xlZnQgPSA2NjtcclxuICBwZW5zaW9uRGF0ZSA9IChuZXcgRGF0ZSgpKS5zZXREYXRlKChuZXcgRGF0ZSgpKS5nZXREYXRlKCkgKyB0aGlzLmRheXNMZWZ0KTtcclxuICBmdWxsQ29tYldpZHRoID0gNTc3O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxufSJdfQ==