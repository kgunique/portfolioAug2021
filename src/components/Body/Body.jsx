import React from 'react'
import './body.css'
import About from './About/About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Work from './Work/Work'
import Contact from './Contact/Contact'
import Quote from './Quote/Quote'
import Slider from './Slider/Slider'

const Body = () => {
    return (
        <>
        <div className="body">
            <section id = "#about">
                <About />
            </section>
            <section id="#quote">
                <Quote />
            </section>
            <section id="#slider">
                <Slider />
            </section>
            <section id = "#projects">
                <Projects />
            </section>
            <section id = "#skills">
                <Skills />
            </section>
            <section id = "#work">
                <Work/>
            </section>
            <section id = "#contact">
                <Contact />
            </section>
        </div>
        </>
    )
}

export default Body
