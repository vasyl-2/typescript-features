export type Constructor = new (...args: any[]) => {}

export function Scale<TBase extends Constructor>(Base: TBase) {
    return class Scaling extends Base {
        _scale = 1;

        setScale(scale: number): void {
            this._scale = scale;
        }

        get scale(): number {
            return this._scale;
        }
    }
}
