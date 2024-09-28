import React from 'react';
import './NotFound404ErrorPage.css'

const NotFound = () => {
    return (
        <section id='contact'>
            <div className='container not-found_container'>
                {/*<div style={{textAlign: 'center', marginTop: '50px'}}>*/}
                    <h1>404</h1>
                    <p>Oops! The page you're looking for doesn't exist.</p>
                    <br/>
                    <a href="/">Go Back to DomDevOps Home</a>
                {/*</div>*/}
            </div>
        </section>
    );
};

export default NotFound;