import React from "react";
import Menu from "../models/Menu";

export function getChildren(child?: Menu[]) {
    if (child && child.length > 0)
        return child;

    return [] as Menu[];
}


interface props {
    menu: Menu[];
}

export function MenuItem(props: props) {
    return (

        <div>
            <div>
                {props.menu.map(({ name, children }) => (
                    <div key={name}>{name}
                        <div>
                            <MenuItem menu={getChildren(children)} />
                        </div>

                    </div>
                ))}
            </div>

        </div>

    )
}
