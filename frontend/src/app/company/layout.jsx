import React from 'react'
import CompanyNavbar from './navbar'

const Layout = ({ children }) => {
    return (
        <>
            <CompanyNavbar />
            {children}
        </>
    )
}

export default Layout