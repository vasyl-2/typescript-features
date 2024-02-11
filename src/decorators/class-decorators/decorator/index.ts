import { sealed } from "./function-dedcorators/sealed";
import {reportableClassDecorator} from "./function-dedcorators/extend-ctor";

@sealed
export class BugReport  {
    type = 'report';
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}

@reportableClassDecorator
export class BugReportTwo  {
    type = 'report';
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}
