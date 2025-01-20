import React from 'react';
import './Formation.css';
import './App.css'

const positions = [
    { id: 1, name: 'Torwart', description: 'Hält den Ball und organisiert die Defensive.' },
    { id: 2, name: 'Rechter Verteidiger', description: 'Verteidigt die rechte Seite und unterstützt die Offensive.' },
    { id: 3, name: 'Innenverteidiger', description: 'Sichert das Zentrum der Verteidigung.' },
    { id: 4, name: 'Innenverteidiger', description: 'Organisiert die Abwehr und blockiert Angriffe.' },
    { id: 5, name: 'Linker Verteidiger', description: 'Deckt die linke Seite und flankiert nach vorne.' },
    { id: 6, name: 'Defensives Mittelfeld', description: 'Unterstützt die Verteidigung und startet Angriffe.' },
    { id: 7, name: 'Zentrales Mittelfeld', description: 'Verteilt die Bälle und kontrolliert das Spiel.' },
    { id: 8, name: 'Offensives Mittelfeld', description: 'Kreiert Chancen und schießt Tore.' },
    { id: 9, name: 'Rechter Flügel', description: 'Sprintet die rechte Seite entlang und liefert Flanken.' },
    { id: 10, name: 'Stürmer', description: 'Hauptziel: Tore schießen.' },
    { id: 11, name: 'Linker Flügel', description: 'Dribbelt die linke Seite entlang und sucht Abschlüsse.' },
];
function Position() {
    return (

        <div className="formation">
            <div className="field">
                {positions.map((pos) => (
                    <div key={pos.id} className="position" title={pos.description}>
                        {pos.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Position;
