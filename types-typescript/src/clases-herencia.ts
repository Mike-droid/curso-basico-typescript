export {}

enum PhotoOrientation{
  Landscape,
  Portrait,
  Square,
  Panorama
}

//*Superclase
abstract class Item {
  protected readonly _id: number
  protected _title: string

  constructor(id: number, title: string){
    this._id = id
    this._title = title
  }

  get id(){
    return this._id
  }

  get title(){
    return this._title
  }
  set title(title: string){
    this._title = title
  }
}

class Picture extends Item {
  public static photoOrientation = PhotoOrientation
  //* Propiedades
  private _orientation: PhotoOrientation

  //*Atributos que se consideran necesarios para construir objetos
  //! No tiene sentido marcar un constructor como privado, no podríamos construir más objetos
  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    super(id, title)
    this._orientation = orientation
  }

  get orientationPicture(){
    return this._orientation
  }
  set orientationPicture(orientation: PhotoOrientation){
    this._orientation = orientation
  }

  //*Comportamiento
  public toString() {
    return `
    [
      id: ${this._id},
      title: ${this._title},
      orientation: ${this._orientation}
    ]
    `
  }
}

class Album extends Item {
  private pictures: Picture[]

  public constructor(id: number, title: string) {
    super(id, title)
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
/* const picture2: Picture = new Picture(2, 'Selfie2', PhotoOrientation.Landscape)
const picture3: Picture = new Picture(3, 'Selfie3', PhotoOrientation.Portrait)
album.addPicture(picture)
album.addPicture(picture2)
album.addPicture(picture3)

console.log(album) //* Imprime el objeto
console.table({album}) //* Como manejamos un objeto, podemos usar console.table
album.showPictures() */

//* Estamos usando los métodos get y set y, no los atributos directamente
//!picture.id = 100 ya no podemos hacer esto por ser readonly
picture.title = 'Another title'
album.title = 'Title for an album'
console.table({album})
console.table({picture})
/* console.log('Album: ', {album})
console.log('Picture: ', {picture}) */

//!const item = new Item(1, 'test title') //!No podemos hacer esto porque la clase es abstracta

//* Probar el miembro estático de Picture
console.log('PhotoOrientation' , Picture.photoOrientation.Landscape)