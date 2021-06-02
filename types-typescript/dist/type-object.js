"use strict";
//! type: object (con minúscula)
let user;
user = {}; //! Object (con mayúscula)
user = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};
console.log('user: ', user);
//*Object vs object (clase JS vs tipo TS, respectivamente)
const myObj = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};
const isInstance = myObj instanceof Object; //?Regresa un booleano -> Clase Object de JS
console.log('isInstance: ', isInstance); //* Regresa true
console.log('user.username: ', myObj.username); //esto da un error
