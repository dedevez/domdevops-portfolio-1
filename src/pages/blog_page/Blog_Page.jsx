import React from 'react'
import './blog_page.css'
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import {Link} from "react-router-dom";

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Who I Am: My Journey Into Software Development',
        article: 'https://github.com',
    },
    {
        id: 2,
        image: IMG2,
        title: 'Personalizing DevOps: A Journey of Growth and Learning',
        article: 'https://github.com',
    },
    {
        id: 3,
        image: IMG3,
        title: 'Building My Portfolio: Tools, Tech, and Lessons Learned',
        article: 'https://github.com',
    },

]

const Blog_Page = () => {
    return (

        <section id='blog_page'>

            <div className="container blog_header">
                <h2>My Developer Journey: Code, Creativity, and Continuous Learning</h2>
                <h5>Join me as I navigate the ever-evolving world of software development—sharing insights into
                    projects, challenges, and breakthroughs.</h5>
            </div>


            <div className="container blog_page_container">
                {
                    data.map(({id, image, title, article}) => {
                        return (
                            <article key={id} className="blog_item">
                                <div className="blog_item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="blog_item-cta">
                                    <a href={article} className="btn" target="_blank">read more...</a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
        </section>

    )
}
export default Blog_Page
