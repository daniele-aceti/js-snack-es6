//Crea un array di oggetti che rappresentano delle persone.
//Ogni persona ha un nome, un cognome e un'età.
//Partendo da questo, crea quindi un nuovo array inserendo, per ogni persona, una frase (stringa) con il nome e cognome e l'indicazione se può guidare, in base all'età.

const persons = [{
    name: "Elisa",
    surname: "Bianchi" ,
    age: 30, 
},{
    name: "Daniele" ,
    surname: "Rossi" ,
    age: 28 , 
},{
    name: "Enrico" ,
    surname: "Rossi" ,
    age: 16 , 
},{
    name: "Sara" ,
    surname: "Bianchi",
    age: 12 , 
}]

//CREAZIONE DELL'ARRAY FUORI DA FOR IN
const suitable= []

//FOR IN PER IDENTIFICARE GLI IDONEI E IL PUSH PER RIEMPIRE IL NUOVO ARRAY
for (const key in persons) {
        const element = persons[key];
        if(element.age >= 18){
            element.abilitazione = `${element.name} :Idoneo/a`
            suitable.push(element)
            
        }else{
            element.abilitazione = `${element.name} :Non idoneo/a`
            suitable.push(element)
        }      
} 
//FATTO IL CONSOLE LOG FUORI PER DIMOSTRARE LA POSSIBILITA DI UTILIZZARE IL NUOVO ARRAY FUORI DAL BLOCCO FOR
        console.log(suitable)