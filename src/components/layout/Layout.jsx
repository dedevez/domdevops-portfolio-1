import React from 'react';
import HeaderNavbar from "../header_navbar/HeaderNavbar";
import Footer from "../footer/Footer";

const Layout = ({children}) => {
    return (
        <>
            <HeaderNavbar/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout;