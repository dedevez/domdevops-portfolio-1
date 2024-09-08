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
        title: 'Who I Am: My Journey Into Software Development',
        post_content: 'blog post text',
    },
    {
        id: 2,
        image: IMG2,
        title: 'Personalizing DevOps: A Journey of Growth and Learning',
        post_content: 'https://github.com',
    },
    {
        id: 3,
        image: IMG3,
        title: 'Building My Portfolio: Tools, Tech, and Lessons Learned',
        post_content: 'https://github.com',
    },

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
