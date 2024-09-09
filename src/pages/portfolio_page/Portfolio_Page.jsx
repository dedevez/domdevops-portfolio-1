import React from 'react'
import './portfolio_page.css'


const projects = [
    {
        id: 1,
        title: 'My Portfolio Website',
        summary: 'Project Summary',
        case_study: 'www.github.com',
        website: 'www.github.com',
        github: 'www.github.com',
    },
    {
        id: 2,
        title: 'Project Title',
        summary: 'Project Summary',
        case_study: 'www.github.com',
        website: 'www.github.com',
        github: 'www.github.com',
    },
    {
        id: 3,
        title: 'Project Title',
        summary: 'Project Summary',
        case_study: 'www.github.com',
        website: 'www.github.com',
        github: 'www.github.com',
    },

]

const Portfolio_Page = () => {
    return (
        <section id='portfolio_page'>
            <div className="container portfolio_page_container">
                <h2>Projects</h2>

                <div className="container project_card_container">
                    {
                        projects.map(({id, title, summary, case_study, website, github}) => (
                            <article key={id} className="project_item">
                                <h3>{title}</h3>
                                <p>{summary}</p>
                                <div className="project_item-cta">
                                    <a href={case_study}>CASE STUDY</a>
                                    <a href={website}>VISIT WEBSITE</a>
                                    <a href={github}>GITHUB</a>
                                </div>
                            </article>
                        ))}
                </div>
            </div>
        </section>
    )
}
export default Portfolio_Page

