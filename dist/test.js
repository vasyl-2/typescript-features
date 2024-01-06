"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = exports.sealed = exports.BugReport = void 0;
var decorator_1 = require("./decorators/class-decorators/decorator");
Object.defineProperty(exports, "BugReport", { enumerable: true, get: function () { return decorator_1.BugReport; } });
var sealed_1 = require("./decorators/class-decorators/decorator/function-dedcorators/sealed");
Object.defineProperty(exports, "sealed", { enumerable: true, get: function () { return sealed_1.sealed; } });
function greet(person, age) {
    if (age !== undefined) {
        return `Hello, ${person}! You are ${age} years old.`;
    }
    else {
        return `Hello, ${person}!`;
    }
}
exports.greet = greet;
//# sourceMappingURL=test.js.map