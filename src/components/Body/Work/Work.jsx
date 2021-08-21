import React from 'react'
import './work.css'
import Seperator from '../../common/seperator/Seperator'
import {WorkDT} from '../../Data/WorkDT'
import WorkCard from './WorkCard'

const Work = () => {
    const WD = WorkDT;
    return (
        <div className="work">
            <Seperator />
            <label className="section_title">Work</label>
          <div className="work_list">
              {
                  WD.map((item)=>{
                        return(
                            <WorkCard item={item} />
                        )
                  })
              }
          </div>
        </div>
    )
}

export default Work
