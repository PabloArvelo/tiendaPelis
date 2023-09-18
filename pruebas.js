// "medios de pago"


// {
// "minQ": 2, 
// "minP": 1000,
// "medioP": ["visa", "master", "amex"], 
// "cuotas": [{"1": 0,"3": 5,"6": 10,"9": 15,"12": 20}] 
// "cantDigitos": 5
// }



let Pablo = {
    "instrumento": "guitarra",
    "habilidad": "componer"
}

let Claudia = {
    "instrumento": "canto",
    "habilidad": "dirigir"
}

let Juampi = {
    "instrumento": "canto",
    "habilidad": "trap"
}
let equipo = [Pablo, Claudia];


equipo.push(Juampi)


let item = equipo[2];
item.habilidad = "predicar";
equipo.splice(2,1,item);
console.log(equipo);
