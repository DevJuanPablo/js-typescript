const BACKEND_API = 'https://www.midominio.com/api'

let PING: unknown = 80

PING = null


function validarPing(): never {
  
    throw new Error('No hay conexion')
  
}

validarPing()