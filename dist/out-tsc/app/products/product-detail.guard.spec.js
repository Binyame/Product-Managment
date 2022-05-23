import { TestBed } from '@angular/core/testing';
import { ProductDetailGuard } from './product-detail.guard';
describe('ProductDetailGuard', () => {
    let guard;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(ProductDetailGuard);
    });
    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
//# sourceMappingURL=product-detail.guard.spec.js.map