"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Injectable = exports.DependencyInjection = exports.MyDependency = exports.MyService = exports.User = exports.Role = exports.MyClass = exports.MyDecorator = exports.Jumpable = exports.Scale = exports.greet = exports.sealed = exports.BugReportTwo = exports.BugReport = void 0;
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
var first_1 = require("./reflect-metada/first");
Object.defineProperty(exports, "MyDecorator", { enumerable: true, get: function () { return first_1.MyDecorator; } });
Object.defineProperty(exports, "MyClass", { enumerable: true, get: function () { return first_1.MyClass; } });
var second_1 = require("./reflect-metada/second");
Object.defineProperty(exports, "Role", { enumerable: true, get: function () { return second_1.Role; } });
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return second_1.User; } });
var my_service_1 = require("./reflect-metada/dependency-injection/my-service");
Object.defineProperty(exports, "MyService", { enumerable: true, get: function () { return my_service_1.MyService; } });
var my_dependency_1 = require("./reflect-metada/dependency-injection/my-dependency");
Object.defineProperty(exports, "MyDependency", { enumerable: true, get: function () { return my_dependency_1.MyDependency; } });
var dependency_injection_1 = require("./reflect-metada/dependency-injection/dependency-injection");
Object.defineProperty(exports, "DependencyInjection", { enumerable: true, get: function () { return dependency_injection_1.DependencyInjection; } });
var injectable_decorator_1 = require("./reflect-metada/dependency-injection/injectable-decorator");
Object.defineProperty(exports, "Injectable", { enumerable: true, get: function () { return injectable_decorator_1.Injectable; } });
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