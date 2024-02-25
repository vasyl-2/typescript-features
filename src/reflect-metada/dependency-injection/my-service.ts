import { Injectable } from "./injectable-decorator";
import { MyDependency } from "./my-dependency";

@Injectable()
export class MyService {
    constructor(private _dependency: MyDependency) {}

    doSomething(): void {
        this._dependency.doSomething();
    }
}
