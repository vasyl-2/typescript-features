"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
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