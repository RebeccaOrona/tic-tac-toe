import React from "react";
import blahajLogo from '../images/logoblahaj.png';
import '../css/Logo.css'

export const Logo = () => {
    return (
        <div className='logo-container'>
            <img 
                className='blahaj-logo'
                src={blahajLogo}
                alt="Blahaj's logo"
            />
        </div>
    )
}