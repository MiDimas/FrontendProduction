type Mods = Record<string, boolean | string>

export function classNames(cls:string, mods: Mods = {}, additional: string[] = []): string {
    const arr = [
        cls,
        ...Object.entries(mods)
            .filter(([className, value]) => !!value)
            .map(([className]) => className),
    ];
    if (additional) {
        additional.filter(Boolean);
        arr.push(...additional);
    }
    return arr.join(' ');
}
