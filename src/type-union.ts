export {}

//* Por ejemplo, tenemos usuarios que tienen un ID numérico o de tipo string 10, '10'
let idUser: number | string //* Aceptará strings y number
idUser = 10
idUser = '10'

//* Buscar username dado un ID

function getUserNameById(id: number | string) {
  //* Lógica de negocio, find the user
  return id
}

//* No da errores 😄
getUserNameById(10)
getUserNameById('10')

//--------------------------------------------------------------------------------------------

//* Alias de tipos de TS
type IdUser = number | string
type UserName = string
let userID: IdUser
idUser = 10
idUser = '10'

//* Buscar username dado un ID

function getUserName(id: IdUser): UserName {
  //* Lógica de negocio, find the user
  return 'Mike'
}

//----------------------------------------------------------------------------------------------------

//* Tipos literales
//* Por ejemplo, sólo aceptamos fotos de 100x100, 500x500 y 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000'
//! let smallPicture: SquareSize = "200x200" //!Esto da un error, no está incluido ese valor en SquareSize
let smallPicture: SquareSize = "100x100"
let mediumPicture: SquareSize = "500x500"
let bigPicture: SquareSize = "1000x1000"

console.log('small Picture: ', smallPicture)
console.log('medium Picture: ', mediumPicture)
console.log('big Picture: ', bigPicture)