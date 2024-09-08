import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header_Navbar from "./components/header_navbar/Header_Navbar";

import Footer from "./components/footer/Footer";
import Portfolio_Page from "./pages/portfolio_page/Portfolio_Page";
import Blog_Page from "./pages/blog_page/Blog_Page";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <Header_Navbar/>

                        <Footer/>
                    </>
                }/>
                <Route path="/portfolio" element={<Portfolio_Page/>}/>
                <Route path="/blog" element={<Blog_Page/>}/>
            </Routes>
        </Router>
    )
}
export default App

