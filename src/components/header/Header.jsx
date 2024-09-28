import React from 'react'
import './header.css'
import CTA from './CallToAction'
import HeaderSocials from "./HeaderSocials";
const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Dominique Devezin</h1>
                <h5 className="text-light">Full-Stack Developer | DevOps Enthusiast</h5>
                <CTA/>
                <HeaderSocials/>
                <a href="#contact" className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    )
}
export default Header
