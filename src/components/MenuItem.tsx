import React from "react";
import { getChildren, hasChildren } from "../models/Menu";
import Accordion from 'react-bootstrap/Accordion'
import { MenuArrayProp } from "../models/Props";



export function MenuItem({ menu }: MenuArrayProp) {

    return (
        <div>
            {menu.map(({ name, children }) => (
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
