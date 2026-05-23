const words = { it: [ 'gatto', 'cane', 'casa', 'scuola', 'gioco', 'computer', 'programmazione', 'impiccato', 'livello', 'difficile','albero', 'telefonino', 'bicicletta', 'ristorante', 'macchina', 'televisore', 'tavolo', 'sedia', 'libro', 'maglietta', 'calendario', 'finestra', 'porta', 'penna', 'matita', 'bicchiere', 'telefono', 'lampada', 'frigorifero', 'forno', 'soggiorno', 'salotto', 'camera', 'armonica', 'chitarra', 'pianoforte', 'violino', 'trumpet', 'mare', 'montagna', 'fiume', 'lago', 'spiaggia', 'deserto', 'foresta', 'città', 'villaggio', 'paese', 'chiesa', 'monastero', 'sinagoga', 'museo', 'teatro', 'cinema', 'biblioteca', 'ospedale', 'università', 'scuola', 'palestra', 'farmacia', 'ristorante', 'caffè', 'banca', 'ufficio', 'stazione', 'aeroporto', 'porto', 'autobus', 'treno', 'metropolitana', 'bicicletta', 'telecamera', 'radio', 'televisore', 'computer', 'smartphone', 'tablet', 'microfono', 'altoparlante', 'giocattolo','puzzle', 'scultura', 'dipinto', 'foto', 'mostra', 'esposizione', 'mercato', 'negozio', 'centro commerciale', 'ufficio postale', 'parco', 'giardino', 'piscina', 'spiaggia', 'pista', 'campetto', 'campo', 'stadio', 'palazzetto', 'arena', 'palco', 'sala', 'cinema', 'teatro', 'ristorante', 'pizzeria', 'trattoria', 'osteria', 'bar', 'pub', 'caffè', 'pastificio', 'gelateria', 'panetteria', 'supermercato', 'libreria', 'edicola', 'tabaccheria', 'farmacia', 'salone', 'parrucchiere', 'estetista', 'dentista', 'medico', 'infermiere', 'personal trainer', 'allenatore', 'istruttore', 'guida', 'escort', 'tatuatore', 'piercer', 'marinaio', 'pilota', 'autista', 'meccanico', 'idraulico','elettricista', 'carpentiere', 'muratore', 'pittore', 'decoratore', 'architetto', 'ingegnere', 'designer', 'fotografo', 'videomaker', 'regista', 'attore', 'attrice', 'musicista', 'cantante', 'compositore', 'scrittore', 'poeta', 'narratore', 'sceneggiatore', 'autore', 'editor', 'giornalista', 'reporter', 'cronista', 'correttore', 'traduttore', 'interprete', 'albergatore', 'camere', 'soggiorno', 'sala', 'cucina', 'bagno', 'toilette', 'stanza', 'armadietto', 'cassetto', 'divano', 'poltrona', 'tavolino', 'sgabello', 'mobili', 'scaffale', 'libreria', 'tappeto', 'tenda', 'lampadario', 'illuminazione', 'zanzariera', 'riscaldamento', 'condizionatore', 'ventilatore', 'telecomando', 'acqua', 'cibo', 'bevanda', 'colazione', 'pranzo', 'cena', 'spuntino', 'aperitivo', 'digestivo', 'primo', 'secondo', 'contorno','dessert', 'antipasto', 'salsa', 'zuppa', 'minestra', 'risotto', 'pasta', 'pizza', 'panino', 'hamburger', 'hot dog', 'patatine', 'frutta', 'verdura', 'carne', 'pesce', 'pollo', 'uovo', 'latte', 'burro', 'formaggio', 'yogurt', 'cereali', 'miele', 'zucchero', 'sale', 'pepe', 'olio', 'aceto', 'balsamico', 'soia', 'salsa', 'ketchup', 'maionese', 'senape', 'salsa piccante', 'erbe', 'spezie', 'frutta secca', 'seme', 'noci', 'mandorle', 'nocciole', 'pistacchi', 'cioccolato', 'caramelle', 'gelato', 'biscotto', 'torta', 'crostata', 'muffin', 'ciambella', 'pasta frolla', 'panettone' ], en: [ 'cat', 'dog', 'house', 'school', 'game', 'computer', 'programming', 'hangman', 'level', 'difficult', 'tree', 'phone', 'bicycle', 'restaurant', 'car', 'television', 'table', 'chair', 'book', 't-shirt', 'calendar', 'window', 'door', 'pen', 'pencil', 'glass', 'phone', 'lamp', 'fridge', 'oven', 'livingroom', 'salon', 'bedroom', 'harmonica', 'guitar', 'piano', 'violin', 'trumpet', 'sea', 'mountain', 'river', 'lake', 'beach', 'desert', 'forest', 'city', 'village', 'country', 'church', 'monastery', 'synagogue', 'museum', 'theatre', 'cinema', 'library', 'hospital', 'university', 'school', 'gym', 'pharmacy', 'restaurant', 'café', 'bank', 'office', 'station', 'airport', 'port', 'bus', 'train', 'subway', 'bicycle', 'camera', 'radio', 'television', 'computer', 'smartphone', 'tablet', 'microphone', 'speaker', 'toy', 'puzzle', 'sculpture', 'painting', 'photo', 'exhibit', 'market', 'store', 'shopping mall', 'post office', 'park', 'garden', 'swimming pool', 'beach', 'track', 'field', 'stadium', 'arena', 'stage', 'hall', 'cinema', 'theatre', 'restaurant', 'pizzeria', 'trattoria', 'osteria', 'bar', 'pub', 'café', 'pastry shop', 'ice cream shop', 'bakery', 'supermarket', 'bookshop', 'newsstand', 'tobacconist', 'pharmacy', 'salon', 'hairdresser', 'beautician', 'dentist', 'doctor', 'nurse', 'personal trainer', 'coach', 'instructor', 'guide', 'escort', 'tattooist', 'piercer', 'sailor', 'pilot', 'driver', 'mechanic', 'plumber', 'electrician', 'carpenter', 'builder', 'painter', 'decorator', 'architect', 'engineer', 'designer', 'photographer', 'videomaker', 'director', 'actor', 'actress', 'musician', 'singer','composer', 'writer', 'poet', 'narrator', 'screenwriter', 'author', 'editor', 'journalist', 'reporter', 'chronicler', 'proofreader', 'translator', 'interpreter', 'hotelier', 'rooms', 'living room', 'kitchen', 'bathroom', 'toilet', 'room', 'cabinet', 'drawer', 'sofa', 'armchair', 'coffee table', 'stool', 'furniture', 'shelf', 'bookshelf', 'carpet', 'curtain', 'chandelier', 'lighting', 'mosquito net', 'heating', 'air conditioner', 'fan', 'remote control', 'water', 'food', 'drink', 'breakfast', 'lunch', 'dinner', 'snack', 'aperitif', 'digestive', 'first course', 'second course', 'side dish', 'dessert', 'appetizer', 'sauce', 'soup', 'broth', 'risotto', 'pasta', 'pizza', 'sandwich', 'hamburger', 'hot dog', 'fries', 'fruit', 'vegetable', 'meat', 'fish', 'chicken', 'egg', 'milk', 'butter', 'cheese', 'yogurt','cereal', 'honey', 'sugar', 'salt', 'pepper', 'oil', 'vinegar', 'balsamic', 'soy sauce', 'ketchup', 'mayonnaise', 'mustard', 'hot sauce', 'herbs', 'spices', 'nuts', 'seeds', 'almonds', 'hazelnuts', 'pistachios', 'chocolate', 'candy', 'ice cream', 'biscuit', 'cake', 'pie', 'muffin', 'doughnut', 'shortbread', 'panettone' ] };

