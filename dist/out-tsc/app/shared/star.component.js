import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class StarComponent {
    constructor() {
        this.rating = 0;
        this.cropWidth = 75;
        this.ratingClicked = new EventEmitter();
    }
    ngOnChanges() {
        this.cropWidth = this.rating * 75 / 5;
    }
    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}
StarComponent.ɵfac = function StarComponent_Factory(t) { return new (t || StarComponent)(); };
StarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StarComponent, selectors: [["pm-star"]], inputs: { rating: "rating" }, outputs: { ratingClicked: "ratingClicked" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 3, consts: [[1, "crop", 3, "title", "click"], [2, "width", "75px"], [1, "fa", "fa-star"]], template: function StarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function StarComponent_Template_div_click_0_listener() { return ctx.onClick(); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelement(2, "span", 2);
        i0.ɵɵelement(3, "span", 2);
        i0.ɵɵelement(4, "span", 2);
        i0.ɵɵelement(5, "span", 2);
        i0.ɵɵelement(6, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("width", ctx.cropWidth, "px");
        i0.ɵɵproperty("title", ctx.rating);
    } }, styles: [".crop[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  color: gold;\r\n}\r\ndiv[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StarComponent, [{
        type: Component,
        args: [{
                selector: 'pm-star',
                templateUrl: './star.component.html',
                styleUrls: ['./star.component.css']
            }]
    }], null, { rating: [{
            type: Input
        }], ratingClicked: [{
            type: Output
        }] }); })();
//# sourceMappingURL=star.component.js.map