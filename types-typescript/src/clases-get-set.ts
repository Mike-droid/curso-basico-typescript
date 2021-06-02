export {}

enum PhotoOrientation{
  Landscape,
  Portrait,
  Square,
  Panorama
}

//* get y set

class Picture {
  //* Propiedades
  private _id: number
  private _title: string
  private _orientation: PhotoOrientation

  //*Atributos que se consideran necesarios para construir objetos
  //! No tiene sentido marcar un constructor como privado, no podríamos construir más objetos
  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this._id = id
    this._title = title
    this._orientation = orientation
  }

  get idPicture(){
    return this._id
  }
  set idPicture(id: number){
    this._id = id
  }
  get titlePicture(){
    return this._title
  }
  set titlePicture(title: string){
    this._title = title
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

class Album {
  private _id: number
  private _title: string
  private pictures: Picture[]

  public constructor(id: number, title: string) {
    this._id = id
    this._title = title
    this.pictures = [] //*Inicializamos el array vacío
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture)
  }

  get idAlbum(){
    return this._id
  }
  set idAlbum(id: number){
    this._id = id
  }
  get titleAlbum(){
    return this._title
  }
  set titleAlbum(title: string){
    this._title = title
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

//* Estamos usando los métodos get y set y, no los atributos directamente
picture.idPicture = 100
picture.titlePicture = 'Another title'
album.titleAlbum = 'Title for an album'
console.table({album})