"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jumpable = exports.Scale = exports.greet = exports.sealed = exports.BugReportTwo = exports.BugReport = void 0;
var decorator_1 = require("./decorators/class-decorators/decorator");
Object.defineProperty(exports, "BugReport", { enumerable: true, get: function () { return decorator_1.BugReport; } });
Object.defineProperty(exports, "BugReportTwo", { enumerable: true, get: function () { return decorator_1.BugReportTwo; } });
var sealed_1 = require("./decorators/class-decorators/decorator/function-dedcorators/sealed");
Object.defineProperty(exports, "sealed", { enumerable: true, get: function () { return sealed_1.sealed; } });
var function_overload_1 = require("./function-overload");
Object.defineProperty(exports, "greet", { enumerable: true, get: function () { return function_overload_1.greet; } });
var class_mixins_1 = require("./mixins/class-mixins/class-mixins");
Object.defineProperty(exports, "Scale", { enumerable: true, get: function () { return class_mixins_1.Scale; } });
var constrained_mixin_1 = require("./mixins/class-mixins/constrained-mixin");
Object.defineProperty(exports, "Jumpable", { enumerable: true, get: function () { return constrained_mixin_1.Jumpable; } });
// export  function greet(person: string): string;
// export  function greet(person: number, age: number): string;
//
// export function greet(person: string | number, age?: number): string {
//     if (age !== undefined) {
//         return `Hello, ${person}! You are ${age} years old.`;
//     } else {
//         return `Hello, ${person}!`;
//     }
// }
//# sourceMappingURL=test.js.map