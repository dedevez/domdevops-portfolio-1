import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header_Navbar from "./components/header_navbar/Header_Navbar";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Blog from "./components/blog/Blog";
import Specialties from "./components/specialties/Specialties";
import Contact from "./components/contact/Contact";
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
                        <Header/>
                        <Nav/>
                        <About/>
                        <Experience/>
                        <Portfolio/>
                        <Blog/>
                        <Specialties/>
                        <Contact/>
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

