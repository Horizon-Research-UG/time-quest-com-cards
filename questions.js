// Question database based on the provided level cards
const questions = {
    // Level 1 - Kontaktaufnahme (Eis brechen)
    // Ziel: Mini-Mutmomente & Körpersprache aktivieren
    level1: [
        "Frag jemanden auf dem Campus: 'Weißt du, wie spät es ist?'",
        "Gib einem zufälligen Menschen ein High-Five.",
        "Frag nach dem Weg zum Hauptbahnhof",
        "Weißt du, wo hier die Mensa ist?",
        "Weißt du wie lange der Uni Sport auf hat?"
    ],
    
    // Additional questions for Level 1 (Schätzfragen)
    level1Additional: [
        "Wie viele Leute studieren an der LUH?",
        "Wie viele Studiengänge gibt es an der LUH?"
    ],
    
    // Level 2 - Smalltalk & Mini-Gespräche
    // Ziel: Gesprächsfluss üben & Reaktionen wahrnehmen
    level2: [
        "Was studierst du eigentlich?",
        "Frag in der Mensa: 'Was ist dein Lieblingsessen hier?'",
        "Frag: 'Was war heute dein Highlight?'",
        "Was ist dein Highlight in Hannover?",
        "Frag jemanden: 'Wenn du eine Superkraft hättest, welche wär das?'",
        "Lieblings Zitat",
        "Film Empfehlung"
    ],
    
    // Level 3 - Gespräche mit Tiefe (Verbindung spüren)
    // Ziel: Echte Themen, ehrliche Antworten, weniger Maske
    level3: [
        "Frag: 'Was motiviert dich, morgens aufzustehen?'",
        "'Woran arbeitest du gerade, was dich wirklich interessiert?'",
        "'Was würdest du studieren, wenn Noten egal wären?'",
        "Erzähl jemanden, was dich diese Woche gefreut hat.",
        "Frag: 'Womit verbringst du gern Zeit, wenn du frei hast?'",
        "Sag jemandem ehrlich, was du an Menschen magst.",
        "'Hast du das Gefühl, du bist grad auf dem richtigen Weg?'",
        "'Was war das Mutigste, das du in letzter Zeit gemacht hast?'",
        "'Wenn du eine Sache an der Uni ändern könntest – was wär's?'",
        "Teile mit jemandem einen kleinen Gedanken aus deinem Leben."
    ],
    
    // Level 4 - Ideen & Authentizität (Mut zeigen)
    // Ziel: Von sich erzählen, Haltung zeigen, echtes Feedback bekommen
    level4: [
        "Erzähl jemandem von einer Idee, an die du glaubst – egal wie verrückt.",
        "Frag: 'Darf ich dir kurz was erzählen und du sagst mir ehrlich, ob das Sinn ergibt?'",
        "'Was hältst du davon, dass man Leute einfach mal ansprechen sollte?'",
        "'Wenn du mit 10 Freunden ein Projekt starten würdest – was wär das?'",
        "Sag: 'Ich hab da so 'ne kleine Vision – kein Plan, ob das funktioniert, aber ich will's rausfinden.'",
        "'Was bedeutet für dich Erfolg?'",
        "'Wann hast du das letzte Mal was Neues ausprobiert?'",
        "'Wenn du eine Firma gründen würdest – was wär der Name?'",
        "Erzähl jemandem, was dich inspiriert.",
        "Frag: 'Würdest du lieber sicher leben oder frei?'"
    ],
    
    // Level 5 - Tiefe & Verbundenheit (Seelenmodus)
    // Ziel: Menschlichkeit, Sinn, gegenseitige Inspiration
    level5: [
        "'Was sind so deine größten Wünsche im Leben?'",
        "'Was bedeutet Glück für dich?'",
        "'Wenn du der Welt eine Sache schenken könntest – was wär's?'",
        "'Wovor hast du am meisten Angst?'",
        "'Woran glaubst du, wenn's dir richtig schlecht geht?'",
        "'Was willst du am Ende deines Studiums wirklich erreicht haben?'",
        "'Was ist ein Moment, auf den du stolz bist?'",
        "'Was bedeutet für dich Liebe?'",
        "'Wie würdest du dich selbst beschreiben – ehrlich?'",
        "'Was wär dein größter Traum, wenn dich niemand verurteilen würde?'"
    ]
};

// Export for use in other files (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
}