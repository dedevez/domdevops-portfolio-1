import React, {useState} from 'react'
import './about.css'
import ME from '../../assets/profile-pic.jpg'
import BioModal from "./bio_modal";

const About = () => {


    {/* ======== Set up modal for Bio read more ========= */}
    const [modalActive, setModalActive] = useState(false)

    // Open the modal
    const openModal = () => {
        setModalActive(true);
    }

    //Close the modal
    const closeModal = () => {
        setModalActive(false);
    }

    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            {/* Render modal */}
            <BioModal open={modalActive} onClose={closeModal}/>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="About" />
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
                        <button onClick={openModal} className="link-btn">
                            read more...
                        </button>
                    </p>

                </div>
            </div>
        </section>
    )
}
export default About
