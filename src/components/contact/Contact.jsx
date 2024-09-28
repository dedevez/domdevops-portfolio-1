import React from 'react'
import './contact.css'
import {MdOutlineEmail} from "react-icons/md";
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then(
                () => {
                    console.log('SUCCESS!');

                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact_container'>
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className="contact_option-icon"/>
                        <h4>Email</h4>
                        <h5>dominique@domdevops.com</h5>
                        <a href="mailto:dominique@domdevops.com" target="_blank" rel="noopener noreferrer">Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message" rows="7" placeholder='Your Message' required/>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact
