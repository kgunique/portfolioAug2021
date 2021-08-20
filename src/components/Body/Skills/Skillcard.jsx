import React from 'react'
import './skillcard.css'
const Skillcard = ({skillcard}) => {
    return (
        <div className="skillcard">
            <div className="skillicon">
                {skillcard.icon}
            </div>
            <label className="skillname">{skillcard.name}</label>
        </div>
    )
}

export default Skillcard
