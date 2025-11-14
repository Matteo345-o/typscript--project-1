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

let counter = 0;

while (counter < 5)

{
    alert(..."Ciclo numero:" + counter);

    counter += 1;
    if (counter % 5)
    {
        console.log("Counter + counter" + "non è multiplo di cinque");
        console.log("Counter" + counter + " è multiplo di 5");
    }

    console.log("Fine ciclo.");
}
