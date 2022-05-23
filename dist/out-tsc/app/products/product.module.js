import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class ProductModule {
}
ProductModule.ɵfac = function ProductModule_Factory(t) { return new (t || ProductModule)(); };
ProductModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ProductModule });
ProductModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            RouterModule.forChild([
                { path: 'products', component: ProductListComponent },
                {
                    path: 'products/:id',
                    canActivate: [ProductDetailGuard],
                    component: ProductDetailComponent,
                },
            ]),
            SharedModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductModule, [{
        type: NgModule,
        args: [{
                declarations: [ProductListComponent, ProductDetailComponent],
                imports: [
                    RouterModule.forChild([
                        { path: 'products', component: ProductListComponent },
                        {
                            path: 'products/:id',
                            canActivate: [ProductDetailGuard],
                            component: ProductDetailComponent,
                        },
                    ]),
                    SharedModule,
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProductModule, { declarations: [ProductListComponent, ProductDetailComponent], imports: [i1.RouterModule, SharedModule] }); })();
//# sourceMappingURL=product.module.js.map