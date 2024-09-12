import React, {useState} from 'react'
import './about.css'
import ME from '../../assets/profile-pic.jpg'
import {Link} from "react-router-dom";
import BlogPostModal from "../../pages/blog_page/blog_post_modal";


const about_me_content = "Hello! I’m Dominique, a Full Stack Developer with a background in Economics, Finance, and " +
    'Business Management. After a decade in public sector financial administration, my curiosity for ' +
    'problem-solving led me to pursue a second Bachelor\'s degree in Computer Science, transitioning into the ' +
    'world of software engineering with a strong focus on DevOps. At DomDevOps, I showcase projects that reflect' +
    ' my diverse skill set and passion for innovation, blending technical expertise with strategic thinking. ' +
    '                                                                                                      ' +
    'My portfolio highlights my proficiency in various programming languages, along with my commitment to ' +
    'streamlining processes and enhancing collaboration through DevOps principles. Constant learning and growth ' +
    'drive my journey, and I’m eager to tackle new challenges, collaborate within the tech community, and ' +
    'contribute to impactful software solutions. Beyond coding, you’ll find me exploring new destinations, ' +
    'immersed in a good book, or staying active with fitness challenges. These experiences not only enrich my ' +
    'life but also inspire creativity and persistence in my professional work. Join me on my journey at ' +
    'DomDevOps.com as I navigate the ever-evolving world of software development, share insights from my ' +
    'unique career path, and discuss how continuous learning shapes my daily life both personally and ' +
    "professionally."

const About = () => {

    {/* ======== Set up modals for  blog posts ========= */
    }
    const [activeModalID, setActiveModalId] = useState(null);
    const [activeTitle, setActiveTitle] = useState('');
    const [activeContent, setActiveContent] = useState('');

// Opens modal for specific blog post
    const openModal = (id, title, post_content) => {
        setActiveModalId(id);
        setActiveTitle(title);
        setActiveContent(post_content);
    }

//Close the modal
    const closeModal = () => {
        setActiveModalId(null);
    }

    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">

                {/* Render modal */}
                {activeModalID !== null && (
                    <BlogPostModal
                        open={activeModalID !== null}
                        onClose={closeModal}
                        title={activeTitle}
                        post_content={activeContent}
                    />
                )}

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
                        <small>
                            <a onClick={() => openModal(1, 'Hello World! I\'m Dominique', about_me_content)}>Read more...</a>
                        </small>
                    </p>

                </div>
            </div>
        </section>
    )
}
export default About
