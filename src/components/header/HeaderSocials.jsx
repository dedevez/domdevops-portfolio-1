import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/dominique-d-998647258/" target="_blank"><FaLinkedin/></a>
            <a href="https://github.com/dedevez" target="_blank"><FaGithubSquare/></a>
            <a href="https://www.instagram.com/domdevops/" target="_blank"><FaInstagramSquare/></a>
        </div>
    )
}
export default HeaderSocials
