import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class ProductDetailGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        const id = Number(route.paramMap.get('id'));
        if (isNaN(id) || id < 1) {
            alert('Invalid product id');
            this.router.navigate(['/products']);
            return false;
        }
        return true;
    }
}
ProductDetailGuard.ɵfac = function ProductDetailGuard_Factory(t) { return new (t || ProductDetailGuard)(i0.ɵɵinject(i1.Router)); };
ProductDetailGuard.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProductDetailGuard, factory: ProductDetailGuard.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductDetailGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.Router }]; }, null); })();
//# sourceMappingURL=product-detail.guard.js.map