import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ScrollUpButton from "react-scroll-up-button";

class Footer extends Component {
    render() {
        return (
            <div className="footer" style={{ marginBottom: 50 }}>
                <a href="wenhao.geng@mail.mcgill.ca" style={{ color: 'white' }}>
                    <FontAwesomeIcon icon={faEnvelope} /> &nbsp;Email
                </a>
                &nbsp;
                &nbsp;
                &nbsp;
                <a href="https://github.com/rezaandwenhao" style={{ color: 'white' }}>
                    <FontAwesomeIcon icon={faGithub} /> &nbsp;Github
                </a>
                <ScrollUpButton />
            </div>
        )
    }
}

export default Footer;