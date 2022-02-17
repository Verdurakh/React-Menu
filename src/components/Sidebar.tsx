import { Accordion } from "react-bootstrap";
import { AccordionEventKey } from "react-bootstrap/esm/AccordionContext";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Menu, getChildren } from "../models/Menu";
import { CallbackProp } from "../models/Props";
import LoadingAnimation from "./LoadingAnimation/LoadingAnimation";
import MenuError from "./MenuError";
import { MenuItem } from "./MenuItem";
const queryClient = new QueryClient();

let accordionCallback: Function;

function Sidebar({ callback }: CallbackProp) {
    accordionCallback = callback;
    return (
        <QueryClientProvider client={queryClient}>
            <MenuCreation />
        </QueryClientProvider>
    )
}


function handleAccordionClick(e: AccordionEventKey) {
    if (e && e.length > 0)
        accordionCallback(e[e.length - 1]);
}



function MenuCreation() {
    const url: string = process.env.REACT_APP_MENU_API_URL ?? ""

    //TODO: move to own repository
    const { isLoading, error, data } = useQuery<boolean, Error, Menu[]>('menuData', () =>
        fetch(url).then(res =>
            res.json()
        ).then(result => {
            return result.data;
        })
    );

    if (isLoading) return (<LoadingAnimation />)

    if (error)
        return (<MenuError text={error.message} />)


    return (
        <div className="Sidebar">
            <Accordion className='Menu' alwaysOpen={true}
                onSelect={handleAccordionClick}>
                <MenuItem menu={getChildren(data)} />
            </Accordion>
        </div>
    );
}

export default Sidebar;