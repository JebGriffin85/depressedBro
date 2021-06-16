import React from 'react';
import { NavLink } from 'react-router-dom';
import './splash.css';
import chad from '../../context/chadback1.png';
import banner from '../Homepage/banner.png';
import git from './git.png';
import linkedin from './linkedin.png';

export default function Splash () {



    return (
        <>
        <div className='outer'>
        </div>
        <div className="main"> {/*cloud used from codepen.com */}
            <img src={banner}></img>
<div className="rainy-weather">
<div className="cloud-main"></div>
<div className="cloud-center"></div>
<div className="cloud-left"></div>
<div className="droplet droplet1"></div>
<div className="droplet droplet2"></div>
<div className="droplet droplet3"></div>
<div className="droplet droplet4"></div>
<div className="droplet droplet5"></div>
<div className="droplet droplet6"></div>

</div>
<img class="chad" src={chad} ></img> 
<h2 className="welcome">Welcome to Depressed Bro!  An app where you can post your woes and help your bros! Click <NavLink className='tag' to='/home'>here</NavLink> to get started.</h2>
        </div>
     <div className='footerContainer'>
            <div>
                <a className='name' href='https://jebgriffin85.github.io/'>Jeb Griffin</a>
            </div>
                 <a  href='https://github.com/JebGriffin85' >
                    <img className='github' src={git}  />
                 <a href='https://www.linkedin.com/in/jeb-griffin-120631206/'>
                    <img className='linkedin' src={linkedin} />
                 </a>
                 </a>
            </div>
        </>
    )
}