"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//*Superclase
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
class Picture extends Item {
    //*Atributos que se consideran necesarios para construir objetos
    //! No tiene sentido marcar un constructor como privado, no podríamos construir más objetos
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
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
Picture.photoOrientation = PhotoOrientation;
class Album extends Item {
    constructor(id, title) {
        super(id, title);
        this.pictures = []; //*Inicializamos el array vacío
    }
    addPicture(picture) {
        this.pictures.push(picture);
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
picture.title = 'Another title';
album.title = 'Title for an album';
console.table({ album });
console.table({ picture });
/* console.log('Album: ', {album})
console.log('Picture: ', {picture}) */
//!const item = new Item(1, 'test title') //!No podemos hacer esto porque la clase es abstracta
//* Probar el miembro estático de Picture
console.log('PhotoOrientation', Picture.photoOrientation.Landscape);
