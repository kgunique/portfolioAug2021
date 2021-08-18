import React from 'react'
import './about.css'
const About = () => {
    return (
        <div className="about">
            <div className="about_top">
                <div className="about_info">
                    Hi there  👋,<br />I am <span className="info_name">Karan Kumar,<br /> </span>
                    You can Call me <span className="info_name">KK </span>.
                    <p>“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”</p>
                    <h5>---I never said that but I follows that</h5>
                </div>
                <div className="about_photo">
                    <img src={require("../../../asset/profile.png").default} alt="hero-img" />
                </div>
            </div>
            <div className="about_bottom">
                This is contact
            </div>
        </div>
    )
}

export default About
