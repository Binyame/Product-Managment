import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class ConvertToSpacesPipe {
    transform(value, character) {
        return value.replace(character, ' ');
    }
}
ConvertToSpacesPipe.ɵfac = function ConvertToSpacesPipe_Factory(t) { return new (t || ConvertToSpacesPipe)(); };
ConvertToSpacesPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "convertToSpace", type: ConvertToSpacesPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConvertToSpacesPipe, [{
        type: Pipe,
        args: [{
                name: 'convertToSpace'
            }]
    }], null, null); })();
//# sourceMappingURL=convert-to-spaces.pipe.js.map