import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Layout from "./components/layout/Layout";
import Home_Page from "./pages/home_page/Home_Page";
import Portfolio_Page from "./pages/portfolio_page/Portfolio_Page";
import Blog_Page from "./pages/blog_page/Blog_Page";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Redirect root to Homepage */}
                <Route path="/" element={<Navigate to={"/home"}/>}/>

                {/* Home Page Route */}
                <Route path="/home" element={
                    <Layout>
                        <Home_Page/>
                    </Layout>
                }/>

                {/* Portfolio Page Route */}
                <Route path="/portfolio" element={
                    <Layout>
                        <Portfolio_Page/>
                    </Layout>
                }/>

                {/* Blog Page Route */}
                <Route path="/blog" element={
                    <Layout>
                        <Blog_Page/>
                    </Layout>
                }/>

            </Routes>
        </Router>
    )
}
export default App

