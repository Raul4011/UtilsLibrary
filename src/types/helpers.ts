export type MaybeId = string | number | undefined | null;

export interface Identifiable {
    id: MaybeId;
}

export type AnyFunction = (...args: unknown[]) => unknown;


export type DebouncedFunction<T extends AnyFunction> =
    (...args: Parameters<T>) => void

export type ThrottledFunction<T extends AnyFunction> =
    (...args: Parameters<T>) => void