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
                        Welcome to DomDevOps, my showcase as a Full Stack software engineer. My background is rich with
                        experience in financial analysis, business management, and now, software engineering. After a
                        rewarding decade working fiscal administration in the public sector, my knack for tackling
                        complex problems inspired me to earn a second Bachelor's degree in Computer Science. Here,
                        you’ll find projects that blend my technical skills with my strategic acumen as I navigate the
                        evolving tech landscape.
                        <br/><br/>
                        Though new to the field of software development, my portfolio already showcases a variety of
                        projects that highlight my proficiency in diverse programming languages and embrace DevOps
                        principles. I'm committed to continual learning and eager to apply innovative solutions in
                        software development. I look forward to collaborating within the tech community, embracing new
                        challenges, and contributing to impactful software projects.
                        <br/>
                        <Link to="/blog">read more...</Link>
                    </p>

                </div>
            </div>
        </section>
    )
}
export default About
