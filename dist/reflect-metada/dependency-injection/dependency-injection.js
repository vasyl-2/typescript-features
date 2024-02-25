"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DependencyInjection = void 0;
const my_service_1 = require("./my-service");
class DependencyInjection {
    // static get<T>(target: any): T {
    static get(target) {
        const isInjectable = Reflect.getMetadata("injectable", target);
        console.log('IS_INJECTABLE_____', { isInjectable, target: JSON.stringify(target) });
        if (!isInjectable) {
            // if throws for particular class all app is down
            // throw new Error("Target is not injectable");
        }
        const dependencies = Reflect.getMetadata("design:paramtypes", target) || [];
        console.log('DEPENDENCIES__________________', dependencies);
        const instances = dependencies.map((dep) => DependencyInjection.get(dep));
        console.log('instances__________________', instances);
        return new target(...instances);
    }
}
exports.DependencyInjection = DependencyInjection;
const myService = DependencyInjection.get(my_service_1.MyService);
myService.doSomething(); // "MyDependency is doing something"
//# sourceMappingURL=dependency-injection.js.map