import { Album } from "./album"
import { PhotoOrientation } from "./photo-orientation"
import { Picture } from "./picture"
import { User } from "./user"

const user = new User(1, 'Mike', 'Miguel', true)
const album = new Album(1, 'First Album')
const picture = new Picture(1, 'First pic', '2020-10-15', PhotoOrientation.Portrait)

//*Creamos relaciones
user.addAlbum(album)
album.addPicture(picture)

console.table(user)
console.table(album)
console.table(picture)

user.removeAlbum(album)
console.log('User: ', user)