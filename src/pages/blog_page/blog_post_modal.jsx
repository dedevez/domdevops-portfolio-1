import React from 'react'

const BlogPostModal = ({open, onClose, title, post_content}) => {
    if(!open) return null;
    return (
        <div onClick={onClose} className="overlay">
            <div onClick={(e) => {e.stopPropagation()}} className="modalContainer"> {/*stop propogation prevents child object from inheriting onClick action from parent container*/}
                <div className="modalRight">
                    <button onClick={onClose} className="closeBtn">x</button>
                    <div className="content">
                        <h1>{title}</h1>
                        <p>{post_content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogPostModal
