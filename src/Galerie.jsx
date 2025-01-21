import React, { useState } from 'react';

import './App.css';
import championsleague from './assets/Bilder/championsleague.jpg';
import maelengland from './assets/Bilder/england mit mael.jpg';
import aufbank from './assets/Bilder/Hintergrundbild auf bank sitzen.jpg';
import barca1 from './assets/Bilder/barca stadion.jpg';
import barca2 from './assets/Bilder/barca stadion2.jpg';
import talgut from './assets/Bilder/dunkel talgut.jpg';
import mbappe from './assets/Bilder/elfmeter mbappe.jpg';
import schuhe from './assets/Bilder/fussballschuhe.jpg';
import mesque from './assets/Bilder/mes que un club.jpg';
import nacht from './assets/Bilder/nacht schuss .jpg';
import psg from './assets/Bilder/psg stadion.jpg';
import psg2 from './assets/Bilder/psg stadion aussen.jpg';
import sununset from './assets/Bilder/sonnenuntergang.jpg';
import stehen from './assets/Bilder/stehen und ball.jpg';
import stehen2 from './assets/Bilder/stehen und ball2.jpg';
import steini from './assets/Bilder/steinacker.jpg';
import talgut2 from './assets/Bilder/tag talgut.jpg';
import talgut3 from './assets/Bilder/talgut.jpg';
import beno from './assets/Bilder/beno.jpg';
import fxd from './assets/Bilder/fabxdean.jpg';
import mitte from './assets/Bilder/mitte.jpg';
import mittn from './assets/Bilder/mittnahme.jpg';
import schuss from './assets/Bilder/schuss.jpg'
import touch from './assets/Bilder/touch.jpg';
import vert from './assets/Bilder/verteidigung.jpg';
import volley from './assets/Bilder/volley.jpg';
import volley2 from './assets/Bilder/volley2.jpg';




const Galerie = () => {
    const images = [
        { id: 1, src: championsleague, },
        { id: 2, src: maelengland, },
        { id: 3, src: aufbank, },
        { id: 4, src: fxd},
        { id: 5, src: barca2},
        { id: 6, src: talgut},
        { id: 7, src: beno},
        { id: 8, src: schuhe},
        { id: 9, src: mesque},
        { id: 10, src: nacht},
        { id: 11, src: psg},
        { id: 12, src: touch},
        { id: 13, src: sununset},
        { id: 14, src: vert},
        { id: 15, src: steini},
        { id: 16, src: volley},
        { id: 17, src: stehen2},
        { id: 18, src: talgut2},
        { id: 19, src: mbappe},
        { id: 20, src: barca1},
        { id: 21, src: talgut3},
        { id: 22, src: psg2},
        { id: 23, src: volley2},
        { id: 24, src: mitte},
        { id: 25, src: mittn},
        { id: 26, src: schuss},
        { id: 27, src: stehen},


    ];

    // State für das aktuell angezeigte Bild
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (

        <div className="fussball">
        <h1>Galerie</h1>

                <p>Hier ein paar Bilder, die ich selbst geschossen habe, oder die von mir geschossen wurden.</p>

            <div style={styles.container}>
                <div style={styles.imageContainer}>
                    {/* Verschönerter Pfeil-Button */}
                    <button style={styles.arrow} onClick={handlePrev}>
                        ◀
                    </button>
                    <img className="img"
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        style={styles.image}
                    />
                    <button style={styles.arrow} onClick={handleNext}>
                        ▶
                    </button>
                </div>
                <p style={styles.caption}>{images[currentIndex].alt}</p>
            </div>
        </div>
    );
};

// Stile für die Galerie
const styles = {
    container: {
        textAlign: "center",
        margin: "20px auto",
    },
    imageContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        position: "relative",
    },
    image: {
        width: "80%",
        maxWidth: "600px",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    },
    arrow: {
        background: "#f4f4f4", // Heller Hintergrund
        border: "2px solid #ccc", // Dezente Umrandung
        borderRadius: "50%", // Runde Form
        width: "50px", // Breite des Buttons
        height: "50px", // Höhe des Buttons
        color: "#333", // Textfarbe
        fontSize: "1.5rem", // Größe des Pfeils
        cursor: "pointer", // Mauszeiger als Zeiger
        display: "flex", // Flexbox zur Zentrierung
        alignItems: "center", // Vertikale Zentrierung
        justifyContent: "center", // Horizontale Zentrierung
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Schatten für Tiefe
        transition: "all 0.3s ease", // Weiche Übergänge bei Hover
    },
    arrowHover: {
        background: "#ddd", // Hellerer Hintergrund beim Hover
        borderColor: "#999", // Dunklere Umrandung
        transform: "scale(1.1)", // Leichtes Vergrößern beim Hover
    },
    caption: {
        marginTop: "10px",
        fontSize: "1rem",
        color: "#555",
    },
};

// Globale Hover-Styling mit JavaScript
styles.arrow = {
    ...styles.arrow,
    ":hover": {
        ...styles.arrowHover,
    },
};
export default Galerie;