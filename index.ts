/*


9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.


20) Crea un'interfaccia generica per una risposta API.   */
let nome: string = 'giuseppa'
let numero: number = 2
let buulo: boolean = true


const greet = (name: string) => { return "Ciao " + name }

const sum = (a: number, b: number): number => { return a + b }

const price = function (pri: number){
    return pri * 22 / (100)
}

const concat = function(str1: string, str2: string) {
    return (str1 + str2).length
}

let random: (number | null | undefined)


const numbers: number[] = [1, 2, 3]

type MyType = string 

const tupla: [string, string, string, number, number] = ['c', 'i', 'a', 1, 2]

interface persona {
    firstName: string,
    lastName: string,
    age: number,
}

interface utente {
    email: string,
    phone?: number,
}

const Studenti: string | number[] = [{nome: 'giusy', voto: 4}]


interface Veicolo {
    wheels: number,
    canFly: boolean
}

interface Car extends Veicolo {
    marcia: boolean,
}

const Panda: Car = {
    wheels: 4,
    canFly: false,
    marcia: true
}