import React from 'react';
import './App.css'
import Messi from './assets/MessivsBoateng.png'

function Fussball() {
    return (
        <div className="fussball">
            <h1>Fussball</h1>
            <p>Fussball ist die berühmteste Sportart der Welt, bei der zwei Mannschaften elf Spieler aufstellen und versuchen, den Ball im Tor des gegnerischen Teams unterzubringen. Das Spiel wird auf einem rechteckigen Spielfeld, dass 100-110 Meter lang und 64-75 Meter breit ist mit zwei Toren an den Enden ausgetragen. </p>
            <div className="image-placeholder">
                <a href="https://www.youtube.com/watch?v=tbKMBuR-pxs"
                   target="_blank" rel="noopener noreferrer">
                    <img src={Messi} alt="Messi gegen Bayern" className="messi"/>
                </a>
                <p className="qubs">Messi vor dem Tor gegen Bayern München im 2015 UCL Halbfinale.
                </p>
            </div>
        </div>
    );
}


export
default
Fussball;
