import React from 'react'
import './workcard.css'
const WorkCard = ({ item }) => {
    return (
        <div className="workcard">
            <div className="work_info">
                <label className="company_name">{item.company}</label>
                <div className="work_desc">
                    <p>{item.work}</p>
                </div>
            </div>
            <img src={item.companylogo} className="work_logo" alt= {item.company}/>
        </div>
    )
}

export default WorkCard
