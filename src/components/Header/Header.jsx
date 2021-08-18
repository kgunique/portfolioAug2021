import React,{useState} from 'react'
import './header.css';
import Mobilemenu from './Mobilemenu/Mobilemenu';
import Webmenu from './Webmenu/Webmenu';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="header">
           <div className="logo">KK</div>
           <div className="menu">
               <div className="webmenu"><Webmenu/></div>
               {/* Mobile menu */}
               <div className="mobilemenu">
                   <button  className="icon_menu"onClick={()=>setIsOpen(!isOpen)}>=</button>
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
