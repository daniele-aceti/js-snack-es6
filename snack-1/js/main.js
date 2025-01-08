//Crea un array composto da 10 automobili.
//Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
//Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
//Infine stampa separatamente i 3 array.


const car = []
 

// CREO ARRAY CON I DATI RICHIESTI 

 const powerArray = ["benzina", "diesel", "elettrico", "metano"]
 const brandArray = ["alfa", "fiat", "audi", "jeep"]
 const modelArray = ["giulia", "tipo", "renegade", "a1"]

//CREO UNA FUNZIONE PER RENDERE CASUALE IL RISULTATO
function power(value){
        const randomNumber =  Math.round(Math.random()*3)
        const element = value[randomNumber];
        return element
    }



//CICLO LA CHIAVE DI CAR PER STAMPARE TUTTI GLI OGGETTI E INSERISCO IN OGNUNO L'ALIMENTAZIONE RANDOM

for (const key in car) {
        let randomPower = power(powerArray)
        const element = car[key];  
        element.alimentazione = randomPower
        console.log(element)

//INFINE ASSEGNO AD OGNI ALIMENTAZIONE UNA VARIABILE
        
        if(randomPower  === "benzina"){
            const benzina = element
            console.log(benzina)
        }else if(randomPower === "diesel"){
            const diesel = element
            console.log(diesel)
        }else{
            const other =element
            console.log(other)
        }
    }
