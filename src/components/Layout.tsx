import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import { ChildProp } from '../models/Props';


const Layout = ({ children }: ChildProp) => {
    const [title, setTitle] = useState("")

    return (
        <div>
            <Header />
            <div className='PageWrapper'>
                <Sidebar callback={(newTitle: string) => setTitle(newTitle)} />
                <Main text={title} />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;