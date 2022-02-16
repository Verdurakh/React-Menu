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

        <ul>
            {props.menu.map(({ name, children }) => (
                <li key={name}>
                    {name}
                    <MenuItem menu={getChildren(children)} />


                </li>
            ))}
        </ul>


    )
}
