import { Accordion } from "react-bootstrap";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Menu, getChildren } from "../models/Menu";
import { MenuItem } from "./MenuItem";
const queryClient = new QueryClient();
function Sidebar(callback: props) {
    return (
        <QueryClientProvider client={queryClient}>
            <MenuCreation callback={callback.callback} />
        </QueryClientProvider>
    )
}

interface props {
    callback: Function;
}

function MenuCreation(callback: props) {



    const { isLoading, error, data } = useQuery<boolean, Error, Menu[]>('repoData', () =>
        fetch('https://run.mocky.io/v3/d542c15d-02d3-490e-9d57-97180d1ef8c6').then(res =>
            res.json()
        ).then(result => {
            // callback.callback("data loaded")
            return result.data;
        })
    );

    if (isLoading) return (<div className="Sidebar">Loading</div>)

    if (error)
        return (<div className="Sidebar"> An error has occured  {error.message} </div>)


    return (
        <div className="Sidebar">
            <Accordion className='Menu' alwaysOpen={true} defaultActiveKey={"Some node 1.3.1"}
                onSelect={(e) => {
                    if (e && e.length > 0)
                        callback.callback(e[e.length - 1]);
                }}>
                <MenuItem menu={getChildren(data)} />
            </Accordion>
        </div>
    );
}

export default Sidebar;