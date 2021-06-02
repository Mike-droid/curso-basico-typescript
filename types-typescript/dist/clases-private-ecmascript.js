"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _id, _title, _orientation, _id_1, _title_1, _pictures;
Object.defineProperty(exports, "__esModule", { value: true });
//* TypeScript >= 3.8
/*Ahora suando '#' es similar a escribir 'private' pero esta sintaxís es más estricta y no nos muestra ninguna información */
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
        //* Propiedades
        _id.set(this, void 0);
        _title.set(this, void 0);
        _orientation.set(this, void 0);
        __classPrivateFieldSet(this, _id, id);
        __classPrivateFieldSet(this, _title, title);
        __classPrivateFieldSet(this, _orientation, orientation);
    }
    //*Comportamiento
    toString() {
        return `
    [
      id: ${__classPrivateFieldGet(this, _id)},
      title: ${__classPrivateFieldGet(this, _title)},
      orientation: ${__classPrivateFieldGet(this, _orientation)}
    ]
    `;
    }
}
_id = new WeakMap(), _title = new WeakMap(), _orientation = new WeakMap();
class Album {
    constructor(id, title) {
        _id_1.set(this, void 0);
        _title_1.set(this, void 0);
        _pictures.set(this, void 0);
        __classPrivateFieldSet(this, _id_1, id);
        __classPrivateFieldSet(this, _title_1, title);
        __classPrivateFieldSet(this, _pictures, []); //*Inicializamos el array vacío
    }
    addPicture(picture) {
        __classPrivateFieldGet(this, _pictures).push(picture);
    }
    showPictures() {
        for (let index = 0; index < __classPrivateFieldGet(this, _pictures).length; index++) {
            console.log(`Soy el índice ${index}`);
            console.table(__classPrivateFieldGet(this, _pictures)[index]);
        }
    }
}
_id_1 = new WeakMap(), _title_1 = new WeakMap(), _pictures = new WeakMap();
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
