import React from 'react'
import './about.css'
import ME from '../../assets/profile-pic.jpg'
import {Link} from "react-router-dom";

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2><a href="" target="_blank">About Me</a></h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about_content">
                    <p>
                        Welcome to DomDevOps, my portfolio as a Full Stack software engineer. Here, I showcase projects
                        that reflect my passion for software development and DevOps principles. From web applications to
                        automation tools, my work highlights diverse programming skills and a commitment to continual
                        learning. I’m excited to embrace new challenges, collaborate with the tech community, and
                        contribute to innovative software solutions.
                        <br/>
                        <Link to="/blog">read more...</Link>
                    </p>

                </div>
            </div>
        </section>
    )
}
export default About
