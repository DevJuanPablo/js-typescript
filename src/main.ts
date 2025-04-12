// 1 returns 'uno'
// 'uno' returns 1

type Params = number | string

function transformaNumero(param: number): string
function transformaNumero(param: string): number

function transformaNumero(param: Params): Params {
  if (typeof param === 'number') {
    return param.toString()
  } else if (typeof param === 'string') {
    return parseInt(param, 10)
  }
  throw new Error('Invalid parameter type')
}

//console.log(transformaNumero('uno'))
console.log(transformaNumero(1))