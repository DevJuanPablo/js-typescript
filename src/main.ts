const BACKEND_API = 'https://www.midominio.com/api'

let PING: unknown = 80

PING = null


function validarPing(): void {
  if (typeof PING !== 'undefined') {
    console.log('Conectado')
  } else {
    throw new Error('No hay conexion')
  }
}

validarPing()