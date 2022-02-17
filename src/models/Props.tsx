import { Menu } from "./Menu";

export interface StringProp {
    text: string;
}


export interface MenuArrayProp {
    menu: Menu[];
}


export interface CallbackProp {
    callback: Function;
}


export interface ChildProp {
    children: JSX.Element[] | JSX.Element
}