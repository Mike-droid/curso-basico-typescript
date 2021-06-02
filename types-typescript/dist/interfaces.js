"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.table({ picture }); //* Imprime una tabla con los datos del objeto, se ve muy profesional
}
let myPic = {
    title: 'Test title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'Another title',
    date: '2021-06',
    orientation: PhotoOrientation.Portrait
    //* extra: 'test' //!Error
});
function generatePicture(config) {
    const picture = { title: 'Default title', date: '2020-01-01' }; //*Valores por defecto
    if (config.title) {
        picture.title = config.title;
    }
    if (config.date) {
        picture.date = config.date;
    }
    return picture;
}
let picture = generatePicture({});
console.table({ picture });
picture = generatePicture({ title: 'Travel Pic' });
console.table({ picture });
picture = generatePicture({ title: 'Travel Pic', date: '2016-06-23' });
console.table({ picture });
let user = { id: 10, username: 'Mike', isPro: true };
console.table({ user });
//*modificamos ahora un campo
//! user.id = 20 ahora no podemos modificar este campo
user.username = 'paparazzi';
console.table({ user });
