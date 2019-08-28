import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ScrollUpButton from "react-scroll-up-button";

class Footer extends Component {
    render() {
        return (
            <div className="footer" style={{ marginBottom: 50 }}>
                <a href="mailto: wenhao.geng@mail.mcgill.ca" style={{ color: 'white' }}>
                    <FontAwesomeIcon icon={faEnvelope} /> &nbsp;Email
                </a>
                &nbsp;
                &nbsp;
                &nbsp;
                <a href="https://github.com/rezaandwenhao" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> &nbsp;Github
                </a>
                &nbsp;
                &nbsp;
                &nbsp;
                <a href="https://www.linkedin.com/in/wenhao-geng-470151114/" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} /> &nbsp;Linkedin
                </a>
                <ScrollUpButton />
            </div>
        )
    }
}

export default Footer;