"use strict";
//*Number
//*Explícito
let phone;
phone = 1234567890;
//!phone = 'hola'; /*Esto produce un error*/
//*Inferido
let phoneNumber = 12345;
phoneNumber = 123;
//!phoneNumber = true; /*Esto también produce un error*/
let hex = 0xf00d; //* Hexadecimal
let binary = 0b1010; //* Binario
let octal = 0o777; //* Octal
//*Boolean
//* Explícito
let isPro;
isPro = true;
//!isPro = 1; /*Esto produce un error*/
//* Inferido
let isUserPro = false;
isUserPro = true;
//!isUserPro = 0; /*Esto también produce un error*/
//*Strings
//*Explícito
let username;
username = "Miguel";
//!username = true; /*Esto da un error */
//*Inferido
let my_name = "Miguel";
//*Template String
//*Uso de ``
let userInfo;
userInfo = `
  User Info:
  username: ${username}
  firstName: ${username + ' Reyes'}
  phone: ${phone}
  isPro: ${isPro}
`;
console.log(`userInfo ${userInfo}`);
