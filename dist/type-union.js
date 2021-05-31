"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* Por ejemplo, tenemos usuarios que tienen un ID numérico o de tipo string 10, '10'
let idUser; //* Aceptará strings y number
idUser = 10;
idUser = '10';
//* Buscar username dado un ID
function getUserNameById(id) {
    //* Lógica de negocio, find the user
    return id;
}
//* No da errores 😄
getUserNameById(10);
getUserNameById('10');
let userID;
idUser = 10;
idUser = '10';
//* Buscar username dado un ID
function getUserName(id) {
    //* Lógica de negocio, find the user
    return 'Mike';
}
//! let smallPicture: SquareSize = "200x200" //!Esto da un error, no está incluido ese valor en SquareSize
let smallPicture = "100x100";
let mediumPicture = "500x500";
let bigPicture = "1000x1000";
console.log('small Picture: ', smallPicture);
console.log('medium Picture: ', mediumPicture);
console.log('big Picture: ', bigPicture);
