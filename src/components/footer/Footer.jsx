import React from 'react'
import './footer.css'
import { FaGithub, FaLinkedin, FaInstagramSquare,  } from "react-icons/fa";
import { PiInfinityBold } from "react-icons/pi";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer_logo">DomDevOps<br/><PiInfinityBold/></a>

            <ul className="permalinks">
                <li><a href="home#">Home</a></li>
                <li><a href="home#about">About</a></li>
                <li><a href="home#experience">Experience</a></li>
                <li><a href="home#portfolio">Portfolio</a></li>
                {/*<li><a href="home#blog">Blog</a></li>*/}
                <li><a href="home#contact">Contact</a></li>
            </ul>

            <div className="footer_socials">
                <a href="https://github.com"><FaGithub/></a>
                <a href="https://linkedin.com"><FaLinkedin/></a>
                <a href="https://instagram.com"><FaInstagramSquare/></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; DomDevOps. All rights reserved.</small>
            </div>

        </footer>
    )
}
export default Footer
