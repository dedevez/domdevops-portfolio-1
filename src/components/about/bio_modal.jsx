import React from 'react'

const BioModal = ({open, onClose}) => {
    if(!open) return null;
    return (
        <div onClick={onClose} className="overlay">
            <div onClick={(e) => {e.stopPropagation()}} className="modalContainer"> {/*stop propogation prevents child object from inheriting onClick action from parent container*/}
                <div className="modalRight">
                    <button onClick={onClose} className="closeBtn">x</button>
                    <div className="content">
                        <h1>{'Hello World!'}</h1>
                        <p>I’m Dominique, a Full Stack Developer with previous career experience in Economics, Finance, and
                            Business Management. After a decade in public sector financial administration, my curiosity for
                            problem-solving led me to pursue a second Bachelor's degree in Computer Science, transitioning into the
                            world of software engineering with a strong focus on DevOps. At DomDevOps, I showcase projects that reflect
                            my diverse skill set and passion for innovation, blending technical expertise with strategic thinking."</p>
                        <br/>
                        <p>My portfolio highlights my proficiency in various programming languages, along with my commitment to
                           streamlining processes and enhancing collaboration through DevOps principles. Constant learning and growth
                           drive my journey, and I’m eager to tackle new challenges, collaborate within the tech community, and
                           contribute to impactful software solutions. </p>
                        <br/>
                        <p>Beyond coding, you’ll find me exploring new destinations,
                            immersed in a good book, or staying active with fitness challenges. These experiences not only enrich my
                            life but also inspire creativity and persistence in my professional work. Join me on my journey at
                            DomDevOps.com as I navigate the ever-evolving world of software development, share insights from my
                            unique career path, and discuss how continuous learning shapes my daily life both personally and
                            professionally.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BioModal
