"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const album = {
    id: 5,
    title: 'Meetups',
    description: 'Community events around the world'
};
const picture = {
    id: 10,
    title: 'Family',
    orientation: PhotoOrientation.Square
};
let newPicture = {};
newPicture.id = 2;
newPicture.title = 'Moon';
console.table({ album });
console.table({ picture });
console.table({ newPicture });
