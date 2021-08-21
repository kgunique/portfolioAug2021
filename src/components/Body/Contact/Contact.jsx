import React from 'react'
import './contact.css'
import Seperator from '../../common/seperator/Seperator'
import Social from '../../common/socialcontact/Social'
import {CloudDownload} from '@material-ui/icons/';
const Contact = () => {
    return (
        <div className="contact">
            <Seperator />
            <label className="section_title">Contact</label>
            <div className="contact_container">
                <div className="contact_container_left">
                    <p>Let's Get in touch in any of these Plateform</p>
                    <Social />
                </div>
                <div className="resume_download">
                    <a download href={require('../../../asset/kkcv.pdf').default}>
                            <CloudDownload/>Download Resume
                    </a>
                </div>
            </div>
           
        </div>
    )
}

export default Contact
