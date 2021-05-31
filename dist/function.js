"use strict";
//*Crear una fotografía
//*Usando TS, definimos tipos para parámetros
function createPicture(title, date, size) {
    //*Se crea la fotografía
    console.log('Create picture using: ', title, date, size);
}
createPicture('My picture', '2021/10/22', '1000x1000');
//!createPicture('Disney Vacation', '2018-03-12') //!Esto da un error porque necesita 3 parámetros
//*Parámetros opcionales
//*Solo hace falta escribir '?' al lado del parámetro
function createPhoto(title, date, size) {
    //*Se crea la fotografía
    console.log('Create photo using: ', title, date, size);
}
createPhoto('Foto1', '2020-10-10'); //! El tercer parámetro es undefined
//* Fat arrow function
let createPic = (title, date, size) => {
    return { title, date, size };
};
const picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log('Picture: ', picture);
//* Tipo de retorno
function handleError(code) {
    //*Procesamiento del código, mensaje
    if (code === 404) {
        throw new Error(`Code error: ${code}: NOT FOUND`);
    }
    else if (code >= 200 || code <= 299) {
        return 'Everything is perfect :)';
    }
    else {
        return 'An error has ocurred!';
    }
}
try {
    let result = handleError(200);
    console.log('result', result);
    result = handleError(404); //!Mostrará un error en la consola, es intencional
    console.log('result again: ', result);
}
catch (error) {
    console.log('Oh no, han error ocurred:', error);
}
