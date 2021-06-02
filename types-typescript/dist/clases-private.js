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
    //! No tiene sentido marcar un constructor como privado, no podríamos construir más objetos
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
//! No podemos acceder a los atributos privados desde afuera
//picture.id = 100
//picture.orientation = PhotoOrientation.Panorama
//picture.title = 'Imagen chida'
