"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const album_1 = require("./album");
const photo_orientation_1 = require("./photo-orientation");
const picture_1 = require("./picture");
const user_1 = require("./user");
const user = new user_1.User(1, 'Mike', 'Miguel', true);
const album = new album_1.Album(1, 'First Album');
const picture = new picture_1.Picture(1, 'First pic', '2020-10-15', photo_orientation_1.PhotoOrientation.Portrait);
//*Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.table(user);
console.table(album);
console.table(picture);
user.removeAlbum(album);
console.log('User: ', user);
