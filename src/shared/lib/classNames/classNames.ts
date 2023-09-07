type Mods = Record<string, boolean | string>

export function classNames(
    cls:string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string {
    const arr = [
        cls,
        ...Object.entries(mods)
            .filter(([className, value]) => !!value)
            .map(([className]) => className),
    ];
    if (additional) {
        additional.filter(Boolean);
        arr.push(...additional as Array<string>);
    }
    return arr.join(' ');
}
