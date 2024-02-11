export type Constructor = new (...args: any[]) => {};
export declare function Scale<TBase extends Constructor>(Base: TBase): {
    new (...args: any[]): {
        _scale: number;
        setScale(scale: number): void;
        readonly scale: number;
    };
} & TBase;
//# sourceMappingURL=class-mixins.d.ts.map