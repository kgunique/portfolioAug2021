import React from 'react'
import './mobilemenu.css'
const Mobilemenu = ({isOpen,setIsOpen}) => {
    return (
        <div className="mobilemenucontainer">
            <div className="closeicon">
                <button className="closeiconbutton" onClick={()=>{setIsOpen(!isOpen)}}>X</button>
            </div>
            <div className="mobileoptions">
            <div className="mobileoption">
                <a href="#projects">
                    Projects
                </a>
            </div>
            <div className="mobileoption">
                <a href="#skills">
                    Skills
                </a>
            </div>
            <div className="mobileoption">
                <a href="#work">
                    Work
                </a>
            </div>
            <div className="mobileoption">
                <a href="#contact">
                    Contact
                </a>
            </div>
            </div>
            </div>
    )
}

export default Mobilemenu
