// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. 
//Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// ex

var a = input();
var b = input();

var n = strCompare(a, b);

output(n, a, b);

// funzioni

function input(){
    return (prompt("Inserisci una parola"));
}

function strCompare(str1, str2){
    var x = str1.length;
    var y = str2.length;

    if (x == y) {
        return 0;
    } else if (x > y){
        return 1;        
    } else {
        return 2;
    }
}

function output(x, y, z){

    if (x == 0) {
        document.getElementById("demo").innerHTML = "La parola " + y + " e la parola " + z + " hanno la stessa lunghezza";
    } else if (n == 1) {
        document.getElementById("demo").innerHTML = y;
    } else {
        document.getElementById("demo").innerHTML = z;
    }
    
}