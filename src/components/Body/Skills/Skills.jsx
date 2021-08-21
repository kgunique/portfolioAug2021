import React from 'react'
import './skills.css'
import Seperator from '../../common/seperator/Seperator'
import { MySkills } from '../../Data/MySkills';
import Skillcard from './Skillcard';
const Skills = () => {
    const skill = MySkills;
    return (
        <div className="skills">
            <Seperator />
            <div className="section_title">Skills</div>
            <div className="skills_container">
                {
                    skill.map((eachskill)=>{
                        return(
                            <div className="skill_section" key ={eachskill.id}>
                                <label className="skill_section_title">{eachskill.type}</label>
                                <div className="skilllist">
                                    {
                                        eachskill.list.map((skillcard)=>{
                                                return(
                                                    <Skillcard skillcard={skillcard} />
                                                )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills
