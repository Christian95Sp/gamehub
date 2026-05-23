document.addEventListener('DOMContentLoaded', () => {

  // --- DATABASE DELLE PAROLE ---
const wordDatabase = [
  {
    guessWord: 'Nuoto',
    forbiddenWords: ['Acqua', 'Piscina', 'Cuffia', 'Occhialini', 'Cloro', 'Stile', 'Vasca', 'Galleggiare']
  },
  {
    guessWord: 'Pizza',
    forbiddenWords: ['Forno', 'Margherita', 'Impasto', 'Mozzarella', 'Pomodoro', 'Pizzaiolo', 'Lievito', 'Tonda']
  },
  {
    guessWord: 'Computer',
    forbiddenWords: ['Mouse', 'Tastiera', 'Schermo', 'Software', 'Hardware', 'Internet', 'Processore', 'Memoria']
  },
  {
    guessWord: 'Libro',
    forbiddenWords: ['Pagina', 'Leggere', 'Copertina', 'Autore', 'Romanzo', 'Capitolo', 'Biblioteca', 'Carta']
  },
  {
    guessWord: 'Caffè',
    forbiddenWords: ['Tazzina', 'Espresso', 'Bar', 'Moka', 'Zucchero', 'Macchiato', 'Bevanda', 'Chicco']
  },
  {
    guessWord: 'Spazio',
    forbiddenWords: ['Pianeta', 'Stella', 'Astronave', 'Astronauta', 'Universo', 'Galassia', 'Vuoto', 'Cosmo']
  },
   {
    guessWord: 'Musica',
    forbiddenWords: ['Canzone', 'Nota', 'Strumento', 'Cantare', 'Suono', 'Ritmo', 'Melodia', 'Concerto']
  },
  {
    guessWord: 'Fotografia',
    forbiddenWords: ['Macchina', 'Obiettivo', 'Scatto', 'Immagine', 'Messa a fuoco', 'Diaframma', 'Rullino', 'Digitale']
  },
    // Categoria: Il Corpo Umano
  { guessWord: 'Mano', forbiddenWords: ['Dita', 'Palmo', 'Unghia', 'Prendere', 'Cinque', 'Scrivere', 'Guanto', 'Braccio'] },
  { guessWord: 'Occhio', forbiddenWords: ['Vedere', 'Vista', 'Pupilla', 'Sguardo', 'Ciglia', 'Lenti', 'Occhiali', 'Guardare'] },
  { guessWord: 'Bocca', forbiddenWords: ['Parlare', 'Mangiare', 'Denti', 'Lingua', 'Labbra', 'Bacio', 'Sorriso', 'Sapore'] },
  { guessWord: 'Naso', forbiddenWords: ['Odorato', 'Annusare', 'Profumo', 'Respirare', 'Narici', 'Puzza', 'Soffiare', 'Faccia'] },
  { guessWord: 'Piede', forbiddenWords: ['Camminare', 'Scarpa', 'Calzino', 'Dita', 'Tallone', 'Caviglia', 'Calcio', 'Gamba'] },
  { guessWord: 'Capelli', forbiddenWords: ['Testa', 'Pettinarsi', 'Tagliare', 'Shampoo', 'Parrucchiere', 'Calvo', 'Riccio', 'Liscio'] },
  { guessWord: 'Orecchio', forbiddenWords: ['Sentire', 'Udito', 'Suono', 'Rumore', 'Ascoltare', 'Lobo', 'Musica', 'Cuffie'] },
  { guessWord: 'Ginocchio', forbiddenWords: ['Gamba', 'Articolazione', 'Piegare', 'Rotula', 'Cadere', 'Correre', 'Calcio', 'Stinco'] },
  { guessWord: 'Stomaco', forbiddenWords: ['Pancia', 'Mangiare', 'Digestione', 'Fame', 'Cibo', 'Mal di pancia', 'Vuoto', 'Bruciore'] },
  { guessWord: 'Cervello', forbiddenWords: ['Pensare', 'Mente', 'Intelligenza', 'Idea', 'Memoria', 'Testa', 'Ragionare', 'Neurone'] },
    // Categoria: Professioni (Espansione)
  { guessWord: 'Architetto', forbiddenWords: ['Progetto', 'Casa', 'Edificio', 'Disegnare', 'Costruzione', 'Piantina', 'Cantiere', 'Geometra'] },
  { guessWord: 'Veterinario', forbiddenWords: ['Animali', 'Cane', 'Gatto', 'Cura', 'Ambulatorio', 'Malattia', 'Dottore', 'Zampa'] },
  { guessWord: 'Musicista', forbiddenWords: ['Suonare', 'Strumento', 'Canzone', 'Concerto', 'Nota', 'Partitura', 'Orchestra', 'Band'] },
  { guessWord: 'Programmatore', forbiddenWords: ['Codice', 'Computer', 'Software', 'Linguaggio', 'Sviluppare', 'Applicazione', 'Riga', 'Tastiera'] },
  { guessWord: 'Falegname', forbiddenWords: ['Legno', 'Mobile', 'Sega', 'Martello', 'Piallare', 'Tavolo', 'Laboratorio', 'Trucioli'] },
  { guessWord: 'Meccanico', forbiddenWords: ['Auto', 'Motore', 'Riparare', 'Officina', 'Ruota', 'Olio', 'Guasto', 'Chiave inglese'] },
  { guessWord: 'Sarto', forbiddenWords: ['Vestito', 'Cucire', 'Ago', 'Filo', 'Stoffa', 'Forbici', 'Misura', 'Macchina'] },
  { guessWord: 'Panettiere', forbiddenWords: ['Pane', 'Forno', 'Farina', 'Impasto', 'Lievito', 'Pagnotta', 'Infornare', 'Fragranza'] },
  { guessWord: 'Giardiniere', forbiddenWords: ['Pianta', 'Fiore', 'Erba', 'Annaffiare', 'Tosaerba', 'Giardino', 'Potare', 'Rastrello'] },
  { guessWord: 'Cameriere', forbiddenWords: ['Ristorante', 'Servire', 'Tavolo', 'Ordinare', 'Menù', 'Conto', 'Piatto', 'Cliente'] },
  { guessWord: 'Barista', forbiddenWords: ['Bar', 'Caffè', 'Cappuccino', 'Cocktail', 'Banco', 'Bere', 'Cliente', 'Spina'] },
  { guessWord: 'Farmacista', forbiddenWords: ['Medicina', 'Ricetta', 'Farmacia', 'Sciroppo', 'Pillola', 'Dottore', 'Banco', 'Scontrino'] },
  { guessWord: 'Dentista', forbiddenWords: ['Denti', 'Carie', 'Trapano', 'Bocca', 'Poltrona', 'Appuntamento', 'Apparecchio', 'Studio'] },
  { guessWord: 'Infermiere', forbiddenWords: ['Ospedale', 'Paziente', 'Medico', 'Puntura', 'Siringa', 'Turno', 'Corsia', 'Assistenza'] },
  { guessWord: 'Pilota', forbiddenWords: ['Aereo', 'Volare', 'Cabina', 'Decollo', 'Atterraggio', 'Aeroporto', 'Divisa', 'Comandante'] },
  { guessWord: 'Scrittore', forbiddenWords: ['Libro', 'Romanzo', 'Pagina', 'Scrivere', 'Autore', 'Trama', 'Personaggio', 'Penna'] },
  { guessWord: 'Regista', forbiddenWords: ['Film', 'Cinema', 'Attore', 'Scena', 'Ciak', 'Ripresa', 'Telecamera', 'Set'] },
  { guessWord: 'Designer', forbiddenWords: ['Progetto', 'Stile', 'Forma', 'Disegno', 'Oggetto', 'Arredamento', 'Grafica', 'Moda'] },
  { guessWord: 'Psicologo', forbiddenWords: ['Mente', 'Paziente', 'Terapia', 'Seduta', 'Cervello', 'Analisi', 'Studio', 'Emozioni'] },
  { guessWord: 'Contabile', forbiddenWords: ['Numeri', 'Conti', 'Bilancio', 'Tasse', 'Fattura', 'Ufficio', 'Calcolatrice', 'Registro'] },
  { guessWord: 'Manager', forbiddenWords: ['Azienda', 'Capo', 'Ufficio', 'Dipendenti', 'Riunione', 'Dirigere', 'Obiettivo', 'Progetto'] },
  { guessWord: 'Giudice', forbiddenWords: ['Tribunale', 'Legge', 'Sentenza', 'Processo', 'Martelletto', 'Toga', 'Imputato', 'Corte'] },
  { guessWord: 'Vigile Urbano', forbiddenWords: ['Multa', 'Traffico', 'Fischietto', 'Strada', 'Divisa', 'Paletta', 'Comune', 'Circolazione'] },
  { guessWord: 'Atleta', forbiddenWords: ['Sport', 'Gara', 'Allenamento', 'Medaglia', 'Record', 'Competizione', 'Stadio', 'Fisico'] },
  { guessWord: 'Scienziato', forbiddenWords: ['Laboratorio', 'Ricerca', 'Esperimento', 'Formula', 'Scoperta', 'Microscopio', 'Teoria', 'Dati'] },
  { guessWord: 'Ingegnere', forbiddenWords: ['Progetto', 'Calcolo', 'Costruzione', 'Motore', 'Ponte', 'Struttura', 'Matematica', 'Disegno'] },
  { guessWord: 'Barbiere', forbiddenWords: ['Capelli', 'Tagliare', 'Forbici', 'Rasoio', 'Barba', 'Salone', 'Schiuma', 'Pettine'] },
  { guessWord: 'Parrucchiera', forbiddenWords: ['Capelli', 'Taglio', 'Piega', 'Tinta', 'Shampoo', 'Salone', 'Forbici', 'Phon'] },
  { guessWord: 'Estetista', forbiddenWords: ['Bellezza', 'Unghie', 'Crema', 'Massaggio', 'Viso', 'Ceretta', 'Smalto', 'Trattamento'] },
  { guessWord: 'Tassista', forbiddenWords: ['Taxi', 'Auto', 'Corsa', 'Cliente', 'Tassametro', 'Chiamare', 'Indirizzo', 'Strada'] },
  { guessWord: 'Guida Turistica', forbiddenWords: ['Turisti', 'Monumento', 'Città', 'Visitare', 'Spiegare', 'Gruppo', 'Museo', 'Bandierina'] },
  { guessWord: 'Agente Immobiliare', forbiddenWords: ['Casa', 'Vendere', 'Affitto', 'Appartamento', 'Cliente', 'Visita', 'Contratto', 'Agenzia'] },
  { guessWord: 'Allenatore', forbiddenWords: ['Squadra', 'Sport', 'Partita', 'Giocatore', 'Tattica', 'Fischietto', 'Campo', 'Vincere'] },
  { guessWord: 'Pasticcere', forbiddenWords: ['Dolci', 'Torta', 'Panna', 'Crema', 'Forno', 'Zucchero', 'Cioccolato', 'Laboratorio'] },
  { guessWord: 'Macellaio', forbiddenWords: ['Carne', 'Coltello', 'Bistecca', 'Banco', 'Affettare', 'Salsiccia', 'Bilancia', 'Negozio'] },
  { guessWord: 'Pescivendolo', forbiddenWords: ['Pesce', 'Mercato', 'Mare', 'Ghiaccio', 'Banco', 'Pulire', 'Rete', 'Fresco'] },
  { guessWord: 'Contadino', forbiddenWords: ['Terra', 'Campo', 'Coltivare', 'Trattore', 'Raccolto', 'Zappa', 'Stalla', 'Seminare'] },
  { guessWord: 'Notaio', forbiddenWords: ['Atto', 'Firma', 'Contratto', 'Studio', 'Documento', 'Rogito', 'Timbro', 'Ufficiale'] },
  { guessWord: 'Traduttore', forbiddenWords: ['Lingua', 'Parola', 'Documento', 'Interprete', 'Dizionario', 'Parlare', 'Scrivere', 'Straniero'] },
  { guessWord: 'Bibliotecario', forbiddenWords: ['Libri', 'Biblioteca', 'Silenzio', 'Prestito', 'Scaffale', 'Leggere', 'Tessera', 'Archivio'] },
  { guessWord: 'Archeologo', forbiddenWords: ['Scavi', 'Antico', 'Reperto', 'Rovine', 'Passato', 'Fossile', 'Museo', 'Storia'] },
  { guessWord: 'Sommelier', forbiddenWords: ['Vino', 'Assaggiare', 'Ristorante', 'Cantina', 'Bottiglia', 'Uva', 'Calice', 'Gusto'] },
  { guessWord: 'Mago', forbiddenWords: ['Magia', 'Trucco', 'Bacchetta', 'Illusione', 'Prestigiatore', 'Sparire', 'Carta', 'Cilindro'] },
  { guessWord: 'DJ', forbiddenWords: ['Musica', 'Discoteca', 'Cuffie', 'Canzone', 'Mixare', 'Consolle', 'Festa', 'Disco'] },
  { guessWord: 'Grafico', forbiddenWords: ['Logo', 'Computer', 'Immagine', 'Pubblicità', 'Disegnare', 'Colori', 'Programma', 'Agenzia'] },
  { guessWord: 'Tatuatore', forbiddenWords: ['Tatuaggio', 'Pelle', 'Inchiostro', 'Ago', 'Disegno', 'Studio', 'Macchinetta', 'Corpo'] },
  { guessWord: 'Fabbro', forbiddenWords: ['Ferro', 'Metallo', 'Fuoco', 'Incudine', 'Martello', 'Forgiare', 'Cancello', 'Saldare'] },
  { guessWord: 'Orafo', forbiddenWords: ['Oro', 'Gioiello', 'Anello', 'Pietra', 'Prezioso', 'Collana', 'Laboratorio', 'Creare'] },
  { guessWord: 'Calzolaio', forbiddenWords: ['Scarpe', 'Suola', 'Tacco', 'Riparare', 'Cuoio', 'Negozio', 'Martello', 'Colla'] },
  { guessWord: 'Hostess', forbiddenWords: ['Aereo', 'Passeggeri', 'Volo', 'Servizio', 'Carrello', 'Divisa', 'Sicurezza', 'Annuncio'] },
  { guessWord: 'Bagnino', forbiddenWords: ['Spiaggia', 'Mare', 'Salvare', 'Pattino', 'Torretta', 'Fischietto', 'Pericolo', 'Nuotare'] },
  { guessWord: 'Muratore', forbiddenWords: ['Muro', 'Mattone', 'Cemento', 'Cantiere', 'Costruire', 'Casa', 'Cazzuola', 'Ponteggio'] },
  { guessWord: 'Stilista', forbiddenWords: ['Moda', 'Vestito', 'Sfilata', 'Collezione', 'Tessuto', 'Disegnare', 'Modello', 'Atelier'] },
  { guessWord: 'Modello', forbiddenWords: ['Sfilata', 'Passerella', 'Posa', 'Fotografo', 'Vestito', 'Copertina', 'Agenzia', 'Stilista'] },
  { guessWord: 'Doppiatore', forbiddenWords: ['Voce', 'Film', 'Personaggio', 'Microfono', 'Attore', 'Sincronizzare', 'Studio', 'Dialogo'] },
  { guessWord: 'Ricercatore', forbiddenWords: ['Scienza', 'Laboratorio', 'Studio', 'Scoperta', 'Università', 'Articolo', 'Dati', 'Analisi'] },
  { guessWord: 'Fisioterapista', forbiddenWords: ['Massaggio', 'Riabilitazione', 'Muscolo', 'Dolore', 'Esercizio', 'Corpo', 'Paziente', 'Movimento'] },
  { guessWord: 'Istruttore', forbiddenWords: ['Lezione', 'Allievo', 'Insegnare', 'Scuola', 'Palestra', 'Guida', 'Corso', 'Spiegare'] },
  { guessWord: 'Portiere', forbiddenWords: ['Edificio', 'Entrata', 'Chiavi', 'Palazzo', 'Hotel', 'Ospiti', 'Custode', 'Guardia'] },
  { guessWord: 'Commercialista', forbiddenWords: ['Tasse', 'Dichiarazione', 'Redditi', 'Conti', 'Studio', 'Cliente', 'Fisco', 'Partita IVA'] },
  { guessWord: 'Analista', forbiddenWords: ['Dati', 'Finanziario', 'Rapporto', 'Grafico', 'Numero', 'Azienda', 'Mercato', 'Previsione'] },
  { guessWord: 'Banchiere', forbiddenWords: ['Banca', 'Soldi', 'Cliente', 'Sportello', 'Conto Corrente', 'Prestito', 'Investimento', 'Ufficio'] },
  { guessWord: 'Fumettista', forbiddenWords: ['Fumetto', 'Disegno', 'Vignetta', 'Striscia', 'Personaggio', 'Nuvoletta', 'Matita', 'Tavola'] },
  { guessWord: 'Astronauta', forbiddenWords: ['Spazio', 'Navicella', 'Luna', 'Tuta', 'Stelle', 'Pianeta', 'Missione', 'Assenza di gravità'] },
  { guessWord: 'Geologo', forbiddenWords: ['Rocce', 'Terra', 'Terremoto', 'Vulcano', 'Studio', 'Fossili', 'Campione', 'Martello'] },
  { guessWord: 'Meteorologo', forbiddenWords: ['Meteo', 'Previsioni', 'Tempo', 'Sole', 'Pioggia', 'Nuvoloso', 'Temperatura', 'Mappa'] },
  { guessWord: 'Critico', forbiddenWords: ['Recensione', 'Film', 'Libro', 'Ristorante', 'Voto', 'Giudizio', 'Opinione', 'Scrivere'] },
  { guessWord: 'Presentatore', forbiddenWords: ['Televisione', 'Programma', 'Pubblico', 'Microfono', 'Ospite', 'Studio', 'Diretta', 'Show'] },
  { guessWord: 'Artigiano', forbiddenWords: ['Laboratorio', 'Mani', 'Creare', 'Oggetto', 'Legno', 'Creta', 'Unico', 'Maestro'] },
  { guessWord: 'Boscaiolo', forbiddenWords: ['Albero', 'Legna', 'Ascia', 'Foresta', 'Tagliare', 'Bosco', 'Tronco', 'Segare'] },
  { guessWord: 'Spazzino', forbiddenWords: ['Strada', 'Rifiuti', 'Spazzatura', 'Scopa', 'Pulire', 'Nettezza urbana', 'Cassonetto', 'Operatore ecologico'] },
  { guessWord: 'Controllore', forbiddenWords: ['Treno', 'Biglietto', 'Autobus', 'Verifica', 'Multa', 'Viaggio', 'Posto', 'Timbrare'] },
  { guessWord: 'Militare', forbiddenWords: ['Esercito', 'Divisa', 'Guerra', 'Soldato', 'Arma', 'Caserma', 'Missione', 'Grado'] },
  { guessWord: 'Detective', forbiddenWords: ['Indagine', 'Caso', 'Mistero', 'Indizio', 'Sospettato', 'Investigare', 'Lente', 'Privato'] },
  { guessWord: 'Oculista', forbiddenWords: ['Occhi', 'Visita', 'Vista', 'Lenti', 'Occhiali', 'Miopia', 'Lettere', 'Dottore'] },
  { guessWord: 'Apicoltore', forbiddenWords: ['Api', 'Miele', 'Alveare', 'Arnia', 'Regina', 'Cera', 'Pungiglione', 'Smielatore'] },
  { guessWord: 'Casaro', forbiddenWords: ['Formaggio', 'Latte', 'Caglio', 'Caseificio', 'Stagionatura', 'Ricotta', 'Forma', 'Produzione'] },
  { guessWord: 'Tipografo', forbiddenWords: ['Stampa', 'Inchiostro', 'Carta', 'Libro', 'Macchina', 'Caratteri', 'Volantino', 'Tipografia'] },
  { guessWord: 'Orologiaio', forbiddenWords: ['Orologio', 'Tempo', 'Lancette', 'Riparare', 'Meccanismo', 'Polso', 'Ingranaggio', 'Precisione'] },
  { guessWord: 'Ballerino', forbiddenWords: ['Danza', 'Ballo', 'Teatro', 'Corpo', 'Musica', 'Passo', 'Coreografia', 'Palco'] },
  { guessWord: 'Scultore', forbiddenWords: ['Statua', 'Marmo', 'Creta', 'Scalpello', 'Forma', 'Opera', 'Bronzo', 'Creare'] },
  { guessWord: 'Speleologo', forbiddenWords: ['Grotta', 'Buio', 'Casco', 'Corda', 'Esplorare', 'Stalattiti', 'Profondità', 'Roccia'] },
  { guessWord: 'Cartografo', forbiddenWords: ['Mappa', 'Carta', 'Geografia', 'Territorio', 'Confine', 'Disegnare', 'Scala', 'Legenda'] },
  { guessWord: 'Pizzaiolo', forbiddenWords: ['Pizza', 'Forno', 'Impasto', 'Pomodoro', 'Mozzarella', 'Pala', 'Margherita', 'Ristorante'] },
  { guessWord: 'Gelataio', forbiddenWords: ['Gelato', 'Cono', 'Gusto', 'Freddo', 'Panna', 'Coppetta', 'Artigianale', 'Laboratorio'] },
  { guessWord: 'Receptionist', forbiddenWords: ['Hotel', 'Albergo', 'Cliente', 'Accoglienza', 'Telefono', 'Prenotazione', 'Chiave', 'Banco'] },
  { guessWord: 'Economista', forbiddenWords: ['Economia', 'Denaro', 'Mercato', 'Grafico', 'Crisi', 'Crescita', 'PIL', 'Finanza'] },
  { guessWord: 'Risorse Umane', forbiddenWords: ['Personale', 'Assunzione', 'Colloquio', 'Curriculum', 'Dipendente', 'Azienda', 'Contratto', 'Ufficio'] },
  { guessWord: 'Politico', forbiddenWords: ['Partito', 'Elezioni', 'Voto', 'Parlamento', 'Governo', 'Legge', 'Discorso', 'Campagna'] },
  { guessWord: 'Ambasciatore', forbiddenWords: ['Paese', 'Stato', 'Estero', 'Diplomazia', 'Relazioni', 'Consolato', 'Rappresentante', 'Nazione'] },
  { guessWord: 'Zoologo', forbiddenWords: ['Animali', 'Studio', 'Specie', 'Comportamento', 'Natura', 'Habitat', 'Zoo', 'Ricerca'] },
  { guessWord: 'Botanico', forbiddenWords: ['Piante', 'Fiori', 'Studio', 'Foglie', 'Specie', 'Natura', 'Seme', 'Erbario'] },
  { guessWord: 'Antropologo', forbiddenWords: ['Uomo', 'Cultura', 'Società', 'Studio', 'Popoli', 'Evoluzione', 'Tradizioni', 'Comunità'] },
  { guessWord: 'Nutrizionista', forbiddenWords: ['Dieta', 'Cibo', 'Alimentazione', 'Peso', 'Calorie', 'Salute', 'Paziente', 'Mangiare'] },
  { guessWord: 'Chirurgo', forbiddenWords: ['Operazione', 'Bisturi', 'Sala operatoria', 'Medico', 'Ospedale', 'Intervento', 'Paziente', 'Tagliare'] },
  { guessWord: 'Pediatra', forbiddenWords: ['Bambini', 'Neonato', 'Medico', 'Visita', 'Malattia', 'Crescita', 'Vaccino', 'Genitori'] },
  { guessWord: 'Becchino', forbiddenWords: ['Cimitero', 'Bara', 'Funerale', 'Morto', 'Tomba', 'Fossa', 'Seppellire', 'Croce'] },
  { guessWord: 'Pescator', forbiddenWords: ['Pesce', 'Rete', 'Barca', 'Mare', 'Canna', 'Amo', 'Porto', 'Pescare'] },
  { guessWord: 'Medico', forbiddenWords: ['Dottore', 'Paziente', 'Ospedale', 'Cura', 'Malattia', 'Ricetta', 'Visita', 'Chirurgo'] },
  { guessWord: 'Insegnante', forbiddenWords: ['Scuola', 'Studente', 'Lezione', 'Materia', 'Voto', 'Compiti', 'Registro', 'Professore'] },
  { guessWord: 'Pompiere', forbiddenWords: ['Fuoco', 'Incendio', 'Idrante', 'Scala', 'Camion', 'Sirena', 'Salvare', 'Caserma'] },
  { guessWord: 'Poliziotto', forbiddenWords: ['Agente', 'Ladro', 'Pistola', 'Manette', 'Sirena', 'Volante', 'Questura', 'Legge'] },
  { guessWord: 'Cuoco', forbiddenWords: ['Chef', 'Cucina', 'Ristorante', 'Ricetta', 'Piatto', 'Ingredienti', 'Padella', 'Fuoco'] },
  { guessWord: 'Attore', forbiddenWords: ['Film', 'Teatro', 'Personaggio', 'Recitare', 'Palco', 'Scena', 'Regista', 'Cinema'] },
  { guessWord: 'Idraulico', forbiddenWords: ['Tubo', 'Acqua', 'Perdita', 'Rubinetto', 'Bagno', 'Riparare', 'Lavandino', 'Sturare'] },
  { guessWord: 'Elettricista', forbiddenWords: ['Corrente', 'Filo', 'Luce', 'Prese', 'Cavi', 'Impianto', 'Contatore', 'Scossa'] },
  { guessWord: 'Avvocato', forbiddenWords: ['Legge', 'Tribunale', 'Causa', 'Cliente', 'Processo', 'Giudice', 'Difesa', 'Accusa'] },
  { guessWord: 'Giornalista', forbiddenWords: ['Notizia', 'Articolo', 'Intervista', 'Quotidiano', 'TG', 'Servizio', 'Fonte', 'Scrivere'] },
  
   // Concetti Astratti e Vari
  { guessWord: 'Amore', forbiddenWords: ['Cuore', 'Bacio', 'Sentimento', 'Coppia', 'Passione', 'Relazione', 'Ti amo', 'Innamorato'] },
  { guessWord: 'Tempo', forbiddenWords: ['Orologio', 'Ora', 'Passato', 'Futuro', 'Scorrere', 'Minuto', 'Calendario', 'Momento'] },
  { guessWord: 'Paura', forbiddenWords: ['Spavento', 'Ansia', 'Orrore', 'Mostro', 'Buio', 'Urlare', 'Terrore', 'Coraggio'] },
  { guessWord: 'Felicità', forbiddenWords: ['Gioia', 'Sorriso', 'Contento', 'Allegria', 'Stare bene', 'Positivo', 'Umore', 'Ridere'] },
  { guessWord: 'Sogno', forbiddenWords: ['Notte', 'Dormire', 'Letto', 'Incubo', 'Immaginare', 'Desiderio', 'Occhi chiusi', 'Fantasia'] },
  { guessWord: 'Guerra', forbiddenWords: ['Pace', 'Soldato', 'Battaglia', 'Armi', 'Combattere', 'Nemico', 'Esercito', 'Conflitto'] },
  { guessWord: 'Matrimonio', forbiddenWords: ['Sposa', 'Sposo', 'Anello', 'Chiesa', 'Abito bianco', 'Cerimonia', 'Festa', 'Invitati'] },
  { guessWord: 'Compleanno', forbiddenWords: ['Torta', 'Regalo', 'Candeline', 'Festa', 'Anni', 'Auguri', 'Invitati', 'Data di nascita'] },
  { guessWord: 'Carnevale', forbiddenWords: ['Maschera', 'Coriandoli', 'Scherzo', 'Costume', 'Carro', 'Festa', 'Stelle filanti', 'Travestimento'] },
  { guessWord: 'Natale', forbiddenWords: ['Regalo', 'Albero', 'Babbo', 'Presepe', 'Panettone', 'Neve', 'Dicembre', 'Festa'] },
 
    // Categoria: Sport e Hobby (Espansione Massiccia)
  // --- Concetti e Termini Generali ---
  { guessWord: 'Gara', forbiddenWords: ['Competizione', 'Corsa', 'Vincere', 'Perdere', 'Avversario', 'Partenza', 'Arrivo', 'Sfida'] },
  { guessWord: 'Squadra', forbiddenWords: ['Gruppo', 'Giocatori', 'Compagni', 'Allenatore', 'Insieme', 'Collettivo', 'Maglia', 'Capitano'] },
  { guessWord: 'Allenamento', forbiddenWords: ['Esercizio', 'Preparazione', 'Atleta', 'Fatica', 'Sudore', 'Palestra', 'Coach', 'Migliorare'] },
  { guessWord: 'Vittoria', forbiddenWords: ['Vincere', 'Sconfitta', 'Primo', 'Coppa', 'Medaglia', 'Successo', 'Trionfo', 'Gioia'] },
  { guessWord: 'Sconfitta', forbiddenWords: ['Perdere', 'Vittoria', 'Ultimo', 'Delusione', 'Avversario', 'Punteggio', 'Eliminato', 'Gara'] },
  { guessWord: 'Tifoso', forbiddenWords: ['Squadra', 'Stadio', 'Bandiera', 'Coro', 'Sostenere', 'Partita', 'Sciarpa', 'Idolo'] },
  { guessWord: 'Arbitro', forbiddenWords: ['Partita', 'Regole', 'Fischietto', 'Cartellino', 'Gara', 'Giudice', 'Campo', 'Fallo'] },
  { guessWord: 'Punteggio', forbiddenWords: ['Punti', 'Gol', 'Canestro', 'Risultato', 'Segnare', 'Tabellone', 'Numero', 'Partita'] },
  { guessWord: 'Stadio', forbiddenWords: ['Campo', 'Spalti', 'Tifosi', 'Partita', 'Erba', 'Posto', 'Curva', 'Pubblico'] },
  { guessWord: 'Palestra', forbiddenWords: ['Pesi', 'Attrezzi', 'Allenamento', 'Fitness', 'Muscoli', 'Corpo', 'Iscrizione', 'Abbonamento'] },
  { guessWord: 'Medaglia', forbiddenWords: ['Oro', 'Argento', 'Bronzo', 'Podio', 'Vincitore', 'Gara', 'Collo', 'Premio'] },
  { guessWord: 'Coppa', forbiddenWords: ['Trofeo', 'Premio', 'Vincere', 'Squadra', 'Finale', 'Alzare', 'Campione', 'Torneo'] },
  { guessWord: 'Record', forbiddenWords: ['Primato', 'Tempo', 'Migliore', 'Numero', 'Superare', 'Mondiale', 'Gara', 'Imbattuto'] },
  { guessWord: 'Finale', forbiddenWords: ['Partita', 'Torneo', 'Ultima', 'Coppa', 'Vincitore', 'Scontro', 'Gara', 'Semifinale'] },
  { guessWord: 'Campionato', forbiddenWords: ['Stagione', 'Squadre', 'Classifica', 'Partite', 'Punti', 'Scudetto', 'Girone', 'Lega'] },
  { guessWord: 'Olimpiadi', forbiddenWords: ['Gare', 'Medaglie', 'Atleti', 'Fiaccola', 'Nazioni', 'Podio', 'Cerchi', 'Sport'] },
  { guessWord: 'Dilettante', forbiddenWords: ['Professionista', 'Hobby', 'Passione', 'Principiante', 'Sport', 'Gara', 'Non pagato', 'Amatore'] },
  { guessWord: 'Professionista', forbiddenWords: ['Lavoro', 'Stipendio', 'Atleta', 'Dilettante', 'Carriera', 'Contratto', 'Sport', 'Pagato'] },
  { guessWord: 'Spogliatoio', forbiddenWords: ['Doccia', 'Squadra', 'Partita', 'Armadietto', 'Cambiare', 'Vestiti', 'Atleti', 'Pre-partita'] },
  { guessWord: 'Cronometro', forbiddenWords: ['Tempo', 'Misurare', 'Corsa', 'Gara', 'Secondo', 'Start', 'Stop', 'Giro'] },
  
  // --- Sport con Palla ---
  { guessWord: 'Pallavolo', forbiddenWords: ['Rete', 'Schiacciata', 'Muro', 'Palla', 'Battuta', 'Set', 'Squadra', 'Campo'] },
  { guessWord: 'Rugby', forbiddenWords: ['Palla Ovale', 'Meta', 'Mischia', 'Placcaggio', 'Terzo tempo', 'Pali', 'Squadra', 'Touche'] },
  { guessWord: 'Pallanuoto', forbiddenWords: ['Acqua', 'Piscina', 'Porta', 'Palla', 'Calottina', 'Vasca', 'Squadra', 'Gol'] },
  { guessWord: 'Football Americano', forbiddenWords: ['Palla Ovale', 'Touchdown', 'Casco', 'Spalliera', 'Quarterback', 'Super Bowl', 'Meta', 'Campo'] },
  { guessWord: 'Golf', forbiddenWords: ['Buca', 'Mazza', 'Pallina', 'Campo', 'Green', 'Swing', 'Caddie', 'Percorso'] },
  { guessWord: 'Pallamano', forbiddenWords: ['Porta', 'Palla', 'Tiro', 'Gol', 'Area', 'Squadra', 'Campo', 'Passaggio'] },
  { guessWord: 'Baseball', forbiddenWords: ['Mazza', 'Guantone', 'Palla', 'Base', 'Fuoricampo', 'Lanciatore', 'Squadra', 'Innings'] },
  { guessWord: 'Cricket', forbiddenWords: ['Mazza', 'Palla', 'Wicket', 'Battitore', 'Lanciatore', 'Campo', 'Squadra', 'Corsa'] },
  { guessWord: 'Bocce', forbiddenWords: ['Boccino', 'Punto', 'Campo', 'Accosto', 'Bocciata', 'Tiro', 'Squadra', 'Sabbia'] },
  { guessWord: 'Biliardo', forbiddenWords: ['Stecca', 'Palle', 'Buca', 'Tavolo', 'Carambola', 'Gesso', 'Triangolo', 'Panno verde'] },
  { guessWord: 'Bowling', forbiddenWords: ['Palla', 'Birilli', 'Pista', 'Strike', 'Spare', 'Lancio', 'Scarpe', 'Dieci'] },
  { guessWord: 'Squash', forbiddenWords: ['Racchetta', 'Pallina', 'Muro', 'Campo', 'Vetro', 'Gomma', 'Set', 'Giocatore'] },
  { guessWord: 'Polo', forbiddenWords: ['Cavallo', 'Mazza', 'Palla', 'Porta', 'Campo', 'Squadra', 'Galappo', 'Giocatore'] },
  { guessWord: 'Dodgeball', forbiddenWords: ['Palla', 'Schivare', 'Colpire', 'Eliminare', 'Squadra', 'Campo', 'Lancio', 'Preso'] },
  { guessWord: 'Calcio Balilla', forbiddenWords: ['Omini', 'Stecche', 'Pallina', 'Porta', 'Tavolo', 'Manopole', 'Gol', 'Biliardino'] },
  
  // --- Sport Individuali e Atletica ---
  { guessWord: 'Ciclismo', forbiddenWords: ['Bicicletta', 'Pedalare', 'Giro d\'Italia', 'Tappa', 'Maglia', 'Corsa', 'Salita', 'Ruota'] },
  { guessWord: 'Atletica Leggera', forbiddenWords: ['Corsa', 'Salto', 'Lancio', 'Pista', 'Stadio', 'Olimpiadi', 'Gara', 'Pedana'] },
  { guessWord: 'Maratona', forbiddenWords: ['Corsa', 'Lunga', '42 km', 'Traguardo', 'Resistenza', 'Atleta', 'Gara', 'Podismo'] },
  { guessWord: 'Salto in alto', forbiddenWords: ['Asta', 'Asticella', 'Rincorsa', 'Materasso', 'Saltare', 'Misura', 'Atleta', 'Olimpiadi'] },
  { guessWord: 'Salto in lungo', forbiddenWords: ['Sabbia', 'Rincorsa', 'Pedana', 'Stacco', 'Misura', 'Atleta', 'Gara', 'Fossa'] },
  { guessWord: 'Lancio del peso', forbiddenWords: ['Palla', 'Gabbia', 'Pedana', 'Spinta', 'Forza', 'Metri', 'Atleta', 'Lanciare'] },
  { guessWord: 'Lancio del giavellotto', forbiddenWords: ['Lancia', 'Asta', 'Punta', 'Rincorsa', 'Metri', 'Campo', 'Atleta', 'Lanciare'] },
  { guessWord: 'Triathlon', forbiddenWords: ['Nuoto', 'Ciclismo', 'Corsa', 'Gara', 'Atleta', 'Tre', 'Sport', 'Resistenza'] },
  { guessWord: 'Pentathlon', forbiddenWords: ['Cinque', 'Prove', 'Gara', 'Punti', 'Sport', 'Atleta', 'Equitazione', 'Scherma'] },
  { guessWord: 'Ginnastica Artistica', forbiddenWords: ['Anelli', 'Corpo libero', 'Cavallo', 'Parallele', 'Volteggio', 'Atleta', 'Esercizio', 'Punteggio'] },
  { guessWord: 'Ginnastica Ritmica', forbiddenWords: ['Nastro', 'Palla', 'Clavette', 'Cerchio', 'Musica', 'Pedana', 'Esercizio', 'Atleta'] },
  { guessWord: 'Sollevamento pesi', forbiddenWords: ['Bilanciere', 'Dischi', 'Strappo', 'Slancio', 'Forza', 'Kg', 'Atleta', 'Panca'] },
  { guessWord: 'Tiro con l\'arco', forbiddenWords: ['Freccia', 'Arco', 'Bersaglio', 'Centro', 'Mirare', 'Scoccare', 'Faretra', 'Punti'] },
  { guessWord: 'Equitazione', forbiddenWords: ['Cavallo', 'Sella', 'Montare', 'Galoppo', 'Trotto', 'Maneggio', 'Ostacolo', 'Fantino'] },
  { guessWord: 'Pattinaggio artistico', forbiddenWords: ['Ghiaccio', 'Pattini', 'Lama', 'Salto', 'Musica', 'Piroetta', 'Coppia', 'Pista'] },
  
  // --- Sport Acquatici ---
  { guessWord: 'Surf', forbiddenWords: ['Tavola', 'Onda', 'Mare', 'Cavalcare', 'Spiaggia', 'Muta', 'Equilibrio', 'Oceano'] },
  { guessWord: 'Vela', forbiddenWords: ['Barca', 'Vento', 'Randa', 'Mare', 'Navigare', 'Regata', 'Timone', 'Equipaggio'] },
  { guessWord: 'Canottaggio', forbiddenWords: ['Barca', 'Remi', 'Fiume', 'Lago', 'Vogare', 'Capovoga', 'Gara', 'Equipaggio'] },
  { guessWord: 'Canoa', forbiddenWords: ['Pagaia', 'Fiume', 'Rapide', 'Scendere', 'Kayak', 'Corrente', 'Casco', 'Giubbotto'] },
  { guessWord: 'Sci Nautico', forbiddenWords: ['Acqua', 'Motoscafo', 'Corda', 'Sci', 'Lago', 'Trainare', 'Velocità', 'Onde'] },
  { guessWord: 'Windsurf', forbiddenWords: ['Tavola', 'Vela', 'Vento', 'Mare', 'Equilibrio', 'Planare', 'Trapezio', 'Boma'] },
  { guessWord: 'Kitesurf', forbiddenWords: ['Tavola', 'Aquilone', 'Vento', 'Saltare', 'Mare', 'Volo', 'Cavi', 'Trapezio'] },
  { guessWord: 'Tuffi', forbiddenWords: ['Trampolino', 'Piattaforma', 'Piscina', 'Acqua', 'Salto', 'Avvitamento', 'Entrata', 'Gara'] },
  { guessWord: 'Apnea', forbiddenWords: ['Respiro', 'Profondità', 'Immersione', 'Mare', 'Trattenere', 'Fiato', 'Maschera', 'Record'] },
  { guessWord: 'Subacquea', forbiddenWords: ['Bombole', 'Immersione', 'Maschera', 'Pinne', 'Profondità', 'Mare', 'Erogatore', 'GAV'] },
  { guessWord: 'Rafting', forbiddenWords: ['Gommone', 'Fiume', 'Rapide', 'Pagaia', 'Gruppo', 'Corrente', 'Casco', 'Acqua mossa'] },
  
  // --- Sport Invernali ---
  { guessWord: 'Sci', forbiddenWords: ['Neve', 'Montagna', 'Pista', 'Discesa', 'Impianti', 'Spazzaneve', 'Scarponi', 'Attacchi'] },
  { guessWord: 'Snowboard', forbiddenWords: ['Tavola', 'Neve', 'Pista', 'Attacchi', 'Saltare', 'Rider', 'Halfpipe', 'Montagna'] },
  { guessWord: 'Hockey su ghiaccio', forbiddenWords: ['Pattini', 'Bastone', 'Disco', 'Pista', 'Porta', 'Squadra', 'Pattinare', 'Carica'] },
  { guessWord: 'Pattinaggio di velocità', forbiddenWords: ['Ghiaccio', 'Pista', 'Pattini', 'Ovale', 'Gara', 'Curva', 'Giro', 'Atleta'] },
  { guessWord: 'Curling', forbiddenWords: ['Ghiaccio', 'Stone', 'Scopa', 'Spazzare', 'Casa', 'Bocciata', 'Pista', 'Lancio'] },
  { guessWord: 'Bob', forbiddenWords: ['Pista', 'Ghiaccio', 'Slitta', 'Velocità', 'Squadra', 'Spinta', 'Discesa', 'Frenatore'] },
  { guessWord: 'Slittino', forbiddenWords: ['Pista', 'Ghiaccio', 'Slitta', 'Sdraiato', 'Velocità', 'Discesa', 'Atleta', 'Singolo'] },
  { guessWord: 'Biathlon', forbiddenWords: ['Sci di fondo', 'Carabina', 'Tiro', 'Bersaglio', 'Neve', 'Gara', 'Poligono', 'Penalità'] },
  { guessWord: 'Salto con gli sci', forbiddenWords: ['Trampolino', 'Volo', 'Neve', 'Atterraggio', 'Misura', 'Stile', 'Saltatore', 'Distanza'] },
  { guessWord: 'Sci di fondo', forbiddenWords: ['Neve', 'Sci stretti', 'Pista', 'Passo alternato', 'Fatica', 'Resistenza', 'Bastoncini', 'Scivolata'] },
  
  // --- Sport da Combattimento e Arti Marziali ---
  { guessWord: 'Pugilato', forbiddenWords: ['Guantoni', 'Ring', 'Incontro', 'Round', 'KO', 'Pugno', 'Boxe', 'Corda'] },
  { guessWord: 'Scherma', forbiddenWords: ['Fioretto', 'Spada', 'Sciabola', 'Maschera', 'Stoccata', 'Pedana', 'Assalto', 'Divisa'] },
  { guessWord: 'Judo', forbiddenWords: ['Tatami', 'Kimono', 'Proiezione', 'Ippon', 'Presa', 'Cintura', 'Combattimento', 'Maestro'] },
  { guessWord: 'Karate', forbiddenWords: ['Tatami', 'Kimono', 'Calcio', 'Pugno', 'Kata', 'Cintura', 'Combattimento', 'Maestro'] },
  { guessWord: 'Taekwondo', forbiddenWords: ['Calcio', 'Pugno', 'Kimono', 'Cintura', 'Combattimento', 'Corea', 'Protezioni', 'Tatami'] },
  { guessWord: 'Lotta libera', forbiddenWords: ['Tappeto', 'Presa', 'Atterramento', 'Avversario', 'Punti', 'Incontro', 'Forza', 'Combattimento'] },
  { guessWord: 'Muay Thai', forbiddenWords: ['Ginocchiate', 'Gomitate', 'Calci', 'Ring', 'Guantoni', 'Thailandia', 'Incontro', 'Clinch'] },
  { guessWord: 'Sumo', forbiddenWords: ['Lottatore', 'Giappone', 'Grasso', 'Cerchio', 'Spingere', 'Dohyo', 'Incontro', 'Rikishi'] },
  { guessWord: 'Capoeira', forbiddenWords: ['Brasile', 'Danza', 'Lotta', 'Musica', 'Roda', 'Calcio', 'Ginga', 'Berimbau'] },
  { guessWord: 'Krav Maga', forbiddenWords: ['Autodifesa', 'Militare', 'Israele', 'Combattimento', 'Tecnica', 'Contatto', 'Strada', 'Difesa'] },
  
  // --- Sport Motoristici ---
  { guessWord: 'Formula 1', forbiddenWords: ['Macchina', 'Pilota', 'Circuito', 'Gran Premio', 'Corsa', 'Ferrari', 'Scuderia', 'Box'] },
  { guessWord: 'Motociclismo', forbiddenWords: ['Moto', 'Pilota', 'Circuito', 'Gran Premio', 'Corsa', 'Curva', 'Casco', 'Valentino Rossi'] },
  { guessWord: 'Rally', forbiddenWords: ['Auto', 'Corsa', 'Sterrato', 'Navigatore', 'Tappa', 'Prova speciale', 'Pilota', 'Fuoristrada'] },
  { guessWord: 'Go-kart', forbiddenWords: ['Pista', 'Kart', 'Corsa', 'Volante', 'Piccolo', 'Gara', 'Casco', 'Circuito'] },
  { guessWord: 'Motocross', forbiddenWords: ['Moto', 'Salto', 'Fango', 'Pista', 'Sterrato', 'Corsa', 'Casco', 'Manubrio'] },
  
  // --- Hobby Creativi e Manuali ---
  { guessWord: 'Disegno', forbiddenWords: ['Matita', 'Foglio', 'Gomma', 'Colore', 'Schizzo', 'Illustrazione', 'Tratto', 'Arte'] },
  { guessWord: 'Scultura', forbiddenWords: ['Marmo', 'Argilla', 'Scalpello', 'Modellare', 'Statua', 'Forma', 'Creare', 'Artista'] },
  { guessWord: 'Canto', forbiddenWords: ['Voce', 'Canzone', 'Musica', 'Nota', 'Coro', 'Cantante', 'Microfono', 'Intonato'] },
  { guessWord: 'Ballo', forbiddenWords: ['Musica', 'Coppia', 'Passo', 'Ritmo', 'Pista', 'Scuola', 'Liscio', 'Latino'] },
  { guessWord: 'Recitazione', forbiddenWords: ['Teatro', 'Film', 'Attore', 'Parte', 'Copione', 'Palco', 'Scena', 'Personaggio'] },
  { guessWord: 'Scrittura', forbiddenWords: ['Libro', 'Romanzo', 'Racconto', 'Pagina', 'Parola', 'Autore', 'Tastiera', 'Penna'] },
  { guessWord: 'Bricolage', forbiddenWords: ['Fai da te', 'Lavori', 'Attrezzi', 'Legno', 'Vite', 'Martello', 'Trapano', 'Riparare'] },
  { guessWord: 'Modellismo', forbiddenWords: ['Modello', 'Scala', 'Colla', 'Pezzi', 'Costruire', 'Aereo', 'Nave', 'Kit'] },
  { guessWord: 'Uncinetto', forbiddenWords: ['Filo', 'Lana', 'Gomitolo', 'Lavoro a maglia', 'Punto', 'uncino', 'Coperta', 'Maglione'] },
  { guessWord: 'Maglieria', forbiddenWords: ['Ferri', 'Lana', 'Gomitolo', 'Maglione', 'Punto', 'Lavorare', 'Sciarpa', 'Filato'] },
  { guessWord: 'Origami', forbiddenWords: ['Carta', 'Piegare', 'Figura', 'Gru', 'Giappone', 'Foglio', 'Arte', 'Manuale'] },
  { guessWord: 'Ceramica', forbiddenWords: ['Argilla', 'Vaso', 'Tornio', 'Forno', 'Smalto', 'Modellare', 'Cuocere', 'Terracotta'] },
  { guessWord: 'Calligrafia', forbiddenWords: ['Scrittura', 'Bella', 'Inchiostro', 'Pennino', 'Carattere', 'Lettera', 'Corsivo', 'Amanuense'] },
  { guessWord: 'Piantumazione', forbiddenWords: ['Vaso', 'Pianta', 'Terra', 'Seme', 'Fiore', 'Balcone', 'Orto', 'Crescere'] },
  
  // --- Hobby all'Aperto e Collezionismo ---
  { guessWord: 'Escursionismo', forbiddenWords: ['Camminare', 'Montagna', 'Sentiero', 'Zaino', 'Scarponi', 'Natura', 'Mappa', 'Vetta'] },
  { guessWord: 'Campeggio', forbiddenWords: ['Tenda', 'Sacco a pelo', 'Natura', 'Fuoco', 'Bosco', 'Notte', 'Picchetti', 'Montare'] },
  { guessWord: 'Alpinismo', forbiddenWords: ['Montagna', 'Vetta', 'Scalare', 'Roccia', 'Corda', 'Imbrago', 'Ghiacciaio', 'Piccozza'] },
  { guessWord: 'Arrampicata', forbiddenWords: ['Parete', 'Roccia', 'Appigli', 'Corda', 'Imbrago', 'Palestra', 'Salire', 'Sicurezza'] },
  { guessWord: 'Caccia', forbiddenWords: ['Fucile', 'Animale', 'Bosco', 'Stagione', 'Licenza', 'Preda', 'Mirare', 'Sparare'] },
  { guessWord: 'Birdwatching', forbiddenWords: ['Uccelli', 'Binocolo', 'Osservare', 'Natura', 'Volo', 'Piume', 'Guida', 'Specie'] },
  { guessWord: 'Filatelia', forbiddenWords: ['Francobolli', 'Collezione', 'Album', 'Busta', 'Posta', 'Valore', 'Pinzette', 'Raro'] },
  { guessWord: 'Numismatica', forbiddenWords: ['Monete', 'Collezione', 'Valore', 'Album', 'Antica', 'Zecca', 'Metallo', 'Rara'] },
  { guessWord: 'Fumettistica', forbiddenWords: ['Fumetti', 'Collezione', 'Albo', 'Supereroe', 'Vignetta', 'Edicola', 'Numero', 'Raro'] },
  { guessWord: 'Giocoleria', forbiddenWords: ['Palline', 'Clave', 'Lanciare', 'Aria', 'Equilibrio', 'Circo', 'Artista', 'Numero'] },
  
  // --- Giochi e Hobby da Tavolo / Mente ---
  { guessWord: 'Scacchi', forbiddenWords: ['Scacchiera', 'Re', 'Regina', 'Alfiere', 'Mossa', 'Strategia', 'Bianco', 'Nero'] },
  { guessWord: 'Dama', forbiddenWords: ['Pedine', 'Damiera', 'Soffio', 'Mangiata', 'Bianco', 'Nero', 'Tris', 'Casella'] },
  { guessWord: 'Poker', forbiddenWords: ['Carte', 'Fiches', 'Bluff', 'Puntare', 'Scala reale', 'Mano', 'Tavolo', 'Mazzo'] },
  { guessWord: 'Briscola', forbiddenWords: ['Carte', 'Mazzo', 'Carico', 'Punti', 'Seme', 'Asso', 'Tre', 'Partita'] },
  { guessWord: 'Scopa', forbiddenWords: ['Carte', 'Primiera', 'Settebello', 'Denari', 'Mazzo', 'Punti', 'Tavolo', 'Partita'] },
  { guessWord: 'Risiko', forbiddenWords: ['Carri armati', 'Dadi', 'Territori', 'Obiettivo', 'Mappa', 'Guerra', 'Conquistare', 'Strategia'] },
  { guessWord: 'Monopoli', forbiddenWords: ['Soldi', 'Tabellone', 'Contratto', 'Casa', 'Albergo', 'Prigione', 'Parco della Vittoria', 'Pedina'] },
  { guessWord: 'Puzzle', forbiddenWords: ['Tasselli', 'Incastrare', 'Immagine', 'Pezzi', 'Scatola', 'Comporre', 'Mille', 'Pazienza'] },
  { guessWord: 'Cruciverba', forbiddenWords: ['Parole', 'Definizioni', 'Schema', 'Caselle', 'Orizzontale', 'Verticale', 'Settimana Enigmistica', 'Penna'] },
  { guessWord: 'Sudoku', forbiddenWords: ['Numeri', 'Schema', 'Griglia', 'Casella', 'Logica', 'Nove', 'Risolvere', 'Giappone'] },
  { guessWord: 'Lego', forbiddenWords: ['Mattoncini', 'Costruzioni', 'Incastrare', 'Omino', 'Pezzi', 'Kit', 'Colorati', 'Plastica'] },
  { guessWord: 'Videogioco', forbiddenWords: ['Console', 'Computer', 'Joystick', 'Giocare', 'Livello', 'Personaggio', 'Schermo', 'Partita'] },
  { guessWord: 'Cosplay', forbiddenWords: ['Costume', 'Personaggio', 'Fiera', 'Manga', 'Anime', 'Travestimento', 'Interpretare', 'Accessori'] },
  { guessWord: 'Drone', forbiddenWords: ['Volare', 'Telecomando', 'Eliche', 'Ripresa', 'Aria', 'Pilotare', 'Quadricottero', 'Video'] },
  { guessWord: 'Podcast', forbiddenWords: ['Audio', 'Ascoltare', 'Episodio', 'Voce', 'Microfono', 'Registrare', 'Programma', 'Streaming'] },
  
  // Categoria: Cibo, Bevande e Ristoranti (Espansione Massiccia)
  // --- Primi Piatti ---
  { guessWord: 'Risotto', forbiddenWords: ['Riso', 'Mantecare', 'Brodo', 'Cipolla', 'Vino', 'Carnaroli', 'Zafferano', 'Primo'] },
  { guessWord: 'Lasagne', forbiddenWords: ['Sfoglia', 'Besciamella', 'Ragù', 'Forno', 'Strati', 'Pasta', 'Carnevale', 'Teglia'] },
  { guessWord: 'Gnocchi', forbiddenWords: ['Patate', 'Farina', 'Acqua', 'Bollire', 'Forma', 'Primo', 'Rigati', 'Galleggiare'] },
  { guessWord: 'Zuppa', forbiddenWords: ['Liquida', 'Calda', 'Cucchiaio', 'Verdure', 'Brodo', 'Piatto fondo', 'Minestra', 'Ciotola'] },
  { guessWord: 'Minestrone', forbiddenWords: ['Verdure', 'Pezzi', 'Cucchiaio', 'Caldo', 'Legumi', 'Sano', 'Zuppa', 'Pentola'] },
  { guessWord: 'Tortellini', forbiddenWords: ['Brodo', 'Ripieno', 'Pasta', 'Carne', 'Ombelico', 'Bologna', 'Panna', 'Prosciutto'] },
  { guessWord: 'Ravioli', forbiddenWords: ['Ripieno', 'Pasta', 'Ricotta', 'Spinaci', 'Quadrato', 'Burro', 'Salvia', 'Fagottino'] },
  { guessWord: 'Carbonara', forbiddenWords: ['Guanciale', 'Uovo', 'Pecorino', 'Spaghetti', 'Crema', 'Pancetta', 'Pepe', 'Roma'] },
  { guessWord: 'Amatriciana', forbiddenWords: ['Guanciale', 'Pomodoro', 'Pecorino', 'Peperoncino', 'Pasta', 'Sugo', 'Cipolla', 'Spaghetti'] },
  { guessWord: 'Pesto', forbiddenWords: ['Basilico', 'Pinoli', 'Aglio', 'Olio', 'Parmigiano', 'Salsa', 'Genova', 'Verde'] },
  { guessWord: 'Polenta', forbiddenWords: ['Farina di mais', 'Gialla', 'Paiolo', 'Montagna', 'Tagliere', 'Formaggio', 'Salsiccia', 'Consistente'] },
  { guessWord: 'Couscous', forbiddenWords: ['Semola', 'Verdure', 'Carne', 'Africa', 'Granelli', 'Incocciare', 'Piatto unico', 'Speziato'] },
  { guessWord: 'Tagliatelle', forbiddenWords: ['Pasta all\'uovo', 'Sfoglia', 'Ragù', 'Mattarello', 'Strisce', 'Bologna', 'Nido', 'Ruvida'] },
  { guessWord: 'Cannelloni', forbiddenWords: ['Pasta', 'Ripieni', 'Forno', 'Besciamella', 'Tubo', 'Ricotta', 'Sugo', 'Gratinati'] },
  { guessWord: 'Passatelli', forbiddenWords: ['Brodo', 'Pangrattato', 'Parmigiano', 'Uovo', 'Ferro', 'Limone', 'Romagna', 'Filamenti'] },

  // --- Secondi di Carne ---
  { guessWord: 'Bistecca', forbiddenWords: ['Carne', 'Fiorentina', 'Griglia', 'Sangue', 'Cottura', 'Osso', 'Manzo', 'Rossa'] },
  { guessWord: 'Cotoletta', forbiddenWords: ['Milanese', 'Orecchia d\'elefante', 'Carne', 'Impanata', 'Fritta', 'Burro', 'Limone', 'Sottile'] },
  { guessWord: 'Pollo', forbiddenWords: ['Arrosto', 'Forno', 'Coscia', 'Petto', 'Spiedo', 'Aia', 'Bianca', 'Pelle'] },
  { guessWord: 'Arrosto', forbiddenWords: ['Carne', 'Forno', 'Domenica', 'Fetta', 'Patate', 'Lentamente', 'Sugo', 'Legato'] },
  { guessWord: 'Polpette', forbiddenWords: ['Carne macinata', 'Sugo', 'Fritte', 'Pane', 'Tonde', 'Nonna', 'Morbide', 'Seconda'] },
  { guessWord: 'Salsiccia', forbiddenWords: ['Carne', 'Maiale', 'Griglia', 'Panino', 'Budello', 'Norcino', 'Insaccato', 'Spezie'] },
  { guessWord: 'Hamburger', forbiddenWords: ['Panino', 'Carne', 'Macinata', 'Patatine', 'America', 'Griglia', 'Medaglione', 'Fast food'] },
  { guessWord: 'Spezzatino', forbiddenWords: ['Carne', 'Stufato', 'Pentola', 'Bocconcini', 'Umid', 'Lento', 'Patate', 'Piselli'] },
  { guessWord: 'Agnello', forbiddenWords: ['Pasqua', 'Forno', 'Costolette', 'Carne', 'Pecora', 'Patate', 'Scottadito', 'Dolce'] },
  { guessWord: 'Maiale', forbiddenWords: ['Carne', 'Costine', 'Braciola', 'Filetto', 'Grasso', 'Rosa', 'Arrosto', 'Salame'] },
  { guessWord: 'Coniglio', forbiddenWords: ['Carne bianca', 'Forno', 'Cacciatora', 'Olive', 'Delicato', 'Zampe', 'Gabbia', 'Sapore'] },
  { guessWord: 'Ossobuco', forbiddenWords: ['Midollo', 'Carne', 'Milano', 'Gremolada', 'Rotondo', 'Stinco', 'Lento', 'Forchetta'] },
  { guessWord: 'Trippa', forbiddenWords: ['Stomaco', 'Povero', 'Umid', 'Sugo', 'Piatto', 'Frattaglie', 'Lenta cottura', 'Consistenza'] },
  { guessWord: 'Wurstel', forbiddenWords: ['Panino', 'Hot dog', 'Germania', 'Maiale', 'Griglia', 'Crauti', 'Senape', 'Salsicciotto'] },

  // --- Secondi di Pesce ---
  { guessWord: 'Salmone', forbiddenWords: ['Rosa', 'Affumicato', 'Tartina', 'Pesce', 'Norvegia', 'Grasso', 'Lische', 'Fresco'] },
  { guessWord: 'Tonno', forbiddenWords: ['Scatoletta', 'Pesce', 'Olio', 'Pinne gialle', 'Mediterraneo', 'Fresco', 'Insalata', 'Trancio'] },
  { guessWord: 'Orata', forbiddenWords: ['Pesce', 'Forno', 'Sale', 'Bianco', 'Lische', 'Patate', 'Sapore', 'Mare'] },
  { guessWord: 'Gambero', forbiddenWords: ['Crostaceo', 'Rosa', 'Coda', 'Sgusciare', 'Insalata', 'Cocktail', 'Antenne', 'Mazzancolla'] },
  { guessWord: 'Cozze', forbiddenWords: ['Frutti di mare', 'Nere', 'Guscio', 'Vongole', 'Sauté', 'Impepata', 'Limone', 'Filo'] },
  { guessWord: 'Vongole', forbiddenWords: ['Frutti di mare', 'Sabbia', 'Spaghetti', 'Guscio', 'Veraci', 'Sauté', 'Apertura', 'Bianco'] },
  { guessWord: 'Polpo', forbiddenWords: ['Tentacoli', 'Ventose', 'Patate', 'Insalata', 'Mollusco', 'Scoglio', 'Lessare', 'Morbido'] },
  { guessWord: 'Calamaro', forbiddenWords: ['Anelli', 'Fritto', 'Mollusco', 'Inchiostro', 'Tentacoli', 'Ripieno', 'Seppia', 'Bianco'] },
  { guessWord: 'Frittura', forbiddenWords: ['Pesce', 'Olio', 'Calda', 'Calamari', 'Gamberi', 'Croccante', 'Limone', 'Paranza'] },
  { guessWord: 'Pesce Spada', forbiddenWords: ['Trancio', 'Griglia', 'Mediterraneo', 'Pesce', 'Spada', 'Carne', 'Bianca', 'Liscie'] },
  { guessWord: 'Sogliola', forbiddenWords: ['Pesce', 'Piatto', 'Bianco', 'Limone', 'Mugnaia', 'Lisca', 'Sfilettare', 'Delicato'] },
  { guessWord: 'Acciuga', forbiddenWords: ['Salata', 'Olio', 'Pesce', 'Azzurro', 'Pizza', 'Sott\'olio', 'Lisca', 'Filetto'] },
  { guessWord: 'Astice', forbiddenWords: ['Chele', 'Crostaceo', 'Rosso', 'Pasta', 'Aragosta', 'Guscio', 'Coda', 'Costoso'] },

  // --- Contorni e Verdure ---
  { guessWord: 'Patata', forbiddenWords: ['Fritte', 'Purè', 'Forno', 'Bollita', 'Tubero', 'Gnocchi', 'Buccia', 'Terra'] },
  { guessWord: 'Insalata', forbiddenWords: ['Verde', 'Lattuga', 'Condire', 'Olio', 'Aceto', 'Contorno', 'Fresca', 'Ciotola'] },
  { guessWord: 'Pomodoro', forbiddenWords: ['Rosso', 'Salsa', 'Insalata', 'Pizza', 'Pachino', 'Succo', 'Maturo', 'Verdura'] },
  { guessWord: 'Melanzana', forbiddenWords: ['Parmigiana', 'Viola', 'Fritta', 'Verdura', 'Orto', 'Sott\'olio', 'Tonda', 'Lunga'] },
  { guessWord: 'Zucchina', forbiddenWords: ['Verde', 'Verdura', 'Orto', 'Fiore', 'Trifolata', 'Grigliata', 'Allungata', 'Estiva'] },
  { guessWord: 'Peperone', hiddenWords: ['Giallo', 'Rosso', 'Verde', 'Verdura', 'Peperonata', 'Quadrato', 'Arrosto', 'Semi'] },
  { guessWord: 'Cipolla', hiddenWords: ['Piangere', 'Soffritto', 'Anelli', 'Dorata', 'Rossa', 'Affettare', 'Odore', 'Bulbo'] },
  { guessWord: 'Fungo', hiddenWords: ['Porcino', 'Champignon', 'Bosco', 'Cappello', 'Gambo', 'Trifolato', 'Velenoso', 'Sottobosco'] },
  { guessWord: 'Spinaci', hiddenWords: ['Braccio di Ferro', 'Verdi', 'Foglie', 'Lessati', 'Burro', 'Ricotta', 'Popeye', 'Ferro'] },
  { guessWord: 'Carciofo', hiddenWords: ['Foglie', 'Cuore', 'Spine', 'Duro', 'Romana', 'Lessare', 'Gambo', 'Amaro'] },
  { guessWord: 'Asparago', hiddenWords: ['Verde', 'Punte', 'Selvatico', 'Mazzo', 'Uova', 'Lessare', 'Gambo', 'Turione'] },
  { guessWord: 'Piselli', hiddenWords: ['Verdi', 'Baccello', 'Piccoli', 'Tondi', 'Spezzatino', 'Prosciutto', 'Legume', 'Scatoletta'] },
  { guessWord: 'Lenticchie', hiddenWords: ['Capodanno', 'Zampone', 'Marroni', 'Piccole', 'Legumi', 'Zuppa', 'Secche', 'Fortuna'] },
  { guessWord: 'Broccoli', hiddenWords: ['Verdi', 'Albero', 'Cime', 'Lessati', 'Puglia', 'Odore', 'Cavolo', 'Infiorescenza'] },

  // --- Frutta ---
  { guessWord: 'Mela', forbiddenWords: ['Biancaneve', 'Frutto', 'Rossa', 'Verde', 'Torsolo', 'Gala', 'Granny Smith', 'Succo'] },
  { guessWord: 'Banana', forbiddenWords: ['Gialla', 'Scimmia', 'Sbucciare', 'Casco', 'Frutto', 'Potassio', 'Curva', 'Repubblica delle'] },
  { guessWord: 'Arancia', forbiddenWords: ['Spremuta', 'Vitamina C', 'Agrume', 'Succo', 'Spicchio', 'Pelle', 'Rossa', 'Tarocco'] },
  { guessWord: 'Fragola', forbiddenWords: ['Rossa', 'Panna', 'Piccola', 'Puntini', 'Frutto', 'Macedonia', 'Torta', 'Primavera'] },
  { guessWord: 'Uva', forbiddenWords: ['Vino', 'Grappolo', 'Chicco', 'Bianca', 'Nera', 'Frutto', 'Vendemmia', 'Acino'] },
  { guessWord: 'Limone', forbiddenWords: ['Giallo', 'Aspro', 'Spremuta', 'Agrume', 'Tè', 'Succo', 'Sorbetto', 'Buccia'] },
  { guessWord: 'Anguria', forbiddenWords: ['Estate', 'Rossa', 'Semi', 'Verde', 'Fetta', 'Grande', 'Fresca', 'Cocomero'] },
  { guessWord: 'Pesca', forbiddenWords: ['Frutto', 'Nocciolo', 'Vellutata', 'Gialla', 'Succo', 'Sciroppata', 'Noce', 'Pelle'] },
  { guessWord: 'Pera', forbiddenWords: ['Frutto', 'Formaggio', 'Goccia', 'Dolce', 'Succo', 'Torsolo', 'Abate', 'Contadino'] },
  { guessWord: 'Ciliegia', forbiddenWords: ['Coppia', 'Rossa', 'Picciolo', 'Nocciolo', 'Frutto', 'Orecchino', 'Durone', 'Una tira l\'altra'] },
  { guessWord: 'Ananas', forbiddenWords: ['Esotico', 'Giallo', 'Ciuffo', 'Frutto', 'Fette', 'Tropicale', 'Succo', 'Duro'] },
  { guessWord: 'Kiwi', forbiddenWords: ['Verde', 'Marrone', 'Pelliccia', 'Frutto', 'Semi neri', 'Vitamina C', 'Acido', 'Tropicale'] },
  { guessWord: 'Melone', forbiddenWords: ['Estate', 'Arancione', 'Prosciutto', 'Fette', 'Semi', 'Dolce', 'Frutto', 'Reticolo'] },
  { guessWord: 'Mirtillo', forbiddenWords: ['Blu', 'Bosco', 'Piccolo', 'Yogurt', 'Frutto', 'Bacche', 'Antiossidante', 'Marmellata'] },

  // --- Dolci e Pasticceria ---
  { guessWord: 'Torta', forbiddenWords: ['Compleanno', 'Candeline', 'Fetta', 'Dolce', 'Forno', 'Crema', 'Panna', 'Soffice'] },
  { guessWord: 'Tiramisù', forbiddenWords: ['Savoiardi', 'Mascarpone', 'Caffè', 'Cacao', 'Uova', 'Dolce', 'Cucchiaio', 'Freddo'] },
  { guessWord: 'Biscotto', forbiddenWords: ['Latte', 'Colazione', 'Inzuppare', 'Farina', 'Scatola', 'Dolce', 'Secco', 'Formina'] },
  { guessWord: 'Cornetto', forbiddenWords: ['Cappuccino', 'Colazione', 'Brioche', 'Marmellata', 'Crema', 'Sfoglia', 'Bar', 'Caldo'] },
  { guessWord: 'Panna Cotta', forbiddenWords: ['Dolce', 'Cucchiaio', 'Budino', 'Latte', 'Caramello', 'Sformato', 'Bianca', 'Gelatina'] },
  { guessWord: 'Cannolo', forbiddenWords: ['Sicilia', 'Ricotta', 'Cialda', 'Canditi', 'Dolce', 'Fritto', 'Pistacchio', 'Scorza'] },
  { guessWord: 'Panettone', forbiddenWords: ['Natale', 'Milano', 'Canditi', 'Uvetta', 'Lievitato', 'Alto', 'Dolce', 'Fetta'] },
  { guessWord: 'Pandoro', forbiddenWords: ['Natale', 'Verona', 'Zucchero a velo', 'Stella', 'Soffice', 'Burro', 'Dolce', 'Alto'] },
  { guessWord: 'Marmellata', forbiddenWords: ['Frutta', 'Fette biscottate', 'Zucchero', 'Conserva', 'Vasetto', 'Spalmare', 'Crostata', 'Colazione'] },
  { guessWord: 'Nutella', forbiddenWords: ['Nocciola', 'Cacao', 'Crema', 'Spalmabile', 'Vasetto', 'Cucchiaino', 'Pane', 'Ferrero'] },
  { guessWord: 'Meringa', forbiddenWords: ['Bianca', 'Albume', 'Zucchero', 'Spumone', 'Croccante', 'Dolce', 'Leggera', 'Forn'] },
  { guessWord: 'Budino', forbiddenWords: ['Cucchiaio', 'Latte', 'Cioccolato', 'Vaniglia', 'Formina', 'Dolce', 'Freddo', 'Cremoso'] },
  { guessWord: 'Crepe', forbiddenWords: ['Sottile', 'Nutella', 'Francia', 'Padella', 'Dolce', 'Salata', 'Piegata', 'Impasto'] },
  { guessWord: 'Muffin', forbiddenWords: ['Dolcetto', 'Pirottino', 'America', 'Cioccolato', 'Forno', 'Gocce', 'Soffice', 'Torta piccola'] },
  { guessWord: 'Pancake', forbiddenWords: ['Colazione', 'Sciroppo d\'acero', 'America', 'Pila', 'Tondi', 'Padella', 'Impasto', 'Soffici'] },

  // --- Bevande ---
  { guessWord: 'Acqua', forbiddenWords: ['Sete', 'Bere', 'Bottiglia', 'Bicchiere', 'Naturale', 'Frizzante', 'Sorgente', 'Liquido'] },
  { guessWord: 'Birra', forbiddenWords: ['Bionda', 'Rossa', 'Schiuma', 'Luppolo', 'Malto', 'Spina', 'Boccale', 'Artigianale'] },
  { guessWord: 'Succo di frutta', forbiddenWords: ['Arancia', 'Pera', 'Pesca', 'Bere', 'Bicchiere', 'Brick', 'Frullato', 'Liquido'] },
  { guessWord: 'Spremuta', forbiddenWords: ['Arancia', 'Limone', 'Agrumi', 'Fresca', 'Vitamina', 'Succo', 'Colazione', 'Spremere'] },
  { guessWord: 'Tè', forbiddenWords: ['Caldo', 'Bustina', 'Limone', 'Filtro', 'Foglie', 'Infuso', 'Bollitore', 'Cinque'] },
  { guessWord: 'Latte', forbiddenWords: ['Bianco', 'Mucca', 'Colazione', 'Cereali', 'Bollire', 'Calcio', 'Intero', 'Scremato'] },
  { guessWord: 'Cappuccino', forbiddenWords: ['Cornetto', 'Caffè', 'Latte', 'Schiuma', 'Bar', 'Colazione', 'Tazza', 'Cacao'] },
  { guessWord: 'Spumante', forbiddenWords: ['Bicchiere', 'Botti', 'Festa', 'Tappo', 'Bollicine', 'Brindisi', 'Frizzante', 'Asti'] },
  { guessWord: 'Cocktail', forbiddenWords: ['Barman', 'Mescolare', 'Ghiaccio', 'Alcolico', 'Shaker', 'Drink', 'Aperitivo', 'Bicchiere'] },
  { guessWord: 'Spritz', forbiddenWords: ['Aperitivo', 'Aperol', 'Prosecco', 'Arancione', 'Oliva', 'Fetta', 'Veneto', 'Bicchiere'] },
  { guessWord: 'Grappa', forbiddenWords: ['Distillato', 'Vinaccia', 'Alcolica', 'Secca', 'Barricata', 'Bicchiere piccolo', 'Forte', 'Fine pasto'] },
  { guessWord: 'Frullato', forbiddenWords: ['Frutta', 'Latte', 'Yogurt', 'Denso', 'Bere', 'Mixer', 'Fresco', 'Bicchiere'] },

  // --- Salumi, Formaggi e Antipasti ---
  { guessWord: 'Prosciutto', forbiddenWords: ['Crudo', 'Cotto', 'Salume', 'Maiale', 'Affettato', 'Panino', 'Melone', 'Parma'] },
  { guessWord: 'Salame', forbiddenWords: ['Affettato', 'Panino', 'Grasso', 'Pepe', 'Milano', 'Ungherese', 'Insaccato', 'Felino'] },
  { guessWord: 'Mortadella', forbiddenWords: ['Bologna', 'Pistacchio', 'Rosa', 'Grande', 'Affettato', 'Panino', 'Salume', 'Tonda'] },
  { guessWord: 'Mozzarella', forbiddenWords: ['Formaggio', 'Bianca', 'Pizza', 'Latte', 'Bufala', 'Caprese', 'Filante', 'Fresca'] },
  { guessWord: 'Parmigiano', forbiddenWords: ['Formaggio', 'Grattugiato', 'Pasta', 'Reggiano', 'Stagionato', 'Scaglie', 'Duro', 'Emilia'] },
  { guessWord: 'Gorgonzola', forbiddenWords: ['Formaggio', 'Muffa', 'Blu', 'Erbirinato', 'Cremoso', 'Piccante', 'Puzza', 'Dolce'] },
  { guessWord: 'Pecorino', forbiddenWords: ['Formaggio', 'Pecora', 'Latte', 'Romano', 'Sardo', 'Stagionato', 'Carbonara', 'Fave'] },
  { guessWord: 'Ricotta', forbiddenWords: ['Formaggio', 'Fresco', 'Ravioli', 'Dolce', 'Salata', 'Bianca', 'Siero', 'Leggera'] },
  { guessWord: 'Bruschetta', forbiddenWords: ['Pane', 'Aglio', 'Olio', 'Pomodoro', 'Antipasto', 'Tostato', 'Fetta', 'Strofinare'] },
  { guessWord: 'Speck', forbiddenWords: ['Affumicato', 'Salume', 'Alto Adige', 'Ginepro', 'Montagna', 'Crudo', 'Sottile', 'Panino'] },
  
  // --- Condimenti, Ingredienti e Preparazioni ---
  { guessWord: 'Olio', forbiddenWords: ['Extravergine', 'Oliva', 'Condimento', 'Spremuta', 'Verde', 'Crudo', 'Friggere', 'Goccia'] },
  { guessWord: 'Sale', forbiddenWords: ['Condimento', 'Salare', 'Marino', 'Grosso', 'Fino', 'Acqua', 'Sapore', 'Cristalli'] },
  { guessWord: 'Pepe', forbiddenWords: ['Nero', 'Macinare', 'Grani', 'Spezia', 'Piccante', 'Cacio', 'Aromatico', 'Polvere'] },
  { guessWord: 'Aceto', forbiddenWords: ['Balsamico', 'Insalata', 'Vino', 'Agro', 'Condimento', 'Modena', 'Trasparente', 'Odore'] },
  { guessWord: 'Maionese', forbiddenWords: ['Salsa', 'Uova', 'Olio', 'Limone', 'Vasetto', 'Patatine', 'Gialla', 'Tonnata'] },
  { guessWord: 'Ketchup', forbiddenWords: ['Salsa', 'Pomodoro', 'Rossa', 'Patatine', 'Hamburger', 'America', 'Dolce', 'Bottiglia'] },
  { guessWord: 'Farina', forbiddenWords: ['Grano', 'Polvere', 'Impasto', 'Pane', 'Pizza', 'Setacciare', 'Bianca', 'Tipo 00'] },
  { guessWord: 'Uovo', forbiddenWords: ['Gallina', 'Rosso', 'Albume', 'Tuorlo', 'Frittata', 'Sodo', 'Guscio', 'Fresco'] },
  { guessWord: 'Zucchero', forbiddenWords: ['Dolce', 'Bianco', 'Canna', 'Caffè', 'Carie', 'Cristalli', 'Zolletta', 'Velo'] },
  { guessWord: 'Burro', forbiddenWords: ['Grasso', 'Panetto', 'Latte', 'Giallo', 'Fuso', 'Cucina', 'Spalmare', 'Morbido'] },
  { guessWord: 'Lievito', forbiddenWords: ['Gonfiare', 'Impasto', 'Birra', 'Pane', 'Pizza', 'Polvere', 'Cubetto', 'Madre'] },
  { guessWord: 'Impasto', forbiddenWords: ['Farina', 'Acqua', 'Lievito', 'Lavorare', 'Pizza', 'Pane', 'Mani', 'Massa'] },
  { guessWord: 'Soffritto', forbiddenWords: ['Base', 'Cipolla', 'Carota', 'Sedano', 'Olio', 'Inizio', 'Cucina', 'Rosolare'] },
  { guessWord: 'Brodo', forbiddenWords: ['Liquido', 'Carne', 'Verdure', 'Caldo', 'Tortellini', 'Dado', 'Zuppa', 'Bollire'] },
  { guessWord: 'Grigliare', forbiddenWords: ['Carne', 'Pesce', 'Brace', 'Carbonella', 'Fuoco', 'Cuocere', 'All\'aperto', 'Rosticciana'] },

  // --- Mondo della Ristorazione e Oggetti ---
  { guessWord: 'Menù', forbiddenWords: ['Lista', 'Ristorante', 'Cameriere', 'Piatti', 'Prezzo', 'Ordinare', 'Carta', 'Scelta'] },
  { guessWord: 'Conto', forbiddenWords: ['Pagare', 'Ristorante', 'Cameriere', 'Soldi', 'Scontrino', 'Totale', 'Prezzo', 'Calcolo'] },
  { guessWord: 'Chef', forbiddenWords: ['Cucina', 'Cuoco', 'Ristorante', 'Capo', 'Stellato', 'Piatto', 'Brigata', 'Cappello'] },
  { guessWord: 'Sommelier', forbiddenWords: ['Vino', 'Ristorante', 'Assaggiare', 'Calice', 'Bottiglia', 'Cantina', 'Abbinamento', 'Stappare'] },
  { guessWord: 'Forchetta', forbiddenWords: ['Posata', 'Mangiare', 'Denti', 'Coltello', 'Infilzare', 'Tavola', 'Pasta', 'Acciaio'] },
  { guessWord: 'Coltello', forbiddenWords: ['Lama', 'Tagliare', 'Forchetta', 'Affilato', 'Carne', 'Tavola', 'Posata', 'Manico'] },
  { guessWord: 'Cucchiaio', forbiddenWords: ['Zuppa', 'Minestra', 'Posata', 'Mangiare', 'Brodo', 'Curvo', 'Tavola', 'Mescolare'] },
  { guessWord: 'Piatto', forbiddenWords: ['Portata', 'Cibo', 'Fondo', 'Piano', 'Portata', 'Stoviglia', 'Ceramica', 'Tavola'] },
  { guessWord: 'Bicchiere', forbiddenWords: ['Bere', 'Acqua', 'Vino', 'Vetro', 'Calice', 'Riempire', 'Trasparente', 'Sete'] },
  { guessWord: 'Pentola', forbiddenWords: ['Acqua', 'Pasta', 'Cuocere', 'Fornello', 'Coperchio', 'Bollire', 'Manici', 'Alta'] },
  { guessWord: 'Padella', forbiddenWords: ['Friggere', 'Uovo', 'Fornello', 'Manico', 'Bassa', 'Antiaderente', 'Saltare', 'Rotonda'] },
  { guessWord: 'Ricetta', forbiddenWords: ['Ingredienti', 'Dosi', 'Preparazione', 'Libro', 'Procedimento', 'Cucina', 'Seguire', 'Nonna'] },
  { guessWord: 'Grembiule', forbiddenWords: ['Indossare', 'Cucina', 'Sporcarsi', 'Cuoco', 'Laccetti', 'Davanti', 'Stoffa', 'Chef'] },
  { guessWord: 'Mancia', forbiddenWords: ['Cameriere', 'Servizio', 'Soldi', 'Conto', 'Lasciare', 'Ristorante', 'Cliente', 'Extra'] },
  { guessWord: 'Prenotazione', forbiddenWords: ['Ristorante', 'Telefono', 'Tavolo', 'Orario', 'Nome', 'Posto', 'Riservare', 'Chiamare'] },
  
  // Categoria: Animali e Mondo Animale (Espansione)
  // --- Mammiferi (Domestici e da Fattoria) ---
  { guessWord: 'Cavallo', forbiddenWords: ['Sella', 'Galoppo', 'Montare', 'Criniera', 'Zoccolo', 'Corsa', 'Stalla', 'Equitazione'] },
  { guessWord: 'Asino', forbiddenWords: ['Orecchie lunghe', 'Somaro', 'Raglio', 'Testardo', 'Groppa', 'Carico', 'Mulo', 'Presepe'] },
  { guessWord: 'Mucca', forbiddenWords: ['Latte', 'Mungere', 'Pascolo', 'Stalla', 'Corna', 'Manzo', 'Vitello', 'Campana'] },
  { guessWord: 'Toro', forbiddenWords: ['Corrida', 'Corna', 'Maschio', 'Mucca', 'Arena', 'Spagna', 'Rosso', 'Carica'] },
  { guessWord: 'Pecora', forbiddenWords: ['Lana', 'Gregge', 'Bela', 'Agnello', 'Pascolo', 'Formaggio', 'Tosare', 'Bianca'] },
  { guessWord: 'Capra', forbiddenWords: ['Barba', 'Corna', 'Latte', 'Formaggio', 'Montagna', 'Tibetana', 'Capretto', 'Arrampicarsi'] },
  { guessWord: 'Criceto', forbiddenWords: ['Ruota', 'Gabbia', 'Guance', 'Roditore', 'Domestico', 'Semi', 'Lettera', 'Piccolo'] },
  { guessWord: 'Maiale', forbiddenWords: ['Porco', 'Fango', 'Grufolare', 'Rosa', 'Salame', 'Prosciutto', 'Coda a ricciolo', 'Fattoria'] },
  { guessWord: 'Gallina', forbiddenWords: ['Uovo', 'Pollo', 'Gallo', 'Chicchirichì', 'Aia', 'Penne', 'Covare', 'Pollame'] },
  { guessWord: 'Gallo', forbiddenWords: ['Chicchirichì', 'Cresta', 'Sveglia', 'Pollaio', 'Maschio', 'Gallina', 'Canto', 'Aia'] },
  { guessWord: 'Tacchino', forbiddenWords: ['Giorno del Ringraziamento', 'Gargarismi', 'Uccello', 'Pennuto', 'America', 'Penne', 'Rosso', 'Grande'] },
  { guessWord: 'Furetto', forbiddenWords: ['Domestico', 'Allungato', 'Visone', 'Gabbia', 'Dormire', 'Animale', 'Puzzola', 'Mustelide'] },

  // --- Mammiferi (Selvatici) ---
  { guessWord: 'Elefante', forbiddenWords: ['Proboscide', 'Zanne', 'Avorio', 'Grande', 'Africa', 'Orecchie', 'Barrito', 'Memoria'] },
  { guessWord: 'Tigre', forbiddenWords: ['Strisce', 'Felino', 'Giungla', 'Gatto', 'Bengala', 'Grande', 'Caccia', 'Arancione'] },
  { guessWord: 'Giraffa', forbiddenWords: ['Collo lungo', 'Macchie', 'Savana', 'Africa', 'Alta', 'Foglie', 'Gambe', 'Animale'] },
  { guessWord: 'Zebra', forbiddenWords: ['Strisce', 'Bianco e nero', 'Cavallo', 'Savana', 'Africa', 'Gregge', 'Ippodromo', 'Criniere'] },
  { guessWord: 'Rinoceronte', forbiddenWords: ['Corno', 'Africa', 'Grigio', 'Grande', 'Pelle', 'Carica', 'Savana', 'Animale'] },
  { guessWord: 'Ippopotamo', forbiddenWords: ['Fiume', 'Acqua', 'Grande', 'Bocca', 'Grosso', 'Africa', 'Anfibio', 'Bagno'] },
  { guessWord: 'Scimmia', forbiddenWords: ['Banana', 'Albero', 'Arrampicarsi', 'Tarzan', 'Coda', 'Urlare', 'Imitare', 'Primate'] },
  { guessWord: 'Gorilla', forbiddenWords: ['Scimmione', 'Petto', 'King Kong', 'Forza', 'Primate', 'Giungla', 'Argentato', 'Montagna'] },
  { guessWord: 'Lupo', forbiddenWords: ['Branco', 'Ululare', 'Foresta', 'Cappuccetto Rosso', 'Caccia', 'Notte', 'Selvatico', 'Zanne'] },
  { guessWord: 'Orso', forbiddenWords: ['Letargo', 'Tana', 'Miele', 'Grizzly', 'Polare', 'Grande', 'Pelliccia', 'Yoghi'] },
  { guessWord: 'Volpe', forbiddenWords: ['Astuta', 'Coda', 'Pollaio', 'Favola', 'Rossa', 'Tana', 'Pelliccia', 'Animale'] },
  { guessWord: 'Cervo', forbiddenWords: ['Corna', 'Palchi', 'Bambi', 'Foresta', 'Animale', 'Maschio', 'Bramito', 'Riserva'] },
  { guessWord: 'Cinghiale', forbiddenWords: ['Setole', 'Zanne', 'Caccia', 'Bosco', 'Maiale', 'Selvatico', 'Pappardelle', 'Grufolare'] },
  { guessWord: 'Scoiattolo', forbiddenWords: ['Ghianda', 'Coda', 'Albero', 'Nocciolina', 'Cip e Ciop', 'Rosicchiare', 'Pelo', 'Scorta'] },
  { guessWord: 'Riccio', forbiddenWords: ['Aculei', 'Pungiglione', 'Appallottolarsi', 'Spine', 'Difesa', 'Notturno', 'Animale', 'Sonic'] },
  { guessWord: 'Panda', forbiddenWords: ['Bambù', 'Cina', 'Bianco e Nero', 'Orso', 'Gigante', 'Raro', 'Simpatico', 'Lento'] },
  { guessWord: 'Koala', forbiddenWords: ['Eucalipto', 'Australia', 'Marsupiale', 'Orsetto', 'Dorme', 'Albero', 'Morbido', 'Grigio'] },
  { guessWord: 'Canguro', forbiddenWords: ['Marsupio', 'Saltare', 'Australia', 'Coda', 'Boxe', 'Cucciolo', 'Gambe', 'Animale'] },
  { guessWord: 'Dromedario', forbiddenWords: ['Gobba', 'Deserto', 'Cammello', 'Sabbia', 'Carovana', 'Caldo', 'Oasi', 'Una'] },
  { guessWord: 'Cammello', forbiddenWords: ['Gobbe', 'Deserto', 'Dromedario', 'Sabbia', 'Carovana', 'Caldo', 'Oasi', 'Due'] },
  { guessWord: 'Pipistrello', forbiddenWords: ['Notte', 'Grotta', 'Vampiro', 'Appeso', 'Volare', 'Ultrasuoni', 'Batman', 'Ali'] },
  { guessWord: 'Talpa', forbiddenWords: ['Sottoterra', 'Galleria', 'Scavare', 'Buio', 'Occhi', 'Giardino', 'Cieca', 'Mucchio'] },
  { guessWord: 'Marmotta', forbiddenWords: ['Letargo', 'Montagna', 'Fischio', 'Tana', 'Animale', 'Giorno della', 'Pelliccia', 'Alpi'] },
  { guessWord: 'Castoro', forbiddenWords: ['Diga', 'Legno', 'Denti', 'Fiume', 'Coda piatta', 'Costruire', 'Ramo', 'Tana'] },
  { guessWord: 'Ghepardo', forbiddenWords: ['Veloce', 'Corsa', 'Maculato', 'Savana', 'Felino', 'Caccia', 'Scatto', 'Africa'] },
  { guessWord: 'Leopardo', forbiddenWords: ['Macchie', 'Felino', 'Giungla', 'Pantera', 'Agile', 'Albero', 'Notturno', 'Caccia'] },
  { guessWord: 'Iena', forbiddenWords: ['Ridere', 'Savana', 'Spazzino', 'Macchie', 'Re Leone', 'Branco', 'Notturna', 'Carcassa'] },
  { guessWord: 'Puzzola', forbiddenWords: ['Odore', 'Puzza', 'Spruzzo', 'Difesa', 'Fiore', 'Striscia bianca', 'Animale', 'Naso'] },
  
  // --- Mammiferi Marini ---
  { guessWord: 'Delfino', forbiddenWords: ['Mare', 'Saltare', 'Verso', 'Intelligenza', 'Simpatico', 'Pinna', 'Gruppo', 'Flipper'] },
  { guessWord: 'Balena', forbiddenWords: ['Grande', 'Oceano', 'Soffio', 'Canto', 'Capodoglio', 'Azzurra', 'Coda', 'Mammifero'] },
  { guessWord: 'Orca', forbiddenWords: ['Assassina', 'Bianco e nero', 'Balena', 'Predatore', 'Mare', 'Pinna', 'Gruppo', 'Intelligente'] },
  { guessWord: 'Foca', forbiddenWords: ['Baffi', 'Palla', 'Circo', 'Pelliccia', 'Polo', 'Acqua', 'Grassa', 'Monaca'] },
  { guessWord: 'Tricheco', forbiddenWords: ['Zanne', 'Baffi', 'Polo Nord', 'Grasso', 'Grande', 'Mare', 'Ghiaccio', 'Lungo'] },
  { guessWord: 'Lontra', forbiddenWords: ['Fiume', 'Pelliccia', 'Sasso', 'Animale', 'Viso', 'Simpatica', 'Mustelide', 'Giocare'] },
  { guessWord: 'Dugongo', forbiddenWords: ['Lamantino', 'Sirena', 'Mare', 'Mucca', 'Erba', 'Lento', 'Acquatico', 'Mammifero'] },

  // --- Uccelli ---
  { guessWord: 'Aquila', forbiddenWords: ['Rapace', 'Volare', 'Becco', 'Artigli', 'Vista', 'Nido', 'Reale', 'Simbolo'] },
  { guessWord: 'Falco', forbiddenWords: ['Rapace', 'Caccia', 'Piccione', 'Veloce', 'Picchiata', 'Volo', 'Pellegrino', 'Artigli'] },
  { guessWord: 'Gufo', forbiddenWords: ['Notte', 'Saggio', 'Testa', 'Ruotare', 'Uccello', 'Bosco', 'Occhi', 'Anacleto'] },
  { guessWord: 'Civetta', forbiddenWords: ['Notte', 'Uccello', 'Gufo', 'Sfortuna', 'Verso', 'Piume', 'Rapace', 'Vedere'] },
  { guessWord: 'Pappagallo', forbiddenWords: ['Parlare', 'Colorato', 'Ripetere', 'Gabbia', 'Pirata', 'Becco', 'Piume', 'Coco'] },
  { guessWord: 'Canarino', forbiddenWords: ['Gabbia', 'Giallo', 'Canto', 'Uccellino', 'Titti', 'Allevare', 'Domestico', 'Cip'] },
  { guessWord: 'Pinguino', forbiddenWords: ['Ghiaccio', 'Polo Sud', 'Bianco e nero', 'Non vola', 'Nuotare', 'Imperatore', 'Freddo', 'Frac'] },
  { guessWord: 'Struzzo', forbiddenWords: ['Uovo', 'Grande', 'Correre', 'Testa', 'Sabbia', 'Africa', 'Uccello', 'Zampe'] },
  { guessWord: 'Pavone', forbiddenWords: ['Ruota', 'Coda', 'Penne', 'Colorato', 'Vanitoso', 'Maschio', 'Verso', 'Uccello'] },
  { guessWord: 'Cigno', forbiddenWords: ['Lago', 'Bianco', 'Collo', 'Anatroccolo', 'Elegante', 'Uccello', 'Piume', 'Brutto'] },
  { guessWord: 'Gabbiano', forbiddenWords: ['Mare', 'Spiaggia', 'Volare', 'Pesce', 'Porto', 'Uccello', 'Jonathan Livingston', 'Bianco'] },
  { guessWord: 'Piccione', forbiddenWords: ['Città', 'Piazza', 'Statua', 'Gru', 'Volare', 'Colombo', 'Tetto', 'Tubare'] },
  { guessWord: 'Rondine', forbiddenWords: ['Primavera', 'Nido', 'Migrare', 'Coda', 'Uccello', 'Cielo', 'Tornare', 'Filo'] },
  { guessWord: 'Corvo', forbiddenWords: ['Nero', 'Uccello', 'Intelligenza', 'Poesia', 'Becco', 'Gracchiare', 'Cattivo presagio', 'Poe'] },
  { guessWord: 'Passero', forbiddenWords: ['Uccellino', 'Piccolo', 'Cip', 'Tetto', 'Briciole', 'Comune', 'Volare', 'Marrone'] },
  { guessWord: 'Colibrì', forbiddenWords: ['Fiore', 'Nettare', 'Ali', 'Veloce', 'Piccolo', 'Becco lungo', 'Fermo', 'Volare'] },
  { guessWord: 'Pellicano', forbiddenWords: ['Sacca', 'Becco', 'Pesce', 'Mare', 'Grande', 'Uccello', 'Gola', 'Acqua'] },
  { guessWord: 'Fenicottero', forbiddenWords: ['Rosa', 'Gambe lunghe', 'Uccello', 'Stagno', 'Gruppo', 'Una zampa', 'Equilibrio', 'Colore'] },
  { guessWord: 'Condor', forbiddenWords: ['Ande', 'Avvoltoio', 'Grande', 'Volare', 'Ali', 'Rapace', 'Testa', 'Carcassa'] },
  { guessWord: 'Picchio', forbiddenWords: ['Becco', 'Legno', 'Albero', 'Forare', 'Testa', 'Rosso', 'Suono', 'Tronco'] },
  { guessWord: 'Airone', forbiddenWords: ['Zampe lunghe', 'Becco lungo', 'Uccello', 'Acqua', 'Cenerino', 'Fiume', 'Pesce', 'Elegante'] },
  { guessWord: 'Cicogna', forbiddenWords: ['Bambini', 'Nido', 'Becco', 'Portare', 'Uccello', 'Zampe lunghe', 'Tetto', 'Bianca'] },
  
  // --- Rettili e Anfibi ---
  { guessWord: 'Serpente', forbiddenWords: ['Strisciare', 'Velenoso', 'Sonagli', 'Cobra', 'Pelle', 'Sibilare', 'Senza zampe', 'Muta'] },
  { guessWord: 'Coccodrillo', forbiddenWords: ['Fiume', 'Lacrime', 'Denti', 'Alligatore', 'Nilo', 'Pelle', 'Acqua', 'Grande'] },
  { guessWord: 'Lucertola', forbiddenWords: ['Coda', 'Sole', 'Muro', 'Staccare', 'Rettile', 'Verde', 'Piccola', 'Sangue freddo'] },
  { guessWord: 'Tartaruga', forbiddenWords: ['Guscio', 'Lenta', 'Carapace', 'Mare', 'Terra', 'Longevità', 'Corazza', 'Testuggine'] },
  { guessWord: 'Camaleonte', forbiddenWords: ['Colore', 'Cambiare', 'Mimetizzarsi', 'Occhi', 'Lingua', 'Rettile', 'Lento', 'Pelle'] },
  { guessWord: 'Geco', forbiddenWords: ['Muro', 'Soffitto', 'Ventose', 'Zampe', 'Lucertola', 'Notte', 'Fortuna', 'Coda'] },
  { guessWord: 'Iguana', forbiddenWords: ['Rettile', 'Grande', 'Verde', 'Cresta', 'Squame', 'Coda', 'Esotico', 'Terrario'] },
  { guessWord: 'Rana', forbiddenWords: ['Stagno', 'Gracidare', 'Salto', 'Girino', 'Verde', 'Lingua', 'Anfibio', 'Principe'] },
  { guessWord: 'Rospo', forbiddenWords: ['Verruche', 'Brutto', 'Stagno', 'Anfibio', 'Principe', 'Gracidare', 'Notte', 'Pelle'] },
  { guessWord: 'Salamandra', forbiddenWords: ['Anfibio', 'Fuoco', 'Nero', 'Giallo', 'Macchie', 'Umido', 'Pelle', 'Leggenda'] },
  { guessWord: 'Vipera', forbiddenWords: ['Serpente', 'Velenoso', 'Morso', 'Montagna', 'Testa triangolare', 'Strisciare', 'Pericolo', 'Antidoto'] },
  { guessWord: 'Pitone', forbiddenWords: ['Serpente', 'Stritolare', 'Grande', 'Costrittore', 'Non velenoso', 'Giungla', 'Rettile', 'Gabbia'] },

  // --- Pesci ---
  { guessWord: 'Squalo', forbiddenWords: ['Denti', 'Mare', 'Predatore', 'Pinna', 'Pericoloso', 'Bianco', 'Martello', 'Oceano'] },
  { guessWord: 'Pesce Rosso', forbiddenWords: ['Boccia', 'Acquario', 'Memoria', 'Pinne', 'Oro', 'Vetro', 'Casa', 'Nuotare'] },
  { guessWord: 'Piranha', forbiddenWords: ['Denti', 'Fiume', 'Carne', 'Amazzonia', 'Feroci', 'Branco', 'Pesce', 'Pericoloso'] },
  { guessWord: 'Pesce Pagliaccio', forbiddenWords: ['Nemo', 'Anemone', 'Arancione', 'Strisce', 'Corallina', 'Acquario', 'Piccolo', 'Disney'] },
  { guessWord: 'Trota', forbiddenWords: ['Fiume', 'Pesca', 'Salmonata', 'Torrente', 'Acqua dolce', 'Pesce', 'Allevamento', 'Lische'] },
  { guessWord: 'Carpa', forbiddenWords: ['Lago', 'Pesca', 'Baffi', 'Grande', 'Specchi', 'Acqua dolce', 'Pesce', 'Koi'] },
  { guessWord: 'Anguilla', forbiddenWords: ['Serpente', 'Elettrica', 'Lunga', 'Viscida', 'Acqua', 'Pesce', 'Capitone', 'Fiume'] },
  { guessWord: 'Pesce Palla', forbiddenWords: ['Gonfiarsi', 'Aculei', 'Velenoso', 'Giappone', 'Fugu', 'Difesa', 'Tossico', 'Tondo'] },
  { guessWord: 'Manta', forbiddenWords: ['Gigante', 'Ali', 'Mare', 'Piatta', 'Elegante', 'Nuotare', 'Plankton', 'Coda'] },
  { guessWord: 'Cavalluccio Marino', forbiddenWords: ['Cavallo', 'Mare', 'Piccolo', 'Verticale', 'Coda', 'Maschio', 'Incinta', 'Alghe'] },
  
  // --- Insetti e Altri Invertebrati ---
  { guessWord: 'Formica', forbiddenWords: ['Colonia', 'Lavoro', 'Piccola', 'Fila', 'Zucchero', 'Formicaio', 'Regina', 'Cicala'] },
  { guessWord: 'Zanzara', forbiddenWords: ['Puntura', 'Prurito', 'Ronzio', 'Sangue', 'Insetto', 'Fastidiosa', 'Notte', 'Estate'] },
  { guessWord: 'Mosca', forbiddenWords: ['Fastidiosa', 'Ronzio', 'Cibo', 'Veloce', 'Zampe', 'Vetro', 'Cacca', 'Insetto'] },
  { guessWord: 'Farfalla', forbiddenWords: ['Ali', 'Bruco', 'Colorata', 'Volare', 'Fiore', 'Bozzolo', 'Crisalide', 'Leggera'] },
  { guessWord: 'Ragno', forbiddenWords: ['Ragnatela', 'Otto zampe', 'Tela', 'Veleno', 'Insetto', 'Appendere', 'Soffitta', 'Tarantola'] },
  { guessWord: 'Scarafaggio', forbiddenWords: ['Insetto', 'Cucina', 'Antenne', 'Veloce', 'Brutto', 'Blatta', 'Nero', 'Schiacciare'] },
  { guessWord: 'Coccinella', forbiddenWords: ['Fortuna', 'Pois', 'Rossa', 'Nera', 'Insetto', 'Piccola', 'Signora', 'Coleottero'] },
  { guessWord: 'Grillo', forbiddenWords: ['Cantare', 'Notte', 'Salto', 'Insetto', 'Parlante', 'Pinocchio', 'Verso', 'Frinire'] },
  { guessWord: 'Cavalletta', forbiddenWords: ['Salto', 'Verde', 'Prato', 'Insetto', 'Locusta', 'Mangiare', 'Gambe', 'Lunga'] },
  { guessWord: 'Scorpione', forbiddenWords: ['Pungiglione', 'Veleno', 'Coda', 'Deserto', 'Chele', 'Aracnide', 'Nero', 'Pericoloso'] },
  { guessWord: 'Libellula', forbiddenWords: ['Ali', 'Stagno', 'Trasparente', 'Volo', 'Insetto', 'Lunga', 'Elicottero', 'Azzurra'] },
  { guessWord: 'Lumaca', forbiddenWords: ['Lenta', 'Bava', 'Guscio', 'Casa', 'Chiocciola', 'Strisciare', 'Corna', 'Insalata'] },
  { guessWord: 'Lombrico', forbiddenWords: ['Terra', 'Verme', 'Anelli', 'Umidità', 'Pesca', 'Esca', 'Pioggia', 'Terriccio'] },
  { guessWord: 'Ape', forbiddenWords: ['Miele', 'Alveare', 'Regina', 'Ronzio', 'Pungiglione', 'Fiore', 'Sciame', 'Operaia'] },
  { guessWord: 'Vespa', forbiddenWords: ['Pungiglione', 'Giallo', 'Nero', 'Nido', 'Dolore', 'Vespaio', 'Insetto', 'Fastidiosa'] },
  { guessWord: 'Bruco', forbiddenWords: ['Farfalla', 'Mela', 'Strisciare', 'Foglia', 'Verde', 'Bozzolo', 'Trasformazione', 'Larva'] },
  { guessWord: 'Millepiedi', forbiddenWords: ['Zampe', 'Tante', 'Insetto', 'Lungo', 'Arrotolarsi', 'Terra', 'Strisciare', 'Centopiedi'] },
  { guessWord: 'Medusa', forbiddenWords: ['Mare', 'Tentacoli', 'Trasparente', 'Urticante', 'Vescica', 'Spiaggia', 'Galleggiare', 'Ombrello'] },
  { guessWord: 'Stella Marina', forbiddenWords: ['Mare', 'Cinque punte', 'Spiaggia', 'Sabbia', 'Braccia', 'Fondale', 'Patrick', 'Echinoderma'] },
  { guessWord: 'Granchio', forbiddenWords: ['Chele', 'Mare', 'Camminare', 'Spiaggia', 'Di lato', 'Guscio', 'Sabbia', 'Crostaceo'] },

  // --- Concetti del Mondo Animale ---
  { guessWord: 'Cucciolo', forbiddenWords: ['Piccolo', 'Nascita', 'Cane', 'Gatto', 'Bimbo', 'Mamma', 'Tenero', 'Neonato'] },
  { guessWord: 'Nido', forbiddenWords: ['Uccello', 'Uova', 'Albero', 'Paglia', 'Rami', 'Casa', 'Covare', 'Costruire'] },
  { guessWord: 'Tana', forbiddenWords: ['Buco', 'Volpe', 'Coniglio', 'Orso', 'Rifugio', 'Sottoterra', 'Entrata', 'Nascondiglio'] },
  { guessWord: 'Letargo', forbiddenWords: ['Dormire', 'Inverno', 'Orso', 'Freddo', 'Risveglio', 'Marmotta', 'Sospendere', 'Lento'] },
  { guessWord: 'Migrazione', forbiddenWords: ['Spostamento', 'Uccelli', 'Stormo', 'Stagione', 'Caldo', 'Freddo', 'Viaggio', 'Gruppo'] },
  { guessWord: 'Branco', forbiddenWords: ['Lupi', 'Gruppo', 'Capo', 'Insieme', 'Sociale', 'Caccia', 'Gerarchia', 'Mandria'] },
  { guessWord: 'Zampa', forbiddenWords: ['Piede', 'Cane', 'Gatto', 'Quattro', 'Impronta', 'Unghia', 'Animale', 'Camminare'] },
  { guessWord: 'Coda', forbiddenWords: ['Animale', 'Posteriore', 'Scodinzolare', 'Lunga', 'Pelo', 'Movimento', 'Equilibrio', 'Lucertola'] },
  { guessWord: 'Ali', forbiddenWords: ['Volare', 'Uccello', 'Piume', 'Insetto', 'Sbattere', 'Angelo', 'Aereo', 'Pipistrello'] },
  { guessWord: 'Becco', forbiddenWords: ['Uccello', 'Bocca', 'Giallo', 'Pappagallo', 'Mangiare', 'Duro', 'Punta', 'Ornitorinco'] },
  { guessWord: 'Guscio', forbiddenWords: ['Tartaruga', 'Lumaca', 'Uovo', 'Duro', 'Protezione', 'Corazza', 'Rompere', 'Chiocciola'] },
  { guessWord: 'Corna', forbiddenWords: ['Cervo', 'Toro', 'Mucca', 'Testa', 'Palchi', 'Osso', 'Capra', 'Rinoceronte'] },
  { guessWord: 'Pelliccia', forbiddenWords: ['Pelo', 'Orso', 'Volpe', 'Morbida', 'Calda', 'Animale', 'Visone', 'Mantello'] },
  { guessWord: 'Squame', forbiddenWords: ['Pesce', 'Serpente', 'Pelle', 'Rettile', 'Luccicare', 'Dure', 'Corazza', 'Sirena'] },
  { guessWord: 'Muta', forbiddenWords: ['Pelle', 'Serpente', 'Cambiare', 'Crescita', 'Insetto', 'Vecchia', 'Lasciare', 'Periodo'] },
  { guessWord: 'Istinto', forbiddenWords: ['Naturale', 'Animale', 'Sopravvivenza', 'Comportamento', 'Senza pensare', 'Predatore', 'Nascita', 'Primordiale'] },
  { guessWord: 'Predatore', forbiddenWords: ['Cacciare', 'Preda', 'Animale', 'Catena alimentare', 'Leone', 'Squalo', 'Carnivoro', 'Aggressivo'] },
  { guessWord: 'Preda', forbiddenWords: ['Cacciata', 'Predatore', 'Gazzella', 'Zebra', 'Scappare', 'Vittima', 'Mangiare', 'Debole'] },
  { guessWord: 'Habitat', forbiddenWords: ['Ambiente', 'Naturale', 'Casa', 'Vivere', 'Ecosistema', 'Luogo', 'Territorio', 'Animale'] },
  { guessWord: 'Estinzione', forbiddenWords: ['Scomparsa', 'Dinosauri', 'Specie', 'Fine', 'Animale', 'Raro', 'WWF', 'Per sempre'] },
  { guessWord: 'Zoo', forbiddenWords: ['Animali', 'Gabbie', 'Visitare', 'Parco', 'Pubblico', 'Elefante', 'Leone', 'Custode'] },
  { guessWord: 'Acquario', forbiddenWords: ['Pesci', 'Vasca', 'Vetro', 'Acqua', 'Genova', 'Squalo', 'Delfino', 'Visita'] },
  { guessWord: 'Fattoria', forbiddenWords: ['Animali', 'Contadino', 'Mucca', 'Gallina', 'Campagna', 'Stalla', 'Trattore', 'Agriturismo'] },
  { guessWord: 'Savana', forbiddenWords: ['Africa', 'Leone', 'Erba', 'Alberi', 'Caldo', 'Zebra', 'Giallo', 'Pianura'] },
  { guessWord: 'Giungla', forbiddenWords: ['Alberi', 'Fitta', 'Scimmie', 'Tarzan', 'Amazzonia', 'Umidità', 'Verde', 'Liane'] },
  { guessWord: 'Carnivoro', forbiddenWords: ['Carne', 'Mangiare', 'Leone', 'Denti', 'Predatore', 'Dieta', 'Caccia', 'Tirannosauro'] },
  { guessWord: 'Erbivoro', forbiddenWords: ['Erba', 'Piante', 'Mangiare', 'Mucca', 'Dieta', 'Vegetariano', 'Foglie', 'Animale'] },
  { guessWord: 'Onnivoro', forbiddenWords: ['Tutto', 'Mangiare', 'Carne', 'Piante', 'Uomo', 'Orso', 'Dieta', 'Maiale'] },
  { guessWord: 'Addomesticamento', forbiddenWords: ['Uomo', 'Selvatico', 'Cane', 'Animale', 'Allevare', 'Compagnia', 'Casa', 'Controllo'] },
  
  // Categoria: Abbigliamento e Accessori Moda (Espansione)
  // --- Capi Superiori ---
  { guessWord: 'Maglietta', forbiddenWords: ['T-shirt', 'Maniche corte', 'Cotone', 'Indossare', 'Estate', 'Girocollo', 'Stampa', 'Vestito'] },
  { guessWord: 'Camicia', forbiddenWords: ['Colletto', 'Bottoni', 'Maniche', 'Elegante', 'Stirare', 'Uomo', 'Indossare', 'Tessuto'] },
  { guessWord: 'Polo', forbiddenWords: ['Colletto', 'Bottoni', 'Maglietta', 'Piqué', 'Sportiva', 'Lacoste', 'Maniche corte', 'Indossare'] },
  { guessWord: 'Maglione', forbiddenWords: ['Lana', 'Inverno', 'Caldo', 'Maniche lunghe', 'Pullover', 'Collo alto', 'Indossare', 'Freddo'] },
  { guessWord: 'Felpa', forbiddenWords: ['Cappuccio', 'Sportiva', 'Cotone', 'Zip', 'Calda', 'Indossare', 'Tempo libero', 'Tuta'] },
  { guessWord: 'Canottiera', forbiddenWords: ['Senza maniche', 'Spalla', 'Intimo', 'Estate', 'Caldo', 'Indossare', 'Sotto', 'Canotta'] },
  { guessWord: 'Top', forbiddenWords: ['Donna', 'Senza maniche', 'Corto', 'Estate', 'Bretelle', 'Canotta', 'Indossare', 'Sopra'] },
  { guessWord: 'Gilet', forbiddenWords: ['Senza maniche', 'Camicia', 'Abito', 'Panciotto', 'Indossare', 'Sopra', 'Elegante', 'Bottoni'] },
  { guessWord: 'Cardigan', forbiddenWords: ['Aperto', 'Bottoni', 'Lana', 'Maglione', 'Indossare', 'Sopra', 'Maglioncino', 'Non chiuso'] },
  { guessWord: 'Blusa', forbiddenWords: ['Donna', 'Camicia', 'Seta', 'Elegante', 'Leggera', 'Maniche', 'Indossare', 'Tessuto morbido'] },
  { guessWord: 'Dolcevita', forbiddenWords: ['Collo alto', 'Maglione', 'Lupetto', 'Caldo', 'Inverno', 'Indossare', 'Gola', 'Coprire'] },
  { guessWord: 'Body', forbiddenWords: ['Intimo', 'Ganci', 'Intero', 'Sotto', 'Donna', 'Sgambato', 'Elastico', 'Costume'] },
  
  // --- Capi Inferiori ---
  { guessWord: 'Pantaloni', forbiddenWords: ['Gambe', 'Indossare', 'Jeans', 'Tasche', 'Cintura', 'Lunghi', 'Paio', 'Sotto'] },
  { guessWord: 'Jeans', forbiddenWords: ['Denim', 'Blu', 'Pantaloni', 'Levi\'s', 'Cinque tasche', 'Vestiario', 'Casual', 'Tessuto'] },
  { guessWord: 'Gonna', forbiddenWords: ['Donna', 'Gambe', 'Indossare', 'Vestito', 'Corta', 'Lunga', 'Mini', 'Tubo'] },
  { guessWord: 'Pantaloncini', forbiddenWords: ['Corti', 'Estate', 'Gambe', 'Caldo', 'Bermuda', 'Shorts', 'Spiaggia', 'Indossare'] },
  { guessWord: 'Leggings', forbiddenWords: ['Aderenti', 'Elastici', 'Donna', 'Pantaloni', 'Palestra', 'Sport', 'Comodi', 'Tessuto'] },
  { guessWord: 'Salopette', forbiddenWords: ['Pettorina', 'Bretelle', 'Pantaloni', 'Tuta', 'Jeans', 'Indossare', 'Intera', 'Lavoro'] },
  { guessWord: 'Bermuda', forbiddenWords: ['Pantaloncini', 'Ginocchio', 'Uomo', 'Estate', 'Corti', 'Tasche', 'Caldo', 'Spiaggia'] },
  { guessWord: 'Pinocchietto', forbiddenWords: ['Pantaloni', 'Polpaccio', 'Tre quarti', 'Capri', 'Corti', 'Donna', 'Estate', 'Lunghezza'] },
  { guessWord: 'Gonna a pieghe', forbiddenWords: ['Pieghe', 'Scuola', 'Tessuto', 'Corta', 'Donna', 'Kilt', 'Divisa', 'Gonnellina'] },

  // --- Abiti Interi e Completi ---
  { guessWord: 'Vestito', forbiddenWords: ['Abito', 'Donna', 'Intero', 'Gonna', 'Elegante', 'Cerimonia', 'Sera', 'Indossare'] },
  { guessWord: 'Abito', forbiddenWords: ['Vestito', 'Elegante', 'Uomo', 'Giacca', 'Pantaloni', 'Cerimonia', 'Completo', 'Cravatta'] },
  { guessWord: 'Tuta', forbiddenWords: ['Ginnastica', 'Sport', 'Felpa', 'Pantaloni', 'Tempo libero', 'Acetato', 'Comoda', 'Casa'] },
  { guessWord: 'Smoking', forbiddenWords: ['Elegante', 'Cerimonia', 'Papillon', 'Giacca', 'Nero', 'James Bond', 'Gala', 'Sera'] },
  { guessWord: 'Frac', forbiddenWords: ['Pinguino', 'Coda', 'Elegantissimo', 'Orchestra', 'Ballo', 'Bianco e nero', 'Cerimonia', 'Giacca'] },
  { guessWord: 'Tailleur', forbiddenWords: ['Donna', 'Giacca', 'Gonna', 'Pantaloni', 'Elegante', 'Lavoro', 'Completo', 'Ufficio'] },
  { guessWord: 'Jumpsuit', forbiddenWords: ['Tuta', 'Intera', 'Elegante', 'Donna', 'Pantaloni', 'Salopette', 'Unico pezzo', 'Moda'] },

  // --- Capi Esterni (Outerwear) ---
  { guessWord: 'Giacca', forbiddenWords: ['Maniche', 'Sopra', 'Primavera', 'Autunno', 'Indossare', 'Bottoni', 'Cappotto', 'Vento'] },
  { guessWord: 'Cappotto', forbiddenWords: ['Inverno', 'Lungo', 'Caldo', 'Lana', 'Freddo', 'Sopra', 'Giacca', 'Indossare'] },
  { guessWord: 'Piumino', forbiddenWords: ['Giacca', 'Caldo', 'Piuma', 'Inverno', 'Gonfio', 'Trapuntato', 'Neve', 'Freddo'] },
  { guessWord: 'Impermeabile', forbiddenWords: ['Pioggia', 'Acqua', 'Trench', 'Bagnarsi', 'Giacca', 'Cerata', 'Asciutto', 'Tessuto'] },
  { guessWord: 'Trench', forbiddenWords: ['Impermeabile', 'Cintura', 'Beige', 'Elegante', 'Pioggia', 'Giacca lunga', 'Burberry', 'Londra'] },
  { guessWord: 'Giaccone', forbiddenWords: ['Giacca', 'Pesante', 'Inverno', 'Caldo', 'Lungo', 'Cappotto', 'Freddo', 'Parka'] },
  { guessWord: 'Bomber', forbiddenWords: ['Giacchetto', 'Elastico', 'Zip', 'Corto', 'College', 'Pilota', 'Moda', 'Stile'] },
  { guessWord: 'Pelliccia', forbiddenWords: ['Animale', 'Pelo', 'Calda', 'Lusso', 'Visone', 'Ecologica', 'Inverno', 'Signora'] },
  { guessWord: 'Spolverino', forbiddenWords: ['Leggero', 'Lungo', 'Primavera', 'Polvere', 'Sopra', 'Trench', 'Sottile', 'Mezza stagione'] },
  { guessWord: 'Soprabito', forbiddenWords: ['Cappotto', 'Sopra', 'Lungo', 'Uomo', 'Elegante', 'Indossare', 'Vestito', 'Abito'] },

  // --- Intimo e Notte ---
  { guessWord: 'Mutande', forbiddenWords: ['Intimo', 'Slip', 'Boxer', 'Sotto', 'Pudenda', 'Indossare', 'Cotone', 'Cambiare'] },
  { guessWord: 'Reggiseno', forbiddenWords: ['Donna', 'Seno', 'Intimo', 'Ferretto', 'Coppe', 'Bretelle', 'Sostenere', 'Pizzo'] },
  { guessWord: 'Calzini', forbiddenWords: ['Piedi', 'Scarpe', 'Cotone', 'Calze', 'Corti', 'Buchi', 'Paio', 'Spaiati'] },
  { guessWord: 'Pigiama', forbiddenWords: ['Notte', 'Dormire', 'Letto', 'Pantaloni', 'Maglia', 'Intero', 'Caldo', 'Seta'] },
  { guessWord: 'Boxer', forbiddenWords: ['Uomo', 'Mutande', 'Intimo', 'Larghi', 'Aderenti', 'Pugile', 'Elastico', 'Sotto'] },
  { guessWord: 'Collant', forbiddenWords: ['Gambe', 'Donna', 'Calze', 'Velati', 'Nylon', 'Gonna', 'Filo', 'Smagliatura'] },
  { guessWord: 'Calze', forbiddenWords: ['Piedi', 'Gambe', 'Lunghe', 'Collant', 'Filo di Scozia', 'Scarpe', 'Paio', 'Calzini'] },
  { guessWord: 'Camicia da notte', forbiddenWords: ['Dormire', 'Donna', 'Lunga', 'Vestito', 'Letto', 'Pizzo', 'Notte', 'Pigiama'] },
  { guessWord: 'Vestaglia', forbiddenWords: ['Casa', 'Pigiama', 'Sopra', 'Camera', 'Mattina', 'Morbida', 'Cintura', 'Accappatoio'] },
  { guessWord: 'Accappatoio', forbiddenWords: ['Doccia', 'Spugna', 'Asciugarsi', 'Bagno', 'Cintura', 'Morbido', 'Bagnato', 'Cappuccio'] },
  
  // --- Calzature ---
  { guessWord: 'Scarpe', forbiddenWords: ['Piedi', 'Camminare', 'Suola', 'Lacci', 'Calzini', 'Paio', 'Indossare', 'Numero'] },
  { guessWord: 'Stivali', forbiddenWords: ['Alti', 'Inverno', 'Gamba', 'Pelle', 'Pioggia', 'Cavaliere', 'Tacco', 'Scarpe'] },
  { guessWord: 'Sandali', forbiddenWords: ['Estate', 'Aperti', 'Piedi', 'Caldo', 'Spiaggia', 'Infradito', 'Fasce', 'Suola'] },
  { guessWord: 'Ciabatte', forbiddenWords: ['Casa', 'Comode', 'Piscina', 'Pantofole', 'Piedi', 'Senza lacci', 'Gomma', 'Stanza'] },
  { guessWord: 'Infradito', forbiddenWords: ['Dito', 'Spiaggia', 'Gomma', 'Estate', 'Ciabatte', 'Sandali', 'Alluce', 'Piscina'] },
  { guessWord: 'Mocassino', forbiddenWords: ['Scarpa', 'Senza lacci', 'Elegante', 'Uomo', 'Nappine', 'Pelle', 'Comoda', 'College'] },
  { guessWord: 'Scarpe da ginnastica', forbiddenWords: ['Sport', 'Correre', 'Comode', 'Lacci', 'Suola di gomma', 'Palestra', 'Sneakers', 'Allenamento'] },
  { guessWord: 'Décolleté', forbiddenWords: ['Tacco', 'Donna', 'Elegante', 'Punta', 'Cerimonia', 'Scarpa', 'Scollatura', 'Chiusa'] },
  { guessWord: 'Zoccoli', forbiddenWords: ['Legno', 'Olanda', 'DurI', 'Rumorosi', 'Contadino', 'Calzatura', 'Fascia', 'Aperti dietro'] },
  { guessWord: 'Ballerine', forbiddenWords: ['Piatte', 'Danza', 'Donna', 'Comode', 'Scarpe', 'Fiocchetto', 'Punta tonda', 'Senza tacco'] },
  { guessWord: 'Anfibi', forbiddenWords: ['Militari', 'Stivali', 'Lacci', 'Alti', 'Suola spessa', 'Pelle nera', 'Punk', 'Stringati'] },
  { guessWord: 'Scarponi', forbiddenWords: ['Montagna', 'Neve', 'Trekking', 'Pesanti', 'Alti', 'Robusti', 'Lacci', 'Camminare'] },
  
  // --- Accessori ---
  { guessWord: 'Borsa', forbiddenWords: ['Donna', 'Tracolla', 'Manici', 'Contenere', 'Pelle', 'Spalla', 'Oggetti', 'Zaino'] },
  { guessWord: 'Cintura', forbiddenWords: ['Pantaloni', 'Vita', 'Fibbia', 'Pelle', 'Passanti', 'Stringere', 'Accessorio', 'Buco'] },
  { guessWord: 'Cappello', forbiddenWords: ['Testa', 'Coprire', 'Sole', 'Freddo', 'Tesa', 'Berretto', 'Paglia', 'Indossare'] },
  { guessWord: 'Sciarpa', forbiddenWords: ['Collo', 'Inverno', 'Freddo', 'Lana', 'Lunga', 'Nodo', 'Avvolgere', 'Calda'] },
  { guessWord: 'Guanti', forbiddenWords: ['Mani', 'Freddo', 'Dita', 'Pelle', 'Lana', 'Inverno', 'Paio', 'Indossare'] },
  { guessWord: 'Occhiali', forbiddenWords: ['Vista', 'Sole', 'Lenti', 'Montatura', 'Inforcare', 'Guardare', 'Naso', 'Stanghette'] },
  { guessWord: 'Cravatta', forbiddenWords: ['Collo', 'Nodo', 'Camicia', 'Uomo', 'Elegante', 'Abito', 'Seta', 'Lunga'] },
  { guessWord: 'Papillon', forbiddenWords: ['Farfalla', 'Collo', 'Nodo', 'Smoking', 'Elegante', 'Camicia', 'Sera', 'Fiocco'] },
  { guessWord: 'Zaino', forbiddenWords: ['Scuola', 'Spalle', 'Libri', 'Bretelle', 'Borsa', 'Gita', 'Portare', 'Sacco'] },
  { guessWord: 'Portafoglio', forbiddenWords: ['Soldi', 'Carte di credito', 'Tasca', 'Contanti', 'Documenti', 'Pelle', 'Aprire', 'Portamonete'] },
  { guessWord: 'Ombrello', forbiddenWords: ['Pioggia', 'Aprire', 'Acqua', 'Manico', 'Riparo', 'Bagnato', 'Pieghevole', 'Tela'] },
  { guessWord: 'Foulard', forbiddenWords: ['Seta', 'Collo', 'Donna', 'Sciarpa', 'Quadrato', 'Leggero', 'Fantasia', 'Accessorio'] },
  { guessWord: 'Berretto', forbiddenWords: ['Cappello', 'Lana', 'Inverno', 'Testa', 'Pon pon', 'Caldo', 'Copricapo', 'Cuffia'] },
  { guessWord: 'Ventaglio', forbiddenWords: ['Caldo', 'Aria', 'Sventolare', 'Pieghevole', 'Mano', 'Spagna', 'Estate', 'Rinfrescare'] },
  { guessWord: 'Fazzoletto', forbiddenWords: ['Naso', 'Stoffa', 'Soffiare', 'Tasca', 'Raffreddore', 'Pezza', 'Cotone', 'Uomo'] },
  { guessWord: 'Portachiavi', forbiddenWords: ['Chiavi', 'Anello', 'Appendere', 'Casa', 'Macchina', 'Mazzo', 'Ciondolo', 'Oggetto'] },
  { guessWord: 'Gemelli', forbiddenWords: ['Polsini', 'Camicia', 'Uomo', 'Eleganti', 'Manica', 'Gioiello', 'Chiudere', 'Coppia'] },
  
  // --- Gioielli ---
  { guessWord: 'Anello', forbiddenWords: ['Dito', 'Matrimonio', 'Fidanzamento', 'Oro', 'Pietra', 'Gioiello', 'Indossare', 'Fedina'] },
  { guessWord: 'Collana', forbiddenWords: ['Collo', 'Pendente', 'Girocollo', 'Perle', 'Gioiello', 'Indossare', 'Catena', 'Lunga'] },
  { guessWord: 'Orecchini', forbiddenWords: ['Lobo', 'Orecchio', 'Pendenti', 'Perle', 'Buco', 'Paio', 'Gioiello', 'Indossare'] },
  { guessWord: 'Bracciale', forbiddenWords: ['Polso', 'Braccio', 'Gioiello', 'Catena', 'Indossare', 'Tennis', 'Rigido', 'Ciondoli'] },
  { guessWord: 'Orologio', forbiddenWords: ['Polso', 'Ora', 'Tempo', 'Lancette', 'Cinturino', 'Digitale', 'Indossare', 'Marca'] },
  { guessWord: 'Spilla', forbiddenWords: ['Appuntare', 'Giacca', 'Decorazione', 'Gioiello', 'Ago', 'Fermaglio', 'Antica', 'Petto'] },
  { guessWord: 'Pendente', forbiddenWords: ['Collana', 'Appeso', 'Ciondolo', 'Catena', 'Goccia', 'Pietra', 'Gioiello', 'Collo'] },
  { guessWord: 'Cavigliera', forbiddenWords: ['Caviglia', 'Piede', 'Braccialetto', 'Estate', 'Spiaggia', 'Catena', 'Sottile', 'Donna'] },
  { guessWord: 'Girocollo', forbiddenWords: ['Collana', 'Stretto', 'Collo', 'Nastro', 'Velluto', 'Corto', 'Choker', 'Accessorio'] },

  // --- Materiali e Concetti ---
  { guessWord: 'Cotone', forbiddenWords: ['Tessuto', 'Pianta', 'Naturale', 'Maglietta', 'Fibra', 'Morbido', 'Fresco', 'Bianco'] },
  { guessWord: 'Lana', forbiddenWords: ['Pecora', 'Maglione', 'Caldo', 'Inverno', 'Tessuto', 'Filato', 'Gomitolo', 'Cardare'] },
  { guessWord: 'Seta', forbiddenWords: ['Tessuto', 'Liscio', 'Lucido', 'Baco', 'Prezioso', 'Cravatta', 'Foulard', 'Leggero'] },
  { guessWord: 'Pelle', forbiddenWords: ['Animale', 'Giacca', 'Scarpe', 'Borsa', 'Cuoio', 'Materiale', 'Vera', 'Finta'] },
  { guessWord: 'Velluto', forbiddenWords: ['Tessuto', 'Morbido', 'Liscio', 'Pelo', 'Cangiante', 'Coste', 'Elegante', 'Divano'] },
  { guessWord: 'Pizzo', forbiddenWords: ['Trasparente', 'Disegno', 'Ricamo', 'Intimo', 'Elegante', 'Merletto', 'Tessuto', 'Bordo'] },
  { guessWord: 'Lino', forbiddenWords: ['Tessuto', 'Fresco', 'Estate', 'Stropicciato', 'Naturale', 'Camicia', 'Pantaloni', 'Fibra'] },
  { guessWord: 'Stoffa', forbiddenWords: ['Tessuto', 'Metro', 'Sarto', 'Cucire', 'Pezza', 'Rotolo', 'Materiale', 'Vestiario'] },
  { guessWord: 'Cerniera', forbiddenWords: ['Zip', 'Chiudere', 'Aprire', 'Lampo', 'Giacca', 'Pantaloni', 'Cursore', 'Denti'] },
  { guessWord: 'Bottone', forbiddenWords: ['Camicia', 'Giacca', 'Asola', 'Cucire', 'Attaccare', 'Fori', 'Chiudere', 'Rotondo'] },
  { guessWord: 'Tacco', forbiddenWords: ['Scarpa', 'Alto', 'Basso', 'Spillo', 'Zeppa', 'Camminare', 'Suola', 'Donna'] },
  { guessWord: 'Fibbia', forbiddenWords: ['Cintura', 'Chiudere', 'Metallo', 'Ardiglione', 'Passante', 'Regolare', 'Scarpa', 'Borsa'] },
  { guessWord: 'Moda', forbiddenWords: ['Stile', 'Sfilata', 'Tendenza', 'Collezione', 'Stilista', 'Vogue', 'Vestiti', 'Look'] },
  { guessWord: 'Stile', forbiddenWords: ['Moda', 'Personale', 'Gusto', 'Look', 'Vestirsi', 'Eleganza', 'Tendenza', 'Abbigliamento'] },
  { guessWord: 'Vintage', forbiddenWords: ['Vecchio', 'Moda', 'Anni passati', 'Retrò', 'Usato', 'Stile', 'Mercatino', 'Epoca'] },
  { guessWord: 'Sfilata', forbiddenWords: ['Modelle', 'Passerella', 'Stilista', 'Collezione', 'Pubblico', 'Moda', 'Vestiti', 'Evento'] },
  { guessWord: 'Collezione', forbiddenWords: ['Stilista', 'Moda', 'Primavera-Estate', 'Sfilata', 'Vestiti', 'Nuova', 'Stagione', 'Creazioni'] },
  { guessWord: 'Taglia', forbiddenWords: ['Misura', 'Vestito', 'S, M, L', 'Numero', 'Corpo', 'Etichetta', 'Indossare', 'Grande/Piccolo'] },
  { guessWord: 'Costume da bagno', forbiddenWords: ['Spiaggia', 'Mare', 'Piscina', 'Bikini', 'Intero', 'Nuotare', 'Due pezzi', 'Indossare'] },
    // Categoria: Miti e Personaggi Fantastici (Espansione)
  // --- Mitologia Greca e Romana (Divinità) ---
  { guessWord: 'Zeus', forbiddenWords: ['Olimpo', 'Fulmine', 'Padre degli Dei', 'Grecia', 'Giove', 'Tuono', 'Aquila', 'Dio'] },
  { guessWord: 'Era', forbiddenWords: ['Giunone', 'Moglie', 'Zeus', 'Matrimonio', 'Regina', 'Olimpo', 'Dea', 'Gelosa'] },
  { guessWord: 'Poseidone', forbiddenWords: ['Mare', 'Tridente', 'Nettuno', 'Terremoto', 'Dio', 'Acqua', 'Cavalli', 'Oceano'] },
  { guessWord: 'Ade', forbiddenWords: ['Inferi', 'Morti', 'Plutone', 'Oltretomba', 'Dio', 'Cerbero', 'Regno', 'Rapimento'] },
  { guessWord: 'Atena', forbiddenWords: ['Minerva', 'Saggezza', 'Guerra', 'Dea', 'Scudo', 'Ulivo', 'Civetta', 'Partenone'] },
  { guessWord: 'Apollo', forbiddenWords: ['Sole', 'Musica', 'Arte', 'Dio', 'Arco', 'Freccia', 'Delfi', 'Poesia'] },
  { guessWord: 'Artemide', forbiddenWords: ['Diana', 'Caccia', 'Luna', 'Dea', 'Arco', 'Freccia', 'Selvaggina', 'Gemella'] },
  { guessWord: 'Afrodite', forbiddenWords: ['Amore', 'Bellezza', 'Venere', 'Dea', 'Conchiglia', 'Cipro', 'Specchio', 'Eros'] },
  { guessWord: 'Ares', forbiddenWords: ['Guerra', 'Marte', 'Battaglia', 'Dio', 'Violenza', 'Elmo', 'Scudo', 'Lancia'] },
  { guessWord: 'Efesto', forbiddenWords: ['Vulcano', 'Fuoco', 'Fabbro', 'Dio', 'Zoppo', 'Forgia', 'Incudine', 'Armi'] },
  { guessWord: 'Ermes', forbiddenWords: ['Mercurio', 'Messaggero', 'Ladri', 'Dio', 'Ali', 'Piedi', 'Caduceo', 'Veloce'] },
  { guessWord: 'Demetra', forbiddenWords: ['Cerere', 'Raccolto', 'Agricoltura', 'Dea', 'Grano', 'Spiga', 'Stagioni', 'Terra'] },
  { guessWord: 'Dioniso', forbiddenWords: ['Bacco', 'Vino', 'Festa', 'Teatro', 'Dio', 'Uva', 'Ebbrezza', 'Tirso'] },
  { guessWord: 'Persefone', forbiddenWords: ['Proserpina', 'Ade', 'Inferi', 'Demetra', 'Stagioni', 'Rapimento', 'Regina', 'Melograno'] },
  { guessWord: 'Crono', forbiddenWords: ['Tempo', 'Saturno', 'Titano', 'Padre', 'Zeus', 'Falce', 'Divorare', 'Figli'] },
  { guessWord: 'Prometeo', forbiddenWords: ['Fuoco', 'Uomini', 'Fegato', 'Aquila', 'Titano', 'Dono', 'Rubare', 'Castigo'] },
  
  // --- Mitologia Greca e Romana (Eroi e Mortali) ---
  { guessWord: 'Ercole', forbiddenWords: ['Fatiche', 'Forza', 'Leone', 'Idra', 'Semidio', 'Eracle', 'Clava', 'Invincibile'] },
  { guessWord: 'Achille', forbiddenWords: ['Tallone', 'Invulnerabile', 'Troia', 'Guerra', 'Eroe', 'Ira', 'Ettore', 'Scudo'] },
  { guessWord: 'Ulisse', forbiddenWords: ['Odisseo', 'Itaca', 'Viaggio', 'Cavallo di Troia', 'Astuzia', 'Ciclope', 'Sirene', 'Penelope'] },
  { guessWord: 'Teseo', forbiddenWords: ['Minotauro', 'Labirinto', 'Arianna', 'Filo', 'Atene', 'Eroe', 'Creta', 'Toro'] },
  { guessWord: 'Perseo', forbiddenWords: ['Medusa', 'Testa', 'Pegaso', 'Eroe', 'Andromeda', 'Sandali alati', 'Mostro', 'Pietrificare'] },
  { guessWord: 'Giasone', forbiddenWords: ['Argonauti', 'Vello d\'oro', 'Nave', 'Medea', 'Drago', 'Colchide', 'Eroe', 'Viaggio'] },
  { guessWord: 'Edipo', forbiddenWords: ['Complesso', 'Padre', 'Madre', 'Sfinge', 'Indovinello', 'Tebe', 'Re', 'Tragedia'] },
  { guessWord: 'Orfeo', forbiddenWords: ['Lira', 'Musica', 'Euridice', 'Inferi', 'Cantore', 'Girarsi', 'Tracia', 'Ade'] },
  { guessWord: 'Dedalo', forbiddenWords: ['Labirinto', 'Icaro', 'Ali', 'Cera', 'Costruttore', 'Creta', 'Fuggire', 'Architetto'] },
  { guessWord: 'Icaro', forbiddenWords: ['Ali', 'Cera', 'Sole', 'Volare', 'Cadere', 'Dedalo', 'Padre', 'Vicino'] },
  { guessWord: 'Narciso', forbiddenWords: ['Riflesso', 'Specchio', 'Acqua', 'Amore', 'Se stesso', 'Bello', 'Fiore', 'Eco'] },
  { guessWord: 'Mida', forbiddenWords: ['Tocco', 'Oro', 'Re', 'Orecchie', 'Asino', 'Patto', 'Dono', 'Tutto'] },
  { guessWord: 'Paride', forbiddenWords: ['Pomo', 'Discordia', 'Elena', 'Troia', 'Giudizio', 'Tre dee', 'Rapimento', 'Principe'] },
  { guessWord: 'Ettore', forbiddenWords: ['Troia', 'Achille', 'Guerra', 'Eroe', 'Principe', 'Priamo', 'Combattimento', 'Mura'] },
  { guessWord: 'Agamennone', forbiddenWords: ['Re', 'Micene', 'Troia', 'Comandante', 'Esercito', 'Sacrificio', 'Fratello', 'Menelao'] },
  { guessWord: 'Cassandra', forbiddenWords: ['Profetessa', 'Inascoltata', 'Sventura', 'Troia', 'Maledizione', 'Futuro', 'Previsione', 'Verità'] },
  { guessWord: 'Romolo', forbiddenWords: ['Remo', 'Roma', 'Fondazione', 'Lupa', 'Gemelli', 'Sette colli', 'Fratello', 'Uccidere'] },
  
  // --- Mitologia Greca e Romana (Creature e Mostri) ---
  { guessWord: 'Minotauro', forbiddenWords: ['Labirinto', 'Toro', 'Uomo', 'Creta', 'Teseo', 'Mostro', 'Arianna', 'Divorare'] },
  { guessWord: 'Ciclope', forbiddenWords: ['Un occhio', 'Gigante', 'Polifemo', 'Ulisse', 'Grotta', 'Mostro', 'Pecore', 'Forza'] },
  { guessWord: 'Medusa', forbiddenWords: ['Serpenti', 'Pietrificare', 'Sguardo', 'Testa', 'Gorgone', 'Perseo', 'Mostro', 'Capelli'] },
  { guessWord: 'Centauro', forbiddenWords: ['Uomo', 'Cavallo', 'Metà', 'Chirone', 'Arco', 'Creatura', 'Selvaggio', 'Zoccoli'] },
  { guessWord: 'Pegaso', forbiddenWords: ['Cavallo alato', 'Volare', 'Bianco', 'Medusa', 'Perseo', 'Poeti', 'Fonte', 'Olimpo'] },
  { guessWord: 'Idra', forbiddenWords: ['Teste', 'Tagliare', 'Ricrescere', 'Ercole', 'Mostro', 'Lerna', 'Serpente', 'Veleno'] },
  { guessWord: 'Cerbero', forbiddenWords: ['Cane', 'Tre teste', 'Inferi', 'Ade', 'Guardiano', 'Mostro', 'Porta', 'Oltretomba'] },
  { guessWord: 'Sirene', forbiddenWords: ['Canto', 'Incantare', 'Marinai', 'Ulisse', 'Nave', 'Scogli', 'Donna', 'Pesce'] },
  { guessWord: 'Arpia', forbiddenWords: ['Donna', 'Uccello', 'Ali', 'Mostro', 'Artigli', 'Rapire', 'Vento', 'Spaventosa'] },
  { guessWord: 'Sfinge', forbiddenWords: ['Indovinello', 'Edipo', 'Corpo di leone', 'Testa di donna', 'Tebe', 'Enigma', 'Divorare', 'Ali'] },
  { guessWord: 'Satiro', forbiddenWords: ['Capra', 'Uomo', 'Fauno', 'Bosco', 'Flauto', 'Zampe', 'Corna', 'Vino'] },
  { guessWord: 'Ninfa', forbiddenWords: ['Bosco', 'Fiume', 'Natura', 'Spirito', 'Bella', 'Femmina', 'Mito', 'Divinità minore'] },
  { guessWord: 'Grifone', forbiddenWords: ['Aquila', 'Leone', 'Ali', 'Creatura', 'Tesoro', 'Guardiano', 'Becco', 'Artigli'] },
  { guessWord: 'Chimera', forbiddenWords: ['Leone', 'Capra', 'Serpente', 'Mostro', 'Fuoco', 'Tre teste', 'Sputare', 'Bellerofonte'] },
  { guessWord: 'Caronte', forbiddenWords: ['Traghettatore', 'Inferi', 'Obolo', 'Barca', 'Fiume', 'Anime', 'Stige', 'Vecchio'] },
  { guessWord: 'Scilla', forbiddenWords: ['Cariddi', 'Mostro marino', 'Stretto', 'Sei teste', 'Cane', 'Ulisse', 'Divorare', 'Scoglio'] },
  
  // --- Mitologia Norrena ---
  { guessWord: 'Odino', forbiddenWords: ['Asgard', 'Padre di tutti', 'Corvi', 'Occhio', 'Valhalla', 'Lancia', 'Giorno', 'Mercoledì'] },
  { guessWord: 'Thor', forbiddenWords: ['Martello', 'Tuono', 'Mjolnir', 'Dio', 'Asgard', 'Forza', 'Fulmine', 'Giovedì'] },
  { guessWord: 'Loki', forbiddenWords: ['Inganno', 'Imbroglio', 'Dio', 'Asgard', 'Trasformarsi', 'Fratello', 'Giganti', 'Caos'] },
  { guessWord: 'Valhalla', forbiddenWords: ['Paradiso', 'Guerrieri', 'Odino', 'Asgard', 'Combattere', 'Morti', 'Sala', 'Valchirie'] },
  { guessWord: 'Valchiria', forbiddenWords: ['Donne', 'Guerriere', 'Cavallo', 'Valhalla', 'Odino', 'Scegliere', 'Morti', 'Battaglia'] },
  { guessWord: 'Gigante di ghiaccio', forbiddenWords: ['Jotunheim', 'Freddo', 'Nemico', 'Thor', 'Grande', 'Mito', 'Norreno', 'Creatura'] },
  { guessWord: 'Ragnarok', forbiddenWords: ['Fine del mondo', 'Apocalisse', 'Battaglia', 'Dei', 'Morte', 'Distruzione', 'Destino', 'Lupo'] },
  { guessWord: 'Asgard', forbiddenWords: ['Regno', 'Dei', 'Odino', 'Thor', 'Ponte', 'Arcobaleno', 'Dimora', 'Città'] },
  { guessWord: 'Bifrost', forbiddenWords: ['Ponte', 'Arcobaleno', 'Asgard', 'Heimdall', 'Collegamento', 'Regni', 'Colorato', 'Passaggio'] },
  
  // --- Mitologia Egizia ---
  { guessWord: 'Ra', forbiddenWords: ['Sole', 'Dio', 'Egitto', 'Testa di falco', 'Barca', 'Creazione', 'Divinità', 'Disco'] },
  { guessWord: 'Anubi', forbiddenWords: ['Sciacallo', 'Imbalsamazione', 'Morti', 'Dio', 'Pesatura', 'Cuore', 'Oltretomba', 'Egitto'] },
  { guessWord: 'Faraone', forbiddenWords: ['Re', 'Egitto', 'Piramide', 'Sovrano', 'Mummia', 'Dio', 'Corona', 'Sarcofago'] },
  { guessWord: 'Mummia', forbiddenWords: ['Bende', 'Morto', 'Sarcofago', 'Egitto', 'Imbalsamare', 'Tomba', 'Faraone', 'Orrore'] },
  { guessWord: 'Piramide', forbiddenWords: ['Triangolo', 'Egitto', 'Faraone', 'Tomba', 'Costruzione', 'Giza', 'Sarcofago', 'Deserto'] },
  { guessWord: 'Cleopatra', forbiddenWords: ['Regina', 'Egitto', 'Cesare', 'Antonio', 'Nilo', 'Aspide', 'Bella', 'Ultima'] },
  { guessWord: 'Iside', forbiddenWords: ['Osiride', 'Dea', 'Magia', 'Madre', 'Egitto', 'Trono', 'Sorella', 'Horus'] },
  { guessWord: 'Osiride', forbiddenWords: ['Aldilà', 'Re', 'Morti', 'Dio', 'Iside', 'Verde', 'Seth', 'Giudice'] },
  { guessWord: 'Scarabeo', forbiddenWords: ['Insetto', 'Amuleto', 'Fortuna', 'Egitto', 'Sole', 'Simbolo', 'Khepri', 'Coleottero'] },
  
  // --- Creature Fantastiche e Folklore ---
  { guessWord: 'Drago', forbiddenWords: ['Fuoco', 'Ali', 'Volare', 'Squame', 'Tesoro', 'Sputare', 'Serpente', 'Mito'] },
  { guessWord: 'Unicorno', forbiddenWords: ['Cavallo', 'Corno', 'Magico', 'Puro', 'Bianco', 'Leggenda', 'Arcobaleno', 'Spirale'] },
  { guessWord: 'Elfo', forbiddenWords: ['Orecchie a punta', 'Foresta', 'Arco', 'Magia', 'Signore degli Anelli', 'Legolas', 'Agile', 'Longevo'] },
  { guessWord: 'Nano', forbiddenWords: ['Barba', 'Ascia', 'Miniera', 'Basso', 'Montagna', 'Oro', 'Gimli', 'Roccia'] },
  { guessWord: 'Orco', forbiddenWords: ['Brutto', 'Verde', 'Shrek', 'Mostro', 'Forza', 'Pelle', 'Grosso', 'Hobbit'] },
  { guessWord: 'Goblin', forbiddenWords: ['Verde', 'Piccolo', 'Cattivo', 'Grotta', 'Orco', 'Creatura', 'Orecchie', 'Malvagio'] },
  { guessWord: 'Fata', forbiddenWords: ['Magia', 'Ali', 'Bacchetta', 'Trilli', 'Bosco', 'Incantesimo', 'Polvere', 'Piccola'] },
  { guessWord: 'Strega', forbiddenWords: ['Scopa', 'Magia nera', 'Calderone', 'Cappello', 'Incantesimo', 'Poziione', 'Sabba', 'Cattiva'] },
  { guessWord: 'Mago', forbiddenWords: ['Magia', 'Bacchetta', 'Incantesimo', 'Merlino', 'Libro', 'Poteri', 'Stregone', 'Saggio'] },
  { guessWord: 'Gnomo', forbiddenWords: ['Giardino', 'Cappello a punta', 'Barba', 'Nano', 'Piccolo', 'Folletto', 'Terra', 'Statuina'] },
  { guessWord: 'Folletto', forbiddenWords: ['Irlanda', 'Verde', 'Cappello', 'Leprecauno', 'Oro', 'Scherzi', 'Magia', 'Bosco'] },
  { guessWord: 'Gigante', forbiddenWords: ['Grande', 'Forza', 'Altezza', 'Uomo', 'Creatura', 'Mangiafagioli', 'Golia', 'Enorme'] },
  { guessWord: 'Sirena', forbiddenWords: ['Coda di pesce', 'Mare', 'Donna', 'Canto', 'Ariel', 'Scogli', 'In fondo al mar', 'Ammaliare'] },
  { guessWord: 'Vampiro', forbiddenWords: ['Sangue', 'Denti', 'Aglio', 'Notte', 'Dracula', 'Pipistrello', 'Bara', 'Non morto'] },
  { guessWord: 'Lupo mannaro', forbiddenWords: ['Luna piena', 'Trasformazione', 'Uomo', 'Lupo', 'Licantropo', 'Pelo', 'Argento', 'Bestia'] },
  { guessWord: 'Zombie', forbiddenWords: ['Morto vivente', 'Cervello', 'Lento', 'Camminare', 'Apocalisse', 'Virus', 'Orda', 'Non morto'] },
  { guessWord: 'Fantasma', forbiddenWords: ['Spirito', 'Casa infestata', 'Trasparente', 'Lenziolo', 'Catene', 'Spaventare', 'Apparizione', 'Casper'] },
  { guessWord: 'Golem', forbiddenWords: ['Argilla', 'Pietra', 'Creatura', 'Magia', 'Animato', 'Forza', 'Obbedire', 'Praga'] },
  { guessWord: 'Genio', forbiddenWords: ['Lampada', 'Desideri', 'Tre', 'Aladdin', 'Magia', 'Liberare', 'Padrone', 'Fumo'] },
  { guessWord: 'Basilisco', forbiddenWords: ['Sguardo', 'Pietrificare', 'Serpente', 'Re', 'Veleno', 'Mostro', 'Gallo', 'Harry Potter'] },
  { guessWord: 'Fenice', forbiddenWords: ['Fuoco', 'Cenere', 'Rinascere', 'Uccello', 'Immortale', 'Lacrime', 'Rossa', 'Ardente'] },
  { guessWord: 'Kraken', forbiddenWords: ['Mostro marino', 'Tentacoli', 'Nave', 'Affondare', 'Gigante', 'Oceano', 'Abissi', 'Piovra'] },
  { guessWord: 'Leviatano', forbiddenWords: ['Mostro marino', 'Bibbia', 'Grande', 'Serpente', 'Drago', 'Acqua', 'Caos', 'Enorme'] },
  
  // --- Figure Leggendarie e del Folklore ---
  { guessWord: 'Re Artù', forbiddenWords: ['Excalibur', 'Camelot', 'Tavola Rotonda', 'Spada', 'Roccia', 'Re', 'Mago Merlino', 'Inghilterra'] },
  { guessWord: 'Mago Merlino', forbiddenWords: ['Mago', 'Re Artù', 'Magia', 'Camelot', 'Saggio', 'Consigliere', 'Barba', 'Bacchetta'] },
  { guessWord: 'Lancillotto', forbiddenWords: ['Cavaliere', 'Tavola Rotonda', 'Ginevra', 'Re Artù', 'Amore', 'Torneo', 'Migliore', 'Armatura'] },
  { guessWord: 'Robin Hood', forbiddenWords: ['Arco', 'Freccia', 'Rubare', 'Ricchi', 'Poveri', 'Sherwood', 'Nottingham', 'Ladro'] },
  { guessWord: 'Dracula', forbiddenWords: ['Conte', 'Vampiro', 'Transilvania', 'Castello', 'Sangue', 'Bram Stoker', 'Notte', 'Bara'] },
  { guessWord: 'Frankenstein', forbiddenWords: ['Mostro', 'Creatura', 'Dottore', 'Fulmine', 'Cadavere', 'Vita', 'Mary Shelley', 'Elettricità'] },
  { guessWord: 'Mostro di Loch Ness', forbiddenWords: ['Lago', 'Scozia', 'Nessie', 'Mostro', 'Acqua', 'Foto', 'Dinosauro', 'Avvistamento'] },
  { guessWord: 'Bigfoot', forbiddenWords: ['Sasquatch', 'Scimmione', 'Foresta', 'America', 'Impronta', 'Grande piede', 'Peloso', 'Creatura'] },
  { guessWord: 'Yeti', forbiddenWords: ['Abominevole uomo delle nevi', 'Himalaya', 'Neve', 'Montagna', 'Bianco', 'Mostro', 'Peloso', 'Scimmione'] },
  { guessWord: 'Babbo Natale', forbiddenWords: ['Regali', 'Slitta', 'Renne', 'Polo Nord', 'Dicembre', 'Camino', 'Rosso', 'Barba'] },
  { guessWord: 'Befana', forbiddenWords: ['Scopa', 'Calza', 'Carbone', 'Dolci', '6 Gennaio', 'Vecchia', 'Notte', 'Epifania'] },
  { guessWord: 'Uomo nero', forbiddenWords: ['Paura', 'Bambini', 'Buio', 'Armadio', 'Mostro', 'Cattivo', 'Nascondersi', 'Letto'] },
  
  // --- Luoghi, Oggetti e Concetti ---
  { guessWord: 'Olimpo', forbiddenWords: ['Monte', 'Dei', 'Grecia', 'Zeus', 'Dimora', 'Nuvole', 'Divinità', 'Cima'] },
  { guessWord: 'Atlantide', forbiddenWords: ['Città sommersa', 'Oceano', 'Perduta', 'Isola', 'Mito', 'Platone', 'Acqua', 'Civiltà'] },
  { guessWord: 'Camelot', forbiddenWords: ['Castello', 'Re Artù', 'Tavola Rotonda', 'Corte', 'Regno', 'Inghilterra', 'Spada', 'Leggenda'] },
  { guessWord: 'El Dorado', forbiddenWords: ['Città', 'Oro', 'Ricchezza', 'Leggenda', 'Perduta', 'Sud America', 'Conquistadores', 'Tesoro'] },
  { guessWord: 'Excalibur', forbiddenWords: ['Spada', 'Roccia', 'Re Artù', 'Mago Merlino', 'Dama del Lago', 'Arma', 'Magica', 'Estrarre'] },
  { guessWord: 'Santo Graal', forbiddenWords: ['Coppa', 'Calice', 'Ultima Cena', 'Gesù', 'Cavalieri', 'Ricerca', 'Sacro', 'Leggenda'] },
  { guessWord: 'Vello d\'oro', forbiddenWords: ['Pelle', 'Ariete', 'Giasone', 'Argonauti', 'Drago', 'Dorato', 'Conquistare', 'Viaggio'] },
  { guessWord: 'Arca di Noè', forbiddenWords: ['Diluvio', 'Animali', 'Coppia', 'Barca', 'Salvare', 'Bibbia', 'Pioggia', 'Costruzione'] },
  { guessWord: 'Labirinto', forbiddenWords: ['Minotauro', 'Dedalo', 'Creta', 'Percorso', 'Uscita', 'Perdersi', 'Muri', 'Centro'] },
  { guessWord: 'Tavola Rotonda', forbiddenWords: ['Cavalieri', 'Re Artù', 'Camelot', 'Uguali', 'Posto', 'Compagnia', 'Sedersi', 'Cerchio'] },
  { guessWord: 'Bacchetta magica', forbiddenWords: ['Mago', 'Fata', 'Incantesimo', 'Legno', 'Potere', 'Agitare', 'Stella', 'Lanciare'] },
  { guessWord: 'Sfera di cristallo', forbiddenWords: ['Vedere', 'Futuro', 'Indovino', 'Palla', 'Vetro', 'Prevedere', 'Magia', 'Guardare'] },
  { guessWord: 'Poziione', forbiddenWords: ['Magia', 'Bere', 'Calderone', 'Strega', 'Ingrediente', 'Filtro', 'Effetto', 'Liquido'] },
  { guessWord: 'Incantesimo', forbiddenWords: ['Magia', 'Formula', 'Parola', 'Mago', 'Lanciare', 'Bacchetta', 'Effetto', 'Sortilegio'] },
  { guessWord: 'Maledizione', forbiddenWords: ['Sfortuna', 'Magia nera', 'Incantesimo', 'Strega', 'Cattiva', 'Durare', 'Colpire', 'Jattura'] },
  { guessWord: 'Oracolo', forbiddenWords: ['Profezia', 'Futuro', 'Delfi', 'Sacerdotessa', 'Predire', 'Consultare', 'Tempio', 'Risposta'] },
  { guessWord: 'Profezia', forbiddenWords: ['Futuro', 'Predizione', 'Oracolo', 'Avverarsi', 'Destino', 'Annuncio', 'Veggente', 'Rivelazione'] },
  
  // --- Personaggi della Letteratura e Cinema Fantasy ---
  { guessWord: 'Gandalf', forbiddenWords: ['Mago', 'Signore degli Anelli', 'Bianco', 'Grigio', 'Barba', 'Bastone', 'Stregone', 'Tu non puoi passare'] },
  { guessWord: 'Frodo', forbiddenWords: ['Hobbit', 'Anello', 'Signore degli Anelli', 'Compagnia', 'Monte Fato', 'Baggins', 'Portatore', 'Terra di Mezzo'] },
  { guessWord: 'Aragorn', forbiddenWords: ['Re', 'Ramingo', 'Gondor', 'Spada', 'Erede', 'Signore degli Anelli', 'Uomo', 'Grampasso'] },
  { guessWord: 'Legolas', forbiddenWords: ['Elfo', 'Arco', 'Signore degli Anelli', 'Biondo', 'Orecchie a punta', 'Agile', 'Freccia', 'Compagnia'] },
  { guessWord: 'Sauron', forbiddenWords: ['Occhio', 'Signore degli Anelli', 'Anello', 'Oscuro Signore', 'Mordor', 'Nemico', 'Torre', 'Male'] },
  { guessWord: 'Gollum', forbiddenWords: ['Il mio tesssoro', 'Anello', 'Sméagol', 'Creatura', 'Signore degli Anelli', 'Hobbit', 'Deforme', 'Caverna'] },
  { guessWord: 'Smaug', forbiddenWords: ['Drago', 'Hobbit', 'Tesoro', 'Montagna Solitaria', 'Fuoco', 'Bilbo', 'Oro', 'Parlare'] },
  { guessWord: 'Harry Potter', forbiddenWords: ['Mago', 'Hogwarts', 'Cicatrice', 'Occhiali', 'Voldemort', 'Bacchetta', 'Grifondoro', 'Magia'] },
  { guessWord: 'Voldemort', forbiddenWords: ['Signore Oscuro', 'Harry Potter', 'Senza naso', 'Serpente', 'Mangiamorte', 'Nemico', 'Avada Kedavra', 'Tom Riddle'] },
  { guessWord: 'Albus Silente', forbiddenWords: ['Preside', 'Hogwarts', 'Barba', 'Saggio', 'Mago', 'Harry Potter', 'Fenice', 'Grande'] },
  { guessWord: 'Hermione Granger', forbiddenWords: ['Intelligente', 'Amica', 'Harry Potter', 'Libri', 'Maga', 'Grifondoro', 'Sapere', 'Ron'] },
  { guessWord: 'Ron Weasley', forbiddenWords: ['Amico', 'Harry Potter', 'Capelli rossi', 'Mago', 'Grifondoro', 'Famiglia', 'Hermione', 'Pauroso'] },
  { guessWord: 'Peter Pan', forbiddenWords: ['Volare', 'Isola che non c\'è', 'Bambini sperduti', 'Ombra', 'Capitan Uncino', 'Trilli', 'Eterno ragazzo', 'Finestra'] },
  { guessWord: 'Capitan Uncino', forbiddenWords: ['Pirata', 'Mano', 'Peter Pan', 'Coccodrillo', 'Tic tac', 'Nemico', 'Nave', 'Spada'] },
  { guessWord: 'Trilli', forbiddenWords: ['Fata', 'Campanellino', 'Peter Pan', 'Polvere di stelle', 'Luce', 'Gelosa', 'Piccola', 'Ali'] },
  { guessWord: 'Re dei Troll', forbiddenWords: ['Montagna', 'Grotta', 'Grande', 'Brutto', 'Corona', 'Sudditi', 'Creatura', 'Fantasy'] },
  { guessWord: 'Jabba the Hutt', forbiddenWords: ['Guerre Stellari', 'Grosso', 'Lumaca', 'Gangster', 'Leia', 'Han Solo', 'Tatooine', 'Lingua'] },
  { guessWord: 'Chewbecca', forbiddenWords: ['Wookiee', 'Guerre Stellari', 'Pelo', 'Han Solo', 'Millennium Falcon', 'Verso', 'Balestra', 'Alto'] },
  { guessWord: 'Darth Vader', forbiddenWords: ['Guerre Stellari', 'Lato Oscuro', 'Maschera', 'Luke', 'Spada laser', 'Respiro', 'Anakin', 'Padre'] },
  { guessWord: 'Yoda', forbiddenWords: ['Maestro', 'Jedi', 'Guerre Stellari', 'Verde', 'Orecchie', 'Saggio', 'Forza', 'Parlare al contrario'] },
  
  // Categoria: Cartoni Animati Famosi (Espansione)
  // --- Classici Disney & Pixar ---
  { guessWord: 'Topolino', forbiddenWords: ['Mickey Mouse', 'Orecchie', 'Disney', 'Minni', 'Paperino', 'Pantaloni rossi', 'Topo', 'Pluto'] },
  { guessWord: 'Paperino', forbiddenWords: ['Donald Duck', 'Papero', 'Voce', 'Marinaio', 'Nipoti', 'Paperina', 'Sfortunato', 'Arrabbiato'] },
  { guessWord: 'Pippo', forbiddenWords: ['Goofy', 'Amico', 'Topolino', 'Alto', 'Stupido', 'Risata', 'Orecchie lunghe', 'Cane'] },
  { guessWord: 'Biancaneve', forbiddenWords: ['Sette nani', 'Mela', 'Strega', 'Specchio', 'Principe', 'Avvelenata', 'Bosco', 'Bacio'] },
  { guessWord: 'Cenerentola', forbiddenWords: ['Scarpetta', 'Vetro', 'Zucca', 'Carrozza', 'Mezzanotte', 'Fata', 'Ballo', 'Principe'] },
  { guessWord: 'Pinocchio', forbiddenWords: ['Burattino', 'Naso lungo', 'Grillo Parlante', 'Geppetto', 'Legno', 'Fata Turchina', 'Bugie', 'Balena'] },
  { guessWord: 'Dumbo', forbiddenWords: ['Elefante', 'Orecchie grandi', 'Volare', 'Circo', 'Piuma', 'Mamma', 'Treno', 'Piccolo'] },
  { guessWord: 'Bambi', forbiddenWords: ['Cervo', 'Foresta', 'Mamma', 'Cacciatore', 'Cerbiatto', 'Tamburino', 'Amici', 'Incendio'] },
  { guessWord: 'Alice nel Paese delle Meraviglie', forbiddenWords: ['Stregatto', 'Regina di Cuori', 'Coniglio', 'Cappellaio Matto', 'Sogno', 'Bere', 'Mangiare', 'Cadere'] },
  { guessWord: 'La Sirenetta', forbiddenWords: ['Ariel', 'Coda', 'Voce', 'Ursula', 'In fondo al mar', 'Principe', 'Forchetta', 'Granchio'] },
  { guessWord: 'Aladdin', forbiddenWords: ['Genio', 'Lampada', 'Tappeto volante', 'Jasmine', 'Desideri', 'Ladro', 'Agrabah', 'Scimmia'] },
  { guessWord: 'Il Re Leone', forbiddenWords: ['Simba', 'Mufasa', 'Savana', 'Hakuna Matata', 'Scar', 'Cerchio della vita', 'Iena', 'Padre'] },
  { guessWord: 'Pocahontas', forbiddenWords: ['Indiana', 'John Smith', 'Natura', 'Colori del vento', 'Nonna Salice', 'America', 'Collana', 'Fiume'] },
  { guessWord: 'Toy Story', forbiddenWords: ['Buzz Lightyear', 'Woody', 'Giocattoli', 'Andy', 'Stanza', 'Cowboy', 'Astronauta', 'Amicizia'] },
  { guessWord: 'Monsters & Co.', forbiddenWords: ['Sully', 'Mike Wazowski', 'Porte', 'Mostri', 'Urlare', 'Boo', 'Bambina', 'Energia'] },
  { guessWord: 'Alla ricerca di Nemo', forbiddenWords: ['Pesce pagliaccio', 'Dory', 'Oceano', 'Acquario', 'Padre', 'Figlio', 'Pinna', 'Sydney'] },
  { guessWord: 'Gli Incredibili', forbiddenWords: ['Supereroi', 'Famiglia', 'Forza', 'Elasticità', 'Invisibilità', 'Velocità', 'Costume', 'Poteri'] },
  { guessWord: 'Ratatouille', forbiddenWords: ['Topo', 'Cucina', 'Chef', 'Parigi', 'Cucinare', 'Ristorante', 'Gusto', 'Zuppa'] },
  { guessWord: 'WALL-E', forbiddenWords: ['Robot', 'Spazzatura', 'Terra', 'Amore', 'Pianta', 'Spazio', 'Eve', 'Solitudine'] },
  { guessWord: 'Up', forbiddenWords: ['Palloncini', 'Casa', 'Volare', 'Vecchio', 'Scout', 'Cane parlante', 'Cascate', 'Avventura'] },
  { guessWord: 'Frozen', forbiddenWords: ['Ghiaccio', 'Elsa', 'Anna', 'Olaf', 'Regno', 'Sorelle', 'Cantare', 'Let it go'] },
  { guessWord: 'Oceania', forbiddenWords: ['Vaiana', 'Isola', 'Mare', 'Maui', 'Cuore', 'Barca', 'Viaggio', 'Onde'] },
  { guessWord: 'Zootropolis', forbiddenWords: ['Judy', 'Nick', 'Coniglio', 'Volpe', 'Poliziotta', 'Città', 'Animali', 'Bradipo'] },
  
  // --- Warner Bros. e Altri Classici Americani ---
  { guessWord: 'Bugs Bunny', forbiddenWords: ['Coniglio', 'Carota', "Che succede, amico?", 'Looney Tunes', 'Taddeo', 'Astuto', 'Warner Bros', 'Grigio'] },
  { guessWord: 'Daffy Duck', forbiddenWords: ['Papero', 'Nero', 'Looney Tunes', 'Bugs Bunny', 'Sputare', 'Warner Bros', 'Becco', 'Petulante'] },
  { guessWord: 'Wile E. Coyote', forbiddenWords: ['Beep Beep', 'ACME', 'Canyon', 'Road Runner', 'Cadere', 'Inseguimento', 'Trappola', 'Genio'] },
  { guessWord: 'Tom & Jerry', forbiddenWords: ['Gatto', 'Topo', 'Inseguimento', 'Casa', 'Non parlano', 'Violenza', 'Trappole', 'Nemici'] },
  { guessWord: 'I Flintstones', forbiddenWords: ['Pietra', 'Dinosauri', 'Fred', 'Wilma', 'Antenati', 'Bedrock', 'Yabba Dabba Doo', 'Auto'] },
  { guessWord: 'Scooby-Doo', forbiddenWords: ['Cane', 'Mistero', 'Fantasma', 'Shaggy', 'Mostri', 'Spaventarsi', 'Mistery Machine', 'Maschera'] },
  { guessWord: 'Orso Yoghi', forbiddenWords: ['Parco', 'Jellystone', 'Cestino', 'Picnic', 'Bubu', 'Ranger', 'Più furbo di...', 'Cappello'] },
  { guessWord: 'Braccio di Ferro', forbiddenWords: ['Spinaci', 'Forza', 'Pipa', 'Olivia', 'Bruto', 'Muscoli', 'Marinaio', 'Occhio'] },
  { guessWord: 'Snoopy', forbiddenWords: ['Cane', 'Charlie Brown', 'Peanuts', 'Cuccia', 'Scrivere', 'Bracchetto', 'Volare', 'Barone Rosso'] },
  { guessWord: 'Garfield', forbiddenWords: ['Gatto', 'Lasagne', 'Arancione', 'Odie', 'Jon', 'Grasso', 'Pigro', 'Lunedì'] },
  
  // --- Serie TV Americane Iconiche ---
  { guessWord: 'I Simpson', forbiddenWords: ['Homer', 'Giallo', 'Springfield', 'Famiglia', 'Divano', 'Ciambella', 'Bart', 'Fox'] },
  { guessWord: 'I Griffin', forbiddenWords: ['Peter', 'Stewie', 'Lois', 'Famiglia', 'Cane parlante', 'Seth MacFarlane', 'Quahog', 'Irriverente'] },
  { guessWord: 'South Park', forbiddenWords: ['Kenny', 'Cartman', 'Scuola', ' parolacce', 'Colorado', 'Ragazzi', 'Irriverente', 'Quattro'] },
  { guessWord: 'Futurama', forbiddenWords: ['Fry', 'Bender', 'Leela', 'Futuro', 'Spazio', 'Robot', 'Pizza', 'Matt Groening'] },
  { guessWord: 'SpongeBob', forbiddenWords: ['Spugna', 'Mare', 'Patrick', 'Ananas', 'Pantaloni quadrati', 'Bikini Bottom', 'Crostaceo', 'Lumaca'] },
  { guessWord: 'Rick and Morty', forbiddenWords: ['Scienziato', 'Nipote', 'Portali', 'Dimensioni', 'Alcolizzato', 'Avventure', 'Genio', 'Adult Swim'] },
  { guessWord: 'Adventure Time', forbiddenWords: ['Finn', 'Jake', 'Cane', 'Umano', 'Ooo', 'Principessa', 'Magia', 'Avventura'] },
  { guessWord: 'Avatar - La leggenda di Aang', forbiddenWords: ['Elementi', 'Dominatore', 'Aria', 'Acqua', 'Terra', 'Fuoco', 'Nazione', 'Stato'] },
  
  // --- Anime Giapponesi Famosi ---
  { guessWord: 'Dragon Ball', forbiddenWords: ['Goku', 'Sfere', 'Desiderio', 'Super Saiyan', 'Kamehameha', 'Combattimento', 'Vegeta', 'Freezer'] },
  { guessWord: 'Pokémon', forbiddenWords: ['Pikachu', 'Ash', 'Catturare', 'Poké Ball', 'Mostri', 'Allenatore', 'Gotta Catch \'Em All', 'Evoluzione'] },
  { guessWord: 'Naruto', forbiddenWords: ['Ninja', 'Konoha', 'Rasengan', 'Volpe', 'Nove code', 'Sasuke', 'Sakura', 'Hokage'] },
  { guessWord: 'One Piece', forbiddenWords: ['Luffy', 'Pirata', 'Gomma', 'Tesoro', 'Cappello di paglia', 'Ciurma', 'Nave', 'Grande Blu'] },
  { guessWord: 'Sailor Moon', forbiddenWords: ['Guerriera', 'Luna', 'Veste alla marinara', 'Usagi', 'Potere del cristallo', 'Scettro', 'Gatto', 'Trasformazione'] },
  { guessWord: 'I Cavalieri dello Zodiaco', forbiddenWords: ['Saint Seiya', 'Armatura', 'Costellazioni', 'Cosmo', 'Santuario', 'Atena', 'Pegasus', 'Dodici case'] },
  { guessWord: 'L\'attacco dei Giganti', forbiddenWords: ['Mura', 'Titani', 'Divorare', 'Eren', 'Mikasa', 'Corpo di ricerca', 'Manovra tridimensionale', 'Umanità'] },
  { guessWord: 'Death Note', forbiddenWords: ['Quaderno', 'Scrivere', 'Nome', 'Morte', 'Light', 'L', 'Shinigami', 'Regole'] },
  { guessWord: 'My Hero Academia', forbiddenWords: ['Supereroi', 'Quirk', 'Scuola', 'All Might', 'Deku', 'Poteri', 'Accademia', 'Eroi'] },
  { guessWord: 'Holly e Benji', forbiddenWords: ['Calcio', 'Tiro', 'Campo', 'Partita', 'Rovesciata', 'Portiere', 'Giappone', 'Interminabile'] },
  { guessWord: 'Mila e Shiro', forbiddenWords: ['Pallavolo', 'Schiacciata', 'Attacco', 'Due cuori', 'Partita', 'Allenamento', 'Rete', 'Giappone'] },
  { guessWord: 'Ken il guerriero', forbiddenWords: ['Hokuto', 'Sei già morto', 'Punti di pressione', 'Post-apocalittico', 'Combattimento', 'Muscoli', 'Stella', 'Successore'] },
  { guessWord: 'Lupin III', forbiddenWords: ['Ladro', 'Giacca', 'Arsenio', 'Jigen', 'Goemon', 'Fujiko', 'Zenigata', 'Inseguimento'] },
  { guessWord: 'Heidi', forbiddenWords: ['Montagna', 'Nonno', 'Caprette', 'Clara', 'Alpi', 'Peter', 'Francoforte', 'Natura'] },
  { guessWord: 'Anna dai capelli rossi', forbiddenWords: ['Orfana', 'Isola', 'Trecce', 'Fantasia', 'Verde', 'Canada', 'Marilla', 'Gilbert'] },
  { guessWord: 'Doraemon', forbiddenWords: ['Gatto', 'Robot', 'Futuro', 'Nobita', 'Giusky', 'Tasca', 'Blu', 'Giappone'] },
  { guessWord: 'Hello Kitty', forbiddenWords: ['Gattina', 'Fiocco', 'Senza bocca', 'Bianca', 'Sanrio', 'Giappone', 'Personaggio', 'Carina'] },
  { guessWord: 'Studio Ghibli', forbiddenWords: ['Miyazaki', 'La città incantata', 'Totoro', 'Mononoke', 'Castello errante', 'Anime', 'Film', 'Giappone'] },
  
  // --- Europei e per Bambini ---
  { guessWord: 'I Puffi', forbiddenWords: ['Blu', 'Puffetta', 'Gargamella', 'Villaggio', 'Funghi', 'Cappello bianco', 'Piccoli', 'Belgio'] },
  { guessWord: 'Asterix', forbiddenWords: ['Galli', 'Romani', 'Pozione magica', 'Obelix', 'Forza', 'Baffi', 'Elmo', 'Francia'] },
  { guessWord: 'Tintin', forbiddenWords: ['Reporter', 'Ciuffo', 'Cane', 'Milù', 'Avventura', 'Fumetto', 'Belgio', 'Capitano'] },
  { guessWord: 'Peppa Pig', forbiddenWords: ['Maialina', 'George', 'Fango', 'Pozzanghere', 'Famiglia', 'Rosa', 'Grugnito', 'Bambini'] },
  { guessWord: 'Masha e Orso', forbiddenWords: ['Bambina', 'Animale', 'Foresta', 'Amici', 'Casa', 'Combinaguai', 'Russia', 'Insieme'] },
  { guessWord: 'Paw Patrol', forbiddenWords: ['Cani', 'Cuccioli', 'Squadra', 'Salvataggio', 'Ryder', 'Missione', 'Veicoli', 'Emergenza'] },
  { guessWord: 'Lo straordinario mondo di Gumball', forbiddenWords: ['Gatto', 'Pesce', 'Fratello', 'Blu', 'Arancione', 'Scuola', 'Famiglia', 'Elmore'] },
  { guessWord: 'Miraculous - Le storie di Ladybug e Chat Noir', forbiddenWords: ['Coccinella', 'Gatto nero', 'Parigi', 'Supereroi', 'Trasformazione', 'Kwami', 'Marinette', 'Adrien'] },
  { guessWord: 'Shaun, vita da pecora', forbiddenWords: ['Pecora', 'Fattoria', 'Plastilina', 'Stop-motion', 'Gregge', 'Contadino', 'Aardman', 'Senza parole'] },
  { guessWord: 'Bob Aggiustatutto', forbiddenWords: ['Costruire', 'Riparare', 'Elmetto', 'Sì, possiamo!', 'Attrezzi', 'Squadra', 'Lavoro', 'Macchine'] },
  
  // Categoria: Natura, Paesaggi e Fenomeni Atmosferici (Espansione)
  // --- Fenomeni Atmosferici (Meteo) ---
  { guessWord: 'Sole', forbiddenWords: ['Luce', 'Caldo', 'Giallo', 'Cielo', 'Stella', 'Giorno', 'Raggi', 'Estate'] },
  { guessWord: 'Pioggia', forbiddenWords: ['Acqua', 'Ombrello', 'Nuvole', 'Gocce', 'Bagnato', 'Temporale', 'Pozzanghera', 'Cadere'] },
  { guessWord: 'Neve', forbiddenWords: ['Fiocco', 'Bianca', 'Inverno', 'Freddo', 'Montagna', 'Sciare', 'Pupazzo', 'Cadere'] },
  { guessWord: 'Vento', forbiddenWords: ['Aria', 'Soffiare', 'Forte', 'Alberi', 'Aquilone', 'Brezza', 'Corrente', 'Foglie'] },
  { guessWord: 'Nuvola', forbiddenWords: ['Cielo', 'Bianca', 'Pioggia', 'Vapore', 'Forma', 'Passare', 'Cotone', 'Azzurro'] },
  { guessWord: 'Tempesta', forbiddenWords: ['Pioggia', 'Vento', 'Fulmini', 'Tuoni', 'Forte', 'Uragano', 'Mareggiata', 'Pericolo'] },
  { guessWord: 'Fulmine', forbiddenWords: ['Lampo', 'Saetta', 'Cielo', 'Tempesta', 'Tuono', 'Scarica', 'Elettricità', 'Colpire'] },
  { guessWord: 'Tuono', forbiddenWords: ['Rumore', 'Boato', 'Fulmine', 'Tempesta', 'Forte', 'Cielo', 'Spaventare', 'Suono'] },
  { guessWord: 'Grandine', forbiddenWords: ['Ghiaccio', 'Chicchi', 'Palline', 'Tempesta', 'Cadere', 'Danni', 'Auto', 'Bianca'] },
  { guessWord: 'Nebbia', forbiddenWords: ['Visibilità', 'Fitta', 'Banco', 'Non vedere', 'Mattina', 'Umido', 'Grigio', 'Auto'] },
  { guessWord: 'Arcobaleno', forbiddenWords: ['Colori', 'Pioggia', 'Sole', 'Arco', 'Cielo', 'Sette', 'Pentola d\'oro', 'Curva'] },
  { guessWord: 'Uragano', forbiddenWords: ['Vento', 'Tempesta', 'Forte', 'Oceano', 'Occhio', 'Ciclone', 'Distruzione', 'Categoria'] },
  { guessWord: 'Tornado', forbiddenWords: ['Vortice', 'Vento', 'Aria', 'Imbuto', 'Girare', 'America', 'Casa', 'Distruzione'] },
  { guessWord: 'Gelo', forbiddenWords: ['Freddo', 'Ghiaccio', 'Inverno', 'Temperatura', 'Sottozero', 'Piante', 'Auto', 'Pattinaggio'] },
  { guessWord: 'Umidità', forbiddenWords: ['Acqua', 'Aria', 'Afa', 'Appiccicoso', 'Condensa', 'Muffa', 'Clima', 'Percentuale'] },
  { guessWord: 'Afa', forbiddenWords: ['Caldo', 'Umidità', 'Estate', 'Soffocante', 'Sudare', 'Senza vento', 'Pesante', 'Appiccicoso'] },
  { guessWord: 'Brezza', forbiddenWords: ['Vento', 'Leggero', 'Fresco', 'Mare', 'Sera', 'Soffio', 'Piacevole', 'Estiva'] },
  { guessWord: 'Clima', forbiddenWords: ['Tempo', 'Stagioni', 'Temperatura', 'Regione', 'Meteo', 'Cambiamento', 'Atmosfera', 'Precipitazioni'] },
  { guessWord: 'Stagione', forbiddenWords: ['Primavera', 'Estate', 'Autunno', 'Inverno', 'Anno', 'Mesi', 'Clima', 'Periodo'] },
  { guessWord: 'Temperatura', forbiddenWords: ['Caldo', 'Freddo', 'Gradi', 'Termometro', 'Febbre', 'Misurare', 'Clima', 'Corpo'] },
  { guessWord: 'Alba', forbiddenWords: ['Mattina', 'Sole', 'Sorgere', 'Luce', 'Inizio', 'Cielo', 'Giorno', 'Tramonto'] },
  { guessWord: 'Tramonto', forbiddenWords: ['Sera', 'Sole', 'Scendere', 'Rosso', 'Orizzonte', 'Fine', 'Luce', 'Alba'] },
  { guessWord: 'Rugida', forbiddenWords: ['Gocce', 'Notte', 'Erba', 'Mattina', 'Freddo', 'Bagnato', 'Umidità', 'Freschezza'] },
  { guessWord: 'Cielo', forbiddenWords: ['Azzurro', 'Nuvole', 'Stelle', 'Sopra', 'Aria', 'Spazio', 'Infinito', 'Atmosfera'] },
  { guessWord: 'Atmosfera', forbiddenWords: ['Aria', 'Cielo', 'Gas', 'Ossigeno', 'Terra', 'Strato', 'Pressione', 'Protezione'] },

  // --- Paesaggi e Formazioni Geografiche ---
  { guessWord: 'Montagna', forbiddenWords: ['Alta', 'Vetta', 'Neve', 'Scalare', 'Roccia', 'Alpi', 'Pendenza', 'Rifugio'] },
  { guessWord: 'Collina', forbiddenWords: ['Salita', 'Verde', 'Paese', 'Bassa', 'Montagna', 'Pendenza', 'Vigneti', 'Dolce'] },
  { guessWord: 'Pianura', forbiddenWords: ['Piatta', 'Campi', 'Orizzonte', 'Agricoltura', 'Senza salite', 'Distesa', 'Padana', 'Bassa'] },
  { guessWord: 'Valle', forbiddenWords: ['Fiume', 'Montagne', 'Verde', 'In mezzo', 'Conca', 'Paese', 'Profonda', 'Lunga'] },
  { guessWord: 'Deserto', forbiddenWords: ['Sabbia', 'Caldo', 'Siccità', 'Oasi', 'Cammello', 'Dune', 'Sahara', 'Senza acqua'] },
  { guessWord: 'Foresta', forbiddenWords: ['Alberi', 'Bosco', 'Fitta', 'Verde', 'Sentiero', 'Animali', 'Legno', 'Ombra'] },
  { guessWord: 'Isola', forbiddenWords: ['Mare', 'Terra', 'Circondata', 'Acqua', 'Spiaggia', 'Nave', 'Deserta', 'Arcipelago'] },
  { guessWord: 'Fiume', forbiddenWords: ['Acqua', 'Corrente', 'Sponda', 'Letto', 'Foce', 'Ponte', 'Scorrere', 'Affluente'] },
  { guessWord: 'Lago', forbiddenWords: ['Acqua', 'Dolce', 'Riva', 'Barca', 'Fermo', 'Pesca', 'Garda', 'Specchio'] },
  { guessWord: 'Mare', forbiddenWords: ['Acqua', 'Salata', 'Onde', 'Spiaggia', 'Pesci', 'Oceano', 'Blu', 'Profondo'] },
  { guessWord: 'Oceano', forbiddenWords: ['Mare', 'Grande', 'Vasto', 'Profondo', 'Balene', 'Continenti', 'Atlantico', 'Pacifico'] },
  { guessWord: 'Vulcano', forbiddenWords: ['Lava', 'Cratere', 'Eruzione', 'Fuoco', 'Fumo', 'Cenere', 'Montagna', 'Magma'] },
  { guessWord: 'Ghiacciaio', forbiddenWords: ['Ghiaccio', 'Neve', 'Montagna', 'Freddo', 'Sciogliersi', 'Lento', 'Massa', 'Polare'] },
  { guessWord: 'Cascata', forbiddenWords: ['Acqua', 'Salto', 'Cadere', 'Rumore', 'Rocce', 'Altezza', 'Velo', 'Getto'] },
  { guessWord: 'Scogliera', forbiddenWords: ['Mare', 'Roccia', 'Alta', 'A picco', 'Costa', 'Onde', 'Cadere', 'Precipizio'] },
  { guessWord: 'Canyon', forbiddenWords: ['Gola', 'Profondo', 'Fiume', 'Roccia', 'America', 'Colorado', 'Scavato', 'Stretto'] },
  { guessWord: 'Grotta', forbiddenWords: ['Buia', 'Caverna', 'Stalattiti', 'Stalagmiti', 'Roccia', 'Esplorare', 'Sottoterra', 'Eco'] },
  { guessWord: 'Baia', forbiddenWords: ['Mare', 'Insenatura', 'Costa', 'Porto', 'Spiaggia', 'Riparata', 'Curva', 'Ancorare'] },
  { guessWord: 'Spiaggia', forbiddenWords: ['Sabbia', 'Mare', 'Ombrellone', 'Onde', 'Bagnasciuga', 'Conchiglie', 'Estate', 'Asciugamano'] },
  { guessWord: 'Duna', forbiddenWords: ['Sabbia', 'Deserto', 'Vento', 'Collina', 'Ammasso', 'Forma', 'Muoversi', 'Cresta'] },
  { guessWord: 'Laguna', forbiddenWords: ['Venezia', 'Acqua', 'Mare', 'Bassa', 'Salmastra', 'Isole', 'Canali', 'Palude'] },
  { guessWord: 'Palude', forbiddenWords: ['Acqua stagnante', 'Fango', 'Zanzare', 'Canneti', 'Umidità', 'Melma', 'Terreno', 'Rane'] },
  { guessWord: 'Prato', forbiddenWords: ['Erba', 'Verde', 'Fiori', 'Campo', 'Pascolo', 'Tagliare', 'Giardino', 'Pianura'] },
  { guessWord: 'Bosco', forbiddenWords: ['Alberi', 'Foresta', 'Sentiero', 'Funghi', 'Ombra', 'Animali', 'Natura', 'Verde'] },
  { guessWord: 'Campagna', forbiddenWords: ['Città', 'Natura', 'Campi', 'Verde', 'Fattoria', 'Tranquillità', 'Paese', 'Rurale'] },
  { guessWord: 'Artico', forbiddenWords: ['Polo Nord', 'Ghiaccio', 'Orso polare', 'Freddo', 'Neve', 'Inuit', 'Circolo', 'Oceano'] },
  { guessWord: 'Antartide', forbiddenWords: ['Polo Sud', 'Ghiaccio', 'Pinguini', 'Continente', 'Freddo', 'Deserto', 'Inesplorato', 'Neve'] },
  { guessWord: 'Steppa', forbiddenWords: ['Erba', 'Pianura', 'Arida', 'Senza alberi', 'Asia', 'Vento', 'Freddo', 'Paesaggio'] },
  { guessWord: 'Tundra', forbiddenWords: ['Freddo', 'Muschio', 'Licheni', 'Permafrost', 'Artico', 'Senza alberi', 'Pianura', 'Renne'] },
  { guessWord: 'Barriera Corallina', forbiddenWords: ['Coralli', 'Pesci', 'Colori', 'Mare', 'Sub', 'Tropicale', 'Australia', 'Anemone'] },
  { guessWord: 'Sorgente', forbiddenWords: ['Acqua', 'Nascere', 'Fiume', 'Terra', 'Zampillare', 'Pura', 'Fonte', 'Bere'] },
  { guessWord: 'Ruscello', forbiddenWords: ['Acqua', 'Piccolo', 'Fiume', 'Scorrere', 'Sassi', 'Bosco', 'Mormorio', 'Corrente'] },
  { guessWord: 'Foce', forbiddenWords: ['Fiume', 'Mare', 'Fine', 'Delta', 'Estuario', 'Incontro', 'Acqua', 'Sboccare'] },
  { guessWord: 'Costa', forbiddenWords: ['Mare', 'Terra', 'Confine', 'Spiaggia', 'Scogliera', 'Litorale', 'Linea', 'Navigare'] },
  { guessWord: 'Orizzonte', forbiddenWords: ['Linea', 'Cielo', 'Mare', 'Lontano', 'Fine', 'Guardare', 'Infinito', 'Terra'] },
  
  // --- Elementi Naturali (Flora) ---
  { guessWord: 'Albero', forbiddenWords: ['Rami', 'Foglie', 'Tronco', 'Radici', 'Legno', 'Foresta', 'Frutto', 'Corteccia'] },
  { guessWord: 'Fiore', forbiddenWords: ['Petali', 'Profumo', 'Pianta', 'Colore', 'Gambo', 'Bocciolo', 'Margherita', 'Vaso'] },
  { guessWord: 'Pianta', forbiddenWords: ['Verde', 'Foglie', 'Radici', 'Fiore', 'Vaso', 'Terra', 'Crescere', 'Natura'] },
  { guessWord: 'Erba', forbiddenWords: ['Prato', 'Verde', 'Tagliare', 'Giardino', 'Campo', 'Filo', 'Fresco', 'Pascolo'] },
  { guessWord: 'Foglia', forbiddenWords: ['Albero', 'Ramo', 'Verde', 'Cadere', 'Autunno', 'Nervo', 'Fotosintesi', 'Pianta'] },
  { guessWord: 'Radice', forbiddenWords: ['Pianta', 'Terra', 'Sotto', 'Albero', 'Assorbire', 'Ancorare', 'Stabilità', 'Nascosta'] },
  { guessWord: 'Seme', forbiddenWords: ['Pianta', 'Frutto', 'Nascita', 'Terra', 'Germogliare', 'Piccolo', 'Piantare', 'Futuro'] },
  { guessWord: 'Frutto', forbiddenWords: ['Albero', 'Mangiare', 'Dolce', 'Seme', 'Mela', 'Natura', 'Succo', 'Maturare'] },
  { guessWord: 'Corteccia', forbiddenWords: ['Albero', 'Tronco', 'Esterno', 'Legno', 'Superficie', 'Ruvida', 'Protezione', 'Togliere'] },
  { guessWord: 'Ramo', forbiddenWords: ['Albero', 'Foglie', 'Legno', 'Tronco', 'Grosso', 'Secco', 'Appendere', 'Forcella'] },
  { guessWord: 'Bocciolo', forbiddenWords: ['Fiore', 'Chiuso', 'Aprire', 'Schiudersi', 'Primavera', 'Pianta', 'Gemma', 'Petali'] },
  { guessWord: 'Spina', forbiddenWords: ['Rosa', 'Pungere', 'Aculeo', 'Cactus', 'Dolore', 'Attenzione', 'Pianta', 'Difesa'] },
  { guessWord: 'Petalo', forbiddenWords: ['Fiore', 'Colore', 'Morbido', 'Margherita', 'Rosa', 'Cadere', 'Delicato', 'Contare'] },
  { guessWord: 'Gambo', forbiddenWords: ['Fiore', 'Sostenere', 'Lungo', 'Verde', 'Pianta', 'Stelo', 'Tagliare', 'Vaso'] },
  { guessWord: 'Quercia', forbiddenWords: ['Albero', 'Ghianda', 'Robusta', 'Legno', 'Forte', 'Bosco', 'Foglie', 'Longevità'] },
  { guessWord: 'Pino', forbiddenWords: ['Albero', 'Aghi', 'Pigna', 'Resina', 'Sempreverde', 'Montagna', 'Ombrello', 'Marittimo'] },
  { guessWord: 'Abete', forbiddenWords: ['Albero', 'Natale', 'Aghi', 'Montagna', 'Sempreverde', 'Conifera', 'Rosso', 'Bianco'] },
  { guessWord: 'Salice', forbiddenWords: ['Albero', 'Piangente', 'Rami', 'Pendenti', 'Fiume', 'Acqua', 'Sottile', 'Foglie'] },
  { guessWord: 'Palma', forbiddenWords: ['Albero', 'Cocco', 'Datteri', 'Foglie', 'Oasi', 'Spiaggia', 'Tronco', 'Tropicale'] },
  { guessWord: 'Cactus', forbiddenWords: ['Spine', 'Deserto', 'Pianta grassa', 'Acqua', 'Verde', 'Senza foglie', 'Messico', 'Pungere'] },
  { guessWord: 'Felce', forbiddenWords: ['Pianta', 'Foglie', 'Verde', 'Sottobosco', 'Preistorica', 'Senza fiori', 'Spore', 'Umidità'] },
  { guessWord: 'Muschio', forbiddenWords: ['Verde', 'Morbido', 'Rocce', 'Alberi', 'Umidità', 'Senza fiori', 'Tappeto', 'Bosco'] },
  { guessWord: 'Alga', forbiddenWords: ['Mare', 'Acqua', 'Verde', 'Pianta', 'Fondale', 'Sushi', 'Fotosintesi', 'Filamento'] },
  { guessWord: 'Bambù', forbiddenWords: ['Canna', 'Panda', 'Cina', 'Pianta', 'Cavo', 'Foresta', 'Legno', 'Veloce'] },
  { guessWord: 'Cespuglio', forbiddenWords: ['Arbusto', 'Basso', 'Pianta', 'Siepe', 'Rami', 'Fogliame', 'Giardino', 'Verde'] },
  { guessWord: 'Siepe', forbiddenWords: ['Confine', 'Giardino', 'Cespugli', 'Potare', 'Verde', 'Divisorio', 'Alta', 'Privacy'] },
  { guessWord: 'Girasole', forbiddenWords: ['Sole', 'Giallo', 'Fiore', 'Semi', 'Alto', 'Campo', 'Olio', 'Girare'] },
  { guessWord: 'Rosa', forbiddenWords: ['Fiore', 'Amore', 'Spine', 'Rossa', 'Profumo', 'Bocciolo', 'San Valentino', 'Gambo'] },
  { guessWord: 'Margherita', forbiddenWords: ['Fiore', 'Petali', 'Bianco', 'Giallo', 'Prato', 'M\'ama non m\'ama', 'Semplice', 'Campo'] },
  { guessWord: 'Tulipano', forbiddenWords: ['Fiore', 'Olanda', 'Bulbo', 'Colori', 'Primavera', 'Campo', 'Stelo', 'Forma'] },
  
  // --- Elementi Naturali (Minerali e Geologia) ---
  { guessWord: 'Roccia', forbiddenWords: ['Pietra', 'Dura', 'Montagna', 'Sasso', 'Minerale', 'Geologia', 'Stratificata', 'Masso'] },
  { guessWord: 'Pietra', forbiddenWords: ['Sasso', 'Roccia', 'Dura', 'Lanciare', 'Costruire', 'Preziosa', 'Levigata', 'Ciottolo'] },
  { guessWord: 'Sabbia', forbiddenWords: ['Deserto', 'Spiaggia', 'Granelli', 'Fine', 'Castello', 'Duna', 'Clessidra', 'Gialla'] },
  { guessWord: 'Terra', forbiddenWords: ['Pianeta', 'Suolo', 'Coltivare', 'Marrone', 'Fango', 'Mondo', 'Agricoltura', 'Sporco'] },
  { guessWord: 'Fango', forbiddenWords: ['Terra', 'Acqua', 'Sporco', 'Melma', 'Pioggia', 'Scarpe', 'Pozzanghera', 'Molle'] },
  { guessWord: 'Polvere', forbiddenWords: ['Sottile', 'Sporco', 'Aspirare', 'Pulire', 'Aria', 'Mobili', 'Starnutire', 'Granelli'] },
  { guessWord: 'Minerale', forbiddenWords: ['Roccia', 'Naturale', 'Cristallo', 'Geologia', 'Terra', 'Inorganico', 'Elemento', 'Estrarre'] },
  { guessWord: 'Cristallo', forbiddenWords: ['Trasparente', 'Forma', 'Geometrica', 'Brillare', 'Ghiaccio', 'Quarzo', 'Vetro', 'Minerale'] },
  { guessWord: 'Diamante', forbiddenWords: ['Prezioso', 'Anello', 'Duro', 'Brillante', 'Taglio', 'Carati', 'Gioiello', 'Carbonio'] },
  { guessWord: 'Oro', forbiddenWords: ['Metallo', 'Giallo', 'Prezioso', 'Anello', 'Pepita', 'Lingotto', 'Tesoro', 'Ricchezza'] },
  { guessWord: 'Argento', forbiddenWords: ['Metallo', 'Grigio', 'Lucido', 'Posate', 'Gioiello', 'Secondo', 'Medaglia', 'Prezioso'] },
  { guessWord: 'Marmo', forbiddenWords: ['Pietra', 'Bianco', 'Statua', 'Pavimento', 'Carrara', 'Lussuoso', 'Venature', 'Levigato'] },
  { guessWord: 'Carbone', forbiddenWords: ['Nero', 'Combustibile', 'Miniera', 'Befana', 'Fossile', 'Fuoco', 'Caldo', 'Diamante'] },
  { guessWord: 'Lava', forbiddenWords: ['Vulcano', 'Fuoco', 'Magma', 'Roccia fusa', 'Calda', 'Eruzione', 'Scorrere', 'Pietrificarsi'] },
  { guessWord: 'Magma', forbiddenWords: ['Lava', 'Sottoterra', 'Vulcano', 'Roccia fusa', 'Caldo', 'Camera', 'Pressione', 'Eruzione'] },
  { guessWord: 'Fossile', forbiddenWords: ['Dinosauro', 'Pietrificato', 'Resti', 'Antico', 'Scavo', 'Milioni di anni', 'Impronta', 'Scheletro'] },
  { guessWord: 'Ambra', forbiddenWords: ['Resina', 'Gialla', 'Fossile', 'Insetto', 'Gioiello', 'Preziosa', 'Pietra', 'Trasparente'] },
  { guessWord: 'Perla', forbiddenWords: ['Ostrica', 'Collana', 'Bianca', 'Gioiello', 'Preziosa', 'Mare', 'Rotonda', 'Conchiglia'] },
  
  // --- Elementi del Cosmo ---
  { guessWord: 'Stella', forbiddenWords: ['Cielo', 'Notte', 'Luce', 'Brillare', 'Sole', 'Cadente', 'Costellazione', 'Pianeta'] },
  { guessWord: 'Pianeta', forbiddenWords: ['Terra', 'Marte', 'Giove', 'Spazio', 'Girare', 'Sole', 'Orbita', 'Sistema'] },
  { guessWord: 'Luna', forbiddenWords: ['Notte', 'Satellite', 'Cielo', 'Fasi', 'Piena', 'Mezzaluna', 'Riflettere', 'Terra'] },
  { guessWord: 'Galassia', forbiddenWords: ['Stelle', 'Spazio', 'Via Lattea', 'Bracci', 'Universo', 'Ammasso', 'Nebulosa', 'Enorme'] },
  { guessWord: 'Universo', forbiddenWords: ['Spazio', 'Tutto', 'Infinito', 'Galassie', 'Stelle', 'Big Bang', 'Cosmo', 'Esistenza'] },
  { guessWord: 'Cometa', forbiddenWords: ['Coda', 'Ghiaccio', 'Spazio', 'Stella', 'Passare', 'Cielo', 'Halley', 'Luminosa'] },
  { guessWord: 'Meteora', forbiddenWords: ['Stella cadente', 'Spazio', 'Atmosfera', 'Bruciare', 'Scia', 'Frammento', 'Notte', 'Desiderio'] },
  { guessWord: 'Costellazione', forbiddenWords: ['Stelle', 'Cielo', 'Gruppo', 'Forma', 'Orsa Maggiore', 'Zodiaco', 'Disegno', 'Notte'] },
  { guessWord: 'Spazio', forbiddenWords: ['Vuoto', 'Stelle', 'Pianeti', 'Universo', 'Nero', 'Astronauta', 'Navicella', 'Infinito'] },
  { guessWord: 'Eclissi', forbiddenWords: ['Sole', 'Luna', 'Oscurare', 'Coprire', 'Ombra', 'Totale', 'Anulare', 'Fenomeno'] },
  { guessWord: 'Orbita', forbiddenWords: ['Pianeta', 'Giro', 'Attorno', 'Percorso', 'Terra', 'Luna', 'Satellite', 'Spazio'] },
  { guessWord: 'Via Lattea', forbiddenWords: ['Galassia', 'Nostra', 'Stelle', 'Braccio', 'Latte', 'Striscia', 'Cielo', 'Notte'] },
  
  // Categoria: Auto, Moto e Strada (Espansione)
  // --- Parti Comuni e Meccanica ---
  { guessWord: 'Motore', forbiddenWords: ['Potenza', 'Cavalli', 'Cilindri', 'Scoppio', 'Accensione', 'Benzina', 'Macchina', 'Cuore'] },
  { guessWord: 'Ruota', forbiddenWords: ['Gomma', 'Girare', 'Cerchione', 'Pneumatico', 'Veicolo', 'Rotonda', 'Ricambio', 'Strada'] },
  { guessWord: 'Freno', forbiddenWords: ['Fermare', 'Rallentare', 'Pedale', 'Disco', 'Pastiglie', 'Emergenza', 'Mano', 'Pinza'] },
  { guessWord: 'Acceleratore', forbiddenWords: ['Velocità', 'Gas', 'Pedale', 'Aumentare', 'Spingere', 'Motore', 'Andare', 'Correre'] },
  { guessWord: 'Volante', forbiddenWords: ['Sterzo', 'Guidare', 'Curva', 'Destra', 'Sinistra', 'Tenere', 'Auto', 'Rotondo'] },
  { guessWord: 'Marcia', forbiddenWords: ['Cambio', 'Velocità', 'Prima', 'Seconda', 'Leva', 'Ingranaggio', 'Scalare', 'Inserire'] },
  { guessWord: 'Frizione', forbiddenWords: ['Pedale', 'Cambio', 'Marcia', 'Stacco', 'Premere', 'Auto', 'Manuale', 'Sinistro'] },
  { guessWord: 'Sospensioni', forbiddenWords: ['Ammortizzatori', 'Buche', 'Scuotere', 'Molle', 'Comfort', 'Strada', 'Ruote', 'Oscillazione'] },
  { guessWord: 'Serbatoio', forbiddenWords: ['Benzina', 'Carburante', 'Pieno', 'Tappo', 'Galleggiante', 'Riserva', 'Litri', 'Contenitore'] },
  { guessWord: 'Marmitta', forbiddenWords: ['Scarico', 'Gas', 'Rumore', 'Fumo', 'Tubo', 'Posteriore', 'Inquinamento', 'Silenziatore'] },
  { guessWord: 'Radiatore', forbiddenWords: ['Raffreddamento', 'Acqua', 'Motore', 'Caldo', 'Liquido', 'Ventola', 'Griglia', 'Anteriore'] },
  { guessWord: 'Batteria', forbiddenWords: ['Elettricità', 'Accensione', 'Poli', 'Ricaricare', 'A terra', 'Spenta', 'Auto', 'Corrente'] },
  
  // --- Parti Specifiche dell'Auto ---
  { guessWord: 'Cofano', forbiddenWords: ['Motore', 'Anteriore', 'Aprire', 'Auto', 'Vano', 'Copertura', 'Alzare', 'Carrozzeria'] },
  { guessWord: 'Portiera', forbiddenWords: ['Entrare', 'Uscire', 'Aprire', 'Chiudere', 'Sportello', 'Finestrino', 'Maniglia', 'Auto'] },
  { guessWord: 'Bagagliaio', forbiddenWords: ['Valigie', 'Carico', 'Posteriore', 'Spazio', 'Aprire', 'Baule', 'Portellone', 'Ruota di scorta'] },
  { guessWord: 'Paraurti', forbiddenWords: ['Urto', 'Davanti', 'Dietro', 'Colpo', 'Protezione', 'Plastica', 'Carrozzeria', 'Paracolpi'] },
  { guessWord: 'Parabrezza', forbiddenWords: ['Vetro', 'Anteriore', 'Guidatore', 'Visibilità', 'Pioggia', 'Tergicristalli', 'Scheggia', 'Cristallo'] },
  { guessWord: 'Faro', forbiddenWords: ['Luce', 'Notte', 'Anabbagliante', 'Abbagliante', 'Vedere', 'Illuminare', 'Lampadina', 'Anteriore'] },
  { guessWord: 'Fanale', forbiddenWords: ['Luce', 'Posteriore', 'Stop', 'Freno', 'Rosso', 'Indicatore', 'Retromarcia', 'Coda'] },
  { guessWord: 'Tergicristallo', forbiddenWords: ['Pioggia', 'Parabrezza', 'Vetro', 'Pulire', 'Gomma', 'Spazzola', 'Acqua', 'Leva'] },
  { guessWord: 'Sedile', forbiddenWords: ['Sedersi', 'Posto', 'Guidatore', 'Passeggero', 'Comodo', 'Regolare', 'Schienale', 'Poggiatesta'] },
  { guessWord: 'Cruscotto', forbiddenWords: ['Contachilometri', 'Spie', 'Strumenti', 'Volante', 'Velocità', 'Benzina', 'Temperatura', 'Pannello'] },
  { guessWord: 'Specchietto', forbiddenWords: ['Guardare', 'Retrovisore', 'Dietro', 'Sorpasso', 'Laterale', 'Riflesso', 'Regolare', 'Vedere'] },
  { guessWord: 'Cintura di sicurezza', forbiddenWords: ['Allacciare', 'Protezione', 'Viaggio', 'Obbligatoria', 'Sedile', 'Scatto', 'Fibbia', 'Salva-vita'] },
  { guessWord: 'Airbag', forbiddenWords: ['Sicurezza', 'Urto', 'Volante', 'Pallone', 'Scoppiare', 'Incidente', 'Cruscotto', 'Protezione'] },
  { guessWord: 'Autoradio', forbiddenWords: ['Musica', 'Stazione', 'Volume', 'Antenna', 'Canale', 'CD', 'Altoparlanti', 'Sintonizzare'] },
  { guessWord: 'Clacson', forbiddenWords: ['Suonare', 'Avvisare', 'Rumore', 'Volante', 'Tromba', 'Traffico', 'Forte', 'Premere'] },
  { guessWord: 'Tettuccio', forbiddenWords: ['Apribile', 'Tetto', 'Aria', 'Sole', 'Vetro', 'Scorrevole', 'Panoramico', 'Auto'] },
  { guessWord: 'Portapacchi', forbiddenWords: ['Tetto', 'Carico', 'Viaggio', 'Bagagli', 'Barre', 'Fissare', 'Auto', 'Sopra'] },
  { guessWord: 'Gancio di traino', forbiddenWords: ['Rimorchio', 'Carrello', 'Roulotte', 'Agganciare', 'Tirare', 'Posteriore', 'Sfera', 'Trasportare'] },

  // --- Parti Specifiche della Moto ---
  { guessWord: 'Manubrio', forbiddenWords: ['Guidare', 'Moto', 'Mani', 'Sterzo', 'Girare', 'Manopole', 'Leve', 'Acceleratore'] },
  { guessWord: 'Sella', forbiddenWords: ['Sedersi', 'Moto', 'Passeggero', 'Posto', 'Corta', 'Lunga', 'Comoda', 'Guidatore'] },
  { guessWord: 'Cavalletto', forbiddenWords: ['Parcheggio', 'Moto', 'Laterale', 'Appoggiare', 'Sostenere', 'Fermo', 'Inclinare', 'Mettere giù'] },
  { guessWord: 'Pedalina', forbiddenWords: ['Piedi', 'Passeggero', 'Appoggiare', 'Moto', 'Ripiegabile', 'Metallo', 'Posteriore', 'Passeggero'] },
  { guessWord: 'Forcella', forbiddenWords: ['Ruota anteriore', 'Sospensione', 'Moto', 'Manubrio', 'Amortizzare', 'Due steli', 'Tubo', 'Idraulica'] },
  { guessWord: 'Carena', forbiddenWords: ['Copertura', 'Aerodinamica', 'Plastica', 'Moto', 'Estetica', 'Protezione', 'Sportiva', 'Vento'] },
  { guessWord: 'Cupolino', forbiddenWords: ['Parabrezza', 'Vento', 'Moto', 'Anteriore', 'Piccolo', 'Trasparente', 'Protezione', 'Aria'] },
  
  // --- Abbigliamento e Protezioni (Moto) ---
  { guessWord: 'Casco', forbiddenWords: ['Testa', 'Protezione', 'Moto', 'Indossare', 'Sicurezza', 'Integrale', 'Visiera', 'Caduta'] },
  { guessWord: 'Tuta', forbiddenWords: ['Pelle', 'Intera', 'Protezioni', 'Pista', 'Motociclista', 'Ginocchiere', 'Cursori', 'Indossare'] },
  { guessWord: 'Giacca', forbiddenWords: ['Pelle', 'Protezioni', 'Moto', 'Spalle', 'Gomiti', 'Indossare', 'Vento', 'Giubbotto'] },
  { guessWord: 'Guanti', forbiddenWords: ['Mani', 'Protezione', 'Pelle', 'Nocche', 'Guidare', 'Presa', 'Manopole', 'Indossare'] },
  { guessWord: 'Stivali', forbiddenWords: ['Piedi', 'Protezione', 'Pelle', 'Caviglia', 'Moto', 'Suola', 'Alti', 'Rinforzati'] },
  { guessWord: 'Visiera', forbiddenWords: ['Casco', 'Occhi', 'Trasparente', 'Protezione', 'Vento', 'Insetti', 'Scura', 'Alzare'] },
  
  // --- La Strada e le sue Caratteristiche ---
  { guessWord: 'Strada', forbiddenWords: ['Asfalto', 'Via', 'Percorso', 'Guida', 'Auto', 'Traffico', 'Linea', 'Senso unico'] },
  { guessWord: 'Autostrada', forbiddenWords: ['Veloce', 'Corsie', 'Casello', 'Pedaggio', 'Lunga', 'Svincolo', 'Traffico', 'Viaggio'] },
  { guessWord: 'Incrocio', forbiddenWords: ['Semaforo', 'Stop', 'Strade', 'Attraversare', 'Svoltare', 'Angolo', 'Precedenza', 'Quattro vie'] },
  { guessWord: 'Rotonda', forbiddenWords: ['Girare', 'Tondo', 'Precedenza', 'Incrocio', 'Uscita', 'Centro', 'Circolare', 'Rotatoria'] },
  { guessWord: 'Curva', forbiddenWords: ['Girare', 'Volante', 'Strada', 'Lenta', 'Pericolosa', 'Tornante', 'Sterzare', 'Traiettoria'] },
  { guessWord: 'Salita', forbiddenWords: ['Pendenza', 'Su', 'Andare', 'Sforzo', 'Montagna', 'Collina', 'Accelerare', 'Discesa'] },
  { guessWord: 'Discesa', forbiddenWords: ['Pendenza', 'Giù', 'Andare', 'Frenare', 'Folloe', 'Salita', 'Pericolosa', 'Rallentare'] },
  { guessWord: 'Svincolo', forbiddenWords: ['Uscita', 'Entrata', 'Autostrada', 'Rampa', 'Direzione', 'Collegamento', 'Raccordo', 'Prendere'] },
  { guessWord: 'Galleria', forbiddenWords: ['Tunnel', 'Buio', 'Montagna', 'Luce', 'Attraversare', 'Sottopassaggio', 'Lunga', 'Artificiale'] },
  { guessWord: 'Ponte', forbiddenWords: ['Fiume', 'Sospeso', 'Attraversare', 'Viadotto', 'Valle', 'Pilone', 'Costruzione', 'Sopra'] },
  { guessWord: 'Buca', forbiddenWords: ['Strada', 'Asfalto', 'Voragine', 'Pericolo', 'Ruota', 'Evitare', 'Danno', 'Riempire'] },
  { guessWord: 'Dosso', forbiddenWords: ['Rallentare', 'Artificiale', 'Strada', 'Salto', 'Velocità', 'Gobba', 'Sussulto', 'Comune'] },
  { guessWord: 'Marciapiede', forbiddenWords: ['Pedone', 'Camminare', 'Strada', 'Rialzato', 'Bordo', 'Divieto', 'A piedi', 'Ciglio'] },
  { guessWord: 'Corsia', forbiddenWords: ['Strada', 'Autostrada', 'Sorpasso', 'Emergenza', 'Linea', 'Canalizzazione', 'Traffico', 'Direzione'] },
  { guessWord: 'Piazzola', forbiddenWords: ['Sosta', 'Emergenza', 'Autostrada', 'Fermarsi', 'Guasto', 'Spazio', 'Laterale', 'SOS'] },
  
  // --- Segnaletica e Regole ---
  { guessWord: 'Semaforo', forbiddenWords: ['Rosso', 'Verde', 'Giallo', 'Stop', 'Incrocio', 'Luce', 'Strada', 'Aspettare'] },
  { guessWord: 'Stop', forbiddenWords: ['Segnale', 'Fermarsi', 'Incrocio', 'Obbligo', 'Ottagono', 'Precedenza', 'Rosso', 'Cartello'] },
  { guessWord: 'Precedenza', forbiddenWords: ['Diritto', 'Incrocio', 'Dare', 'Passare', 'Regola', 'Stop', 'Destra', 'Rotonda'] },
  { guessWord: 'Cartello stradale', forbiddenWords: ['Indicazione', 'Segnale', 'Divieto', 'Obbligo', 'Informazione', 'Palo', 'Leggere', 'Simbolo'] },
  { guessWord: 'Limite di velocità', forbiddenWords: ['Numero', 'Cartello', 'Andare piano', 'Massimo', 'Autovelox', 'Multa', 'Km/h', 'Rispettare'] },
  { guessWord: 'Divieto di sosta', forbiddenWords: ['Parcheggio', 'Fermata', 'Cartello', 'Rotondo', 'Blu', 'Rosso', 'Multa', 'Lasciare'] },
  { guessWord: 'Strisce pedonali', forbiddenWords: ['Attraversare', 'Pedone', 'Zebra', 'Bianche', 'Strada', 'Fermarsi', 'Dare la precedenza', 'Camminare'] },
  { guessWord: 'Senso unico', forbiddenWords: ['Direzione', 'Freccia', 'Strada', 'Non tornare indietro', 'Obbligo', 'Cartello', 'Percorso', 'Vietato'] },
  
  // --- Azioni e Concetti di Guida ---
  { guessWord: 'Guidare', forbiddenWords: ['Auto', 'Volante', 'Strada', 'Condurre', 'Veicolo', 'Pilota', 'Viaggiare', 'Manovrare'] },
  { guessWord: 'Parcheggiare', forbiddenWords: ['Posto', 'Auto', 'Fermare', 'Sosta', 'Manovra', 'Strisce', 'Spazio', 'Lasciare'] },
  { guessWord: 'Sorpassare', forbiddenWords: ['Superare', 'Altra auto', 'Corsia', 'Freccia', 'Veloce', 'Sinistra', 'Manovra', 'Oltrepassare'] },
  { guessWord: 'Svoltare', forbiddenWords: ['Curva', 'Angolo', 'Destra', 'Sinistra', 'Direzione', 'Incrocio', 'Girare', 'Freccia'] },
  { guessWord: 'Frenare', forbiddenWords: ['Rallentare', 'Stop', 'Freno', 'Pedale', 'Velocità', 'Pericolo', 'Inchiodare', 'Fermarsi'] },
  { guessWord: 'Traffico', forbiddenWords: ['Coda', 'Ingorgo', 'Lento', 'Auto', 'Strada', 'Fermo', 'Ora di punta', 'Intasato'] },
  { guessWord: 'Incidente', forbiddenWords: ['Scontro', 'Urto', 'Danni', 'Feriti', 'Ambulanza', 'Polizia', 'Sinistro', 'Botta'] },
  { guessWord: 'Patente', forbiddenWords: ['Guida', 'Documento', 'Esame', 'Scuola guida', 'Punti', 'Polizia', 'Guidare', 'Autorizzazione'] },
  { guessWord: 'Assicurazione', forbiddenWords: ['Obbligatoria', 'Danni', 'Incidente', 'Pagare', 'Polizza', 'Compagnia', 'RCA', 'Scadenza'] },
  { guessWord: 'Multa', forbiddenWords: ['Infrazione', 'Pagare', 'Vigile', 'Divieto', 'Sanzione', 'Verbale', 'Soldi', 'Contravvenzione'] },
  
  // --- Manutenzione e Problemi ---
  { guessWord: 'Benzinaio', forbiddenWords: ['Carburante', 'Pieno', 'Distributore', 'Pompa', 'Self-service', 'Fermarsi', 'Servito', 'Stazione di servizio'] },
  { guessWord: 'Officina', forbiddenWords: ['Meccanico', 'Riparazione', 'Guasto', 'Auto', 'Garage', 'Attrezzi', 'Ponte', 'Tagliando'] },
  { guessWord: 'Gommista', forbiddenWords: ['Pneumatici', 'Ruote', 'Foratura', 'Pressione', 'Equilibratura', 'Cambio', 'Invernali', 'Estive'] },
  { guessWord: 'Autolavaggio', forbiddenWords: ['Pulire', 'Auto', 'Spazzole', 'Acqua', 'Sapone', 'Tunnel', 'Asciugare', 'Lavare'] },
  { guessWord: 'Guasto', forbiddenWords: ['Rottura', 'Fermo', 'Problema', 'Meccanico', 'Panne', 'Motore', 'Non parte', 'Carro attrezzi'] },
  { guessWord: 'Foratura', forbiddenWords: ['Gomma', 'Bucata', 'A terra', 'Ruota', 'Pressione', 'Sgonfia', 'Chiodo', 'Cambiare'] },
  { guessWord: 'Tagliando', forbiddenWords: ['Manutenzione', 'Controllo', 'Officina', 'Olio', 'Filtri', 'Scadenza', 'Periodico', 'Garanzia'] },
  { guessWord: 'Carro attrezzi', forbiddenWords: ['Soccorso stradale', 'Guasto', 'Trasportare', 'Gancio', 'Portare via', 'Chiamare', 'Emergenza', 'Veicolo'] },
  { guessWord: 'Revisione', forbiddenWords: ['Controllo', 'Obbligatorio', 'Periodico', 'Auto', 'Scadenza', 'Bollino', 'Officina', 'Passare'] },
  { guessWord: 'Pneumatico', forbiddenWords: ['Gomma', 'Ruota', 'Aria', 'Pressione', 'Battistrada', 'Cerchione', 'Foratura', 'Rotolare'] },
  { guessWord: 'Olio', forbiddenWords: ['Motore', 'Lubrificante', 'Cambiare', 'Livello', 'Asta', 'Filtro', 'Viscosità', 'Sintetico'] },
  { guessWord: 'Liquido di raffreddamento', forbiddenWords: ['Radiatore', 'Acqua', 'Motore', 'Antigelo', 'Temperatura', 'Vasca', 'Rabboccare', 'Circuito'] },
    // Categoria: "In Vacanza" e "Viaggiare" (Espansione)
  { guessWord: 'Valigia', forbiddenWords: ['Bagaglio', 'Viaggio', 'Vestiti', 'Ruote', 'Trasportare', 'Aeroporto', 'Stiva', 'Preparare'] },
  { guessWord: 'Passaporto', forbiddenWords: ['Documento', 'Viaggio', 'Estero', 'Timbro', 'Dogana', 'Identità', 'Nazione', 'Foto'] },
  { guessWord: 'Biglietto', forbiddenWords: ['Aereo', 'Treno', 'Posto', 'Prenotazione', 'Viaggio', 'Prezzo', 'Partenza', 'Convalidare'] },
  { guessWord: 'Hotel', forbiddenWords: ['Albergo', 'Camera', 'Dormire', 'Stelle', 'Reception', 'Pernottamento', 'Chiave', 'Vacanza'] },
  { guessWord: 'Aeroporto', forbiddenWords: ['Aereo', 'Volo', 'Partenza', 'Arrivo', 'Check-in', 'Gate', 'Terminal', 'Bagagli'] },
  { guessWord: 'Stazione', forbiddenWords: ['Treno', 'Binario', 'Partenza', 'Arrivo', 'Biglietteria', 'Capo', 'Orario', 'Pendolare'] },
  { guessWord: 'Turista', forbiddenWords: ['Viaggio', 'Visitare', 'Mappa', 'Straniero', 'Fotografie', 'Guida', 'Gruppo', 'Città'] },
  { guessWord: 'Souvenir', forbiddenWords: ['Ricordo', 'Regalo', 'Viaggio', 'Oggetto', 'Negozio', 'Portachiavi', 'Maglietta', 'Locale'] },
  { guessWord: 'Mappa', forbiddenWords: ['Cartina', 'Strade', 'Orientarsi', 'Luogo', 'Geografica', 'Legenda', 'Piegare', 'Consultare'] },
  { guessWord: 'Itinerario', forbiddenWords: ['Programma', 'Viaggio', 'Tappe', 'Percorso', 'Giorno', 'Pianificare', 'Visita', 'Luogo'] },
  { guessWord: 'Bagaglio', forbiddenWords: ['Valigia', 'Zaino', 'Borsa', 'Trasportare', 'Aeroporto', 'Stiva', 'Peso', 'Viaggio'] },
  { guessWord: 'Volo', forbiddenWords: ['Aereo', 'Viaggio', 'Partenza', 'Arrivo', 'Ritardo', 'Compagnia', 'Diretto', 'Scalo'] },
  { guessWord: 'Dogana', forbiddenWords: ['Confine', 'Passaporto', 'Controllo', 'Merce', 'Viaggio', 'Dichiarare', 'Valigia', 'Guardia'] },
  { guessWord: 'Guida turistica', forbiddenWords: ['Libro', 'Informazioni', 'Viaggio', 'Monumento', 'Città', 'Mappa', 'Ristoranti', 'Consigli'] },
  { guessWord: 'Ostello', forbiddenWords: ['Dormire', 'Economico', 'Giovani', 'Camerata', 'Letto a castello', 'Zaino in spalla', 'Bagno in comune', 'Viaggio'] },
  { guessWord: 'Campeggio', forbiddenWords: ['Tenda', 'Sacco a pelo', 'Natura', 'Roulotte', 'Piazzola', 'Fuoco', 'All\'aperto', 'Vacanze'] },
  { guessWord: 'Crociera', forbiddenWords: ['Nave', 'Mare', 'Cabina', 'Porto', 'Viaggio', 'Piscina', 'Escursione', 'Ponti'] },
  { guessWord: 'Check-in', forbiddenWords: ['Aeroporto', 'Hotel', 'Biglietto', 'Bagaglio', 'Registrazione', 'Banco', 'Online', 'Partenza'] },
  { guessWord: 'Imbarco', forbiddenWords: ['Aereo', 'Nave', 'Gate', 'Carta d\'imbarco', 'Salire', 'Volo', 'Ultima chiamata', 'Passaporto'] },
  { guessWord: 'Partenza', forbiddenWords: ['Arrivo', 'Inizio', 'Viaggio', 'Orario', 'Volo', 'Treno', 'Andare', 'Lasciare'] },
  { guessWord: 'Arrivo', forbiddenWords: ['Partenza', 'Fine', 'Viaggio', 'Destinazione', 'Orario', 'Aereo', 'Treno', 'Tornare'] },
  { guessWord: 'Ritardo', forbiddenWords: ['Orario', 'Aspettare', 'Treno', 'Aereo', 'Dopo', 'Problema', 'Annuncio', 'Pazienza'] },
  { guessWord: 'Escursione', forbiddenWords: ['Gita', 'Visita', 'Montagna', 'Natura', 'Camminare', 'Gruppo', 'Guida', 'Sentiero'] },
  { guessWord: 'Agriturismo', forbiddenWords: ['Campagna', 'Fattoria', 'Natura', 'Mangiare', 'Dormire', 'Rurale', 'Animali', 'Prodotti tipici'] },
  { guessWord: 'Villaggio turistico', forbiddenWords: ['Animazione', 'Piscina', 'Mare', 'Vacanza', 'Famiglie', 'All-inclusive', 'Braccialetto', 'Spettacolo'] },
  { guessWord: 'Posto finestrino', forbiddenWords: ['Aereo', 'Treno', 'Vista', 'Guardare fuori', 'Paesaggio', 'Nuvole', 'Scegliere', 'Sedile'] },
  { guessWord: 'Bagaglio a mano', forbiddenWords: ['Piccolo', 'Aereo', 'Sopra', 'Cappelliera', 'Valigia', 'Zaino', 'Liquidi', 'Cabina'] },
  { guessWord: 'Crema solare', forbiddenWords: ['Sole', 'Spiaggia', 'Protezione', 'Pelle', 'Spalmare', 'Scottatura', 'Abbronzatura', 'Filtro'] },
  { guessWord: 'Infradito', forbiddenWords: ['Ciabatte', 'Spiaggia', 'Piscina', 'Dito', 'Gomma', 'Estate', 'Calzatura', 'Mare'] },
  { guessWord: 'Carta d\'imbarco', forbiddenWords: ['Aereo', 'Gate', 'Posto', 'Volo', 'Documento', 'Stampare', 'Nome', 'Codice a barre'] },
  { guessWord: 'Compagnia aerea', forbiddenWords: ['Volo', 'Aereo', 'Biglietto', 'Low cost', 'Hostess', 'Pilota', 'Logo', 'Nome'] },
  { guessWord: 'Gita', forbiddenWords: ['Fuori porta', 'Breve', 'Viaggio', 'Domenica', 'Gruppo', 'Pullman', 'Visita', 'Giornata'] },
  { guessWord: 'Ponte', forbiddenWords: ['Festività', 'Lavoro', 'Lungo', 'Vacanza', 'Weekend', 'Staccare', 'Approfittare', 'Calendario'] },
  { guessWord: 'Ferie', forbiddenWords: ['Lavoro', 'Vacanze', 'Agosto', 'Riposo', 'Pagate', 'Dipendente', 'Prendere', 'Periodo'] },
  { guessWord: 'Globetrotter', forbiddenWords: ['Viaggiatore', 'Mondo', 'Esploratore', 'Zaino in spalla', 'Paesi', 'Giramondo', 'Sempre in viaggio', 'Nomade'] },
  { guessWord: 'Zaino in spalla', forbiddenWords: ['Viaggio', 'Avventura', 'Economico', 'Ostello', 'Libertà', 'Camminare', 'Esplorare', 'Bagaglio'] },
  { guessWord: 'Casa vacanze', forbiddenWords: ['Affitto', 'Appartamento', 'Soggiorno', 'Mare', 'Montagna', 'Famiglia', 'Cucina', 'Privato'] },
  { guessWord: 'Resort', forbiddenWords: ['Lusso', 'Vacanza', 'Piscina', 'Servizi', 'Spiaggia privata', 'All-inclusive', 'Relax', 'Struttura'] },
  { guessWord: 'Destinazione', forbiddenWords: ['Luogo', 'Arrivo', 'Viaggio', 'Meta', 'Scelta', 'Popolare', 'Paese', 'Città'] },
  { guessWord: 'Viaggio di nozze', forbiddenWords: ['Matrimonio', 'Sposi', 'Luna di miele', 'Coppia', 'Partire', 'Dopo', 'Romantico', 'Speciale'] },
  { guessWord: 'On the road', forbiddenWords: ['Viaggio', 'Auto', 'Strada', 'Tappe', 'Libertà', 'Guidare', 'Senza meta', 'America'] },
  { guessWord: 'Cambio valuta', forbiddenWords: ['Soldi', 'Moneta', 'Estero', 'Euro', 'Dollaro', 'Tasso', 'Banca', 'Ufficio'] },
  { guessWord: 'Bassa stagione', forbiddenWords: ['Prezzi', 'Periodo', 'Conveniente', 'Viaggiare', 'Turisti', 'Meno gente', 'Clima', 'Offerta'] },
  { guessWord: 'Alta stagione', forbiddenWords: ['Prezzi', 'Periodo', 'Costoso', 'Agosto', 'Affollato', 'Turisti', 'Sole', 'Pieno'] },
  { guessWord: 'Pensione completa', forbiddenWords: ['Pasto', 'Hotel', 'Colazione', 'Pranzo', 'Cena', 'Tutto incluso', 'Mangiare', 'Soggiorno'] },
  { guessWord: 'Visto', forbiddenWords: ['Documento', 'Passaporto', 'Paese', 'Permesso', 'Entrare', 'Ambasciata', 'Obbligatorio', 'Viaggio'] },
  { guessWord: 'Scalo', forbiddenWords: ['Volo', 'Aereo', 'Intermedio', 'Aspettare', 'Cambio', 'Aeroporto', 'Coincidenza', 'Non diretto'] },
  { guessWord: 'Duty-free', forbiddenWords: ['Negozio', 'Aeroporto', 'Senza tasse', 'Profumi', 'Alcolici', 'Sigarette', 'Acquisti', 'Partenze'] },
  { guessWord: 'Fuso orario', forbiddenWords: ['Ora', 'Diverso', 'Orologio', 'Paese', 'Jet lag', 'Viaggio', 'Differenza', 'Tempo'] },
  { guessWord: 'Jet lag', forbiddenWords: ['Fuso orario', 'Stanchezza', 'Dormire', 'Viaggio aereo', 'Corpo', 'Sonnolenza', 'Sveglio', 'Scombussolato'] },

  // Categoria: Il Mondo della Scuola (Espansione)
  { guessWord: 'Lezione', forbiddenWords: ['Insegnante', 'Spiegazione', 'Materia', 'Classe', 'Ascoltare', 'Imparare', 'Cattedra', 'Studente'] },
  { guessWord: 'Intervallo', forbiddenWords: ['Ricreazione', 'Pausa', 'Lezione', 'Campanella', 'Panino', 'Cortile', 'Gioco', 'Dieci minuti'] },
  { guessWord: 'Compiti', forbiddenWords: ['Casa', 'Esercizi', 'Pomeriggio', 'Studiare', 'Svolgere', 'Assegnare', 'Libro', 'Quaderno'] },
  { guessWord: 'Pagella', forbiddenWords: ['Voti', 'Fine anno', 'Promozione', 'Bocciatura', 'Materie', 'Giudizio', 'Genitori', 'Documento'] },
  { guessWord: 'Esame', forbiddenWords: ['Prova', 'Scritto', 'Orale', 'Voto', 'Maturità', 'Università', 'Domande', 'Prepararsi'] },
  { guessWord: 'Maturità', forbiddenWords: ['Diploma', 'Scuola superiore', 'Quinto anno', 'Esame di stato', 'Prova scritta', 'Orale', 'Tesina', 'Notte prima'] },
  { guessWord: 'Interrogazione', forbiddenWords: ['Domande', 'Insegnante', 'Orale', 'Voto', 'Preparato', 'Volontario', 'Alla lavagna', 'Paura'] },
  { guessWord: 'Verifica', forbiddenWords: ['Compito in classe', 'Scritto', 'Voto', 'Prova', 'Domande', 'Foglio', 'Correzione', 'Impreparato'] },
  { guessWord: 'Zaino', forbiddenWords: ['Spalle', 'Libri', 'Quaderni', 'Pesante', 'Scuola', 'Portare', 'Astuccio', 'Riempire'] },
  { guessWord: 'Diario', forbiddenWords: ['Compiti', 'Giustificazioni', 'Comunicazioni', 'Agenda', 'Scuola', 'Firma', 'Settimana', 'Scrivere'] },
  { guessWord: 'Astuccio', forbiddenWords: ['Penne', 'Matite', 'Gomma', 'Colori', 'Contenitore', 'Zaino', 'Zip', 'Temperino'] },
  { guessWord: 'Lavagna', forbiddenWords: ['Gesso', 'Cancellino', 'Scrivere', 'Nera', 'Verde', 'Insegnante', 'Classe', 'LIM'] },
  { guessWord: 'Cattedra', forbiddenWords: ['Insegnante', 'Scrivania', 'Lezione', 'Registro', 'Sedia', 'Classe', 'Spiegare', 'Davanti'] },
  { guessWord: 'Banco', forbiddenWords: ['Studente', 'Sedia', 'Sedersi', 'Scrivere', 'Appunti', 'Posto', 'Classe', 'Legno'] },
  { guessWord: 'Registro', forbiddenWords: ['Voti', 'Assenze', 'Insegnante', 'Classe', 'Elettronico', 'Firma', 'Elenco', 'Nomi'] },
  { guessWord: 'Assenza', forbiddenWords: ['Mancare', 'Malattia', 'Giustificazione', 'Appello', 'Presente', 'Scuola', 'Lezione', 'Giorno'] },
  { guessWord: 'Bocciatura', forbiddenWords: ['Promozione', 'Ripetere', 'Anno', 'Debiti', 'Voti brutti', 'Non passare', 'Fallimento', 'Esami a settembre'] },
  { guessWord: 'Promozione', forbiddenWords: ['Bocciatura', 'Passare', 'Anno', 'Voti belli', 'Ammesso', 'Classe successiva', 'Giugno', 'Felicità'] },
  { guessWord: 'Bidello', forbiddenWords: ['Collaboratore scolastico', 'Pulizie', 'Campanella', 'Corridoi', 'Scuola', 'Portineria', 'Chiavi', 'Ausiliario'] },
  { guessWord: 'Preside', forbiddenWords: ['Dirigente scolastico', 'Capo', 'Scuola', 'Ufficio', 'Insegnanti', 'Autorità', 'Circolare', 'Responsabile'] },
  { guessWord: 'Compagno di banco', forbiddenWords: ['Vicino', 'Posto', 'Aiuto', 'Copiare', 'Amico', 'Chiacchierare', 'Sedia', 'Accanto'] },
  { guessWord: 'Secchione', forbiddenWords: ['Studioso', 'Bravo', 'Primo della classe', 'Voti alti', 'Sempre preparato', 'Nerd', 'Intelligente', 'Studiare molto'] },
  { guessWord: 'Copiare', forbiddenWords: ['Bigliettino', 'Compagno', 'Verifica', 'Sbiriciare', 'Suggerire', 'Barare', 'Insegnante', 'Nascondere'] },
  { guessWord: 'Gita scolastica', forbiddenWords: ['Viaggio', 'Classe', 'Insegnanti', 'Pullman', 'Museo', 'Divertimento', 'Fuori', 'Pernottamento'] },
  { guessWord: 'Materia', forbiddenWords: ['Italiano', 'Matematica', 'Storia', 'Insegnamento', 'Scuola', 'Orario', 'Lezione', 'Professore'] },
  { guessWord: 'Voto', forbiddenWords: ['Numero', 'Giudizio', 'Interrogazione', 'Compito', 'Pagella', 'Buono', 'Brutto', 'Media'] },
  { guessWord: 'Appello', forbiddenWords: ['Inizio lezione', 'Nomi', 'Presente', 'Assente', 'Registro', 'Elenco', 'Insegnante', 'Rispondere'] },
  { guessWord: 'Quaderno', forbiddenWords: ['Scrivere', 'Appunti', 'Righe', 'Quadretti', 'Compiti', 'Pagina', 'Spirale', 'Copertina'] },
  { guessWord: 'Libro di testo', forbiddenWords: ['Materia', 'Studiare', 'Scuola', 'Esercizi', 'Capitolo', 'Pagina', 'Leggere', 'Adottato'] },
  { guessWord: 'Grembiule', forbiddenWords: ['Indossare', 'Asilo', 'Elementari', 'Divisa', 'Blu', 'Nero', 'Fiocco', 'Proteggere'] },
  { guessWord: 'Mensa', forbiddenWords: ['Pranzo', 'Mangiare', 'Scuola', 'Vassoio', 'Cibo', 'Refettorio', 'Tavoli', 'Pausa'] },
  { guessWord: 'Aula Magna', forbiddenWords: ['Grande', 'Sala', 'Riunione', 'Conferenza', 'Scuola', 'Assemblea', 'Evento', 'Spettacolo'] },
  { guessWord: 'Laboratorio', forbiddenWords: ['Scienze', 'Informatica', 'Esperimenti', 'Computer', 'Chimica', 'Aula speciale', 'Tecnica', 'Lezione pratica'] },
  { guessWord: 'Ricerca', forbiddenWords: ['Approfondimento', 'Internet', 'Libri', 'Informazioni', 'Argomento', 'Gruppo', 'Presentazione', 'Esposizione'] },
  { guessWord: 'Tema', forbiddenWords: ['Scrivere', 'Italiano', 'Svolgimento', 'Titolo', 'Introduzione', 'Conclusione', 'Foglio', 'Fantasia'] },
  { guessWord: 'Riassunto', forbiddenWords: ['Testo', 'Breve', 'Concetti principali', 'Sintetizzare', 'Libro', 'Accorciare', 'Scrivere', 'Capitolo'] },
  { guessWord: 'Dettato', forbiddenWords: ['Scrivere', 'Insegnante', 'Leggere', 'Parole', 'Ortografia', 'Errore', 'Punteggiatura', 'Ascoltare'] },
  { guessWord: 'Pausa pranzo', forbiddenWords: ['Mangiare', 'Mezzogiorno', 'Panino', 'Mensa', 'Intervallo', 'Ricarica', 'Compagni', 'Tempo'] },
  { guessWord: 'Rappresentante di classe', forbiddenWords: ['Studente', 'Eletto', 'Portavoce', 'Compagni', 'Consiglio', 'Votazione', 'Incarico', 'Problemi'] },
  { guessWord: 'Ora buca', forbiddenWords: ['Lezione', 'Senza insegnante', 'Libera', 'Vuoto', 'Orario', 'Aspettare', 'Non fare niente', 'Supplenza'] },
  { guessWord: 'Debito formativo', forbiddenWords: ['Materia', 'Recuperare', 'Esame', 'Settembre', 'Insufficienza', 'Studiare', 'Scuola', 'Promozione con'] },
  { guessWord: 'Credito scolastico', forbiddenWords: ['Punti', 'Media', 'Voti', 'Esame di stato', 'Maturità', 'Comportamento', 'Attività', 'Bonus'] },
  { guessWord: 'Collegio docenti', forbiddenWords: ['Insegnanti', 'Riunione', 'Preside', 'Scuola', 'Decisioni', 'Programma', 'Votazione', 'Periodica'] },
  { guessWord: 'Consiglio di classe', forbiddenWords: ['Insegnanti', 'Genitori', 'Studenti', 'Andamento', 'Voti', 'Problemi', 'Riunione', 'Coordinatore'] },
  { guessWord: 'Giustificazione', forbiddenWords: ['Assenza', 'Ritardo', 'Diario', 'Firma', 'Genitori', 'Motivo', 'Scrivere', 'Valida'] },
  { guessWord: 'Circolare', forbiddenWords: ['Comunicazione', 'Preside', 'Scuola', 'Avviso', 'Informazione', 'Lettera', 'Firmare', 'Notizia'] },
  { guessWord: 'Aritmetica', forbiddenWords: ['Matematica', 'Numeri', 'Addizione', 'Sottrazione', 'Conti', 'Operazioni', 'Calcolo', 'Tabelline'] },
  { guessWord: 'Geometria', forbiddenWords: ['Matematica', 'Figure', 'Forme', 'Angolo', 'Teorema', 'Area', 'Perimetro', 'Disegno'] },
  { guessWord: 'Grammatica', forbiddenWords: ['Italiano', 'Regole', 'Verbo', 'Soggetto', 'Analisi', 'Sintassi', 'Lingua', 'Frase'] }

];
// --- STATO DEL GIOCO ---
  let teams = [];
  const allTeams = [
    { name: 'BLU', color: '#3498db', score: 0 },
    { name: 'ROSSO', color: '#e74c3c', score: 0 },
    { name: 'GIALLO', color: '#f1c40f', score: 0 },
    { name: 'VERDE', color: '#2ecc71', score: 0 }
  ];
  
  let numTeams = 0;
  let currentTeamIndex = -1;
  let lastWordIndex = -1;
  let timerInterval = null;
  const TIME_LIMIT = 90;
  let passesUsedInTurn = 0; 
  let timeLeft = TIME_LIMIT; // Spostata qui per non perdere il valore in pausa
  let isPaused = false;      // Tiene traccia dello stato di pausa interno al turno

  // --- SELEZIONE ELEMENTI DEL DOM ---
  const startScreen = document.getElementById('start-screen');
  const gameScreen = document.getElementById('game-screen');
  const pauseScreen = document.getElementById('pause-screen');
  
  const teamChoiceBtns = document.querySelectorAll('.team-choice-btn');
  const startGameBtn = document.getElementById('start-game-btn');
  const readyBtn = document.getElementById('ready-btn');
  
  const timeLeftDisplay = document.getElementById('time-left');
  const currentTeamDisplay = document.getElementById('current-team-display');
  const nextTeamTitle = document.getElementById('next-team-title');
  const guessWordElement = document.getElementById('guess-word');
  const forbiddenWordsList = document.getElementById('forbidden-words');
  const scoreboardList = document.getElementById('scoreboard');

  const passButton = document.getElementById('pass-button');
  const passCounter = document.getElementById('pass-counter');
  const correctButton = document.getElementById('correct-button');
  const tabooButton = document.getElementById('taboo-button');

  // --- LOGICA SCHERMATA DI AVVIO ---
  teamChoiceBtns.forEach(button => {
    button.addEventListener('click', () => {
      teamChoiceBtns.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
      numTeams = parseInt(button.dataset.teams);
      startGameBtn.disabled = false;
    });
  });

  startGameBtn.addEventListener('click', () => {
    initGame(numTeams);
  });
  
  readyBtn.addEventListener('click', () => {
    startTurnManually();
  });
  
  // --- FUNZIONI PRINCIPALI DEL GIOCO ---

  function initGame(numberOfTeams) {
    teams = allTeams.slice(0, numberOfTeams);
    startScreen.classList.remove('active');
    prepareNextTurn();
  }

  // 1. Ferma il tempo, cambia squadra e mostra lo schermo intermedio di pausa

// 1. Ferma il tempo, cambia squadra e mostra lo schermo intermedio di pausa
  // 1. Ferma il tempo, cambia squadra e mostra lo schermo intermedio di pausa
  function prepareNextTurn() {
    clearInterval(timerInterval);

    currentTeamIndex = (currentTeamIndex + 1) % teams.length;
    const nextTeam = teams[currentTeamIndex];

    gameScreen.classList.remove('active');
    pauseScreen.classList.add('active');

    nextTeamTitle.textContent = `SQUADRA ${nextTeam.name}`;
    nextTeamTitle.style.backgroundColor = nextTeam.color;

    // --- AGGIORNA I PUNTEGGI DI TUTTE LE SQUADRE PRIMA DELLA PAUSA ---
    updateDisplays();

    // --- SPOSTA LA CLASSIFICA NELLA PAUSA (SOLO MOBILE COMPATIBLE) ---
    const scoreboardArea = document.getElementById('scoreboard-area');
    const pauseContainer = pauseScreen.querySelector('.start-container');
    // Inserisce la classifica esattamente sopra il pulsante "Sono Pronto"
    pauseContainer.insertBefore(scoreboardArea, readyBtn);
  }

  // 2. Avvia effettivamente il round e il countdown quando il giocatore è pronto
  function startTurnManually() {
    pauseScreen.classList.remove('active');
    gameScreen.classList.add('active');

    // --- RIPORTA LA CLASSIFICA NELLA GRIGLIA DI GIOCO ORIGINALE (PER DESKTOP) ---
    const scoreboardArea = document.getElementById('scoreboard-area');
    const gameGrid = gameScreen.querySelector('.game-grid');
    gameGrid.appendChild(scoreboardArea);

    // Reset bonus "Passo" per il turno corrente
    passesUsedInTurn = 0;
    passButton.disabled = false;
    passCounter.textContent = `(3)`;

    drawNewCard();
    updateDisplays();
    startTimer();
  }
 /*  function prepareNextTurn() {
    clearInterval(timerInterval);

    currentTeamIndex = (currentTeamIndex + 1) % teams.length;
    const nextTeam = teams[currentTeamIndex];

    gameScreen.classList.remove('active');
    pauseScreen.classList.add('active');

    nextTeamTitle.textContent = `SQUADRA ${nextTeam.name}`;
    nextTeamTitle.style.backgroundColor = nextTeam.color;
  } */

  // 2. Avvia effettivamente il round e il countdown quando il giocatore è pronto
  /* function startTurnManually() {
    pauseScreen.classList.remove('active');
    gameScreen.classList.add('active');
 */
    // Reset bonus "Passo" per il turno corrente
    /* passesUsedInTurn = 0;
    passButton.disabled = false;
    passCounter.textContent = `(3)`;

    drawNewCard();
    updateDisplays();
    startTimer();
  } */
  
  // Pesca una parola dal database evitando ripetizioni immediate
  function drawNewCard() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * wordDatabase.length);
    } while (randomIndex === lastWordIndex);
    lastWordIndex = randomIndex;
    
    const selectedCard = wordDatabase[randomIndex];
    guessWordElement.textContent = selectedCard.guessWord;
    
    forbiddenWordsList.innerHTML = '';
    selectedCard.forbiddenWords.forEach(word => {
      const listItem = document.createElement('li');
      listItem.textContent = word;
      forbiddenWordsList.appendChild(listItem);
    });
  }

  // Aggiorna l'interfaccia e rigenera la classifica dei punteggi
  function updateDisplays() {
    const currentTeam = teams[currentTeamIndex];
    
    currentTeamDisplay.textContent = `SQUADRA ${currentTeam.name}`;
    currentTeamDisplay.style.backgroundColor = currentTeam.color;

    scoreboardList.innerHTML = '';
    teams.forEach(team => {
      const teamElement = document.createElement('li');
      teamElement.style.backgroundColor = team.color;
      teamElement.innerHTML = `<span class="score-name">${team.name}</span><span class="score-points">${team.score}</span>`;
      scoreboardList.appendChild(teamElement);
    });
  }

  // Gestione del conto alla rovescia (90 secondi)
  // Modifica la funzione startTimer per gestire il tempo residuo corrente
  function startTimer() {
    // Se non stavamo già in pausa, resetta il tempo al limite massimo (nuovo turno)
    if (!isPaused) {
      timeLeft = TIME_LIMIT;
    }
    
    timeLeftDisplay.textContent = timeLeft;

    // Cancella eventuali intervalli rimasti appesi
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
      if (!isPaused) { // Il tempo scorre solo se NON siamo in pausa
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          prepareNextTurn();
        }
      }
    }, 1000);
  }

  // --- LOGICA DEL PULSANTE PAUSA/PLAY INTERNO ---
  const pauseToggleBtn = document.getElementById('pause-toggle-btn');
  const gameGrid = document.querySelector('.game-grid');

  pauseToggleBtn.addEventListener('click', () => {
    const iconSpan = pauseToggleBtn.querySelector('.icon');
    
    if (!isPaused) {
      // Sospendi il gioco
      isPaused = true;
      iconSpan.textContent = '▶'; // Diventa il triangolo di Play
      gameGrid.classList.add('paused'); // Attiva l'effetto sfocato sulla carta
      pauseToggleBtn.style.color = 'var(--verde-team)'; // Cambia colore per feedback visivo
    } else {
      // Riprendi il gioco
      isPaused = false;
      iconSpan.textContent = '❚❚'; // Torna alle due linette di Pausa
      gameGrid.classList.remove('paused');
      pauseToggleBtn.style.color = 'var(--giallo-team)';
    }
  });
 /*  function startTimer() {
    let timeLeft = TIME_LIMIT;
    timeLeftDisplay.textContent = timeLeft;

    timerInterval = setInterval(() => {
      timeLeft--;
      timeLeftDisplay.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        prepareNextTurn();
      }
    }, 1000);
  }
 */
  // --- CONTROLLI E PULSANTI DI GIOCO ---
  
  // INDOVINATA: +1 punto alla squadra attuale, cambia carta, il tempo continua
  correctButton.addEventListener('click', () => {
    teams[currentTeamIndex].score++;
    updateDisplays();
    drawNewCard();
  });

  // PASSO: Cambia carta senza variare il punteggio (Max 3 volte a turno)
  passButton.addEventListener('click', () => {
    if (passesUsedInTurn < 3) {
      passesUsedInTurn++;
      
      passCounter.textContent = `(${3 - passesUsedInTurn})`;
      
      if (passesUsedInTurn === 3) {
        passButton.disabled = true;
      }
      
      drawNewCard();
    }
  });

  // TABOO (Buzzer): Penalità o scarto immediato (salta la carta corrente senza dare punti)
  tabooButton.addEventListener('click', () => {
    drawNewCard();
  });

});