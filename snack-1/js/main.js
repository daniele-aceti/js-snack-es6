//Crea un array composto da 10 automobili.
//Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
//Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
//Infine stampa separatamente i 3 array.



const benzina =[]
const diesel = []
const other = []


const car = [{
    marca: "jeep" ,
    modello: "renegade" ,
    alimentazione: "benzina" ,
},{
    marca: "alfa" ,
    modello: "giulia",
    alimentazione:"diesel" ,
},{
    marca: "fiat",
    modello: "tipo",
    alimentazione:"metano" ,
},{
    marca: "audi",
    modello: "a1" ,
    alimentazione: "elettrica" ,
},{
    marca: "volvo",
    modello: "xc40" ,
    alimentazione:"gpl" ,
},]
for (const key in car) {
        const element = car[key];
        if(element.alimentazione  === "benzina"){
            benzina.push(element)
        }else if(element.alimentazione === "diesel"){  
            diesel.push(element)         
        } else{
            other.push(element)
        }
}
console.log(benzina)
console.log(diesel)
console.log(other)

