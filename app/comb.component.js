"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CombComponent = /** @class */ (function () {
    function CombComponent() {
    }
    CombComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], CombComponent.prototype, "particles", void 0);
    __decorate([
        core_1.ViewChild('combImage'),
        __metadata("design:type", core_1.ElementRef)
    ], CombComponent.prototype, "canvasRef", void 0);
    CombComponent = __decorate([
        core_1.Component({
            selector: 'app-comb',
            templateUrl: './comb.component.html',
            styleUrls: [],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], CombComponent);
    return CombComponent;
}());
exports.CombComponent = CombComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUF5RztBQVV6RztJQUFBO0lBTUEsQ0FBQztJQUhHLGdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBSlE7UUFBUixZQUFLLEVBQUU7O29EQUF1QjtJQUNQO1FBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDO2tDQUFZLGlCQUFVO29EQUFDO0lBRnJDLGFBQWE7UUFQekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLEVBQUU7WUFDYixlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNsRCxDQUFDO09BRVcsYUFBYSxDQU16QjtJQUFELG9CQUFDO0NBQUEsQUFORCxJQU1DO0FBTlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFydGljbGUgfSBmcm9tICcuL3BhcnRpY2xlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY29tYicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29tYi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFtdLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIHBhcnRpY2xlczogUGFydGljbGVbXTtcclxuICAgIEBWaWV3Q2hpbGQoJ2NvbWJJbWFnZScpIGNhbnZhc1JlZjogRWxlbWVudFJlZjtcclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgIH1cclxufSJdfQ==