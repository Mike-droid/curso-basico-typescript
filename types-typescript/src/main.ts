//*Number
//*Explícito
let phone: number;
phone = 1234567890;
//!phone = 'hola'; /*Esto produce un error*/

//*Inferido
let phoneNumber = 12345;
phoneNumber = 123;
//!phoneNumber = true; /*Esto también produce un error*/

let hex: number = 0xf00d; //* Hexadecimal
let binary: number = 0b1010; //* Binario
let octal: number = 0o777; //* Octal

//*Boolean
//* Explícito
let isPro: boolean;
isPro = true;
//!isPro = 1; /*Esto produce un error*/

//* Inferido
let isUserPro = false;
isUserPro = true;
//!isUserPro = 0; /*Esto también produce un error*/

//*Strings
//*Explícito
let username: string;
username = "Miguel";
//!username = true; /*Esto da un error */

//*Inferido
let my_name = "Miguel";

//*Template String
//*Uso de ``
let userInfo: string;
userInfo = `
  User Info:
  username: ${username}
  firstName: ${username + ' Reyes'}
  phone: ${phone}
  isPro: ${isPro}
`;
console.log(`userInfo ${userInfo}`);