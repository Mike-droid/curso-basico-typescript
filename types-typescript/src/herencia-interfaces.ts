export {}

enum PhotoOrientation{
  Landscape,
  Portrait,
  Square,
  Panorama
}

//*Herencia de interfaces

interface Entity {
  id: number,
  title: string,
}

interface Album  extends Entity{
  //*Copia de los atributos de Entity
  description: string
}

interface Picture extends Entity {
  orientation: PhotoOrientation
}

const album: Album = {
  id: 5,
  title: 'Meetups',
  description: 'Community events around the world'
}

const picture: Picture = {
  id: 10,
  title: 'Family',
  orientation: PhotoOrientation.Square
}

let newPicture = {} as Picture
newPicture.id = 2
newPicture.title = 'Moon'

console.table({album})
console.table({picture})
console.table({newPicture})