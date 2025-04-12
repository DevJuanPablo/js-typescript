type ARGS = number | string | boolean

const argumentos = (...param: ARGS[]): ARGS[] => {
    
    return param
}

const resultado = argumentos(1, 2, 3, "Hola", true, false, "Adios")
console.log(resultado) // [ 1, 2, 3, 'Hola', true, false, 'Adios' ] 