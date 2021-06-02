"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const photo_app_1 = require("./photo-app");
const user = new photo_app_1.User(1, 'Mike', 'Miguel', true);
const album = new photo_app_1.Album(1, 'First Album');
const picture = new photo_app_1.Picture(1, 'First pic', '2020-10-15', photo_app_1.PhotoOrientation.Portrait);
//*Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.table(user);
console.table(album);
console.table(picture);
