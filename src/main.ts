type ARGS = number | string | boolean

const argumentos = (...param: any[]): any[] => {
    
    return param
}

const usuario = {
  name: 'Adrian',
  email: 'correo@dominio.com',
  edad: 30
}

const resultado = argumentos(1, 2, 3, "Hola", true, false, "Adios")
console.log(resultado) // [ 1, 2, 3, 'Hola', true, false, 'Adios' ] 

const resultado2 = argumentos(usuario)
console.log(resultado2)