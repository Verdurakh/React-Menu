import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
interface Props {
    children: JSX.Element[] | JSX.Element
}
const Layout = (children: Props) => {
    let texgfdgdf: string = "tja";

    const [title, setTitle] = useState("start")

    // useEffect(() => {
    //     setTimeout(() => {
    //         //texgfdgdf = "kan denna ändras?"
    //         //console.log(texgfdgdf);
    //         setTitle("test");
    //     }, 3000)
    // })



    return (
        <div>
            <Header />
            <div className='PageWrapper'>
                <Sidebar callback={(newTitle: string) => setTitle(newTitle)} />
                <Main text={title} />
            </div>
        </div>
    )
}

export default Layout;