// --- DATABASE ---
const db = {
  "Cucina": { icon: "🍳", words: [["Zafferano", "Giallo, Risotto, Caro"], ["Meringa", "Uovo, Zucchero, Bianca"], ["Tartufo", "Bosco, Cane, Pregiato"], ["Wasabi", "Verde, Sushi, Piccante"], ["Lievito", "Pane, Crescita, Impasto"], ["Pasta", "Grano, Italia, Pentola"], ["Riso", "Chicchi, Amido, Risotto"], ["Uovo", "Guscio, Gallina, Tuorlo"], ["Caffè", "Chicchi, Sveglia, Tazzina"], ["Miele", "Api, Dolce, Viscoso"]] },
  "Automazione MAT": { icon: "⚙️", words: [["Teleruttore", "Bobina, Contatti, Calore"], ["Pulsante Marcia", "Avvio, Verde, Contatto"], ["Relè Termico", "Sovraccarico, Lamina, Protezione"], ["Fusibile", "Filamento, Rottura, Sacrificio"], ["Motore", "Rotore, Statore, Induzione"], ["Stella", "Centro, Tensione, Avviamento"], ["Triangolo", "Potenza, Chiusura, Collegamento"]] },
  "Astronomia": { icon: "🔭", words: [["Nebulosa", "Nube, Colori, Stelle"], ["Eclissi", "Luna, Sole, Ombra"], ["Supernova", "Esplosione, Stella, Luce"], ["Cometa", "Coda, Ghiaccio, Scia"], ["Galassia", "Stelle, Spirale, Miliardi"], ["Buco Nero", "Buio, Risucchio, Nero"]] },
  "Scienza": { icon: "🧬", words: [["Gravità", "Peso, Caduta, Terra"], ["Atomo", "Piccolo, Materia, Centro"], ["DNA", "Sangue, Eredità, Codice"], ["Fotosintesi", "Pianta, Luce, Sole"], ["Robot", "Metallo, Computer, Macchina"]] },
  "Fotovoltaico": { icon: "☀️", words: [["Pannello", "Vetro, Tetto, Azzurro"], ["Inverter", "Scatola, Corrente, Muro"], ["Silicio", "Sabbia, Cristallo, Elemento"], ["Batteria", "Accumulo, Notte, Riserva"]] },
  "Corrente Continua": { icon: "🔋", words: [["Pila", "Zinco, Cilindro, Telecomando"], ["Diodo", "Valvola, Senso, Semiconduttore"], ["Led", "Emissione, Colore, Efficienza"], ["Rame", "Conduttore, Rosso, Metallo"]] },
  "Storia": { icon: "🏛️", words: [["Samurai", "Spada, Giappone, Onore"], ["Faraone", "Egitto, Piramide, Re"], ["Gladiatore", "Roma, Arena, Combattimento"], ["Napoleone", "Francia, Cappello, Basso"]] },
  "Musica": { icon: "🎼", words: [["Sinfonia", "Orchestra, Classica, Strumenti"], ["Vinile", "Disco, Puntina, Giradischi"], ["Autotune", "Voce, Trap, Computer"], ["Pentagramma", "Righe, Note, Musica"], ["Assolo", "Chitarra, Solo, Palco"]] },
  "Animali": { icon: "🐙", words: [["Camaleonte", "Colore, Lingua, Mimetico"], ["Polpo", "Tentacoli, Inchiostro, Mare"], ["Bradipo", "Lento, Albero, Sonno"], ["Ornitorinco", "Becco, Uova, Australia"]] },
  "Geografia": { icon: "🌍", words: [["Vulcano", "Lava, Montagna, Fuoco"], ["Deserto", "Sabbia, Caldo, Cammello"], ["Fiordo", "Mare, Montagna, Norvegia"], ["Iceberg", "Ghiaccio, Mare, Freddo"]] },
  "Schemi": { icon: "🔌", words: [["Potenza", "Forza, Energia, Motore"], ["Comando", "Logica, Segnale, Controllo"], ["Trifase", "Sistema, Corrente, Potenza"], ["Neutro", "Ritorno, Azzurro, Riferimento"]] },
  "Cinema": { icon: "🎬", words: [["Regista", "Attori, Macchina, Seduta"], ["Oscar", "Premio, Oro, Statuetta"], ["Horror", "Paura, Mostro, Urla"], ["Spoiler", "Finale, Segreto, Rovinare"]] },
  "Impiantistica": { icon: "🏗️", words: [["Differenziale", "Salva-vita, Scatto, Sicurezza"], ["Sifone", "Odore, Scarico, Lavandino"], ["Termostato", "Caldo, Gradi, Parete"]] },
  "Presidenza USA": { icon: "🇺🇸", words: [["Casa Bianca", "Washington, Residenza, Presidente"], ["Trump", "Capelli, Repubblicano, Imprenditore"], ["Obama", "Speranza, Primo, Hawaii"]] },
  "Campo": { icon: "🧱", words: [["Filo", "Spine, Ferro, Confine"], ["Stella", "Gialla, Stoffa, Punte"], ["Treno", "Binari, Vagone, Viaggio"], ["Diario", "Pagine, Segreto, Anna Frank"]] },
  "Germania": { icon: "🇩🇪", words: [["Bunker", "Sotto, Rifugio, Cemento"], ["Muro", "Berlino, Confine, Pietra"], ["Gestapo", "Polizia, Spionaggio, Paura"]] },
  "Dittatura": { icon: "🦅", words: [["Propaganda", "Radio, Cinema, Bugie"], ["Mussolini", "Capo, Duce, Italia"], ["Camicia Nera", "Colore, Divisa, Marcia"]] },
  /* "Olocausto": { icon: "⛓️", words: [["Binario 21", "Milano, Treno, Stazione"], ["Numero", "Pelle, Braccio, Segno"], ["Pietra", "Inciampo, Strada, Nome"]] }, */
  "Regime": { icon: "🏛️", words: [["Orbace", "Lana, Divisa, Sabato"], ["Autarchia", "Cicoria, Italia, Solo"], ["Fascio", "Legno, Bastoni, Simbolo"]] },
  "Simboli": { icon: "🎨", words: [["Svastica", "Croce, Ragno, Tedeschi"], ["Falce e Martello", "Lavoro, Rosso, Operai"], ["Colomba", "Pace, Bianca, Ulivo"]] },

  "Piccante": { icon: "🌶️", words: [["Limonare", "Bacio, Labbra, Giallo"], ["Spogliarello", "Svestirsi, Nudo, Sexy"], ["Sex-toy", "Manette, Frusta, Dildo"], ["Happy Handing", "Massaggio, Sexy, Lubrificante"], ["Squirt", "Acqua, Litri, Felicità"], ["Orgasmo", "Venire, Felice, Emozioni"], ["Pene", "Suculento, Diverse dimensioni, Venature"], ["Vagina", "Tubero, Succoso, Labbra"], ["Preliminari", "Bacio, Lubrificante, Sexy"], ["Cunnilingus", "Lingua, Clitoride, Felicità"], ["Fellatio", "Bocca, Succhiare, Venire"], ["69", "Posizione, Sovrapposti, Numero"], ["Kamasutra", "Libro, Erotico, Sesso"], ["Pecorina", "Animale, Ritmo, Urla"], ["Missionario", "Gambe, Chiesa, Contatto visivo"], ["Cowgirl", "Amazzone, Seduto, Squat"], ["Sesso", "Intimità, Passione, Gemiti"]] },

  "Sport e Pc": { icon: "⚽", words: [["Rigore", "Undici metri, Fallo, Calcio"], ["Hacker", "Codice, Pirata, Sicurezza"], ["Wi-Fi", "Internet, Senza fili, Connessione"]] },
  "Fantasy": { icon: "🦄", words: [["Drago", "Fuoco, Ali, Scaglie"], ["Vampiro", "Sangue, Notte, Aglio"], ["Sirena", "Coda, Mare, Canto"]] },
  "Mestieri": { icon: "💼", words: [["Pompiere", "Fuoco, Acqua, Camion"], ["Influencer", "Social, Foto, Telefono"], ["Chirurgo", "Ospedale, Bisturi, Taglio"]] },
  "India": { icon: "🇮🇳", words: [["Spezie", "Aroma, Mercato, Colore"], ["Tempio", "Pietra, Divinità, Altare"], ["Seta", "Tessuto, Baco, Lucentezza"]] },
  "Corpo": { icon: "🧠", words: [["DNA", "Genetica, Elica, Identità"], ["Cuore", "Battito, Sangue, Petto"], ["Neurone", "Cervello, Impulso, Cellula"]] },
  "SabatoSera": { icon: "🌙", words: [["Powerbank", "Carica, Batteria, Telefono"], ["Profumo", "Odore, Bottiglia, Uscire"], ["Chiavi", "Casa, Serratura, Porta"]] }

};

