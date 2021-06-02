"use strict";
//*Corchetes []
//*Tipo explícito
let users;
users = ['Miguel', 'Angel', 'Óscar'];
//!users = [1,true,'hola'] //!error
//*Tipo inferido
let otherUsers = ['Miguel', 'Angel', 'México'];
//!otherUsers = [1,true,'hola'] //!error
//*Array<TIPO>
let picturesTitles;
picturesTitles = ['Title0', 'Title1', 'Title2'];
//* Accediendo a los valores en un Array
console.log('users[0]: ', users[0]);
console.log('picturesTitles[1]: ', picturesTitles[1]);
//* Propiedades en Array
console.log('users.length: ', users.length);
//*Uso de funciones en Arrays
users.push('Platzi user'); //*Insertamos un elemento al array
users.sort(); //*Método para ordenar, como es string, los elementos serán ordenados alfabéticamente
console.log('users: ', users);
