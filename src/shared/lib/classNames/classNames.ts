export function classNames(cls: string, mods: Record<string, boolean | string> = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods).filter(([_, val]) => Boolean(val)).map(([className, _]) => className)
    ].join(' ');
}