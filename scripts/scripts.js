//recupero il riferimento dal form
const form = document.getElementById('cosaFaro')

//funzione per eliminare un'attività
const eliminaAttivita = function (e){
    console.log('ELIMINO CARD', e)

    //sintassi: elimina il padre dell'oggetto target(il button) che ha scatenato l'evento
    e.target.parentElement.remove()
}

let attivitaCompletata = false

const attivitaFatta = function(e){
    if(attivitaCompletata === false){
        e.target.classList.add("attivitaFatta")
        attivitaCompletata = true
    } else {
        e.target.classList.remove("attivitaFatta")
        attivitaCompletata = false
    }
}

//recupero le informazioni dal form
const gestisciAttivita = function (e) {
    //impedisce l'aggiornamento della pagina quando viene richiamata la funzione
    e.preventDefault()
    console.log('RECUPERIAMO I DATI')

    //recupero il riferimento all'input
    const recuperoAttivita = document.getElementById('attivitaDaAggiungere') 

    //recupero il valore dal campo input
    const qualeAttivita = recuperoAttivita.value
    console.log("L'attività da fare è :", qualeAttivita)  
    
    //creo div vuoto che contiene i dati della mia attività ed un pulsante per eliminarla
    const scheda = document.createElement('div')
    
    //applico una regola css ad applicare a tutti i div delle attività
    scheda.classList.add('scheda-attivita')

    //aggiungo i dati del form al div
    scheda.innerHTML = `
    <p onclick="attivitaFatta(event)">${qualeAttivita}</p>
        <button onclick="eliminaAttivita(event)">Elimina</button>
    `
    // aggiungiamo la nuova scheda alla lista attività
    const container = document.getElementById('listaAttivita')
    container.appendChild(scheda)

    //reset dei campi del form
    form.reset()
}

form.addEventListener('submit', gestisciAttivita)