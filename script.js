
function esPalindromo (palabra){
    let palabraRevertida = palabra.split('').reverse().join('');

    if(palabra == palabraRevertida){
        document.write(`La palabra ${palabra} es un palindromo`);
    }
    else if(palabra !== palabraRevertida){
        document.write(`Oh, la palabra ${palabra} no es un palindromo`);
    }
    else if(palabra === undefined){
        document.write('ingrese valores validos');
    }
}

esPalindromo(prompt('Ingresa una palabra para saber si es un palindromo'));