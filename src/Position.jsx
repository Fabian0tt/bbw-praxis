import React, { useEffect } from 'react';
import './Formation.css';
import './App.css';
import Yann from './assets/positionenbilder/yannsommer.jpg';
import Akanji from './assets/positionenbilder/akanji.jpg';
import Rodri from './assets/positionenbilder/rodriguez.jpg';
import alaba from './assets/positionenbilder/alaba.avif';
import Militao from './assets/positionenbilder/militao.jpeg';
import Pogba from './assets/positionenbilder/pogba.jpeg';
import Toni from './assets/positionenbilder/toni.jpg';
import xhaka from './assets/positionenbilder/xhaka.jpg';
import rodry from './assets/positionenbilder/rodrygo.png';
import wirtz from './assets/positionenbilder/wirtz.webp';
import vini from './assets/positionenbilder/vini.jpg';
import lewa from './assets/positionenbilder/lewa.png';
import ball from './assets/ball.webp';

const players = [
    { name: 'TW', position: { top: '50%', left: '5%' }, imageUrl: Yann }, // Torwart
    { name: 'LV', position: { top: '20%', left: '25%' }, imageUrl: Rodri }, // Verteidigung
    { name: 'IV', position: { top: '40%', left: '25%' }, imageUrl: Akanji },
    { name: 'IV', position: { top: '60%', left: '25%' }, imageUrl: Militao },
    { name: 'RV', position: { top: '80%', left: '25%' }, imageUrl: alaba },
    { name: 'ZM', position: { top: '30%', left: '50%' }, imageUrl: Toni }, // Mittelfeld
    { name: 'ZDM', position: { top: '50%', left: '40%' }, imageUrl: Pogba },
    { name: 'ZM', position: { top: '70%', left: '50%' }, imageUrl: xhaka },
    { name: 'RF', position: { top: '80%', left: '75%' }, imageUrl: rodry }, // Angriff
    { name: 'ZOM', position: { top: '50%', left: '60%' }, imageUrl: wirtz },
    { name: 'LF', position: { top: '20%', left: '75%' }, imageUrl: vini },
    { name: 'ST', position: { top: '50%', left: '75%' }, imageUrl: lewa },
];

function Position() {
    useEffect(() => {
        const ballElement = document.querySelector('.rolling-ball');
        const handleScroll = () => {
            const scrollPosition = Math.min(window.scrollY, 500); // Maximaler Wert für Scroll
            ballElement.style.transform = `translate(calc(${scrollPosition / 5}% + 50%), 50%) rotate(${scrollPosition}deg)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fussball">
            <div className="rolling-ball">
                <img src={ball} alt="Fußball" />
            </div>
            <h1>Position</h1>
            <p>Fußball-Positionen sind entscheidend für die Taktik und das Zusammenspiel eines Teams. Sie lassen sich
                grob in drei Hauptbereiche unterteilen: Abwehr, Mittelfeld und Angriff. </p>

            <div className="football-field">
                <div className="center-circle">
                    <div className="center-spot"></div>
                </div>
                <div className="goal goal-left"></div>
                <div className="goal goal-right"></div>
                <div className="penalty-area penalty-left"></div>
                <div className="penalty-area penalty-right"></div>
                <div className="mid-line"></div>

                {players.map((player, index) => (
                    <div key={index} className="player" style={{ top: player.position.top, left: player.position.left }}>
                        <img src={player.imageUrl} alt={player.name} className="player-image" />
                        {player.name}
                    </div>
                ))}
            </div>

            <div className="position-descriptions">
                <h2>Positionen:</h2>
                <p>TW = Torwart meistens Rückennummer 1 (Yann Sommer)</p>
                <p>LV = Linksverteidiger meistens Rückennummer 3 (Ricardo Rodriguez)</p>
                <p>IV = Innenverteidiger meistens Rückennummer 4 und 5 (Manuel Akanji, Eder Militao)</p>
                <p>RV = Rinksverteidiger meistens Rückennummer 2 (David Alaba)</p>
                <p>ZDM = Zentral defensives Mittelfeld meistens Rückennummer 6 (Paul Pogba)</p>
                <p>ZM = Zentrales Mittelfeld meistens Rückennummer 8 (Toni Kroos, Granit Xhaka)</p>
                <p>ZOM = Zentral offensives Mittelfeld meistens Rückennummer 10 (Florian Wirtz)</p>
                <p>LF = Linksflügel meistens Rückennummer 7 (Vinicius Jr.)</p>
                <p>ST = Stürmer meistens Rückennummer 9 (Robert Lewandowski)</p>
                <p>RF = Rechtsflügel meistens Rückennummer 11 (Rodrygo)</p>
            </div>
        </div>
    );
}

export default Position;
