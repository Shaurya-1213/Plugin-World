import React from 'react'
import Navbar from '../admin/navbar';
import Sidebar from '../admin/sidebar';

const Layout = ({ children }) => {
    return (
        <>
        <Navbar />
        <Sidebar />
            {children}
        </>
    )
}

export default Layout;