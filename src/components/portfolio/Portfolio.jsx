import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import {Link} from 'react-router-dom';


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'My Developer Portfolio',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 2,
        image: IMG2,
        title: 'AI Code Writer/Editor',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Learning Management System',
        github: 'https://github.com',
        demo: 'https://github.com'
    }
]
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2><a href="" target="_blank">Portfolio</a></h2>

            <div className="container portfolio_container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className="portfolio_item">
                                <div className="portfolio_item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio_item-cta">
                                    <a href={github} className="btn" target="_blank">Github</a>
                                    <a href={demo} className="btn btn-primary" target="_blank">Live
                                        Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
                <Link to="/portfolio">See More...</Link>
            </div>
        </section>
    )
}
export default Portfolio
