# Agenda - 20/03/2023

# Progetto Agenda
Il Progetto Agenda è un'applicazione che ti aiuta a gestire il tuo tempo in modo efficiente e organizzato. Sia che tu stia pianificando gli impegni lavorativi o gli appuntamenti personali, questa agenda digitale offre una serie di funzionalità per semplificare la tua vita quotidiana.

## Obiettivi
L'obiettivo principale del Progetto Agenda è fornire agli utenti uno strumento flessibile e intuitivo per la gestione delle attività quotidiane. Tra gli obiettivi principali troviamo:

- **Organizzazione:** Consentire agli utenti di organizzare appuntamenti, scadenze e attività in modo chiaro e ordinato.
- **Notifiche:** Invio di notifiche e promemoria per garantire che nessun impegno venga trascurato.
- **Condivisione:** Possibilità di condividere gli eventi con colleghi, amici o familiari per una pianificazione collaborativa.
- **Sincronizzazione:** Integrazione con dispositivi mobili e altri servizi di calendario per una sincronizzazione senza soluzione di continuità.

## Funzionalità Principali
- **Calendario Mensile:** Visualizzazione chiara degli eventi pianificati per il mese corrente.
- **Agenda Giornaliera:** Dettagli giornalieri con elenco degli appuntamenti e delle attività.
- **Creazione di Eventi:** Aggiunta semplice di nuovi eventi con data, orario e descrizione.
- **Notifiche e Promemoria:** Ricezione di notifiche per gli eventi imminenti.
- **Condivisione di Eventi:** Possibilità di condividere gli eventi con altri utenti.
- **Sincronizzazione:** Integrazione con servizi di calendario esterni e dispositivi mobili.

## Utilizzo
Gli utenti possono sfruttare l'agenda per gestire con facilità le proprie attività quotidiane. Che si tratti di incontri di lavoro, compleanni o semplici promemoria, il Progetto Agenda è progettato per adattarsi alle esigenze di ogni utente, offrendo una piattaforma intuitiva e completa per la gestione del tempo.

## Struttura del Database
Il database è composto da tre tabelle principali:

## TABELLA STUDENTI
- **login_id (PK Auto_increment):** Identificatore unico dell'utente.
- **username (varchar(45)):** Nome utente dell'utente.
- **password (varchar(45)):** Password dell'utente.
- **email (varchar(45)):** Indirizzo email dell'utente.

### Esempio Studenti:
| login_id | username | password | email             |
|----------|----------|----------|-------------------|
| 1        | user1    | ******** | user1@email.com  |
| 2        | user2    | ******** | user2@email.com  |

## TABELLA MATERIE
- **materie_id (PK Auto_increment):** Identificatore unico della materia.
- **subject (varchar(45)):** Nome della materia.
- **teacher (varchar(45)):** Nome del professore che insegna la materia.

### Esempio Materie:
| materie_id | subject | teacher     |
|------------|---------|-------------|
| 1          | Math    | Prof. Smith |
| 2          | Science | Prof. Johnson|

## TABELLA EVENTI
- **eventi_id (PK Auto_increment):** Identificatore unico dell'evento.
- **date (data(YYYY-MM-DD)):** Data dell'evento.
- **description (varchar(45)):** Descrizione dell'evento.

### Esempio Eventi:
| eventi_id | date       | description           |
|-----------|------------|-----------------------|
| 1         | 2023-03-20 | Exam in Math           |
| 2         | 2023-03-21 | Science Fair Meeting  |

## RELAZIONI
- La tabella STUDENTI ha una relazione (1 - MOLTI) con la tabella EVENTI e la tabella MATERIE.
- La tabella EVENTI ha una relazione (1 - 1) con la tabella MATERIE.

## OPERAZIONI
- **Registrazione Utente:** L'utente si registra fornendo username, password e email.
- **Aggiunta Evento (POST):** L'utente può aggiungere un evento con username, subject, teacher, data e descrizione.
- **Modifica Evento (PUT):** L'utente può modificare la data e/o la descrizione di un evento esistente.
- **Eliminazione Evento (DELETE):** L'utente può eliminare un evento esistente.
- **CRUD Operations:**
  - **Create:** Aggiungi un nuovo evento al calendario.
  - **Read:** Leggi i dati dell'evento.
  - **Update:** Aggiorna i dati dell'evento.
  - **Delete:** Cancella o elimina uno o più dati.

## TEST CON POSTMAN
Verifica le operazioni CRUD utilizzando POSTMAN.

## CRIPTAZIONE PASSWORD
Dopo i test, cripta le password degli utenti utilizzando SHA2(?, 512) durante il processo di registrazione.

## GRAFICA
### ESEMPIO MATERIE

### ESEMPIO STUDENTI

### ESEMPIO EVENTI

## FRONT-END
- **Sign-in.html:**
  [Contenuto del file Sign-in.html]

