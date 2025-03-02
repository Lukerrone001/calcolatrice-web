let display = document.getElementById('display'); // Riferimento al display
let operazioneCorrente = ''; // Memorizza l'operazione corrente

// Aggiunge un numero o un punto al display
function aggiungiNumero(numero) {
    operazioneCorrente += numero;
    display.value = operazioneCorrente;
}

// Aggiunge un operatore al display
function aggiungiOperatore(operatore) {
    operazioneCorrente += operatore;
    display.value = operazioneCorrente;
}

// Calcola il risultato
function calcola() {
    try {
        operazioneCorrente = eval(operazioneCorrente).toString(); // Esegue il calcolo
        display.value = operazioneCorrente;
    } catch (error) {
        display.value = 'Errore';
        operazioneCorrente = '';
    }
}

// Cancella l'ultimo carattere
function cancella() {
    operazioneCorrente = operazioneCorrente.slice(0, -1);
    display.value = operazioneCorrente;
}

// Cancella tutto
function cancellaTutto() {
    operazioneCorrente = '';
    display.value = '';
}