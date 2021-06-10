// Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno
//  e dall’altro.
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// ex

do {
    var n = prompt("Quanti elementi vuoi nell'array?");
} while ((n < 1) || (n > 26) || (n == isNaN));

var array1 = [];
array1 = randomLetter(n);
console.log("Array di lettere: " + array1);

var array2 = [];
array2 = randomNumber(n);
console.log("Array di numeri: " + array2);

var array3 = [];
array3 = fondiArray(array1, array2, array3);
console.log("Array fuso: " + array3);

// funzioni

// funzione per generare lettere random
function randomLetter(n){

    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var vet = [];

    // ciclo per generare le lettere random
    for (var i = 0;i < n; i++){
        vet.push(alphabet[((Math.floor(Math.random() * 26) + 1))]);

        //ciclo per non ripetere la stessa lettera
        if (i > 0){
            for (var j = 0; j < i; j++){
                while (vet[j] == vet[i]){
                vet[i] = alphabet[((Math.floor(Math.random() * 26) + 1))];
                }
            }
        }
    }
    return vet;
}

// function per generare numeri random
function randomNumber(n){

    var vet = [];
    
    // ciclo per generare i numeri random
    for (var i = 0;i < n; i++){
        vet.push((Math.floor(Math.random() * 100) + 1));

        //ciclo per non ripetere lo stesso numero
        if (i > 0){
            for (var j = 0; j < i; j++){
                while (vet[j] == vet[i]){
                vet[i] = (Math.floor(Math.random() * 100) + 1);  
                }
            }
        }
    }
    return vet;
}

// function per fondere 2 array
function fondiArray(x, y, z){

    var z = [];
    for (var i = 0; i < n; i++){
        z.push(x[i]);
        z.push(y[i]);
    }
    return z;
}