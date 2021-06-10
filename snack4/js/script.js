// Scrivi una funzione capitalize che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo

// ex

do {
    if ((stringa == isNaN) || (stringa.length < 2)) {
        alert("Inserisci una parola con almeno 2 lettere, altrimenti non ha senso!")
    }
    var stringa = prompt("Inserisci una parola");
} while ((stringa == isNaN) || (stringa.length < 2));

var n = stringa.length;

stringa = fixStringa(stringa, n);
console.log(stringa);

// funzioni

function fixStringa(a, n){

    var b = a.charAt(0).toUpperCase();

    for (var i = 1; i < n; i++){

        b += (a.charAt(i).toLowerCase());

    }
    return b;
}