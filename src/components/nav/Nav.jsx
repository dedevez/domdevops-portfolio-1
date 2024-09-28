import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiTwotoneFolderOpen} from "react-icons/ai";
import {BiMessageSquareDetail} from "react-icons/bi";
import { MdOutlineWorkHistory } from "react-icons/md";

const Nav = () => {
    return (
    <nav>
        <a href="/#" data-tooltip="Home"><AiOutlineHome/></a>
        <a href="#about" data-tooltip="About"><AiOutlineUser/></a>
        <a href="#experience" data-tooltip="Experience"><MdOutlineWorkHistory/></a>
        <a href="#portfolio" data-tooltip="Portfolio"><AiTwotoneFolderOpen/></a>
        <a href="#contact" data-tooltip="Contact"><BiMessageSquareDetail/></a>
    </nav>
    )
}

export default Nav
