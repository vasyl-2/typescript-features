import "reflect-metadata";

// Define a decorator factory
export function MyDecorator(metadata: string) {
    return function (target: any, propertyKey: string) {
        Reflect.defineMetadata("my-decorator", metadata, target, propertyKey);
    };
}

export class MyClass {
    @MyDecorator("some metadata")
    myMethod() {}
}

// Retrieve the metadata for the decorator
const metadata = Reflect.getMetadata("my-decorator", MyClass.prototype, "myMethod");
console.log('METADATA___________________22', metadata); // "some metadata"
