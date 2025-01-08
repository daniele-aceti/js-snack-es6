//A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
//Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']


const stringArray =  ['pippo', 'PLUTO', 'Paperino']
for (let index = 0; index < stringArray.length; index++) {
    const element = stringArray[index];
    const lowerArray = element.toLowerCase()
    const capital = lowerArray.substring(0,1).toLocaleUpperCase()
    const result = capital + lowerArray.substring(1, lowerArray.lenght)
    console.log(result)
}

