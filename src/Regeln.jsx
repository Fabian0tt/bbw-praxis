import React from 'react';
import './regel.css'
import './App.css'
import elfmeter from './assets/regeln/einwurf.webp';
import einwurf from './assets/regeln/elfmeter.jpeg';
import bayern from './assets/regeln/barcavsbayern.jpg';
import tor from './assets/regeln/tor.avif';
import abseits from './assets/regeln/abseits.jpeg';
import rot from './assets/regeln/rote.webp';
import freistoss from './assets/regeln/freistoss.webp';
import ecke from './assets/regeln/ecken.jpg'
function Regeln() {
    return (
        <div className="fussball">
            <h1>Regeln</h1>
            <p>Fußball ist ein Mannschaftssport, bei dem zwei Teams mit je elf Spielern versuchen, den Ball ins
                gegnerische Tor zu befördern. Hier sind die grundlegenden Regeln einfach zusammengefasst:
            </p>
            <div className="regel">
                <h2>Spielfeld und Spielbeginn:</h2>
                <p>Das Spiel findet auf einem rechteckigen Feld mit einem Tor an jeder Schmalseite statt. Es beginnt mit einem Anstoß vom Mittelpunkt.</p>
            </div>

            <div className="regel">
                <h2>Spielzeit:</h2>
                <p>Ein Standardspiel dauert 90 Minuten, aufgeteilt in zwei Halbzeiten à 45 Minuten. Zwischen den Halbzeiten gibt es eine Pause von 15 Minuten.</p>
                <img src={bayern} alt="Spielzeit" className="bayern" />
            </div>

            <div className="regel">
                <h2>Ball im Spiel und Aus:</h2>
                <p>Der Ball ist im Spiel, solange er sich innerhalb der Spielfeldbegrenzungen befindet. Erst wenn der Ball die Seiten- oder Torlinie vollständig überschreitet, ist er aus dem Spiel.</p>
                <img src={einwurf} alt="Ball im Spiel und Aus" />
            </div>

            <div className="regel">
                <h2>Torerzielung:</h2>
                <p>Ein Tor zählt, wenn der Ball die Torlinie zwischen den Pfosten und unter der Querlatte vollständig überquert, ohne dass ein Regelverstoß vorliegt.</p>
                <img src={tor} alt="Torerzielung" />
            </div>

            <div className="regel">
                <h2>Abseitsregel:</h2>
                <p>Ein Spieler befindet sich im Abseits, wenn er sich in der gegnerischen Spielfeldhälfte befindet und näher zur gegnerischen Torlinie steht als der Ball und der vorletzte Abwehrspieler, und aktiv ins Spielgeschehen eingreift. In diesem Fall erhält das gegnerische Team einen indirekten Freistoß an der Stelle des Verstoßes.</p>
                <img src={abseits} alt="Abseitsregel" />
            </div>

            <div className="regel">
                <h2>Fouls und unsportliches Verhalten:</h2>
                <p>Vergehen wie Treten, Stoßen oder absichtliches Handspiel werden mit Freistößen geahndet. Je nach Schwere des Vergehens kann der Schiedsrichter gelbe (Verwarnung) oder rote Karten (Platzverweis) zeigen.</p>
                <img src={rot} alt="Fouls und unsportliches Verhalten" />
            </div>

            <div className="regel">
                <h2>Freistöße:</h2>
                <p>Bei Regelverstößen außerhalb des Strafraums wird ein Freistoß verhängt. Dieser kann direkt auf das Tor geschossen werden (direkter Freistoß) oder erfordert, dass der Ball zunächst einen anderen Spieler berührt (indirekter Freistoß).</p>
                <img src={freistoss} alt="Freistöße" />
            </div>

            <div className="regel">
                <h2>Strafstoß (Elfmeter):</h2>
                <p>Bei Verstößen innerhalb des eigenen Strafraums wird ein Strafstoß vom Elfmeterpunkt aus durchgeführt. Dabei steht nur der Schütze dem Torwart gegenüber.</p>
                <img src={elfmeter} alt="Strafstoß (Elfmeter)" />
            </div>

            <div className="regel">
                <h2>Einwurf:</h2>
                <p>Wenn der Ball die Seitenlinie vollständig überschreitet, erhält die gegnerische Mannschaft einen Einwurf. Der einwerfende Spieler muss den Ball mit beiden Händen von hinter dem Kopf über den Kopf werfen und dabei mit beiden Füßen auf oder hinter der Seitenlinie stehen.</p>
                <img src={einwurf} alt="Einwurf" />
            </div>

            <div className="regel">
                <h2>Ecken und Abstöße:</h2>
                <p>Wenn der Ball zuletzt von einem Verteidiger berührt wurde und die Torlinie überschreitet, gibt es einen Eckstoß für die angreifende Mannschaft. Wurde der Ball zuletzt vom angreifenden Team berührt, erfolgt ein Abstoß vom Torraum durch die verteidigende Mannschaft.</p>
                <img src={ecke} alt="Ecken und Abstöße" />
            </div>
        </div>
    );
}
export default Regeln;
