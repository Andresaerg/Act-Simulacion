/// Realizado por Alexander Gonzalez y Daniele Mosquera

/* El borracho empieza a caminar desde una posicion 0,0 en un espacio de 20, 20 
 * un aprox. de 10 calles, Para que el borracho quede a 2 calles de donde empezó 
 * debe estar en una de las  siguientes posiciones: */
 ///    J = 2,   F = 0
 ///    J = 0,   F = -2
 ///    J = -2,  F = 0 
 ///    J = 0,   F = 2
 

let posicionF = 0, posicionJ = 0;

//funcion caminata aleatorio
let caminata = (posicionF, posicionJ) => {
    let contadorIts = 0;
    let system = false;
    
    document.write(`<b>--NRO. DE INTENTOS--</b><br><br>`)
    do{
        posicionF = 0, posicionJ = 0;
        for(var i = 1; i <= 10; i++){
            //Si sale 1, varía J. Si sale 2, varía X.
            var randomMovement = Math.floor(Math.random() * (1 + 2 - 1)) + 1;
    
            if(randomMovement === 1){
                let variacionJ = Math.floor(Math.random() * (1 + 1 + 1)) - 1;
                posicionJ = posicionJ + variacionJ;
                document.write(`J = ${posicionJ}, F = ${posicionF} <br>`);
            } else {
                let variacionF = Math.floor(Math.random() * (1 + 1 + 1)) - 1;
                posicionF = posicionF + variacionF;
                document.write(`J = ${posicionJ}, F = ${posicionF} <br>`);
            }
        }


        if(posicionJ === 2 && posicionF === 0 
            || posicionJ === 0 && posicionF === -2 
            || posicionJ === -2 && posicionF === 0 
            || posicionJ === 0 && posicionF === 2){
            system = true;
        }
        document.write(`<br>POSICION FINAL DEL BORRACHO(intento #${contadorIts+1}) = <b>J: ${posicionJ}</b>, <b>F: ${posicionF}</b> <br><br>`);
        contadorIts++;
    } while(system == false);

    return document.write(`<b>--RESULTADO DEL CALCULO--</b><br><br> Probabilidad: ${100/contadorIts}%  <br> Con: ${contadorIts} Intentos`); 
}
caminata(posicionJ, posicionF);


