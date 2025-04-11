const BACKEND_API = 'https://www.midominio.com/api'

let PING: unknown = 80

PING = null

if (typeof PING === 'number') {
  console.log('PING is a number')
} else {
  throw new Error('No hay conexion')
}