// --- LOGICA DI GIOCO ---
let players = 3, impostors = 1, whites = 0;
let playerNames = ["Giocatore 1", "Giocatore 2", "Giocatore 3"];
let selectedPacks = [];
let gameState = { roles: [], currentIdx: 0, secretWord: "", hint: "" };

function initApp() {
  renderPacks();
  updateUI();
}

function renderPacks() {
  const grid = document.getElementById('pack-grid');
  grid.innerHTML = '';
  for (let pack in db) {
    const div = document.createElement('div');
    div.className = 'pack-card';
    div.innerHTML = `<div class="info-btn" onclick="event.stopPropagation(); showPackInfo('${pack}')">i</div>
                         <div style="font-size:24px;">${db[pack].icon}</div>
                         <div style="font-size:12px; font-weight:bold;">${pack}</div>`;
    div.onclick = () => {
      div.classList.toggle('selected');
      if (div.classList.contains('selected')) selectedPacks.push(pack);
      else selectedPacks = selectedPacks.filter(p => p !== pack);
    };
    grid.appendChild(div);
  }
}

// Gestione Contatori
function adjP(val) {
  players = Math.max(3, players + val);
  if (playerNames.length < players) {
    for (let i = playerNames.length; i < players; i++) playerNames.push("Giocatore " + (i + 1));
  }
  updateUI();
}
function adjI(val) { impostors = Math.max(1, Math.min(impostors + val, players - 2)); updateUI(); }
function adjW(val) { whites = Math.max(0, Math.min(whites + val, 1)); updateUI(); }

