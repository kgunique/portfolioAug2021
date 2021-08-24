import React from 'react'
import Seperator from '../../common/seperator/Seperator'
import { ProjectData } from '../../Data/ProjectData'
import ProData from './ProData'
import './projects.css'
const Projects = () => {
    const MyProjects = ProjectData
    return (
        <div className="projects" id="projects">
            <Seperator/>
            <label className="section_title">My Projects</label>
            <div>{
                MyProjects.map((project)=>{
                    return(
                        <div className="project" key={project.id}><ProData project={project}/></div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Projects
