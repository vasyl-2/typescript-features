import { MyService } from "./my-service";
import {stringify} from "querystring";

export class DependencyInjection {
    // static get<T>(target: any): T {
    static get<T>(target: any): T {
        const isInjectable = Reflect.getMetadata("injectable", target);
        console.log('IS_INJECTABLE_____', { isInjectable, target: JSON.stringify(target) });
        if (!isInjectable) {
            // if throws for particular class all app is down
            // throw new Error("Target is not injectable");
        }

        const dependencies = Reflect.getMetadata("design:paramtypes", target) || [];
        console.log('DEPENDENCIES__________________', dependencies);
        const instances = dependencies.map((dep: any) => DependencyInjection.get(dep));
        console.log('instances__________________', instances);
        return new target(...instances);
    }
}

const myService = DependencyInjection.get<MyService>(MyService);
myService.doSomething(); // "MyDependency is doing something"