function updateUI() {
  document.getElementById('p-val').innerText = players;
  document.getElementById('i-val').innerText = impostors;
  document.getElementById('w-val').innerText = whites;
}

// Quick Select Logics
function forceToggleRange(select) {
  const cards = document.querySelectorAll('.pack-card');
  cards.forEach(card => {
    const isSelected = card.classList.contains('selected');
    if (select !== isSelected) card.click();
  });
}

function attivaPacchettiTecnici() {
  const tecnici = ["MotoriTrifase", "Elettrotecnica", "Trasformatori", "Impiantistica", "Schemi", "Automazione MAT"];
  const cards = document.querySelectorAll('.pack-card');
  cards.forEach(card => {
    if (tecnici.some(t => card.innerText.includes(t)) && !card.classList.contains('selected')) card.click();
  });
}

function attivaPacchettiBase() {
  const base = ["Cucina", "Animali", "Geografia", "Astronomia", "Musica", "Cinema", "Sport", "Mestieri"];
  const cards = document.querySelectorAll('.pack-card');
  cards.forEach(card => {
    if (base.some(b => card.innerText.includes(b)) && !card.classList.contains('selected')) card.click();
  });
}

function attivaPacchettiStoria() {
  const storia = ["Dittatura", "Regime", "Simboli", "Germania", "Olocausto", "Campo"];
  const cards = document.querySelectorAll('.pack-card');
  cards.forEach(card => {
    if (storia.some(s => card.innerText.includes(s)) && !card.classList.contains('selected')) card.click();
  });
}

