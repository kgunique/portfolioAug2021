import React from 'react'
import Social from '../../common/socialcontact/Social'
import './about.css'
const About = () => {
    return (
        <div className="about">
            <div className="about_top">
                <div className="about_info">
                    <p className="intro">Hi there  👋,<br />It's <span className="info_name">Karan Kumar,<br /> </span>
                    You can Call me <span className="info_name">KK </span>.</p>
                    <h5 className="introquote">"I am a Front End Web Developer, UI/UX Designer and a content writer."</h5>
                </div>
                <div className="about_photo">
                    <img src={require("../../../asset/profile.png").default} alt="hero-img" />
                </div>
            </div>
            <div className="about_bottom">
                <Social/>
            </div>
        </div>
    )
}

export default About
