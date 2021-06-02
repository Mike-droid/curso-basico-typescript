"use strict";
//* Orientación para fotografías
/* const landscape = 0
const portrait = 1
const square = 2
const panorama = 3 */
//*Una forma más inteligente de declarar constantes
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation["Landscape"] = "cero";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama"; //* 3
})(PhotoOrientation || (PhotoOrientation = {}));
const landscape = PhotoOrientation.Landscape;
const square = PhotoOrientation.Square;
console.log('landscape: ', landscape); //* Accede al valor
console.log('Square: ', PhotoOrientation[square]); //* Accede al nombre
//*Siempre tenemos valores consecutivos que incrementan de 1 en 1
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 12] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 13] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
console.log('Portrait: ', PictureOrientation.Portrait); //* valor 11
//* Es la misma lógica que: { key, value }
var Country;
(function (Country) {
    Country["Bolivia"] = "BOL";
    Country["Colombia"] = "COL";
    Country["Mexico"] = "MEX";
    Country["EEUU"] = "USA";
    Country["Espana"] = "ESP";
})(Country || (Country = {}));
const mexico = Country.Mexico;
console.log('México: ', mexico);
//! Country.Mexico = 'MX' //!Esto da un error, no podemos modificar su valor
var ColoresPrimarios;
(function (ColoresPrimarios) {
    ColoresPrimarios["Red"] = "Red";
    ColoresPrimarios["Green"] = "Green";
    ColoresPrimarios["Blue"] = "Blue";
})(ColoresPrimarios || (ColoresPrimarios = {}));
var CombinacionColores;
(function (CombinacionColores) {
    CombinacionColores[CombinacionColores["Black"] = 0] = "Black";
    CombinacionColores["Brown"] = "RedGreen";
    CombinacionColores["Yellow"] = "GreenBlue";
    CombinacionColores["Purple"] = "RedBlue";
    CombinacionColores["White"] = "RedGreenBlue";
})(CombinacionColores || (CombinacionColores = {}));
console.log('Colores Primarios: ', ColoresPrimarios);
console.log('Combinación de Colores: ', CombinacionColores);
console.log('Red: ', ColoresPrimarios.Red);
console.log('Green: ', ColoresPrimarios.Green);
console.log('Blue: ', ColoresPrimarios.Blue);
console.log('Brown: ', CombinacionColores.Brown);
console.log('Yellow: ', CombinacionColores.Yellow);
console.log('Purple: ', CombinacionColores.Purple);
console.log('White: ', CombinacionColores.White);
var Prueba;
(function (Prueba) {
    Prueba[Prueba["hola"] = -4] = "hola";
    Prueba[Prueba["adios"] = -3] = "adios"; //* -3
})(Prueba || (Prueba = {}));
console.log('Prueba: ', Prueba.adios);
