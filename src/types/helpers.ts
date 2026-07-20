export type MaybeId = string | number | undefined | null;

export interface Identifiable {
    id: MaybeId;
}

export type AnyFunction = (...args: unknown[]) => unknown;