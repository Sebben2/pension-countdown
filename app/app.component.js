"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pensionDate = new Date(2018, 8, 15);
        this.daysLeft = this.updateDaysLeft();
        this.fullCombWidth = this.updateCombWidth();
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
        this.daysLeft = this.updateDaysLeft();
        this.fullCombWidth = this.updateCombWidth();
        console.log('daysLeft är ' + this.daysLeft + ', satt width till ' + this.fullCombWidth);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFPMUM7SUF3QkU7UUFIQSxnQkFBVyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEMsYUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNqQyxrQkFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUV2QyxDQUFDO0lBeEJELG9DQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELGdDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELGlDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFvQixHQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBQ0QscUNBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7SUFDRCxzQ0FBZSxHQUFmO1FBQ0UsSUFBTSxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsY0FBYyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQXBCVSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ2pDLENBQUM7O09BQ1csWUFBWSxDQTBCeEI7SUFBRCxtQkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImRheXMtY291bnRlclwiLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYXBwLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICBkZXRyYWN0T25lRGF5KCkge1xyXG4gICAgdGhpcy5wZW5zaW9uRGF0ZSA9IG5ldyBEYXRlKHRoaXMucGVuc2lvbkRhdGUuc2V0RGF0ZSh0aGlzLnBlbnNpb25EYXRlLmdldERhdGUoKSAtIDEpKTtcclxuICAgIHRoaXMudXBkYXRlQ29tYigpO1xyXG4gIH1cclxuICBhZGRPbmVEYXkoKSB7XHJcbiAgICB0aGlzLnBlbnNpb25EYXRlID0gbmV3IERhdGUodGhpcy5wZW5zaW9uRGF0ZS5zZXREYXRlKHRoaXMucGVuc2lvbkRhdGUuZ2V0RGF0ZSgpICsgMSkpO1xyXG4gICAgdGhpcy51cGRhdGVDb21iKCk7XHJcbiAgfVxyXG4gIHVwZGF0ZUNvbWIoKSB7XHJcbiAgICB0aGlzLmRheXNMZWZ0ID0gdGhpcy51cGRhdGVEYXlzTGVmdCgpO1xyXG4gICAgdGhpcy5mdWxsQ29tYldpZHRoID0gdGhpcy51cGRhdGVDb21iV2lkdGgoKTtcclxuICAgIGNvbnNvbGUubG9nKCdkYXlzTGVmdCDDpHIgJyt0aGlzLmRheXNMZWZ0KycsIHNhdHQgd2lkdGggdGlsbCAnK3RoaXMuZnVsbENvbWJXaWR0aCk7XHJcbiAgfVxyXG4gIHVwZGF0ZURheXNMZWZ0KCkge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgucm91bmQoKHRoaXMucGVuc2lvbkRhdGUudmFsdWVPZigpIC0gKG5ldyBEYXRlKCkpLnZhbHVlT2YoKSkvKDEwMDAqNjAqNjAqMjQpKSwwKTtcclxuICB9XHJcbiAgdXBkYXRlQ29tYldpZHRoKCkge1xyXG4gICAgY29uc3Qgd2lkdGhJbmNyZW1lbnQgPSA3LjgzMzMzMzMzMzMzMzsgIFxyXG4gICAgcmV0dXJuIE1hdGgubWF4KDYwICsgTWF0aC5mbG9vcih0aGlzLmRheXNMZWZ0KndpZHRoSW5jcmVtZW50KSwwKTtcclxuICB9XHJcbiAgcGVuc2lvbkRhdGUgPSBuZXcgRGF0ZSgyMDE4LDgsMTUpO1xyXG4gIGRheXNMZWZ0ID0gdGhpcy51cGRhdGVEYXlzTGVmdCgpO1xyXG4gIGZ1bGxDb21iV2lkdGggPSB0aGlzLnVwZGF0ZUNvbWJXaWR0aCgpO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxufSJdfQ==