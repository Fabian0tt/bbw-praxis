import React, { useState } from 'react';
import './Galerie.css'
import './App.css'
import championsleague from './assets/Bilder/championsleague.jpg'
import maelengland from './assets/Bilder/england mit mael.jpg'
import aufbank from './assets/Bilder/Hintergrundbild auf bank sitzen.jpg'

const Galerie = () => {
    const images = [
        { id: 1, src: championsleague, },
        { id: 2, src: maelengland, },
        { id: 3, src: aufbank, },
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
        <div>
            <h1>Galerie</h1>
            <div className="scrolling-ball">
                <p>Ball rollt beim Scrollen nach unten</p>
            </div>
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