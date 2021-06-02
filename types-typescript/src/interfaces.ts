//* Función para mostrar una fotografía
export {}

enum PhotoOrientation{
  Landscape,
  Portrait,
  Square,
  Panorama
}

interface Picture {
  title: string,
  date: string,
  orientation: PhotoOrientation
}

function showPicture(picture: Picture) {
  console.table({picture}) //* Imprime una tabla con los datos del objeto, se ve muy profesional
}

let myPic = {
  title: 'Test title',
  date: '2020-03',
  orientation: PhotoOrientation.Landscape
}

showPicture(myPic)
showPicture({
  title: 'Another title',
  date: '2021-06',
  orientation: PhotoOrientation.Portrait
  //* extra: 'test' //!Error
})

interface PictureConfig {
  title?: string, //* El '?' indica que el parámetro es opcional
  date?: string,
  orientation?: PhotoOrientation
}

function generatePicture(config: PictureConfig) {
  const picture = {title: 'Default title', date: '2020-01-01'} //*Valores por defecto
  if (config.title) {
    picture.title = config.title
  }
  if (config.date) {
    picture.date = config.date
  }

  return picture
}

let picture = generatePicture({})
console.table({picture})

picture = generatePicture({title: 'Travel Pic'})
console.table({picture})

picture = generatePicture({title: 'Travel Pic', date: '2016-06-23'})
console.table({picture})

//* Interfaz: Usuario

interface User {
  readonly id: number,
  username: string,
  isPro: boolean
}

let user: User = {id: 10, username: 'Mike', isPro: true}
console.table({user})
//*modificamos ahora un campo
//! user.id = 20 ahora no podemos modificar este campo
user.username = 'paparazzi'
console.table({user})