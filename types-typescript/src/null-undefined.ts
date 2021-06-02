//*Explícita
let nullVariable: null //!No podemos cambiar su valor
nullVariable = null

let undefinedVariable: undefined //!No podemos cambiar su valor
undefinedVariable = undefined

console.log(`null: ${nullVariable}`)
console.log(`undefined: ${undefinedVariable}`)

//*Null y undefined como subtipos

// --strictNullChecks
let albumName: string
/* albumName = null
albumName = undefined */