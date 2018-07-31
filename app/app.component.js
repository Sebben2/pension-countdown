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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsa0RBQW9EO0FBT3BEO0lBd0JFO1FBQUEsaUJBR0M7UUFQRCxnQkFBVyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RixhQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2pDLGtCQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZDLCtCQUEwQixHQUFHLFFBQVEsQ0FBQztRQUVwQywwREFBMEQ7UUFDMUQsV0FBVyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxFQUFFLEVBQWpCLENBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQTFCRCw4QkFBTyxHQUFQLFVBQVEsSUFBSTtRQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELGlDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBQ0QscUNBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFDRCxzQ0FBZSxHQUFmO1FBQ0UsSUFBTSxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsY0FBYyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNELG1EQUE0QixHQUE1QjtRQUNFLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsMEJBQTBCLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUN2RyxDQUFDO0lBbkJVLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDakMsQ0FBQzs7T0FDVyxZQUFZLENBNEJ4QjtJQUFELG1CQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZGF5cy1jb3VudGVyXCIsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydhcHAuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIGFkZERheXMoZGF5cykge1xyXG4gICAgdGhpcy5wZW5zaW9uRGF0ZSA9IG5ldyBEYXRlKHRoaXMucGVuc2lvbkRhdGUuc2V0RGF0ZSh0aGlzLnBlbnNpb25EYXRlLmdldERhdGUoKSArIGRheXMpKTtcclxuICAgIGFwcFNldHRpbmdzLnNldE51bWJlcigncGVuc2lvbkRhdGUnLHRoaXMucGVuc2lvbkRhdGUudmFsdWVPZigpKTtcclxuICAgIHRoaXMudXBkYXRlQ29tYigpO1xyXG4gIH1cclxuICB1cGRhdGVDb21iKCkge1xyXG4gICAgdGhpcy5kYXlzTGVmdCA9IHRoaXMudXBkYXRlRGF5c0xlZnQoKTtcclxuICAgIHRoaXMuZnVsbENvbWJXaWR0aCA9IHRoaXMudXBkYXRlQ29tYldpZHRoKCk7ICAgIFxyXG4gIH1cclxuICB1cGRhdGVEYXlzTGVmdCgpIHsgICAgXHJcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5jZWlsKCh0aGlzLnBlbnNpb25EYXRlLnZhbHVlT2YoKSAtIChuZXcgRGF0ZSgpKS52YWx1ZU9mKCkpLygxMDAwKjYwKjYwKjI0KSksMCk7XHJcbiAgfVxyXG4gIHVwZGF0ZUNvbWJXaWR0aCgpIHtcclxuICAgIGNvbnN0IHdpZHRoSW5jcmVtZW50ID0gNy44MzMzMzMzMzMzMzM7ICBcclxuICAgIHJldHVybiBNYXRoLm1heCg2MCArIE1hdGguZmxvb3IodGhpcy5kYXlzTGVmdCp3aWR0aEluY3JlbWVudCksMCk7XHJcbiAgfVxyXG4gIHRvZ2dsZU1vZGlmaWNhdGlvblZpc2liaWxpdHkoKSB7XHJcbiAgICB0aGlzLmRhdGVNb2RpZmljYXRpb25WaXNpYmlsaXR5ID0gdGhpcy5kYXRlTW9kaWZpY2F0aW9uVmlzaWJpbGl0eSA9PSBcImhpZGRlblwiID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiO1xyXG4gIH1cclxuICBwZW5zaW9uRGF0ZSA9IG5ldyBEYXRlKGFwcFNldHRpbmdzLmdldE51bWJlcigncGVuc2lvbkRhdGUnLChuZXcgRGF0ZSgyMDE4LDksMykpLnZhbHVlT2YoKSkpO1xyXG4gIGRheXNMZWZ0ID0gdGhpcy51cGRhdGVEYXlzTGVmdCgpO1xyXG4gIGZ1bGxDb21iV2lkdGggPSB0aGlzLnVwZGF0ZUNvbWJXaWR0aCgpO1xyXG4gIGRhdGVNb2RpZmljYXRpb25WaXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIGNvbWIgbXVzdCBiZSB1cGRhdGVkIHRvIHJlZmxlY3QgdGhlIGFtb3VudCBvZiBkYXlzIGxlZnRcclxuICAgIHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlQ29tYigpLCA2MDAwMCk7XHJcbiAgfVxyXG59Il19