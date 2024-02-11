"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jumpable = void 0;
function Jumpable(Base) {
    return class Jumpable extends Base {
        jump() {
            // This mixin will only work if it is passed a base
            // class which has setPos defined because of the
            // Positionable constraint.
            this.setPos(0, 20);
        }
    };
}
exports.Jumpable = Jumpable;
//# sourceMappingURL=constrained-mixin.js.map