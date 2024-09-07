import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
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


const data = [
    {
        id: 1,
        image: AVTR1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur cumque dolor doloribus dolorum eaque eum explicabo fuga fugit, in nemo nihil optio quae quia saepe sequi sit totam. Placeat.'

    },
    {
        id: 2,
        image: AVTR2,
        name: 'Whimsy Gossip',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur cumque dolor doloribus dolorum eaque eum explicabo fuga fugit, in nemo nihil optio quae quia saepe sequi sit totam. Placeat.'
    },
    {
        id: 3,
        image: AVTR3,
        name: 'David Comeaux',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur cumque dolor doloribus dolorum eaque eum explicabo fuga fugit, in nemo nihil optio quae quia saepe sequi sit totam. Placeat.'
    },
    {
        id: 4,
        image: AVTR4,
        name: 'Cynthia Chauvin',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur cumque dolor doloribus dolorum eaque eum explicabo fuga fugit, in nemo nihil optio quae quia saepe sequi sit totam. Placeat.'
    },
]
const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Reviews from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials_container"
                    modules={[Navigation, Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}>
                {
                    data.map(({id, image, name, review}) => {
                        return (
                            <SwiperSlide key={id} className="testimonial">
                                <div className="client_avatar">
                                    <img src={image} alt="Avatar One"/>
                                </div>
                                <h5 className="client_name">{name}</h5>
                                <small className="client_review">
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}
export default Testimonials
