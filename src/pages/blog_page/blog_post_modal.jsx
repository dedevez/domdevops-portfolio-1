import React from 'react'

const BlogPostModal = ({open, onClose, title, post_content}) => {
    if(!open) return null;
    return (
        <div className="overlay">
            <div className="modalContainer">

                <div className="modalRight">
                    <p onClick={onClose} className="closeBtn">X</p>
                    <div className="content">
                        <h1>{title}</h1>
                        <p>{post_content}</p>
                    </div>
                    <div className="btnContainer">
                        <a className="btn btn-primary" onClick={onClose}>Continue Reading</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogPostModal
