export {}

enum PhotoOrientation{
  Landscape,
  Portrait,
  Square,
  Panorama
}

class Picture {
  //* Propiedades
  private id: number
  private title: string
  private orientation: PhotoOrientation

  //*Atributos que se consideran necesarios para construir objetos
  //! No tiene sentido marcar un constructor como privado, no podríamos construir más objetos
  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.id = id
    this.title = title
    this.orientation = orientation
  }

  //*Comportamiento
  public toString() {
    return `
    [
      id: ${this.id},
      title: ${this.title},
      orientation: ${this.orientation}
    ]
    `
  }
}

class Album {
  private id: number
  private title: string
  private pictures: Picture[]

  public constructor(id: number, title: string) {
    this.id = id
    this.title = title
    this.pictures = [] //*Inicializamos el array vacío
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture)
  }

  public showPictures(){
    for (let index = 0; index < this.pictures.length; index++) {
      console.log(`Soy el índice ${index}`)
      console.table(this.pictures[index])
    }
  }
}

const album: Album = new Album(1, 'Personal Pictures')
const picture: Picture = new Picture(1, 'Selfie', PhotoOrientation.Square)
const picture2: Picture = new Picture(2, 'Selfie2', PhotoOrientation.Landscape)
const picture3: Picture = new Picture(3, 'Selfie3', PhotoOrientation.Portrait)
album.addPicture(picture)
album.addPicture(picture2)
album.addPicture(picture3)

console.log(album) //* Imprime el objeto
console.table({album}) //* Como manejamos un objeto, podemos usar console.table
album.showPictures()

//! No podemos acceder a los atributos privados desde afuera
//picture.id = 100
//picture.orientation = PhotoOrientation.Panorama
//picture.title = 'Imagen chida'