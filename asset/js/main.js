// Chiedere all'utente i dati necessari per formare la password - nome - cognome - colore preferito

// Chiediamo il nome
let first_name = prompt("Inserisci il tuo nome");

console.log(first_name);

// Chiediamo il cognome
let second_name = prompt("Inserisci il tuo cognome");

console.log(second_name);

// Chiediamo il colore preferito
let favorite_color = prompt("Qual'è il tuo colore preferito?");

console.log(favorite_color);

// Generiamo la password 
let gen_password = first_name + second_name + favorite_color + 22;

// Togliamo gli spazi con una regex
gen_password = gen_password.replace(/ /g, '');
console.log(gen_password);

document.getElementById("text").innerHTML = gen_password;