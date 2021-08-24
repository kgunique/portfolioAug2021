import React from 'react'
import './mobilemenu.css'
import {Work,EmojiObjects,Laptop,ContactPhone,Close} from '@material-ui/icons';
const Mobilemenu = ({isOpen,setIsOpen}) => {
    return (
        <div className="mobilemenucontainer">
            <div className="closeicon">
                <button className="closeiconbutton" onClick={()=>{setIsOpen(!isOpen)}}><Close/></button>
            </div>
            <div className="mobileoptions">
            <div className="mobileoption">
                <a href="#projects">
                <Work className= "muicons"/>Projects
                </a>
            </div>
            <div className="mobileoption">
                <a href="#skills">
                <EmojiObjects className= "muicons"/> Skills
                </a>
            </div>
            <div className="mobileoption">
                <a href="#work">
                <Laptop className= "muicons"/>Work
                </a>
            </div>
            <div className="mobileoption">
                <a href="#contact">
                <ContactPhone className= "muicons"/>Contact
                </a>
            </div>
            </div>
            </div>
    )
}

export default Mobilemenu
