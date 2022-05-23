import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./product.service";
import * as i3 from "@angular/common";
import * as i4 from "../shared/star.component";
import * as i5 from "../shared/convert-to-spaces.pipe";
function ProductDetailComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelementStart(2, "div", 8);
    i0.ɵɵelementStart(3, "div", 7);
    i0.ɵɵelementStart(4, "div", 9);
    i0.ɵɵtext(5, "Name:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 8);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 7);
    i0.ɵɵelementStart(9, "div", 9);
    i0.ɵɵtext(10, "Code:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 8);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "convertToSpace");
    i0.ɵɵpipe(14, "lowercase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 7);
    i0.ɵɵelementStart(16, "div", 9);
    i0.ɵɵtext(17, "Description:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 8);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 7);
    i0.ɵɵelementStart(21, "div", 9);
    i0.ɵɵtext(22, "Availability:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 8);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 7);
    i0.ɵɵelementStart(26, "div", 9);
    i0.ɵɵtext(27, "Price:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 8);
    i0.ɵɵtext(29);
    i0.ɵɵpipe(30, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div", 7);
    i0.ɵɵelementStart(32, "div", 9);
    i0.ɵɵtext(33, "5 Star Rating:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "div", 8);
    i0.ɵɵelement(35, "pm-star", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "div", 9);
    i0.ɵɵelement(37, "img", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.product.productName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(13, 12, i0.ɵɵpipeBind1(14, 15, ctx_r0.product.productCode), "-"));
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.product.description);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.product.releaseDate);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(30, 17, ctx_r0.product.price, "USD", "symbol"));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("rating", ctx_r0.product.starRating);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", 200, "px")("margin", 2, "px");
    i0.ɵɵproperty("src", ctx_r0.product.imageUrl, i0.ɵɵsanitizeUrl)("title", ctx_r0.product.productName);
} }
export class ProductDetailComponent {
    constructor(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.pageTitle = 'Product Detail';
        this.errorMessage = '';
    }
    ngOnInit() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        if (id) {
            this.getProduct(id);
        }
    }
    getProduct(id) {
        this.productService.getProduct(id).subscribe({
            next: product => this.product = product,
            error: err => this.errorMessage = err
        });
    }
    onBack() {
        this.router.navigate(['/products']);
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.ProductService)); };
ProductDetailComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductDetailComponent, selectors: [["ng-component"]], decls: 8, vars: 2, consts: [[1, "card"], [1, "card-header"], ["class", "card-body", 4, "ngIf"], [1, "card-footer"], [1, "btn", "btn-outline-secondary", 2, "width", "80px", 3, "click"], [1, "fa", "fa-chevron-left"], [1, "card-body"], [1, "row"], [1, "col-md-8"], [1, "col-md-4"], [3, "rating"], [1, "center-block", "img-responsive", 3, "src", "title"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, ProductDetailComponent_div_3_Template, 38, 21, "div", 2);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "button", 4);
        i0.ɵɵlistener("click", function ProductDetailComponent_Template_button_click_5_listener() { return ctx.onBack(); });
        i0.ɵɵelement(6, "i", 5);
        i0.ɵɵtext(7, " Back ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.pageTitle + ": " + (ctx.product == null ? null : ctx.product.productName), " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.product);
    } }, directives: [i3.NgIf, i4.StarComponent], pipes: [i5.ConvertToSpacesPipe, i3.LowerCasePipe, i3.CurrencyPipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductDetailComponent, [{
        type: Component,
        args: [{
                templateUrl: './product-detail.component.html',
                styleUrls: ['./product-detail.component.css'],
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.ProductService }]; }, null); })();
//# sourceMappingURL=product-detail.component.js.map