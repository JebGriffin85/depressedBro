import React from 'react';
import { NavLink } from 'react-router-dom';
import './splash.css';
import chad from '../../context/chadback1.png';

export default function Splash () {



    return (
        <div class="main">
<div class="rainy-weather">
<div class="cloud-main"></div>
<div class="cloud-center"></div>
<div class="cloud-left"></div>
<div class="droplet droplet1"></div>
<div class="droplet droplet2"></div>
<div class="droplet droplet3"></div>
<div class="droplet droplet4"></div>
<div class="droplet droplet5"></div>
<div class="droplet droplet6"></div>
</div>
<img class="chad" src={chad} ></img> //make chad shake 
        </div>
    )
}