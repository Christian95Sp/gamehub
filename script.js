const carousel = document.getElementById('game-carousel');
const cards = Array.from(carousel.querySelectorAll('.card'));
const loadingScreen = document.getElementById('loading-screen');
let currentIndex = 1;

// Variabili per lo swipe/drag
let isDown = false;
let startX;
let scrollLeft;
let isDragging = false;

// Funzione per aggiornare la posizione del carosello e l'highlight
function updateCarousel() {
    const activeCard = cards[currentIndex];

    let scrollDistance = activeCard.offsetLeft;
    const containerWidth = carousel.parentElement.offsetWidth;
    const offsetCorrection = (containerWidth / 2) - (activeCard.offsetWidth / 2);

    carousel.style.transform = `translateX(${-(scrollDistance - offsetCorrection)}px)`;

    // Aggiorna la classe 'active'
    cards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentIndex) {
            card.classList.add('active');
        }
    });
}

// --- GESTIONE SWIPE/DRAG (Invariato) ---

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    isDragging = false;
    carousel.style.cursor = 'grabbing';
    startX = e.pageX;
    const style = window.getComputedStyle(carousel);
    const matrix = new DOMMatrixReadOnly(style.transform);
    scrollLeft = matrix.m41;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
});

carousel.addEventListener('mouseup', (e) => {
    isDown = false;
    carousel.style.cursor = 'grab';

    if (isDragging) {
        const currentTransform = parseFloat(carousel.style.transform.replace('translateX(', '').replace('px)', '')) || 0;

        let bestIndex = currentIndex;
        let minDistance = Infinity;
        const containerCenter = carousel.parentElement.offsetWidth / 2;

        cards.forEach((card, index) => {
            const cardCenterPos = card.offsetLeft + card.offsetWidth / 2;
            const distance = Math.abs(cardCenterPos + currentTransform - containerCenter);

            if (distance < minDistance) {
                minDistance = distance;
                bestIndex = index;
            }
        });

        currentIndex = bestIndex;
        updateCarousel();
    }
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const walk = e.pageX - startX;

    if (Math.abs(walk) > 10) {
        isDragging = true;
        carousel.style.transform = `translateX(${scrollLeft + walk}px)`;
    }
});

// Aggiungi supporto per il touch su mobile
carousel.addEventListener('touchstart', (e) => {
    e.pageX = e.touches[0].pageX;
    carousel.dispatchEvent(new MouseEvent('mousedown', e));
});

carousel.addEventListener('touchmove', (e) => {
    e.pageX = e.touches[0].pageX;
    carousel.dispatchEvent(new MouseEvent('mousemove', e));
});

carousel.addEventListener('touchend', (e) => {
    carousel.dispatchEvent(new MouseEvent('mouseup', e));
});


// --- GESTIONE CLICK SINGOLO / DOPPIO CLICK ---

cards.forEach((card, index) => {
    // 1. CLICK SINGOLO per scorrere
    card.addEventListener('click', (e) => {
        if (isDragging) {
            isDragging = false;
            return;
        }

        if (index !== currentIndex) {
            // Cliccato su una card non attiva: Sposta il carosello
            currentIndex = index;
            updateCarousel();
        }
        // Se è la card attiva, ignora il singolo click per lasciare spazio al doppio click
    });

    // 2. DOPPIO CLICK per avviare il gioco
    card.addEventListener('dblclick', (e) => {
        // Avvia il gioco SOLO se è la card attualmente attiva e centrata
        if (index === currentIndex) {
            startGame(card.dataset.game);
        }
    });

    // 3. Soluzione per Mobile (Double Tap): Gestione semplificata per il tap
    // (Il browser mobile di solito gestisce il doppio tap traducendolo in dblclick, ma è buona norma avere un fallback)
    let lastTapTime = 0;
    card.addEventListener('touchend', (e) => {
        const currentTime = new Date().getTime();
        const tapDelay = 300; // Millisecondi tra i due tap

        if (currentTime - lastTapTime < tapDelay) {
            // Doppio tap rilevato
            if (index === currentIndex) {
                // Previene il click standard dopo il tap
                e.preventDefault();
                startGame(card.dataset.game);
            }
        }
        lastTapTime = currentTime;
    });

});

function startGame(gameId) {
    const activeCard = cards[currentIndex];
    const destination = activeCard.dataset.link; // Recupera il link dal data-attribute

    // 1. Animazione Card: Ingrandisci e dissolvi
    activeCard.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    activeCard.style.transform = 'scale(1.2)';
    activeCard.style.opacity = '0';

    // 2. Mostra Schermata di Caricamento
    loadingScreen.style.display = 'flex';
    setTimeout(() => {
        loadingScreen.style.opacity = '1';
    }, 10);

    // 3. Simula Caricamento (5 SECONDI come richiesto)
    setTimeout(() => {
        // 4. Se esiste un link, reindirizza l'utente
        if (destination) {
            window.location.href = destination;
        } else {
            // Fallback se il link non è ancora pronto
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                activeCard.style.transform = 'scale(1.1)';
                activeCard.style.opacity = '1';
                alert(`Il link per ${gameId} non è ancora configurato!`);
            }, 300);
        }
    }, 4000); // 4000ms = 4 secondi
}

// Inizializzazione: Centra la card attiva all'avvio e ad ogni resize
window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel);


/* ================================================= */
/* == resize x gestire differenze tra mouse e touch == */
/* ================================================= */
function resizeCanvas() {
    const canvas = document.getElementById('canvas');
    const container = canvas.parentElement;
    // Imposta la risoluzione interna uguale a quella visualizzata
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    // Qui devi richiamare la funzione che ridisegna il gioco
    renderGame(); 
}

window.addEventListener('resize', resizeCanvas);