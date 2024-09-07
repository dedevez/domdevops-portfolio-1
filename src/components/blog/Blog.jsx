import React from 'react'
import './blog.css'
import IMG1 from '../../assets/logo.png'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Navigation, Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Link} from "react-router-dom";


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Welcome to DomDevOps',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur cumque dolor doloribus dolorum eaque eum explicabo fuga fugit, in nemo nihil optio quae quia saepe sequi sit totam. Placeat.'

    },
    // {
    //     id: 2,
    //     image: AVTR2,
    //     title: 'Blog Post - Jack of All Trades',
    //     summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur cumque dolor doloribus dolorum eaque eum explicabo fuga fugit, in nemo nihil optio quae quia saepe sequi sit totam. Placeat.'
    // },
    // {
    //     id: 3,
    //     image: AVTR3,
    //     title: 'Blog Post - Your First CI/CD Deployment',
    //     summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur cumque dolor doloribus dolorum eaque eum explicabo fuga fugit, in nemo nihil optio quae quia saepe sequi sit totam. Placeat.'
    // },
    // {
    //     id: 5,
    //     image: AVTR4,
    //     title: 'Blog Post - Building an LMS',
    //     summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur cumque dolor doloribus dolorum eaque eum explicabo fuga fugit, in nemo nihil optio quae quia saepe sequi sit totam. Placeat.'
    // },
    // {
    //     id: 6,
    //     image: AVTR4,
    //     title: 'Blog Post - Building... ',
    //     summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur cumque dolor doloribus dolorum eaque eum explicabo fuga fugit, in nemo nihil optio quae quia saepe sequi sit totam. Placeat.'
    // },
    // {
    //     id: 7,
    //     image: AVTR4,
    //     title: 'Blog Post - Building...',
    //     summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur cumque dolor doloribus dolorum eaque eum explicabo fuga fugit, in nemo nihil optio quae quia saepe sequi sit totam. Placeat.'
    // },
]
const Blog = () => {
    return (
        <section id='blog'>
            <h5>My Journey In Tech</h5>
            <h2><Link to="/blog">Blog</Link></h2>
            <Swiper className="container blog_container"
                    modules={[Navigation, Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}>
                {
                    data.map(({id, image, title, summary}) => {
                        return (
                            <SwiperSlide key={id} className="blog_post">
                                <div className="blog_image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h5 className="blog_title">{title}</h5>
                                <small className="blog_summary">
                                    {summary}
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
