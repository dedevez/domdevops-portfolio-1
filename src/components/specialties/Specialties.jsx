import React from 'react'
import './specialties.css'
import {BiCheck} from "react-icons/bi";

const Specialties = () => {
    return (
        <section id='specialties'>
            <h5>What I Specialize In</h5>
            <h2>Capabilities</h2>
            <div className="container specialties_container">
                <article className="specialty">
                    <div className="specialty_head">
                        <h3>Full-Stack Web Development</h3>
                    </div>
                    <ul className="specialty_list">
                        <li>
                            <BiCheck className="specialty_list-icon"/>
                            <p>Front-End Development: Building responsive, user-friendly interfaces using modern frameworks (e.g., React.js, Bootstrap).</p>
                        </li>
                        <li>
                            <BiCheck className="specialty_list-icon"/>
                            <p>Back-End Development: Designing and implementing scalable, secure server-side applications (e.g., Node.js, Django, Spring Boot).</p>
                        </li>
                        <li>
                            <BiCheck className="specialty_list-icon"/>
                            <p>Database Management: Integrating and managing databases like MySQL or PostgreSQL, including schema design, performance optimization, and data management.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF Full-Stack Web Development */}

                <article className="specialty">
                    <div className="specialty_head">
                        <h3>API Development & Integration</h3>
                    </div>
                    <ul className="specialty_list">
                        <li>
                            <BiCheck className="specialty_list-icon"/>
                            <p>RESTful APIs: Designing and developing secure and scalable APIs to enable communication between front-end, back-end, and third-party specialtys.</p>
                        </li>
                        <li>
                            <BiCheck className="specialty_list-icon"/>
                            <p>API Integration: Integrating third-party APIs to enhance applications with external functionalities, such as payment gateways, authentication, and cloud services.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF API Development & Integration */}

                <article className="specialty">
                    <div className="specialty_head">
                        <h3>DevOps, Automation, & Continous Delivery</h3>
                    </div>
                    <ul className="specialty_list">
                        <li>
                            <BiCheck className="specialty_list-icon"/>
                            <p>CI/CD Pipeline Setup: Automating build, test, and deployment processes using tools like Jenkins, GitHub Actions, and Docker.</p>
                        </li>
                        <li>
                            <BiCheck className="specialty_list-icon"/>
                            <p>Containerization: Using Docker and Kubernetes to deploy, manage, and scale containerized applications efficiently.</p>
                        </li>
                        <li>
                            <BiCheck className="specialty_list-icon"/>
                            <p>Automated Testing: Implementing automated testing frameworks for continuous testing of code.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF DEVOPS, AUTOMATION, & CONTINUOUS DELIVERY */}
            </div>


        </section>
    )
}
export default Specialties
