import { Accordion } from "react-bootstrap";
import { AccordionEventKey } from "react-bootstrap/esm/AccordionContext";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Menu, getChildren } from "../models/Menu";
import { MenuItem } from "./MenuItem";
const queryClient = new QueryClient();


interface props {
    callback: Function;
}

let accordionCallback: props;


function Sidebar(callback: props) {
    accordionCallback = callback;
    return (
        <QueryClientProvider client={queryClient}>
            <MenuCreation />
        </QueryClientProvider>
    )
}


function handleAccordionClick(e: AccordionEventKey) {
    if (e && e.length > 0)
        accordionCallback.callback(e[e.length - 1]);
}



function MenuCreation() {
    const { isLoading, error, data } = useQuery<boolean, Error, Menu[]>('repoData', () =>
        fetch('https://run.mocky.io/v3/d542c15d-02d3-490e-9d57-97180d1ef8c6').then(res =>
            res.json()
        ).then(result => {
            return result.data;
        })
    );

    if (isLoading) return (<div className="Sidebar">Loading</div>)

    if (error)
        return (<div className="Sidebar"> An error has occured  {error.message} </div>)


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