import React from 'react'
import './portfolio_page.css'


const projects = [
    {
        id: 1,
        title: 'My Portfolio Website',
        summary: 'My developer portfolio showcases my skills and projects using React for dynamic components, alongside ' +
            'HTML and CSS for structure and styling. It features responsive design, smooth navigation, and a focus on ' +
            'clean, modern UI to highlight my experience as a full-stack developer. This project demonstrates my ability ' +
            'to build interactive, user-friendly web applications using core front-end technologies.',
        case_study: '',
        website: 'https://domdevops.com',
        testuser: '',
        testuserpassword: '',
        github: 'https://github.com/dedevez/domdevops-portfolio-1',
    },
    {
        id: 2,
        title: 'Mentori',
        summary: 'Mentori is an AI-powered programming mentor designed to assist software developers at all levels. ' +
            'The web app helps users brainstorm project ideas, refine code snippets, and provides tailored suggestions ' +
            'for tools and technologies based on the user’s experience level. Built using Django, React, and Bootstrap, ' +
            'Mentori leverages the ChatGPT API for natural language processing, making it an intuitive and responsive ' +
            'tool for learning and development. The platform also incorporates CI/CD practices, with GitHub Actions ' +
            'automating deployment to a Docker container on DigitalOcean. Mentori exemplifies modern web development, ' +
            'blending AI with a robust backend to create a valuable resource for developers.',
        case_study: '',
        website: 'https://mentori.tech',
        testuser: 'guest',
        testuserpassword: 'guestpassword',
        github: '',
    },
    {
        id: 3,
        title: 'Whimsy Gossip',
        summary: 'The Whimsy Gossip website will be a dynamic webpage created for a fantasy and romance fiction podcast that features ' +
            'fan-fiction films, offering a whimsical and immersive online experience. Built using modern web development' +
            ' technologies such as React, Bootstrap, and Django, the project will focus on delivering a seamless user' +
            ' experience. To demonstrate proficiency in CI/CD practices, the website will integrate GitHub Actions for ' +
            'continuous deployment to a Docker container hosted on DigitalOcean. The initial launch includes a ' +
            '\'coming soon\' page, highlighting the efficiency of the automated deployment process while setting the ' +
            'stage for future content and features.',
        case_study: '',
        website: '',
        testuser: '',
        testuserpassword: '',
        github: '',
    },

]

const PortfolioPage = () => {
    return (

        <section id='portfolio_page'>
            <div className="home_link">
                    <a href="/#" className="header_nav_logo">DomDevOps</a>
            </div>
            <div className="container portfolio_page_container">
                <h2>Projects</h2>

                <div className="container project_card_container">
                    {
                        projects.map(({id, title, summary, case_study, website, testuser, testuserpassword, github}) => (
                            <article key={id} className="project_item">
                                <h3>{title}</h3>
                                <p>{summary}</p>
                                {testuser !== null && testuser !== '' ? (
                                    <small>Guest User: {testuser} <br/> Guest Password: {testuserpassword}</small>
                                ) : null}
                                <div className="project_item-cta">
                                    {case_study !== null && case_study !== '' ? (
                                        <a href={case_study} target="_blank" rel="noopener noreferrer">CASE STUDY</a>
                                    ) : null}
                                    {website !== null && website !== '' ? (
                                        <a href={website} target="_blank" rel="noopener noreferrer">VISIT WEBSITE</a>
                                    ) : null}
                                    {github !== null && github !== '' ? (
                                        <a href={github} target="_blank" rel="noopener noreferrer">GITHUB</a>
                                    ) : null}
                                </div>
                            </article>
                        ))}
                </div>
            </div>
        </section>
    )
}
export default PortfolioPage

