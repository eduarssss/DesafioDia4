// ¿Alguna vez has jugado a adivinar el número en el que tu amigo o amiga estaba pensando? Hoy volverás a tu infancia y harás exactamente eso. ¡Pero ahora, el juego será contra la propia computadora!
// Debes crear un pequeño programa que comience con un valor específico predefinido entre 0 y 10 para el número que vas a adivinar (por ejemplo, el 7).
// A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, te felicitará. Si te equivocas, te dará 2 intentos más.
// Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.
// Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno predefinido.

const numeroAdivinacion = 7;
let intento = "";
let acerto = false;

for(let contador = 0; contador < 3; contador++){    
    intento = prompt("Intenta adivinar el número del 0 al 10:");
    if(intento == numeroAdivinacion){
        alert(`¡Felicidades, acertaste! El número era ${numeroAdivinacion}.`);
        acerto = true;
        break;
    }
    alert("¡Incorrecto!");
}
if(!acerto){
    alert(`Desafortunadamente, no acertaste. ¡El número era ${numeroAdivinacion}!`);
}
