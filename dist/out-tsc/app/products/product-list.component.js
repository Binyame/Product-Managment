import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./product.service";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
import * as i5 from "../shared/star.component";
import * as i6 from "../shared/convert-to-spaces.pipe";
function ProductListComponent_table_14_tr_17_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 17);
} if (rf & 2) {
    const product_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", ctx_r4.imageWidth, "px")("margin", ctx_r4.imageMargin, "px");
    i0.ɵɵproperty("src", product_r3.imageUrl, i0.ɵɵsanitizeUrl)("title", product_r3.productName);
} }
const _c0 = function (a1) { return ["/products", a1]; };
function ProductListComponent_table_14_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵtemplate(2, ProductListComponent_table_14_tr_17_img_2_Template, 1, 6, "img", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵelementStart(4, "a", 15);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "convertToSpace");
    i0.ɵɵpipe(9, "lowercase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵelementStart(16, "pm-star", 16);
    i0.ɵɵlistener("ratingClicked", function ProductListComponent_table_14_tr_17_Template_pm_star_ratingClicked_16_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.onRatingClicked($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.showImage);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(17, _c0, product_r3.productId));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", product_r3.productName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(8, 7, i0.ɵɵpipeBind1(9, 10, product_r3.productCode), "-"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(product_r3.releaseDate);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(14, 12, product_r3.price, "USD", "symbol", "1.2-2"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("rating", product_r3.starRating);
} }
function ProductListComponent_table_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table", 11);
    i0.ɵɵelementStart(1, "thead");
    i0.ɵɵelementStart(2, "tr");
    i0.ɵɵelementStart(3, "th");
    i0.ɵɵelementStart(4, "button", 12);
    i0.ɵɵlistener("click", function ProductListComponent_table_14_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.toggleImage(); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Product");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Code");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Available");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Price");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "5 Star Rating");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "tbody");
    i0.ɵɵtemplate(17, ProductListComponent_table_14_tr_17_Template, 17, 19, "tr", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.showImage ? "Hide" : "Show", " Image ");
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngForOf", ctx_r0.filteredProducts);
} }
function ProductListComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Error: ", ctx_r1.errorMessage, "\n");
} }
export class ProductListComponent {
    constructor(ProductService) {
        this.ProductService = ProductService;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.errorMessage = '';
        this._listFilter = '';
        this.filteredProducts = [];
        this.products = [];
    }
    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filteredProducts = this.performFilter(value);
    }
    performFilter(filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product) => product.productName.toLocaleLowerCase().includes(filterBy));
    }
    toggleImage() {
        this.showImage = !this.showImage;
    }
    ngOnInit() {
        this.ProductService.getProducts().subscribe({
            next: (products) => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: (err) => (this.errorMessage = err),
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.sub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    onRatingClicked(message) {
        this.pageTitle = 'Product List: ' + message;
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(i0.ɵɵdirectiveInject(i1.ProductService)); };
ProductListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductListComponent, selectors: [["ng-component"]], decls: 16, vars: 5, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-md-2"], [1, "col-md-4"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "col-md-6"], [1, "table-responsive"], ["class", "table", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "table"], [1, "btn", "btn-primary", 3, "click"], [4, "ngFor", "ngForOf"], [3, "src", "title", "width", "margin", 4, "ngIf"], [3, "routerLink"], [3, "rating", "ratingClicked"], [3, "src", "title"], [1, "alert", "alert-danger"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵtext(6, "Filter by:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵelementStart(8, "input", 6);
        i0.ɵɵlistener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_8_listener($event) { return ctx.listFilter = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 3);
        i0.ɵɵelementStart(10, "div", 7);
        i0.ɵɵelementStart(11, "h4");
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 8);
        i0.ɵɵtemplate(14, ProductListComponent_table_14_Template, 18, 2, "table", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(15, ProductListComponent_div_15_Template, 2, 1, "div", 10);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.pageTitle, " ");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.listFilter);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("Filtered by: ", ctx.listFilter, "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.products.length);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.errorMessage);
    } }, directives: [i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i3.NgIf, i3.NgForOf, i4.RouterLinkWithHref, i5.StarComponent], pipes: [i6.ConvertToSpacesPipe, i3.LowerCasePipe, i3.CurrencyPipe], styles: ["thead[_ngcontent-%COMP%] {\r\n    color: #337AB7;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductListComponent, [{
        type: Component,
        args: [{
                templateUrl: './products-list.component.html',
                styleUrls: ['./product-list.component.css'],
            }]
    }], function () { return [{ type: i1.ProductService }]; }, null); })();
//# sourceMappingURL=product-list.component.js.map