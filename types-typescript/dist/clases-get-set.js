"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//* get y set
class Picture {
    //*Atributos que se consideran necesarios para construir objetos
    //! No tiene sentido marcar un constructor como privado, no podríamos construir más objetos
    constructor(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    get idPicture() {
        return this._id;
    }
    set idPicture(id) {
        this._id = id;
    }
    get titlePicture() {
        return this._title;
    }
    set titlePicture(title) {
        this._title = title;
    }
    get orientationPicture() {
        return this._orientation;
    }
    set orientationPicture(orientation) {
        this._orientation = orientation;
    }
    //*Comportamiento
    toString() {
        return `
    [
      id: ${this._id},
      title: ${this._title},
      orientation: ${this._orientation}
    ]
    `;
    }
}
class Album {
    constructor(id, title) {
        this._id = id;
        this._title = title;
        this.pictures = []; //*Inicializamos el array vacío
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
    get idAlbum() {
        return this._id;
    }
    set idAlbum(id) {
        this._id = id;
    }
    get titleAlbum() {
        return this._title;
    }
    set titleAlbum(title) {
        this._title = title;
    }
    showPictures() {
        for (let index = 0; index < this.pictures.length; index++) {
            console.log(`Soy el índice ${index}`);
            console.table(this.pictures[index]);
        }
    }
}
const album = new Album(1, 'Personal Pictures');
const picture = new Picture(1, 'Selfie', PhotoOrientation.Square);
const picture2 = new Picture(2, 'Selfie2', PhotoOrientation.Landscape);
const picture3 = new Picture(3, 'Selfie3', PhotoOrientation.Portrait);
album.addPicture(picture);
album.addPicture(picture2);
album.addPicture(picture3);
console.log(album); //* Imprime el objeto
console.table({ album }); //* Como manejamos un objeto, podemos usar console.table
album.showPictures();
//* Estamos usando los métodos get y set y, no los atributos directamente
picture.idPicture = 100;
picture.titlePicture = 'Another title';
album.titleAlbum = 'Title for an album';
console.table({ album });
