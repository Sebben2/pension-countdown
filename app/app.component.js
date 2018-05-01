"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.daysLeft = 66;
        this.fullCombWidth = 577;
    }
    AppComponent.prototype.changeDate = function () {
        this.daysLeft--;
        var widthIncrement = 7.833333333333;
        this.fullCombWidth = 60 + Math.floor(this.daysLeft * widthIncrement);
        console.log('daysLeft är ' + this.daysLeft + ', satt width till ' + this.fullCombWidth);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFPMUM7SUFTRTtRQUZBLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxrQkFBYSxHQUFHLEdBQUcsQ0FBQztJQUVwQixDQUFDO0lBVEQsaUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFNLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQW9CLEdBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFOVSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ2pDLENBQUM7O09BQ1csWUFBWSxDQVd4QjtJQUFELG1CQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZGF5cy1jb3VudGVyXCIsXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2FwcC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgY2hhbmdlRGF0ZSgpIHtcbiAgICB0aGlzLmRheXNMZWZ0LS07XG4gICAgY29uc3Qgd2lkdGhJbmNyZW1lbnQgPSA3LjgzMzMzMzMzMzMzMzsgIFxuICAgIHRoaXMuZnVsbENvbWJXaWR0aCA9IDYwICsgTWF0aC5mbG9vcih0aGlzLmRheXNMZWZ0KndpZHRoSW5jcmVtZW50KTtcbiAgICBjb25zb2xlLmxvZygnZGF5c0xlZnQgw6RyICcrdGhpcy5kYXlzTGVmdCsnLCBzYXR0IHdpZHRoIHRpbGwgJyt0aGlzLmZ1bGxDb21iV2lkdGgpO1xuICB9XG4gIGRheXNMZWZ0ID0gNjY7XG4gIGZ1bGxDb21iV2lkdGggPSA1Nzc7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG59Il19