// Flusso di Gioco
function startGame() {
  if (selectedPacks.length === 0) return alert("Seleziona almeno un pacchetto!");

  // Scegli parola a caso
  const packName = selectedPacks[Math.floor(Math.random() * selectedPacks.length)];
  const wordPool = db[packName].words;
  const picked = wordPool[Math.floor(Math.random() * wordPool.length)];
  gameState.secretWord = picked[0];
  gameState.hint = picked[1];

  // Assegna ruoli
  let roles = new Array(players).fill("CIVILE");
  let indices = [...Array(players).keys()];
  for (let i = 0; i < impostors; i++) {
    let idx = indices.splice(Math.floor(Math.random() * indices.length), 1)[0];
    roles[idx] = "INFILTRATO";
  }
  if (whites > 0) {
    let idx = indices.splice(Math.floor(Math.random() * indices.length), 1)[0];
    roles[idx] = "MR. BIANCO";
  }

  gameState.roles = roles;
  gameState.currentIdx = 0;
  showReveal();
}

/* function showReveal() {
  document.getElementById('view-home').classList.remove('active');
  document.getElementById('view-reveal').classList.add('active');
  document.getElementById('swipe-layer').style.transform = "translateX(0)";
  document.getElementById('btn-pass').style.visibility = "hidden";

  const name = playerNames[gameState.currentIdx];
  const role = gameState.roles[gameState.currentIdx];

  document.getElementById('rev-name').innerText = name;
  const box = document.getElementById('rev-role-box');
  const wordEl = document.getElementById('rev-word');
  const hintEl = document.getElementById('rev-hint');

  if (role === "CIVILE") {
    box.innerText = "SEI UN CIVILE";
    box.style.background = "var(--green)";
    wordEl.innerText = gameState.secretWord;
    hintEl.innerText = "Indizi: " + gameState.hint;
  } else if (role === "INFILTRATO") {
    box.innerText = "SEI L'INFILTRATO";
    box.style.background = "var(--red)";
    wordEl.innerText = "???";
    hintEl.innerText = "Scopri la parola degli altri!";
  } else {
    box.innerText = "SEI MR. BIANCO";
    box.style.background = "#eee";
    box.style.color = "black";
    wordEl.innerText = "NON HAI PAROLE";
    hintEl.innerText = "Imita gli altri e sopravvivi.";
  }
} */
function showReveal() {
    document.getElementById('view-home').classList.remove('active');
    document.getElementById('view-reveal').classList.add('active');
    
    // Reset dello swipe e del pulsante
    document.getElementById('swipe-layer').style.transform = "translateX(0)";
    const btn = document.getElementById('btn-pass');
    btn.style.visibility = "hidden";
    btn.innerText = "HO LETTO"; // Testo iniziale

    const name = playerNames[gameState.currentIdx];
    const role = gameState.roles[gameState.currentIdx];

    document.getElementById('rev-name').innerText = name;
    const box = document.getElementById('rev-role-box');
    const wordEl = document.getElementById('rev-word');
    const hintEl = document.getElementById('rev-hint');

    if (role === "CIVILE") {
        box.innerText = "SEI UN CIVILE";
        box.style.background = "var(--green)";
        wordEl.innerText = gameState.secretWord;
        hintEl.innerText = "Indizi: " + gameState.hint;
    } else if (role === "INFILTRATO") {
        box.innerText = "SEI L'INFILTRATO";
        box.style.background = "var(--red)";
        wordEl.innerText = "???";
        hintEl.innerText = "Scopri la parola degli altri!";
    } else {
        box.innerText = "SEI MR. BIANCO";
        box.style.background = "#eee";
        box.style.color = "black";
        wordEl.innerText = "NON HAI PAROLE";
        hintEl.innerText = "Imita gli altri e sopravvivi.";
    }
}

function doSwipe() {
  document.getElementById('swipe-layer').style.transform = "translateX(105%)";
  document.getElementById('btn-pass').style.visibility = "visible";
}

/* function confirmNext() {
  gameState.currentIdx++;
  if (gameState.currentIdx < players) showReveal();
  else startVoting();
} */
function confirmNext() {
    const btn = document.getElementById('btn-pass');

    if (btn.innerText === "HO LETTO") {
        // FASE 1: Nascondi la parola per la privacy
        document.getElementById('swipe-layer').style.transform = "translateX(0)";
        
        // Aspettiamo un attimo che la copertura sia completa prima di cambiare testo
        setTimeout(() => {
            btn.innerText = "OK, PROSSIMO";
        }, 300);

    } else {
        // FASE 2: Cambio giocatore effettivo
        gameState.currentIdx++;
        if (gameState.currentIdx < players) {
            showReveal();
        } else {
            startVoting();
        }
    }
}

