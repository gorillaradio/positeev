# Positeev

Positeev è un'applicazione per il tracciamento delle abitudini (habit tracking) che pone l'accento sulla continuità e sulla visualizzazione chiara dei progressi nel tempo.

## Caratteristiche Principali

### Autenticazione

- Sistema di autenticazione implementato con Supabase Auth
- Supporto per login con email/password
- Integrazione con Google OAuth
- Interfaccia in italiano

### Tracciamento delle Abitudini

#### Preferenze per Habit

- Possibilità di personalizzare la frequenza (giornaliera, settimanale, mensile)
- Focus sulla continuità attraverso il concetto di "non spezzare la catena"
- Futura integrazione per la condivisione dei progressi sui social

#### Visualizzazioni

##### Vista Singola Habit

- Visualizzazione verticale con rettangoli colorati:
  - Verde: habit completata
  - Rosso: habit non completata
- Periodi visualizzabili:
  - Ultimi 7 giorni
  - Questa settimana
  - Questo mese
  - Quest'anno
  - Anno precedente
  - All time (con scroll continuo)

##### Modalità di Visualizzazione

1. **By Day**

   - Ogni rettangolo rappresenta un giorno
   - Dimensioni dei rettangoli:
     - Larghezza costante
     - Altezza variabile in base al periodo visualizzato (più sottile per periodi più lunghi)

2. **By Week**
   - Aggregazione settimanale
   - Colorazione basata sulla media dei giorni:
     - Verde puro: 7/7 giorni positivi
     - Rosso puro: 0/7 giorni positivi
     - Sfumature intermedie basate sul rapporto giorni positivi/negativi

##### Sistema di Etichette

- Allineate a sinistra dei rettangoli
- Adattive in base al periodo visualizzato:
  - Vista giornaliera: giorni della settimana (LUN, MAR, MER, etc.)
  - Vista "all time":
    - Giorni per utilizzo < 1 mese
    - Mesi per utilizzo > 1 mese

##### Marker e Separatori

Evidenziano:

- Cambi di mese/anno
- Achievement significativi
- Streak importanti
