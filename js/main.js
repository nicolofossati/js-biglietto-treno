/*
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

const age = parseInt(prompt("Inserisci la tua età:"));
const km = parseInt(prompt("Inserisci i kilometri da percorrere:"));

let km_price = 0.21;
let discount_kp;
let value;

if(isNaN(km) || isNaN(age)){
    document.getElementById("price").innerHTML = `Uno o entrambi gli input non sono dei numeri!`;
} else {
    if(age<18){
        discount_kp = (km_price/100 *80); //sconto del 20%
        value = (discount_kp * km).toFixed(2);
    
        document.getElementById("discount").innerHTML= "Siccome hai meno di 18 anni lo sconto è del 20%";
        document.getElementById("price").innerHTML = `Il prezzo totale del biglietto è: ${value}€`;
    } else if(age>65){
        discount_kp = (km_price/100 *60).toFixed(2); //sconto del 40%
        value = discount_kp * km;
    
        document.getElementById("discount").innerHTML= "Siccome hai più di 65 anni lo sconto è del 40%";
        document.getElementById("price").innerHTML = `Il prezzo totale del biglietto è: ${value}€`;
    } else {
        value = (km_price * km).toFixed(2);
    
        document.getElementById("price").innerHTML = `Il prezzo totale del biglietto è: ${value}€`;
    }
}