import React from 'react'
import './footer.css'
import { FaGithub, FaLinkedin, FaInstagramSquare,  } from "react-icons/fa";
import { PiInfinityBold } from "react-icons/pi";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer_logo">DomDevOps<br/><PiInfinityBold/></a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#blog">Blog</a></li>
                {/*<li><a href="#specialties">Focus</a></li>*/}
                <li><a href="#contact">Contact</a></li>
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
