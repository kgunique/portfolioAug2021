import React,{useState} from 'react'
import './header.css';
import Mobilemenu from './Mobilemenu/Mobilemenu';
import Webmenu from './Webmenu/Webmenu';
import {Menu} from '@material-ui/icons';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="header">
           <div className="logo"><img className ="logo_img"src ={require("../../asset/profile.png").default}alt = "logoimg"/><>KK</></div>
           <div className="menu">
               <div className="webmenu"><Webmenu/></div>
               {/* Mobile menu */}
               <div className="mobilemenu">
                   <button  className="icon_menu"onClick={()=>setIsOpen(!isOpen)}><Menu/></button>
                   {
                        isOpen && <Mobilemenu isOpen={isOpen} setIsOpen={setIsOpen}/>
                    }
               </div>
               {/* Mobile menu ends */}
           </div>
        </div>
    )
}

export default Header
