type NumerosPares = 2 | 4 | 6 | 8 | 10

const aceptaParesDel1al10 = (num: NumerosPares): boolean => {
  return num % 2 === 0
}

console.log(aceptaParesDel1al10(2)) // true