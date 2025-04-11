enum NACIONALIDAD {
  BOL = "BOL",
  ARG = "ARG",
  CHI = "CHI"
}

const verificarNacionalidad = (nacionalidad: string) => {
  switch (nacionalidad) {
    case NACIONALIDAD.BOL:
      return "Boliviana"
      break
    case NACIONALIDAD.ARG:
      return "Argentina"
      break
    case NACIONALIDAD.CHI:
      return "Chilena"
      break
    default:
      return "Extranjera"
  }
}

console.log(verificarNacionalidad("BOL")) // Boliviana
console.log(verificarNacionalidad("ARG")) // Argentina
console.log(verificarNacionalidad("CHI")) // Chilena
console.log(verificarNacionalidad("PER")) // Extranjera