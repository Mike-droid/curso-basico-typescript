"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* <> Angle Bracket syntax (no recomendado si usas React)
let username;
username = 'Mike Angel';
//*Tenemos una cadena, ¡TS confía en mí!
let message = username.length > 5 ? `Welcome ${username}` : `Username is too short`;
console.log('message: ', message);
let usernameWithId = 'Miguel_Reyes 1';
//? Cómo obtener el username ?
username = usernameWithId.substring(0, 12);
console.log('Username only: ', username);
//*Sintaxis "as"
message: username.length > 5 ? `Welcome ${username}` : `Username is too short`;
let helloUser;
helloUser = 'hello paparazzi';
username = helloUser.substring(6);
console.log('username: ', username);
