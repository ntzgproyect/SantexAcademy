function BuscarParecidos(Array1, Array2){
    const Parecidos = Array1.filter(elemento => Array2.includes(elemento))
    return Parecidos
}

