import React, {useState} from 'react'
import './blog.css'
import IMG1 from '../../assets/logo.png'
// import Swiper core and required modules
import {Navigation, Pagination} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Link} from "react-router-dom";
import BlogPostModal from "../../pages/blog_page/blog_post_modal";


const blog_card_data = [
    {
        id: 1,
        image: IMG1,
        title: 'Hello World! I\'m Dominique',
        summary: 'From the world of finance to the realm of full-stack development, my journey has been one of ' +
            'curiosity, problem-solving, and continuous learning.',
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
            'immersed in a good book, or staying active with fitness challenges. These experiences not only enrich my ' +
            'life but also inspire creativity and persistence in my professional work. Join me on my journey at ' +
            'DomDevOps.com as I navigate the ever-evolving world of software development, share insights from my ' +
            'unique career path, and discuss how continuous learning shapes my daily life both personally and ' +
            "professionally.",

    },
    // {
    //     id: 2,
    //     image: IMG1,
    //     title: 'Personalizing DevOps: A Journey of Growth and Learning',
    //     summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur cumque dolor doloribus dolorum eaque eum explicabo fuga fugit, in nemo nihil optio quae quia saepe sequi sit totam. Placeat.'
    // },
    // {
    //     id: 3,
    //     image: IMG1,
    //     title: 'Building My Developer Portfolio: Tools, Tech, and Lessons Learned',
    //     summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur cumque dolor doloribus dolorum eaque eum explicabo fuga fugit, in nemo nihil optio quae quia saepe sequi sit totam. Placeat.'
    // },
]


const Blog = () => {

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
        <section id='blog'>
            <h5>My Journey In Tech</h5>
            <h2>Blog</h2>

            <div className="container blog_modal_container">
                {/* Render modal */}
                {activeModalID !== null && (
                    <BlogPostModal
                        open={activeModalID !== null}
                        onClose={closeModal}
                        title={activeTitle}
                        post_content={activeContent}
                    />
                )}
            </div>

            <Swiper className="container blog_container"


                    modules={[Navigation, Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true}}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}>
                {
                    blog_card_data.map(({id, image, title, summary, post_content}) => {
                        return (
                            <SwiperSlide key={id} className="blog_post">
                                <div className="blog_image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h5 className="blog_title">{title}</h5>
                                <small className="blog_summary">
                                    {summary}
                                </small>
                                <small>
                                    <a onClick={() => openModal(id, title, post_content)}>Read more...</a>
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}
export default Blog
