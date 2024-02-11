export declare function reportableClassDecorator<T extends {
    new (...args: any[]): {};
}>(constructor: T): {
    new (...args: any[]): {
        reportingURL: string;
    };
} & T;
//# sourceMappingURL=extend-ctor.d.ts.map