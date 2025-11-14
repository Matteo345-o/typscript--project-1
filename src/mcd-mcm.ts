const numero1 = Number(prompt("Inserire il primo numero."));
const numero2 = Number(prompt("Inserire il secondo numero."));

let max = numero1;
let min = numero2;

let resto: number;
do
{
    resto = max % min;

    max = min;
    min = resto;
}
while (resto > 0);

const mcd = max;
console.log("Il M.C.D tra " + numero1 + " e " + numero2 + " è: " + mcd);

const mcm = (numero1 * numero2) / mcd;
console.log("Il m.c.m. tra " + numero1 + " e " + numero2 + " è: " + mcm);
 
