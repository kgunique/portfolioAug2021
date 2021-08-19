import React from 'react'
import { SocialIcon } from '../../Data/SocialIcon'
import './social.css'
const Social = () => {
    const data = SocialIcon;
    return (
        <div className="social_contact">
            {
                data.map((cur)=>{
                    return(
                        <a href= {cur.link} key={cur.id}>
                            <div className="social_container">
                                <img src={cur.icon} alt={cur.plateform} className = "socialicon"/>
                            </div>
                        </a>
                    )
                })
            }
        </div>
    )
}

export default Social
