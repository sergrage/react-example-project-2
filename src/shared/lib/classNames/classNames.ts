export function classNames(cls: string, mods: Record<string, boolean | string | undefined> = {}, additional: Array<string | undefined> = []): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods).filter(([, val]) => Boolean(val)).map(([className]) => className)
    ].join(' ');
}

export type Mods  = Record<string, boolean | string | undefined>;