# Lan organizer

## Priority list
### Core features
#### Slutkund
* Inloggning
    * man är extern om du inte verifierar dig med en skolmail

* Anmälan till lan
* Incheckning till lanet
    * Något sorts QR kods callback system.

* samlingsplats för relevant information Tex.
    * Din placering
    * Schema
    * Städtider
    * Låsta dörrar tider
    * Event
* Dynamisk flytande Information om Event under lanet
#### Langruppen
* Administrativa kapaciteter Tex.
    * Utplacering i rum av personer.
    * Ska kunna skriva statisk information angående lanet
    * Status kring antal personer i byggnaden
    * Dynamisk spridning av information kring tex turneringar
    * Manuella pushnotiser till webbläsaren
### Backlog features
* Twitch embed av streams under lanet
* Auto publicering av information på skolans informations medier(discord) vid ny information angående lan. 
* Sponsor länkar länkar i appen samt om möjligt i mail.
* Strawpoll då det inte finns event
* Streamlined Turneringsverktyg
    * Skapelse av turnering
    * Anmälan till turnering (solo & lag)
    * Brackets för turneringar
    * Sorting features (Vid för små lag)
    * Randomisers för brackets
    * live information kring brackets (som slutkund)

### Koola idéer

* Koppla swish för externer att betala
* Intern realtime chatt.
* Social media integration
    * Autopublisering av nya event eller lan på sociala medier samt publisering av vinnare av turneringar/ matcher


## Technologies
### Proposed
#### Frontend
* NUXT (contains the following)
    * VUE
    * VUEX
    * VUE Router
    * Small & good
#### Backend
* Laravel
    * Laravel passport 
    * Laravel Echo
### Decided on
N/A