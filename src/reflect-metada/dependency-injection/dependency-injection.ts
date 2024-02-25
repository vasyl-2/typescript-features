import { MyService } from "./my-service";

export class DependencyInjection {
    // static get<T>(target: any): T {
    static get<T>(target: any): T {
        // does not work maybe due to typescript 5
        // const isInjectable = Reflect.getMetadata("injectable", target);
        // if (!isInjectable) {
        //     throw new Error("Target is not injectable");
        // }

        const dependencies = Reflect.getMetadata("design:paramtypes", target) || [];
        console.log('DEPENDENCIES__________________', dependencies);
        const instances = dependencies.map((dep: any) => DependencyInjection.get(dep));
        console.log('instances__________________', instances);
        return new target(...instances);
    }
}

const myService = DependencyInjection.get<MyService>(MyService);
myService.doSomething(); // "MyDependency is doing something"
