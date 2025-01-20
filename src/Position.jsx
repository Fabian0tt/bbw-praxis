import React from 'react';
import './Formation.css';
import './App.css'

const players = [
    { name: 'TW', position: { top: '50%', left: '5%' } }, // Torwart
    { name: 'LV', position: { top: '20%', left: '25%' } }, // Verteidigung
    { name: 'IV', position: { top: '40%', left: '25%' } },
    { name: 'IV', position: { top: '60%', left: '25%' } },
    { name: 'RV', position: { top: '80%', left: '25%' } },
    { name: 'ZM', position: { top: '30%', left: '50%' } }, // Mittelfeld
    { name: 'ZDM', position: { top: '50%', left: '40%' } },
    { name: 'ZM', position: { top: '70%', left: '50%' } },
    { name: 'RF', position: { top: '20%', left: '75%' } }, // Angriff
    { name: 'ZOM', position: { top: '50%', left: '60%' } },
    { name: 'LF', position: { top: '80%', left: '75%' } },
    { name: 'ST', position: { top: '50%', left: '75%' } },
];
function Position() {
    return (
        <div className="fussball">
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
                    <div
                        key={index}
                        className="player"
                        style={{
                            top: player.position.top,
                            left: player.position.left,
                        }}
                    >
                        {player.name}
                    </div>
                ))}
            </div>
            <div className="position-descriptions">
                <h2>Positionen:</h2>
                <p>TW = Torwart meistens Rückennummer 1</p>
                <p>LV = Linksverteidiger meistens Rückennummer 3</p>
                <p>IV = Innenverteidiger meistens Rückennummer 4 und 5</p>
                <p>RV = Rinksverteidiger meistens Rückennummer 2</p>
                <p>ZDM = Zentral defensives Mittelfeld meistens Rückennummer 6</p>
                <p>ZM = Zentrales Mittelfeld meistens Rückennummer 8</p>
                <p>ZOM = Zentral offensives Mittelfeld meistens Rückennummer 10</p>
                <p>LF = Linksflügel meistens Rückennummer 7</p>
                <p>ST = Stürmer meistens Rückennummer 9</p>
                <p>RF = Rechtsflügel meistens Rückennummer 11</p>
            </div>
        </div>
    );
}


export default Position;