let selectedLanguage = 'it';
let selectedWord = '';
let guessedLetters = [];
let wrongGuesses = 0;
let currentLevel = 1;
let levelErrors = 0;

const title = document.getElementById('title');
const description = document.getElementById('description');
const wordContainer = document.getElementById('wordContainer');
const lettersContainer = document.getElementById('lettersContainer');
const hangmanCanvas = document.getElementById('hangmanCanvas');
const restartBtn = document.getElementById('restartBtn');
const shareBtn = document.getElementById('shareBtn');
const ctx = hangmanCanvas.getContext('2d');

function startGame() {
    // Fetch a random word from the current level
    selectedWord = words[selectedLanguage][Math.floor(Math.random() * words[selectedLanguage].length)];
    guessedLetters = [];
    wrongGuesses = 0;
    levelErrors = 0;
    drawHangman();
    displayWord();
    displayLetters();
    shareBtn.style.display = currentLevel >= 25 ? 'block' : 'none';
}

function displayWord() {
    wordContainer.innerHTML = '';
    let display = selectedWord.split('').map(letter => guessedLetters.includes(letter) ? letter : '_').join(' ');
    wordContainer.textContent = display;
    if (!display.includes('_')) {
        wordContainer.id = 'winner';
        setTimeout(() => {
            if (currentLevel >= 1000) {
                alert(selectedLanguage === 'it' ? 'Congratulazioni! Ora ti puoi considerare un genio!' : 'Congratulations! You can now consider yourself a genius!');
                return;
            }
            alert(selectedLanguage === 'it' ? 'Hai vinto!' : 'You won!');
            currentLevel++;
            startGame();
            wordContainer.id = '';
        }, 1000);
    }
}

