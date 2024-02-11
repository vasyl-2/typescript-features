"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scale = void 0;
function Scale(Base) {
    return class Scaling extends Base {
        constructor() {
            super(...arguments);
            this._scale = 1;
        }
        setScale(scale) {
            this._scale = scale;
        }
        get scale() {
            return this._scale;
        }
    };
}
exports.Scale = Scale;
//# sourceMappingURL=class-mixins.js.map