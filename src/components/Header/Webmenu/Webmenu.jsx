import React from 'react'
import './webmenu.css';
import {Work,EmojiObjects,Laptop,ContactPhone} from '@material-ui/icons';

const Webmenu = () => {
    return (
        <div className="webmenucontainer">
            <div className="weboption">
                <a href="#projects">
                    <Work className= "muicons"/>
                    Projects
                </a>
            </div>
            <div className="weboption">
                <a href="#skills">
                    <EmojiObjects className="muicons"/>Skills
                </a>
            </div>
            <div className="weboption">
                <a href="#work">
                   <Laptop className ="muicons"/> Work
                </a>
            </div>
            <div className="weboption">
                <a href="#contact">
                    <ContactPhone className= "muicons"/>Contact
                </a>
            </div>
        </div>
    )
}

export default Webmenu
