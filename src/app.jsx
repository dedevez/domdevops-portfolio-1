import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home_page/HomePage";
import PortfolioPage from "./pages/portfolio_page/PortfolioPage";
import NotFound from "./pages/NotFound404ErrorPage/NotFound404ErrorPage";

const App = () => {
    return (
        <Router>
            <Routes>

                {/* Home/Root Route */}
                <Route path="/" element={
                    <Layout>
                        <HomePage/>
                    </Layout>
                }/>

                {/* Redirect Home Page to Root */}
                <Route path="/home" element={<Navigate to={"/"}/>}/>

                {/* Portfolio Page Route */}
                <Route path="/portfolio" element={
                    <Layout>
                        <PortfolioPage/>
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

