import React from "react";
import Menu from "../models/Menu";
import Accordion from 'react-bootstrap/Accordion'

export function getChildren(child?: Menu[]) {
    if (child && child.length > 0)
        return child;

    return [] as Menu[];
}

export function hasChildren(child?: Menu[]) {
    if (child && child.length > 0)
        return true;
    return false;
}



interface props {
    menu: Menu[];
}

export function MenuItem(props: props) {
    return (
        <div>
            {props.menu.map(({ name, children }) => (
                <Accordion.Item eventKey={name} key={name}>
                    <Accordion.Header className={hasChildren(children) ? "" : "NoChildren"}>  {name}</Accordion.Header>
                    {hasChildren(children) &&
                        <Accordion.Body>
                            <MenuItem menu={getChildren(children)} />
                        </Accordion.Body>
                    }
                </Accordion.Item>
            ))}
        </div>

    )
}
