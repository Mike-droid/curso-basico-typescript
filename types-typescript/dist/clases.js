"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
class Picture {
    //*Atributos que se consideran necesarios para construir objetos
    constructor(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    //*Comportamiento
    toString() {
        return `
    [
      id: ${this.id},
      title: ${this.title},
      orientation: ${this.orientation}
    ]
    `;
    }
}
class Album {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = []; //*Inicializamos el array vacío
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(1, 'Personal Pictures');
const picture = new Picture(1, 'Selfie', PhotoOrientation.Square);
album.addPicture(picture);
//console.table(album)
//console.table(picture)
//console.table({picture})
console.log(album); //* Imprime el objeto
console.table({ album }); //* Como manejamos un objeto, podemos usar console.table
console.table(album.pictures); //* Como tenemos un array dentro del objeto, también podemos usar console.table
//* Accediendo a los miembros públicos
picture.id = 100;
picture.orientation = PhotoOrientation.Panorama;
picture.title = 'Imagen chida';
console.table({ album });
console.table(album.pictures);
