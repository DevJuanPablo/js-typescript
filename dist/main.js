"use strict";
var NACIONALIDAD;
(function (NACIONALIDAD) {
    NACIONALIDAD["BOL"] = "BOL";
    NACIONALIDAD["ARG"] = "ARG";
    NACIONALIDAD["CHI"] = "CHI";
})(NACIONALIDAD || (NACIONALIDAD = {}));
const verificarNacionalidad = (nacionalidad) => {
    switch (nacionalidad) {
        case NACIONALIDAD.BOL:
            return "Boliviana";
            break;
        case NACIONALIDAD.ARG:
            return "Argentina";
            break;
        case NACIONALIDAD.CHI:
            return "Chilena";
            break;
        default:
            return "Extranjera";
    }
};
console.log(verificarNacionalidad("BOL")); // Boliviana
console.log(verificarNacionalidad("ARG")); // Argentina
console.log(verificarNacionalidad("CHI")); // Chilena
console.log(verificarNacionalidad("PER")); // Extranjera
