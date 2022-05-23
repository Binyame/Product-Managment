import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppComponent {
    constructor() {
        this.pageTitle = 'Acme Product Managment';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["pm-root"]], decls: 12, vars: 1, consts: [[1, "navbar", "navbar-expand", "navbar-light", "bg-light"], [1, "navbar-brand"], [1, "nav", "nav-pills"], ["routerLink", "/welcome", 1, "nav-link"], ["routerLink", "/products", 1, "nav-link"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav", 0);
        i0.ɵɵelementStart(1, "a", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "ul", 2);
        i0.ɵɵelementStart(4, "li");
        i0.ɵɵelementStart(5, "a", 3);
        i0.ɵɵtext(6, "Home");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "li");
        i0.ɵɵelementStart(8, "a", 4);
        i0.ɵɵtext(9, "Product List");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 5);
        i0.ɵɵelement(11, "router-outlet");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.pageTitle);
    } }, directives: [i1.RouterLinkWithHref, i1.RouterOutlet], styles: [".nav-link[_ngcontent-%COMP%] {\r\n  font-size: large;\r\n}\r\n.li[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{
                selector: 'pm-root',
                template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand">{{ pageTitle }}</a>
      <ul class="nav nav-pills">
        <li><a class="nav-link" routerLink="/welcome">Home</a></li>
        <li><a class="nav-link" routerLink="/products">Product List</a></li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
                styleUrls: ['./app.component.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=app.component.js.map