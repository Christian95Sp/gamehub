// ===== VARIABILI GLOBALI E DATI =====
// Array per i giocatori, indice del turno attuale, variabile per il timer, secondi iniziali e modalità.
let players = [];
let turn = 0;
let timer;
let intTime = 15;
let mode = "family";

// Liste di domande "Family"
const truthFamily = [
  "Qual è il tuo più grande sogno?",
  "Cosa ti rende felice?",
  "Hai mai mentito a un amico?",
  "Qual è la tua paura più grande?",
  // Nuove
  "Qual è la figura più imbarazzante che hai mai fatto in pubblico?",
  "Hai mai mangiato del cibo caduto a terra applicando la 'regola dei 5 secondi'?",
  "Qual è l'app che usi di più quando sei sul gabinetto?",
  "Hai mai scorreggiato dando la colpa a qualcun altro (o al cane)?",
  "Qual è il regalo più brutto che hai mai ricevuto fingendo che ti piacesse da impazzire?",
  "Canti sotto la doccia? Se sì, quale canzone canti più spesso?",
  "Hai mai finto di essere malato per saltare la scuola o il lavoro?",
  "Qual è la cosa più stupida per cui hai pianto?",
  "Hai mai spiato di nascosto il profilo social del tuo ex o della tua cotta?",
  "Qual è l'ultimo messaggio imbarazzante che hai inviato sul telefono?"
];

const dareFamily = [
  "Fai 10 saltelli.",
  "Imita un animale.",
  "Parla al contrario per 20s.",
  // Nuove 
  "Fai finta di essere un robot fino al tuo prossimo turno.",
  "Mangia un cucchiaio di ketchup o maionese da solo.",
  "Fai un balletto imbarazzante per 15 secondi senza musica.",
  "Parla con un accento straniero (es. francese o spagnolo) fino al tuo prossimo turno.",
  "Fatti disegnare i baffi con una penna o un pennarello lavabile da un altro giocatore.",
  "Mettiti i calzini sulle mani e tienili così per i prossimi 2 turni.",
  "Vai alla finestra o sul balcone e urla: 'Sono il re del mondo!'.",
  "Prova a leccarti il gomito (hai 15 secondi di tempo).",
  "Cammina a gattoni abbaiando per la stanza per 20 secondi.",
  "Fai una dichiarazione d'amore appassionata a un oggetto presente in questa stanza."
];

// Liste di domande "18+" (Hot)
const truthHot = [
  "Chi ti piace davvero?",
  "Qual è il tuo segreto più hot?",
  "Hai mai tradito?",
  // Nuove
  "Qual è il posto più strano in cui ti sei baciato/a o hai fatto sesso?",
  "Qual è la cosa più 'kinky' o trasgressiva che hai mai provato a letto?",
  "Hai mai avuto fantasie su qualcuno presente in questa stanza? Chi?",
  "Qual è stato il tuo appuntamento peggiore o più disastroso di sempre?",
  "Preferiresti rinunciare al sesso per un anno o al tuo cibo preferito per sempre?",
  "Hai mai mandato foto o messaggi compromettenti alla persona sbagliata?",
  "Qual è la tua arma segreta infallibile per sedurre qualcuno?",
  "Hai mai finto un orgasmo?",
  "Qual è la ricerca web più imbarazzante nella tua cronologia recente?",
  "Con chi in questa stanza faresti volentieri un'avventura di una notte?"
];

const dareHot = [
  "Manda un messaggio provocante (finto).",
  "Fai uno sguardo seducente.",
  "Sussurra qualcosa di imbarazzante.",
  // Nuove
  "Bacia dolcemente il collo della persona alla tua destra.",
  "Fai una lap dance di 30 secondi alla persona alla tua sinistra.",
  "Togliti un capo d'abbigliamento (che non sia un accessorio o le scarpe).",
  "Mettiti a cavalcioni sulle ginocchia del giocatore di fronte a te fino al tuo prossimo turno.",
  "Lecca o mordicchia sensualmente il lobo dell'orecchio di chi scegli tu.",
  "Fatti bendare e indovina quale giocatore ti sta toccando le labbra con un dito.",
  "Invia un messaggio vocale in cui gemi in una chat di gruppo a caso sul tuo telefono.",
  "Simula la tua posizione preferita a letto usando un cuscino in mezzo alla stanza.",
  "Sussurra all'orecchio del giocatore accanto a te la cosa più sporca e sconcia che ti viene in mente.",
  "Fai un massaggio sensuale di 1 minuto alle spalle o alle cosce del giocatore che consideri più attraente qui."
];

// ===== FUNZIONE DI SETUP (AVVIO GIOCO) =====
function startGame() {
  const input = document.getElementById("names").value;
  
  // Prende i nomi, li divide alla virgola, rimuove gli spazi vuoti extra e scarta quelli vuoti
  players = input.split(",").map(n => n.trim()).filter(n => n);
  
  // Controllo: serve un minimo di due giocatori per giocare
  if (players.length < 2) return alert("Inserisci almeno 2 giocatori");

  mode = document.getElementById("mode").value;
  
  // Nasconde la schermata di configurazione e mostra quella di gioco
  document.getElementById("setup").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  
  updatePlayer(); // Aggiorna il nome mostrato sullo schermo
  startTimer();   // Fa partire il conto alla rovescia
}

// ===== GESTIONE DEL TIMER =====
function startTimer() {
  clearInterval(timer); // Resetta eventuali timer precedenti
  intTime = 15;
  document.getElementById("timer").textContent = "⏱️ 15s";
  
  // Ogni 1000 millisecondi (1 secondo) esegue questa funzione
  timer = setInterval(() => {
    intTime--; // Sottrae 1 secondo
    document.getElementById("timer").textContent = "⏱️ " + intTime + "s";
    
    // Se il tempo scade
    if (intTime <= 0) {
      navigator.vibrate?.(300); // Fa vibrare il telefono (se supportato) per 300ms
      nextPlayer();             // Passa automaticamente al giocatore successivo
    }
  }, 1000);
}

// ===== LOGICA DI GIOCO =====

// Aggiorna il testo con il nome del giocatore a cui tocca
function updatePlayer() {
  document.getElementById("player").textContent = players[turn];
}

// Passa al giocatore successivo e riavvia il timer
function nextPlayer() {
  // L'operatore modulo (%) fa sì che quando si supera l'ultimo giocatore, si ricominci dal primo
  turn = (turn + 1) % players.length;
  updatePlayer();
  startTimer();
}

// Funzione di utilità per pescare un elemento a caso da un array (lista)
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Quando l'utente clicca su "VERITÀ"
function truth() {
  // Sceglie la lista giusta in base alla modalità (Family o Hot)
  const t = mode === "hot" ? random(truthHot) : random(truthFamily);
  show("🟢 VERITÀ", t);
}

// Quando l'utente clicca su "OBBLIGO"
function dare() {
  // Sceglie la lista giusta in base alla modalità (Family o Hot)
  const d = mode === "hot" ? random(dareHot) : random(dareFamily);
  show("🔴 OBBLIGO", d);
}

// Mostra la sfida sulla carta centrale e fa vibrare il telefono
function show(type, text) {
  // Inserisce nel box con id "card" l'HTML con il tipo di sfida e il testo
  document.getElementById("card").innerHTML = `<strong>${type}</strong><br><br>${text}`;
  
  navigator.vibrate?.(100); // Breve vibrazione per confermare la scelta (se supportato)
  nextPlayer(); // Passa il turno al prossimo giocatore
}