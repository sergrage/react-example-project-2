export function classNames(cls: string, mods: Record<string, boolean | string> = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods).filter(([, val]) => Boolean(val)).map(([className]) => className)
    ].join(' ');
}