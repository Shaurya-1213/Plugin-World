'use client'
import React from 'react'
import { Nav } from './navbar';

const Layout = ({ children }) => {
    return (
        <>
        <Nav />
            {children}
        </>
    )
}

export default Layout;