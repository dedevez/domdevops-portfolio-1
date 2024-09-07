import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from "react-icons/bs";

const Experience = () => {
    return (
        <section id='experience'>
            <h5>The Skills I Have</h5>
            <h2>Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                    </div>
                </div>
                {/* END OF FRONTEND */}
                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>SQL</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>RESTful APIs</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Java</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF BACKEND */}
                <div className="experience_devtools">
                    <h3>Development Tools</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Docker</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Kubernetes</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>IntelliJ Idea</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>VS Code</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Eclipse</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF DEVELOPMENT TOOLS */}
                <div className="experience_version_ctrl_CICD">
                    <h3>Version Control & CI/CD</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Git</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>GitHub</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>GitHub Actions</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF VERSION CONTROL & CI/CD */}
            </div>
        </section>
    )
}
export default Experience
