import React from 'react'
import './header_navbar.css'

const Header_Navbar = () => {
    return (
        <header_navbar>
            <div class="header_navbar-left">
                <ul className="permalinks">
                    <li><a href="https://domdevops.com" className="header_nav_logo">DomDevOps</a></li>
                </ul>
            </div>

            <div class="header_navbar-right">
                <ul className="permalinks">
                    <li><a href="home#about">About</a></li>
                    <li><a href="home#experience">Experience</a></li>
                    <li><a href="home#portfolio">Portfolio</a></li>
                    {/*<li><a href="home#blog">Blog</a></li>*/} {/*For future implementation*/}
                    <li><a href="home#contact">Contact</a></li>
                </ul>
            </div>
        </header_navbar>
    )
}
export default Header_Navbar
