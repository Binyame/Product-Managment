import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class WelcomeComponent {
    constructor() {
        this.pageTitle = 'Welcome';
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WelcomeComponent, selectors: [["ng-component"]], decls: 14, vars: 1, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "container-fluid"], [1, "text-center"], ["src", "./assets/images/logo.jpg", 1, "img-responsive", "center-block", 2, "max-height", "300px", "padding-bottom", "50px"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelement(6, "img", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 4);
        i0.ɵɵtext(8, "Developed by:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 4);
        i0.ɵɵelementStart(10, "h3");
        i0.ɵɵtext(11, "Binyam");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 4);
        i0.ɵɵtext(13, "@binyamseyoum");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.pageTitle, " ");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WelcomeComponent, [{
        type: Component,
        args: [{
                templateUrl: './welcome.component.html'
            }]
    }], null, null); })();
//# sourceMappingURL=welcome.component.js.map