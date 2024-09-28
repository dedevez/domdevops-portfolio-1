import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/dominique-d-998647258/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            <a href="https://github.com/dedevez" target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>
            <a href="https://www.instagram.com/domdevops/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare/></a>
        </div>
    )
}
export default HeaderSocials
