import React from 'react'
import './prodata.css'
import { Language, GitHub } from '@material-ui/icons';
const ProData = ({ project }) => {
    return (
        <div className="prodata">
            <div className="project_info">
                <label className="project_title">{project.title}</label>
                <div className="project_links">
                    {
                        project.demo && (
                            <a className="project_link" href={project.demo}>
                                <div className="linkbutton">
                                    <Language />Demo
                                </div>
                            </a>

                        )
                    }
                    {
                        project.github && (
                            <a className="project_link" href={project.github}>
                                <div className="linkbutton">
                                    <GitHub />Github
                                </div>
                            </a>

                        )
                    }
                </div>
                <p className="project_description">{project.description}</p>
                <div className="project_tags">
                <label style={{ marginRight: "1rem", fontSize: "1.6rem"}} >Tools Used:</label>
                    {project.tags.map((tag, index) => {
                        return (
                            <>
                                <label className="project_tag" key={index} >{tag}</label>
                            </>
                        )
                    })}
                </div>
            </div>
            <img src={project.image} alt="projectimg" className="project_image" />
        </div>
    )
}

export default ProData
