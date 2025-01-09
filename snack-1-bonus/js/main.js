
// CREO ARRAY CON I DATI RICHIESTI 

const powerArray = ["benzina", "diesel", "elettrico", "metano"]
const brandArray = ["alfa", "fiat", "audi", "jeep",]
const modelArray = ["giulia", "tipo", "renegade", "a1"]

let car = []

//CREO UNA FUNZIONE PER RENDERE CASUALE IL RISULTATO
function power(value){
 const randomNumber = Math.round(Math.random()*3)
 const element = value[randomNumber];
 return element
}


let benzina = []
let diesel = []
let other = []

for(index = 0; index < 10; index++){
 let randomPower = power(powerArray)
 let randomBrand = power(brandArray)
 let randomModel = power(modelArray)
 car.marca = randomBrand
 car.modello = randomModel
 car.alimentazione = randomPower


 //CONTROLLO (FILTRO) IL TIPO DI ALIMENTAZIONE ED ESEGUO IL PUSH NELL'ARRAY CORRISPONDENDENTE
 if(car.alimentazione === "benzina"){
benzina.push({
    marca: randomBrand,
    modello: randomModel,
    alimentazione: randomPower
})
 }else if(car.alimentazione === "diesel"){ 
 diesel.push({
    marca: randomBrand,
    modello: randomModel,
    alimentazione: randomPower
}) 
} else{
 other.push({
    marca: randomBrand,
    modello: randomModel,
    alimentazione: randomPower
})
 }
}

//STAMPO I TRE ARRAY CON I VALORI CORRETTI 
console.log(benzina)
console.log(diesel)
console.log(other)