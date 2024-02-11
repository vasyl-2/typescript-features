export type GConstructor<T = {}> = new (...args: any[]) => T;
export type Positionable = GConstructor<{
    setPos: (x: number, y: number) => void;
}>;
export type Loggable = GConstructor<{
    print: () => void;
}>;
export declare function Jumpable<TBase extends Positionable>(Base: TBase): {
    new (...args: any[]): {
        jump(): void;
        setPos: (x: number, y: number) => void;
    };
} & TBase;
//# sourceMappingURL=constrained-mixin.d.ts.map