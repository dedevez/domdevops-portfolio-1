import React, {useState} from 'react'
import './blog_page.css'
import BlogPostModal from "./blog_post_modal";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Hello World!',
        post_content: "Hello! I’m Dominique, a Full Stack Developer with a background in Economics, Finance, and " +
            'Business Management. After a decade in public sector financial administration, my curiosity for ' +
            'problem-solving led me to pursue a second Bachelor\'s degree in Computer Science, transitioning into the ' +
            'world of software engineering with a strong focus on DevOps. At DomDevOps, I showcase projects that reflect' +
            ' my diverse skill set and passion for innovation, blending technical expertise with strategic thinking. ' +
            '                                                                                                      ' +
            'My portfolio highlights my proficiency in various programming languages, along with my commitment to ' +
            'streamlining processes and enhancing collaboration through DevOps principles. Constant learning and growth ' +
            'drive my journey, and I’m eager to tackle new challenges, collaborate within the tech community, and ' +
            'contribute to impactful software solutions. Beyond coding, you’ll find me exploring new destinations, ' +
            'immersed in a good book, or staying active with fitness challenges. hese experiences not only enrich my ' +
            'life but also inspire creativity and persistence in my professional work. Join me on my journey at ' +
            'DomDevOps.com as I navigate the ever-evolving world of software development, share insights from my ' +
            'unique career path, and discuss how continuous learning shapes my daily life both personally and ' +
            "professionally.",
    },
    // {
    //     id: 2,
    //     image: IMG2,
    //     title: 'Personalizing DevOps: A Journey of Growth and Learning',
    //     post_content: 'Coming Soon!',
    // },
    // {
    //     id: 3,
    //     image: IMG3,
    //     title: 'Building My Portfolio: Tools, Tech, and Lessons Learned',
    //     post_content: 'Coming Soon!',
    // },
]

const Blog_Page = () => {

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
        <section id='blog_page'>
            <div className="home_link">
                <a href="home#" className="header_nav_logo">DomDevOps</a>
            </div>
            <div className="container blog_page_container">
                {/* Render modal */}
                {activeModalID !== null && (
                    <BlogPostModal
                        open={activeModalID !== null}
                        onClose={closeModal}
                        title={activeTitle}
                        post_content={activeContent}
                    />
                )}

                <div className="container blog_header">
                    <h2>My Developer Journey: Code, Creativity, and Continuous Learning</h2>
                    <h5>Join me as I navigate the ever-evolving world of software development—sharing insights into
                        projects, challenges, and breakthroughs.</h5>
                </div>

                <div className="container blog_card_container">
                    {
                        data.map(({id, image, title, post_content}) => (
                            <article key={id} className="blog_item">
                                <div className="blog_item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="blog_item-cta">
                                    <a className="btn" onClick={() => openModal(id, title, post_content)}>read more...</a>
                                </div>
                            </article>
                        ))}
                </div>
            </div>
        </section>
    )
}
export default Blog_Page