//Crea un array di oggetti che rappresentano degli animali.
//Ogni animale ha un nome, una famiglia e una classe.
//Es:
//[
//  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
//]
//Crea un nuovo array con la lista dei mammiferi.

const animal = [
        { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
        { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
        { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]

//CREO UN ARRAY MAMMIFERI COSI DA POTERLA RIUTILIZZARE FUORI DAL BLOCCO FOR
const mammiferi = []

//FACCIO UN FOR IN PER CICLARE L'ARRAY COSI DA POTER FILTRARE I MAMMIFERI 

for (const key in animal) {
        const element = animal[key];
        if(element.classe === "mammiferi"){
            mammiferi.push(element)
            //console.log(mammiferi)
        }else{
            console.log("non è un mammifero")
        }
}

//ARRAY MAMMIFERI ORA CON LA LISTA DEI MAMMIFERI
console.log(mammiferi)
