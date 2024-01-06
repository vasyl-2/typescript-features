"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sealed = void 0;
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
exports.sealed = sealed;
//# sourceMappingURL=sealed.js.map