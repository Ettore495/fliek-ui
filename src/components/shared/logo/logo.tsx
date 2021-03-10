import React from 'react';
import logo from '../../../assets/icons/logo.svg'
import './logo.scss'

function Logo() {
    return(
        <div className="Logo">
            <img className="mb-4" src={logo} alt="logo" />
            <h2>Fliek</h2>
        </div>
    );
}

export default Logo