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
exports.User = exports.Role = void 0;
require("reflect-metadata");
// Define a factory decorator to add a role to a user
function Role(role) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            // check for permission here
            // if (!checkRole(role)) {
            //     throw new Error("Access Denied");
            // }
            Reflect.defineMetadata("role", role, target, propertyKey);
            return originalMethod.apply(this, args);
        };
    };
}
exports.Role = Role;
class User {
    constructor(username, password) {
        this._username = username;
        this._password = password;
    }
    getUsername() {
        return this._username;
    }
    setPassword(password) {
        this._password = password;
    }
    changePassword(oldPassword, newPassword) {
        if (this._password === oldPassword) {
            this._password = newPassword;
        }
        else {
            throw new Error("Invalid password");
        }
    }
}
exports.User = User;
__decorate([
    Role("admin"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "getUsername", null);
__decorate([
    Role("admin"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], User.prototype, "setPassword", null);
__decorate([
    Role("user"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], User.prototype, "changePassword", null);
const user = new User("JohnDoe", "password123");
const role = Reflect.getMetadata("role", user, "getUsername");
console.log('ROLE____________1', role); // "admin" // logs undefined due to typescript version 5 ?....
const role2 = Reflect.getMetadata("role", user, "changePassword");
console.log('ROLE_____________2', role2); // "user" // logs undefined due to typescript version 5 ?....
//# sourceMappingURL=index.js.map