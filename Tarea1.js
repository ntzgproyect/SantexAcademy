
   function Piramide (numero) {

    for (let i = 1; numero <= i ; i++) {
        let fila = '';

        for (let c = 1; c <= i; c++){
        fila += c;
    }
    console.log(fila)            
    }
}

Piramide(6)