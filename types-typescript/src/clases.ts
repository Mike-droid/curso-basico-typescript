export {}

enum PhotoOrientation{
  Landscape,
  Portrait,
  Square,
  Panorama
}

class Picture {
  //* Propiedades
  public id: number
  public title: string
  public orientation: PhotoOrientation

  //*Atributos que se consideran necesarios para construir objetos
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
  public id: number
  public title: string
  public pictures: Picture[]

  public constructor(id: number, title: string) {
    this.id = id
    this.title = title
    this.pictures = [] //*Inicializamos el array vacío
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture)
  }
}

const album: Album = new Album(1, 'Personal Pictures')
const picture: Picture = new Picture(1, 'Selfie', PhotoOrientation.Square)
album.addPicture(picture)

//console.table(album)
//console.table(picture)
//console.table({picture})
console.log(album) //* Imprime el objeto
console.table({album}) //* Como manejamos un objeto, podemos usar console.table
console.table(album.pictures) //* Como tenemos un array dentro del objeto, también podemos usar console.table

//* Accediendo a los miembros públicos
picture.id = 100
picture.orientation = PhotoOrientation.Panorama
picture.title = 'Imagen chida'
console.table({album})
console.table(album.pictures)