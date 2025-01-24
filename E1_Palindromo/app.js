//MrDanCaballero
function palindromo(str) {
    //eliminar los espacios
    var re = /[\W_]/g;
    var val = "No es palindromo"
    //pasar a minusculas
    var minusculas = str.toLowerCase().replace(re, '');
    console.log("Minusculas: "+minusculas)
    //
    var voltear = minusculas.split('').reverse().join(''); 
    console.log("Alrevez: "+voltear)
    if(voltear === minusculas){
        val = "palindromo"
    }

    console.log("Resultado: " +val)
    return val


  }

  palindromo("anas");
  palindromo("sanas");