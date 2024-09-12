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
        github: 'https://github.com/dedevez/domdevops-portfolio-1',
    },
    // {
    //     id: 2,
    //     title: 'Project Title',
    //     summary: 'Project Summary',
    //     case_study: '',
    //     website: 'https://github.com',
    //     github: 'https://github.com',
    // },
    // {
    //     id: 3,
    //     title: 'Project Title',
    //     summary: 'Project Summary',
    //     case_study: '',
    //     website: 'https://github.com',
    //     github: 'https://github.com',
    // },

]

const Portfolio_Page = () => {
    return (

        <section id='portfolio_page'>
            <div className="home_link">
                    <a href="home#" className="header_nav_logo">DomDevOps</a>
            </div>
            <div className="container portfolio_page_container">
                <h2>Projects</h2>

                <div className="container project_card_container">
                    {
                        projects.map(({id, title, summary, case_study, website, github}) => (
                            <article key={id} className="project_item">
                                <h3>{title}</h3>
                                <p>{summary}</p>
                                <div className="project_item-cta">
                                    {case_study !== null && case_study !== '' ? (
                                        <a href={case_study} target="_blank" >CASE STUDY</a>
                                    ) : null}
                                    {website !== null && website !== '' ? (
                                        <a href={website} target="_blank" >VISIT WEBSITE</a>
                                    ) : null}
                                    {github !== null && github !== '' ? (
                                        <a href={github} target="_blank" >GITHUB</a>
                                    ) : null}
                                </div>
                            </article>
                        ))}
                </div>
            </div>
        </section>
    )
}
export default Portfolio_Page

