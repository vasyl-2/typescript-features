"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportableClassDecorator = void 0;
function reportableClassDecorator(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.reportingURL = "http://www...";
        }
    };
}
exports.reportableClassDecorator = reportableClassDecorator;
//# sourceMappingURL=extend-ctor.js.map