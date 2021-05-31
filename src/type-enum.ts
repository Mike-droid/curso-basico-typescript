//* Orientación para fotografías
/* const landscape = 0
const portrait = 1
const square = 2
const panorama = 3 */

//*Una forma más inteligente de declarar constantes
enum PhotoOrientation {
  Landscape = 'cero', //* Podemos asignar un valor en particular
  Portrait = 1, //* 1
  Square = 2, //* 2
  Panorama = 3 //* 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape
const square: PhotoOrientation = PhotoOrientation.Square

console.log('landscape: ', landscape) //* Accede al valor
console.log('Square: ', PhotoOrientation[square]) //* Accede al nombre

//*Siempre tenemos valores consecutivos que incrementan de 1 en 1
enum PictureOrientation {
  Landscape = 10,
  Portrait, //* 11
  Square, //* 12
  Panorama,// *13
}

console.log('Portrait: ', PictureOrientation.Portrait) //* valor 11

//* Es la misma lógica que: { key, value }
enum Country {
  Bolivia = 'BOL',
  Colombia = 'COL',
  Mexico = 'MEX',
  EEUU = 'USA',
  Espana = 'ESP'
}

const mexico:Country = Country.Mexico
console.log('México: ', mexico)

//! Country.Mexico = 'MX' //!Esto da un error, no podemos modificar su valor

enum ColoresPrimarios {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue'
}

enum CombinacionColores {
  Black = 0,
  Brown = ColoresPrimarios.Red + ColoresPrimarios.Green, //*Concatena strings, suma números
  Yellow = ColoresPrimarios.Green + ColoresPrimarios.Blue,
  Purple = ColoresPrimarios.Red + ColoresPrimarios.Blue,
  White = ColoresPrimarios.Red + ColoresPrimarios.Green + ColoresPrimarios.Blue,
}

console.log('Colores Primarios: ', ColoresPrimarios)
console.log('Combinación de Colores: ', CombinacionColores)
console.log('Red: ', ColoresPrimarios.Red)
console.log('Green: ', ColoresPrimarios.Green)
console.log('Blue: ', ColoresPrimarios.Blue)
console.log('Brown: ', CombinacionColores.Brown)
console.log('Yellow: ', CombinacionColores.Yellow)
console.log('Purple: ', CombinacionColores.Purple)
console.log('White: ', CombinacionColores.White)

enum Prueba {
  hola = -4 ,
  adios //* -3
}

console.log('Prueba: ', Prueba.adios)