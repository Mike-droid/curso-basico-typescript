"use strict";
//*Tipo explícito
let idUser;
idUser = 1; //*number
idUser = 'texto'; //*string
console.log(`idUser: ${idUser}`);
//*Tipo inferido
let otherId;
otherId = 4;
otherId = "texto";
console.log(`otherID: ${otherId}`);
let surprise = 'hello TypeScript';
//* surprise.sayHello() //error
const res = surprise.substring(6);
console.log(`res: ${res}`);
