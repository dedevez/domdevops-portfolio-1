import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Layout from "./components/layout/Layout";
import Home_Page from "./pages/home_page/Home_Page";
import Portfolio_Page from "./pages/portfolio_page/Portfolio_Page";
import NotFound from "./pages/404_error_page/404_Error_Page";

const App = () => {
    return (
        <Router>
            <Routes>

                {/* Home/Root Route */}
                <Route path="/" element={
                    <Layout>
                        <Home_Page/>
                    </Layout>
                }/>

                {/* Redirect Home Page to Root */}
                <Route path="/home" element={<Navigate to={"/"}/>}/>

                {/* Portfolio Page Route */}
                <Route path="/portfolio" element={
                    <Layout>
                        <Portfolio_Page/>
                    </Layout>
                }/>

                {/*/!* Blog Page Route *!/*/} {/*For future implementation*/}
                {/*<Route path="/blog" element={*/}
                {/*    <Layout>*/}
                {/*        <Blog_Page/>*/}
                {/*    </Layout>*/}
                {/*}/>*/}

                {/* 404 Not Found Error */}
                <Route path="*" element={
                    <Layout>
                        <NotFound/>
                    </Layout>
                }/>

            </Routes>
        </Router>
    )
}
export default App

