import { WelcomeComponent } from './home/welcome.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            BrowserModule,
            FormsModule,
            HttpClientModule,
            RouterModule.forRoot([
                { path: 'welcome', component: WelcomeComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
            ]),
            ProductModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AppComponent,
                    WelcomeComponent,
                ],
                imports: [
                    BrowserModule,
                    FormsModule,
                    HttpClientModule,
                    RouterModule.forRoot([
                        { path: 'welcome', component: WelcomeComponent },
                        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                        { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
                    ]),
                    ProductModule,
                ],
                bootstrap: [AppComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent,
        WelcomeComponent], imports: [BrowserModule,
        FormsModule,
        HttpClientModule, i1.RouterModule, ProductModule] }); })();
//# sourceMappingURL=app.module.js.map