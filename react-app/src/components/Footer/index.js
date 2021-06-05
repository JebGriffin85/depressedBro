import React from 'react';
import {Link} from 'react-router-dom'
import './footer.css'
import git from './git.png'
import linkedin from './linkedin.png';

function Footer () {

    return (
        <div className='mainContainer'>
            <a  href='https://github.com/JebGriffin85' >
                <img className='github' src={git}  />
            </a>
            <a href='https://www.linkedin.com/in/jeb-griffin-120631206/'>
                <img className='linkedin' src={linkedin} />
            </a>


        </div>
    )
}

export default Footer;