function displayLetters() {
    lettersContainer.innerHTML = '';
    for (let i = 65; i <= 90; i++) {
        let letter = String.fromCharCode(i);
        let button = document.createElement('button');
        button.textContent = letter;
        button.disabled = guessedLetters.includes(letter.toLowerCase());
        button.onclick = () => guessLetter(letter.toLowerCase());
        lettersContainer.appendChild(button);
    }
}

function guessLetter(letter) {
    if (guessedLetters.includes(letter)) return; // Avoid duplicate guesses

    guessedLetters.push(letter);
    if (selectedWord.includes(letter)) {
        displayWord();
    } else {
        wrongGuesses++;
        drawHangman();
        if (wrongGuesses >= 8) { // Maximum number of wrong guesses
            levelErrors++;
            if (levelErrors > 2) {
                currentLevel = Math.max(1, currentLevel - 15);
            }
            wordContainer.id = 'loser';
            setTimeout(() => {
                alert(selectedLanguage === 'it' ? `Hai perso! La parola era: ${selectedWord}` : `You lost! The word was: ${selectedWord}`);
                wordContainer.id = '';
                startGame();
            }, 1000);
        }
    }
    displayLetters();
}

function drawHangman() {
    ctx.clearRect(0, 0, hangmanCanvas.width, hangmanCanvas.height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000';

    // Draw base
    if (wrongGuesses >= 1) {
        ctx.beginPath();
        ctx.moveTo(10, 190);
        ctx.lineTo(190, 190);
        ctx.stroke();
    }

    // Draw pole
    if (wrongGuesses >= 2) {
        ctx.beginPath();
        ctx.moveTo(50, 190);
        ctx.lineTo(50, 10);
        ctx.lineTo(150, 10);
        ctx.lineTo(150, 30);
        ctx.stroke();
    }

    // Draw head
    if (wrongGuesses >= 3) {
        ctx.beginPath();
        ctx.arc(150, 50, 20, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Draw body
    if (wrongGuesses >= 4) {
        ctx.beginPath();
        ctx.moveTo(150, 70);
        ctx.lineTo(150, 130);
        ctx.stroke();
    }

    // Draw left arm
    if (wrongGuesses >= 5) {
        ctx.beginPath();
        ctx.moveTo(150, 90);
        ctx.lineTo(120, 110);
        ctx.stroke();
    }

    // Draw right arm
    if (wrongGuesses >= 6) {
        ctx.beginPath();
        ctx.moveTo(150, 90);
        ctx.lineTo(180, 110);
        ctx.stroke();
    }

    // Draw left leg
    if (wrongGuesses >= 7) {
        ctx.beginPath();
        ctx.moveTo(150, 130);
        ctx.lineTo(130, 170);
        ctx.stroke();
    }

    // Draw right leg
    if (wrongGuesses >= 8) {
        ctx.beginPath();
        ctx.moveTo(150, 130);
        ctx.lineTo(170, 170);
        ctx.stroke();
    }
}

restartBtn.addEventListener('click', startGame);

shareBtn.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: selectedLanguage === 'it' ? 'Gioco dell\'Impiccato' : 'Hangman Game',
            text: selectedLanguage === 'it' ? `Ho raggiunto il livello ${currentLevel} nel Gioco dell\'Impiccato!` : `I reached level ${currentLevel} in the Hangman Game!`,
            url: window.location.href
        }).catch(console.error);
    } else {
        alert(selectedLanguage === 'it' ? 'Il tuo browser non supporta la condivisione.' : 'Your browser does not support sharing.');
    }
});

startGame();
