"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require("application-settings");
var nativescript_insomnia_1 = require("nativescript-insomnia");
var application = require("application");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.pensionDate = new Date(appSettings.getNumber('pensionDate', (new Date(2018, 9, 3)).valueOf()));
        this.daysLeft = this.updateDaysLeft();
        this.fullCombWidth = this.updateCombWidth();
        this.dateModificationVisibility = "hidden";
        // comb must be updated to reflect the amount of days left
        this.updateComb();
        setInterval(function () { return _this.updateComb(); }, 60000);
        // never turn off screen
        nativescript_insomnia_1.keepAwake().then(function () {
            console.log("Insomnia is active");
        });
        // rolling with android 4.3, so have to hack layout when lacking immersive flags
        this.hideStatusBar();
        setInterval(function () { return _this.hideStatusBar(); }, 10000);
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
    AppComponent.prototype.hideStatusBar = function () {
        var window = application.android.startActivity.getWindow();
        var decorView = window.getDecorView();
        decorView.setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            | android.view.View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
            | android.view.View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
            | android.view.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
            | android.view.View.SYSTEM_UI_FLAG_FULLSCREEN);
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
