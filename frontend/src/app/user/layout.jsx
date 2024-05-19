import React from 'react'
import userNavbar from './navbar'

const Layout = ({ children }) => {
    return (
        <>
            <userNavbar />
            {children}
        </>
    )
}

export default Layout