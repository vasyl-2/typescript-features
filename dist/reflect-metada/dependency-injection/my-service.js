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
exports.MyService = void 0;
const injectable_decorator_1 = require("./injectable-decorator");
const my_dependency_1 = require("./my-dependency");
let MyService = class MyService {
    constructor(_dependency) {
        this._dependency = _dependency;
    }
    doSomething() {
        this._dependency.doSomething();
    }
};
exports.MyService = MyService;
exports.MyService = MyService = __decorate([
    (0, injectable_decorator_1.Injectable)(),
    __metadata("design:paramtypes", [my_dependency_1.MyDependency])
], MyService);
//# sourceMappingURL=my-service.js.map