
let isValid = true;
let media = 0;
let numero = 0;
let indice = 0;
let somma = 0;

while ((isValid) && (indice < 7))
{
    numero = Number(prompt("Inserisci il voto."));
    if ((numero < 1) || (numero > 10))
    {
        isValid = false;

        alert("Il numero inserito non è valido.");
    }
    else
    {
        numero += 1;
        somma += numero;
    }

    indice += 1;
}
media = somma / numero;
{
    alert("La media dei voti è: " + (media));
}
