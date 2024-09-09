const readline = require('readline');

// Erstellen einer Interface-Instanz für die Eingabe
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funktion zum Scannen der Eingabe
function scanInput(promptText) {
    return new Promise((resolve) => {
        rl.question(promptText, (input) => {
            resolve(input);  // Benutzereingabe wird als String zurückgegeben
        });
    });
}

// Beispiel für die Nutzung der Funktion
(async function main() {
    const input = await scanInput('Geben Sie etwas ein: ');
    console.log('Eingabe: ', input);
    rl.close();  // Schließen der Eingabe, um das Programm zu beenden
})();
