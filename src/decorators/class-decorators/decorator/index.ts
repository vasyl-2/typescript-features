import { sealed } from "./function-dedcorators/sealed";

@sealed
export class BugReport  {
    type = 'report';
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}
