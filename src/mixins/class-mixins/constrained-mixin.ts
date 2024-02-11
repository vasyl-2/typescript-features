export type GConstructor<T = {}> = new (...args: any[]) => T;

export type Positionable = GConstructor<{ setPos: (x: number, y: number) => void }>;
// type Spritable = GConstructor<Sprite>;
export type Loggable = GConstructor<{ print: () => void }>;

export function Jumpable<TBase extends Positionable>(Base: TBase) {
    return class Jumpable extends Base {
        jump() {
            // This mixin will only work if it is passed a base
            // class which has setPos defined because of the
            // Positionable constraint.
            this.setPos(0, 20);
        }
    };
}


