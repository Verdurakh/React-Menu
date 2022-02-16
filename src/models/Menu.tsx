interface Menu {
    name: string,
    children?: Array<Menu>
}

function getChildren(child?: Menu[]) {
    if (child && child.length > 0)
        return child;

    return [] as Menu[];
}

function hasChildren(child?: Menu[]) {
    if (child && child.length > 0)
        return true;
    return false;
}



export { getChildren, hasChildren };
export type { Menu };
