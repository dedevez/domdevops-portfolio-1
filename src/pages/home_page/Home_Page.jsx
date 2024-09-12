import React from 'react';
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import About from "../../components/about/About";
import Experience from "../../components/experience/Experience";
import Portfolio from "../../components/portfolio/Portfolio";
import Blog from "../../components/blog/Blog";
import Specialties from "../../components/specialties/Specialties";
import Contact from "../../components/contact/Contact";
import Header_Navbar from "../../components/header_navbar/Header_Navbar";
import Footer from "../../components/footer/Footer";

const Home_Page = () => {
    return (
        <>
            <Header_Navbar/>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Portfolio/>
            {/*<Blog/>*/}
            <Specialties/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home_Page;