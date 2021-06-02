export {} //*Exportamos un objeto vacío, ya que TS no permite usar los mismos nombres de variables que tenemos en otros archivos

//* [1, 'Miguel']
let user: [number, string] = [1,'Miguel']

console.log('user: ', user)
console.log('user id: ', user[0])
console.log('username length: ', user[1].length)

//* Podemos aplicar métodos de string a la posición user[1] ya que es un string.
//*Podemos aplicar métodode de int a la posición user[0] ya que es un int.

//*Tuplas con varios valores
let userInfo: [number, string, boolean] = [2, 'paparazzi', true]
console.log('userinfo: ', userInfo)

//* Arreglo de Tuplas
let arrayDeTuplas: [number, string][] = []
arrayDeTuplas.push([1, 'Erik']) //*0
arrayDeTuplas.push([2, 'Logan']) //*1
arrayDeTuplas.push([3, 'Xavier']) //*2

console.log('arrayDeTuplas: ', arrayDeTuplas)

//* Uso de funciones Array
//*Xavier -> Charles X

arrayDeTuplas[2][1] = arrayDeTuplas[2][1].replace('Xavier', 'Charles Xavier')

console.log('Array de mutantes: ', arrayDeTuplas)