function startVoting() {
  document.getElementById('view-reveal').classList.remove('active');
  document.getElementById('view-vote').classList.add('active');
  document.getElementById('turn-box').innerText = "Inizia " + playerNames[Math.floor(Math.random() * players)];
  renderVoteGrid();
}

function renderVoteGrid() {
  const grid = document.getElementById('vote-grid');
  grid.innerHTML = '';
  playerNames.forEach((name, idx) => {
    if (gameState.roles[idx] === "ELIMINATO") return;
    const div = document.createElement('div');
    div.className = 'block flex-row';
    div.innerHTML = `<span>${name}</span> <button class="btn-main btn-red" style="width:auto; margin:0;" onclick="eliminate(${idx})">VOTA</button>`;
    grid.appendChild(div);
  });
}

function eliminate(idx) {
  const role = gameState.roles[idx];
  if (role === "INFILTRATO") {
    document.getElementById('modal-guess').style.display = 'flex';
  } else {
    gameState.roles[idx] = "ELIMINATO";
    checkWin();
    renderVoteGrid();
  }
}

function checkWin() {
  const alive = gameState.roles.filter(r => r !== "ELIMINATO");
  const impCount = alive.filter(r => r === "INFILTRATO" || r === "MR. BIANCO").length;

  if (impCount === 0) showWin("I CIVILI HANNO VINTO!");
  else if (alive.length <= 2) showWin("GLI IMPOSTORI HANNO VINTO!");
}

function showWin(txt) {
  document.getElementById('win-screen').style.display = 'flex';
  document.getElementById('win-text').innerText = txt;
}

function resetToHome() {
  location.reload();
}

// Gestione Modali
function openNamesModal() { document.getElementById('modal-names').style.display = 'flex'; renderNamesList(); }
function closeModal() { document.querySelectorAll('.modal').forEach(m => m.style.display = 'none'); }
function renderNamesList() {
  const list = document.getElementById('names-list');
  list.innerHTML = '';
  playerNames.forEach((n, i) => {
    list.innerHTML += `<div class="flex-row"><span>#${i + 1}</span><input type="text" value="${n}" onchange="playerNames[${i}]=this.value"></div>`;
  });
}
function saveNamesAndClose() { closeModal(); }

function showPackInfo(pack) {
  const modal = document.getElementById('modal-pack-info');
  document.getElementById('info-title').innerText = pack + " " + db[pack].icon;
  const list = document.getElementById('info-list');
  list.innerHTML = db[pack].words.map(w => `<div class="word-item"><b>${w[0]}</b><em>${w[1]}</em></div>`).join('');
  modal.style.display = 'flex';
}

/* ---------------------- --------------------------------------------------------- */
// Apre il modale e popola il menu a tendina con le categorie esistenti
function openWordCreator() {
  const select = document.getElementById('target-pack');
  select.innerHTML = '';

  // Popola le categorie esistenti nel database
  for (let pack in db) {
    let opt = document.createElement('option');
    opt.value = pack;
    opt.innerText = db[pack].icon + " " + pack;
    document.getElementById('target-pack').appendChild(opt);
  }

  // Aggiunge opzione per nuova categoria
  let optNew = document.createElement('option');
  optNew.value = "NEW";
  optNew.innerText = "➕ NUOVA CATEGORIA...";
  select.appendChild(optNew);

  document.getElementById('modal-word').style.display = 'flex';
}

// Salva la parola nel database
function saveWord() {
  let pack = document.getElementById('target-pack').value;
  const word = document.getElementById('cust-word').value.trim();
  const hints = document.getElementById('cust-hints').value.trim();

  if (!word || !hints) {
    alert("Inserisci sia la parola che gli indizi!");
    return;
  }

  // Se l'utente vuole creare una nuova categoria
  if (pack === "NEW") {
    const newCat = prompt("Inserisci il nome della nuova categoria:");
    if (!newCat) return;
    const icon = prompt("Inserisci un'emoji per la categoria (es. 🚀):") || "📦";

    db[newCat] = { icon: icon, words: [] };
    pack = newCat;
  }

  // Aggiunge la parola al database (in memoria)
  db[pack].words.push([word, hints]);

  alert(`Aggiunto: ${word} in ${pack}`);

  // Pulisce i campi e chiude
  document.getElementById('cust-word').value = '';
  document.getElementById('cust-hints').value = '';
  closeModal();

  // Aggiorna la griglia nella home per mostrare eventuali nuove categorie
  renderPacks();
}


