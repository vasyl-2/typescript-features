"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClass = exports.MyDecorator = void 0;
require("reflect-metadata");
// Define a decorator factory
function MyDecorator(metadata) {
    return function (target, propertyKey) {
        Reflect.defineMetadata("my-decorator", metadata, target, propertyKey);
    };
}
exports.MyDecorator = MyDecorator;
class MyClass {
    myMethod() { }
}
exports.MyClass = MyClass;
__decorate([
    MyDecorator("some metadata"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MyClass.prototype, "myMethod", null);
// Retrieve the metadata for the decorator
const metadata = Reflect.getMetadata("my-decorator", MyClass.prototype, "myMethod");
console.log('METADATA___________________22', metadata); // "some metadata"
//# sourceMappingURL=index.js.map