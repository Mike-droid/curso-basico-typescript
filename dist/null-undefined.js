"use strict";
//*Explícita
let nullVariable; //!No podemos cambiar su valor
nullVariable = null;
let undefinedVariable; //!No podemos cambiar su valor
undefinedVariable = undefined;
console.log(`null: ${nullVariable}`);
console.log(`undefined: ${undefinedVariable}`);
//*Null y undefined como subtipos
// --strictNullChecks
let albumName;
/* albumName = null
albumName = undefined */ 