/* ---------------------------------------inserire parola finale----------------------- */
// Funzione per inviare il tentativo dell'Infiltrato
function submitGuess() {
  const guess = document.getElementById('guess-input').value.trim().toLowerCase();
  const correctWord = gameState.secretWord.toLowerCase();

  if (!guess) {
    alert("Inserisci una parola!");
    return;
  }

  // Chiudiamo il modale del tentativo
  closeGuess();

  // Verifichiamo se la parola è corretta
  if (guess === correctWord) {
    showWin("L'INFILTRATO HA INDOVINATO! 🏆\nVITTORIA DEGLI IMPOSTORI");
  } else {
    // Se sbaglia, l'Infiltrato viene eliminato e si controlla se ci sono altri impostori
    alert(`Sbagliato! La parola era: ${gameState.secretWord.toUpperCase()}`);

    // Trova l'indice dell'infiltrato che stava indovinando e lo elimina
    // (In questo gioco l'ultimo eliminato che apre il modale è quello corrente)
    const lastEliminatedIdx = gameState.roles.findIndex((r, i) => r === "INFILTRATO");
    if (lastEliminatedIdx !== -1) {
      gameState.roles[lastEliminatedIdx] = "ELIMINATO";
    }

    checkWin();
    renderVoteGrid();
  }
}

// Funzione per chiudere il modale del Guess
function closeGuess() {
  document.getElementById('modal-guess').style.display = 'none';
  document.getElementById('guess-input').value = '';
}

// Funzione chiamata se l'Infiltrato preme "NON LA SO"
function submitNoGuess() {
  closeGuess();
  // Se non la sa, l'infiltrato è ufficialmente fuori gioco
  const lastEliminatedIdx = gameState.roles.findIndex((r, i) => r === "INFILTRATO");
  if (lastEliminatedIdx !== -1) {
    gameState.roles[lastEliminatedIdx] = "ELIMINATO";
  }
  checkWin();
  renderVoteGrid();
}


/* impostazioni rivelazione */
function revealImpostors() {
  const resultDiv = document.getElementById('reveal-result');
  resultDiv.style.display = 'block';
  resultDiv.innerHTML = `<h3 style="margin-top:0; color:var(--accent);">RUOLI DELLA PARTITA:</h3>`;

  gameState.roles.forEach((role, idx) => {
    // Mostriamo solo chi non è civile (o tutti se preferisci trasparenza totale)
    if (role === "INFILTRATO" || role === "MR. BIANCO" || role === "ELIMINATO") {
      // Se era stato eliminato, dobbiamo recuperare il ruolo originale che aveva
      // Ma per semplicità mostriamo chi erano i cattivi dall'inizio
      let roleColor = (role === "INFILTRATO") ? "var(--red)" : "white";
      let roleName = role;

      // Se il ruolo è "ELIMINATO", in un sistema più complesso dovremmo tenere traccia del ruolo originale.
      // Con questo codice mostriamo i nomi dei giocatori e cosa erano.
      resultDiv.innerHTML += `<div style="margin-bottom:8px; border-bottom:1px solid #444; padding-bottom:5px;">
                <b>${playerNames[idx]}</b>: <span style="color:${roleColor}">${role}</span>
            </div>`;
    } else if (role === "CIVILE") {
      resultDiv.innerHTML += `<div style="margin-bottom:8px; border-bottom:1px solid #444; padding-bottom:5px;">
                <b>${playerNames[idx]}</b>: <span style="color:var(--green)">CIVILE</span>
            </div>`;
    }
  });

  // Opzionale: nasconde il pulsante dopo il click per pulizia
  event.target.style.display = 'none';
}
