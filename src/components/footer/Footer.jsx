import React from 'react'
import './footer.css'
import { FaGithub, FaLinkedin, FaInstagramSquare,  } from "react-icons/fa";
import { PiInfinityBold } from "react-icons/pi";

const Footer = () => {
    return (
        <footer>
            <button></button>
            <a href="/#" className="footer_logo">DomDevOps<br/><PiInfinityBold/></a>

            <ul className="permalinks">
                <li><a href="/#">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#experience">Experience</a></li>
                <li><a href="/#portfolio">Portfolio</a></li>
                {/*<li><a href="/#blog">Blog</a></li>*/} {/*For future implementation*/}
                <li><a href="/#contact">Contact</a></li>
            </ul>

            <div className="footer_socials">
                <a href="https://github.com/dedevez"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/dominique-d-998647258/"><FaLinkedin/></a>
                <a href="https://www.instagram.com/domdevops/"><FaInstagramSquare/></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; DomDevOps. All rights reserved.</small>
            </div>

        </footer>
    )
}
export default Footer
