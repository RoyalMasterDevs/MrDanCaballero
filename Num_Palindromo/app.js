//MrDanCaballero
/**
 * 1.- Se reciben los datos a validar
 * 2.- En caso de ser texto se pasa a minusculas
 * 3.- Se almacena la palabra escrita alrevez
 * 4.- Se compara la palabra original con la escrita alrevez
 * 5.- si son iguales es VERDADERO de lo contrario FALSO
 * 
 * @param {*} str 
 * @returns 
 */
function palindromo(str) {
    
    var val = "FALSO"
    //pasar a minusculas
    var minusculas = str.toLowerCase();
    console.log("Original: "+minusculas)
    //
    var voltear = minusculas.split('').reverse().join(''); 
    console.log("Alrevez: "+voltear)
    if(voltear === minusculas){
        val = "VERDADERO"
    }

    console.log("Resultado: " +val)
    return val


  }

  palindromo("121");
  palindromo("-121");
  palindromo("10");