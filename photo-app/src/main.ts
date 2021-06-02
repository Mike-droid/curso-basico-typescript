import { Album, PhotoOrientation, Picture, User } from "./photo-app";

const user = new User(1, 'Mike', 'Miguel', true)
const album = new Album(1, 'First Album')
const picture = new Picture(1, 'First pic', '2020-10-15', PhotoOrientation.Portrait)

//*Creamos relaciones
user.addAlbum(album)
album.addPicture(picture)

console.table(user)
console.table(album)
console.table(picture)