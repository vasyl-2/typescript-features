"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Injectable = void 0;
function Injectable() {
    return function (target) {
        Reflect.defineMetadata("injectable", true, target);
    };
}
exports.Injectable = Injectable;
//# sourceMappingURL=injectable-decorator.js.map