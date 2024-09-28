import React from 'react';
import Header_Navbar from "../header_navbar/Header_Navbar";
import Footer from "../footer/Footer";

const Layout = ({children}) => {
    return (
        <>
            <Header_Navbar/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout;