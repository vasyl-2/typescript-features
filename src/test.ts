export { BugReport, BugReportTwo } from "./decorators/class-decorators/decorator";
export { sealed } from "./decorators/class-decorators/decorator/function-dedcorators/sealed";
export { greet } from "./function-overload";
export { Scale, Constructor } from "./mixins/class-mixins/class-mixins";
export { Positionable, GConstructor, Loggable, Jumpable } from "./mixins/class-mixins/constrained-mixin";
export { MyDecorator, MyClass } from './reflect-metada/first';
export { Role, User } from './reflect-metada/second';
export { MyService } from './reflect-metada/dependency-injection/my-service';
export { MyDependency } from './reflect-metada/dependency-injection/my-dependency';
export { DependencyInjection } from './reflect-metada/dependency-injection/dependency-injection';
export { Injectable } from './reflect-metada/dependency-injection/injectable-decorator';

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
