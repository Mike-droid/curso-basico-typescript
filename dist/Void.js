"use strict";
//* Void
//* Tipo explícito
function showInfo(user) {
    console.log(`User info: ${user.id}, ${user.username}, ${user.firstName}`);
}
showInfo({
    id: 1,
    username: 'mike',
    firstName: 'Miguel Ángel'
});
//* Tipo inferido
function showFormattedInfo(user) {
    console.log(`User info:
    id: ${user.id},
    username: ${user.username},
    firstName: ${user.firstName}
  `);
}
showFormattedInfo({
    id: 1,
    username: 'mike',
    firstName: 'Miguel Ángel'
});
//* Tipo void como tipo de dato en una variable
let unusable;
//!unusable = null //Esto da una error
unusable = undefined;
//* Tipo: Never
function handleError(code, message) {
    //*Process your code here
    //*Generate a message
    throw new Error(`${message}. Code: ${code}`);
}
try {
    handleError(404, "Not Found");
    //*Nunca retorna un valor
}
catch (error) {
}
/* function sumNumbers(limit: number):never {
  //!Bucle infinito
  let sum = 0

  while(true){
    sum++;
  }

}

sumNumbers(100) */ //!Bucle infinito
