import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'My Developer Portfolio',
        github:'https://github.com/dedevez/domdevops-portfolio-1',
        website: '',
    },
    // {
    //     id: 2,
    //     image: IMG2,
    //     title: 'AI Code Writer/Editor',
    //     github:'https://github.com/dedevez/domdevops-portfolio-1',
    //     website: 'https://github.com',
    // },
    // {
    //     id: 3,
    //     image: IMG3,
    //     title: 'Learning Management System',
    //     github:'https://github.com/dedevez/domdevops-portfolio-1',
    //     website: 'https://github.com',
    // }
]
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2><a href={"/portfolio"} target="_blank">Portfolio</a></h2>

            <div className="container portfolio_container">
                {
                    data.map(({id, image, title, github, website}) => {
                        return (
                            <article key={id} className="portfolio_item">
                                <div className="portfolio_item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio_item-cta">
                                    {github !== null && github !== '' ? (
                                        <a href={github} className="btn" target="_blank">See Github</a>
                                    ) : null}

                                    {website !== null && website!== '' ? (
                                        <a href={website} className="btn" target="_blank">Visit Site</a>
                                    ) : null}

                                    <a href={"/portfolio"} className="btn btn-primary" target="_blank">Details</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Portfolio
