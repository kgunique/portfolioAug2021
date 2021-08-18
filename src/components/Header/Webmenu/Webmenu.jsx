import React from 'react'
import './webmenu.css';

const Webmenu = () => {
    return (
        <div className="webmenucontainer">
            <div className="weboption">
                <a href="#projects">
                    Projects
                </a>
            </div>
            <div className="weboption">
                <a href="#skills">
                    Skills
                </a>
            </div>
            <div className="weboption">
                <a href="#work">
                    Work
                </a>
            </div>
            <div className="weboption">
                <a href="#contact">
                    Contact
                </a>
            </div>
        </div>
    )
}

export default Webmenu
