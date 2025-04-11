"use strict";
const BACKEND_API = 'https://www.midominio.com/api';
let PING = 80;
PING = null;
function validarPing() {
    if (typeof PING !== 'undefined') {
        console.log('Conectado');
    }
    else {
        throw new Error('No hay conexion');
    }
}
validarPing();
