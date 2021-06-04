# Curso de fundamentos de TypeScript

## Introducción a TypeScript

### El lenguaje de programación TypeScript

TypeScript es un superconjunto tipado de JavaScript que compila a este lenguaje.

- Lenguaje de programación tipado.
- Lenguaje de alto nivel.
- Genera como resultado código JavaScript.
- Código abierto
- Desarrollo en cualquier Sistema Operativo.
- El código puede ejecutarse en cualquier navegador o plataforma.

Si conoces JavaScript, conoces TypeScript 😄. También soporta EcmaScript 5 y 6+.

Muchas compañías usan TS, como Microsoft, Google, airbnb, Shopify, slack, Medium, y otras 2393 + empresas.

[Documentación oficial de TypeScript](https://www.typescriptlang.org/docs/)

[Repositorio de TS en Github](https://github.com/microsoft/TypeScript)

¿Por qué usar TS?

- Programación orientada a objetos
- JS en esteroides
- Mayor productividad
- Poderoso sistema de tipos
- Compila ES5, ES6 y más
- Proyecto muy activo
- Constantemente actualizado
- Comunidad creciente
- Podemos prevenir cerca del 15% de bugs
- ¡Puedes usarlo tanto en el backend como en el frontend!

### Instalación de herramientas

Necesitarás descargar [Node.js](https://nodejs.org/es/) y [Visual Studio Code](https://code.visualstudio.com/)

### Navegación y refactorización

Visual Studio Code viene con una integración de TypeScript que nos hará más fácil la vida al momento de desarrollar con este lenguaje.

## Entorno de desarrollo

### El compilador de TypeScript

Para instalar esta herramienta debemos hacer `npm i -g typescript`. La bandera "-g" significa "global" y podremos usar el TSC en nuestros diferentes proyectos. Una vez instalado podemos hacer `tsc -v` para comprobar qué versión tenemos en nuestro equipo.

¿Cómo funciona el TSC? Tenemos por ejemplo un archivo "hello.ts", el TSC lo tomará y creará un archivo "hello.js". De manera práctica podemos hacer `tsc hello.ts`

Luego podemos ejecutar el archivo de JavaScript con Node, haciendo `node hello.js`.

Tenemos la opción de "-W", lo cual significa que con solo guardar los cambios en el archivo TS, estará modificando automáticamente el archivo JS, simplemente escribimos `tsc -W hello.ts`.

### El archivo de configuración de TypeScript

Podemos configurar nuestro compilador con el archivo "tsconfig.json".

- Especifica la raíz de un proyecto TypeScript
- Permite configurar opciones para el compilador
- Para generar el archivo escribimos `tsc --init`

El archivo generado vendrá muy bien documentado para saber qué es lo que hace cada configuración.

Podemos usar de 3 formas diferentes el TSC:

- `tsc` -> Busca la configuración
- `tsc --project platzi` -> Especifica un directorio que contiene la configuración
- `tsc file.ts` -> Omite la configuración

[Documentación oficial sobre el archivo TS Config](https://www.typescriptlang.org/tsconfig)

### Mi primer proyecto TypeScript

Podemos configurar en el archivo de configuración la instrucción `"outDir": "./dist",` para que los archivos de JavaScript se guarden en una carpeta dist que, si no existe, se generará de forma automática.

## Tipos en TypeScript

### Tipado en TypeScript

- Explícito: Define una sintaxis para la creación de variables con tipo de datos.
- Inferido: TypeScript tiene la habilidad de "deducir" el tipo de función de un valor.
- Tipado explícito -> `mi_variable : Int`
- Tipado implícito -> `mi_variable = 5`

### Number, Boolean y String

#### Tipo Number

Aquí podemos utilizar valores numéricos como:

- Enteros
- Flotantes
- Hexadecimales
- Octales
- Binarios

#### Tipo Boolean

- El tipo de dato más simple en TypeScript
- Dos únicos valores: true y false

#### Tipo String

- El tipo de dato para trabajar con datos de texto
- Así como en JS, se pueden usar comillas simples y dobles '', ""
- Permiten definir múltiples líneas de texto
- Pueden contener expresiones o variables embebidas
- Se debe usar el caracter backtick/backquote(`) y para expresiones ${expr}

```typescript
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
```

### Any

#### Tipo Any

- Usado para capturar valores dinámicos
- Los valores pueden cambiar de tipo en el tiempo:
  - APIs externas
  - Librerías de terceros

Any no es recomendado. Solamente debería usarse cuando no sabemos qué tipo de dato almacenará nuestra variable.

```typescript
//*Tipo explícito
let idUser: any;
idUser = 1; //*number
idUser = 'texto'; //*string
console.log(`idUser: ${idUser}`);

//*Tipo inferido
let otherId;
otherId = 4;
otherId = "texto";
console.log(`otherID: ${otherId}`);

let surprise:any = 'hello TypeScript'
//* surprise.sayHello() //error
const res = surprise.substring(6)
console.log(`res: ${res}`);
```

### Void y Never

#### Tipo Void

- void es lo opuesto de any, representa la ausencia de tipo
- Comúnmente se usa como tipo de retorno en funciones

#### Tipo Never

- Representa el tipo de valor que *nunca* ocurre
  - Funciones que lanzan excepciones
  - Funciones que nunca retornan un valor

```typescript
//* Void

//* Tipo explícito
function showInfo(user:any): any {
  console.log(`User info: ${user.id}, ${user.username}, ${user.firstName}`)
}

showInfo({
  id: 1,
  username: 'mike',
  firstName: 'Miguel Ángel'
})

//* Tipo inferido
function showFormattedInfo(user: any){
  console.log(`User info:
    id: ${user.id},
    username: ${user.username},
    firstName: ${user.firstName}
  `)
}

showFormattedInfo({
  id: 1,
  username: 'mike',
  firstName: 'Miguel Ángel'
})

//* Tipo void como tipo de dato en una variable
let unusable: void
//!unusable = null //Esto da una error
unusable = undefined

//* Tipo: Never

function handleError(code:number, message:string):never {
  //*Process your code here
  //*Generate a message
  throw new Error(`${message}. Code: ${code}`);
}

try {
  handleError(404, "Not Found")
  //*Nunca retorna un valor
} catch (error) {

}

/* function sumNumbers(limit: number):never {
  //!Bucle infinito
  let sum = 0

  while(true){
    sum++;
  }

}

sumNumbers(100) */ //!Bucle infinito
```

### null y undefined

- En TypeScript, ambos "valores" tienen sus respectivos tipos:
  - null
  - undefined
- Null y Undefined se pueden asumir como subtipos de los otros tipos de datos.
- Significa que se pueden asignar null y undefied a una variable de tipo string, por ejemplo.

#### Opción --strictNullChecks

- Solo permite asignar null y undefined a una variable de tipo any o a sus respectivos
- Ayua a evitar errores comunes en programación de apps en el ámbito JavaScript

Generará un reporte de los errores que encuentre, hacemos `tsc nombreDelArchivo.ts --strictNullChecks`

```typescript
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
```

### object

- object es el tipo de dato que representa un valor no primitivo
- Es el tipo de variable que no sea number, string, boolean, null, undefined, etc.

#### Object vs object

- Object: instancia de la clase Object en JavaScript
- object: tipo para valores no primitivos

Con este tipo no se puede acceder a las propiedades del objecto

Esto es lo que dice la documentacion de typescript: Generally, you won’t need to use this. En pocas palabras, ignoren el tipo object.

Tengo entendido que `{}`, es decir, Object, es mejor que `object`.

### Array

- Al igual que JS, TS permite definir un arreglo para contener un conjunto de valores.
- Usa 2 notaciones: `[]` y `Array<tipo>`

[Documentación oficial de tipos de datos usados en TypeScript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

```typescript
//*Corchetes []

//*Tipo explícito
let users: string[]
users = ['Miguel','Angel','Óscar']
//!users = [1,true,'hola'] //!error

//*Tipo inferido
let otherUsers = ['Miguel','Angel','México']
//!otherUsers = [1,true,'hola'] //!error

//*Array<TIPO>
let picturesTitles: Array<string>
picturesTitles = ['Title0','Title1','Title2']

//* Accediendo a los valores en un Array
console.log('users[0]: ', users[0])
console.log('picturesTitles[1]: ', picturesTitles[1])

//* Propiedades en Array
console.log('users.length: ', users.length)

//*Uso de funciones en Arrays
users.push('Platzi user') //*Insertamos un elemento al array
users.sort() //*Método para ordenar, como es string, los elementos serán ordenados alfabéticamente
console.log('users: ', users)
```

### Tuplas

- En TS, las tuplas permiten expresar un arreglo con un número fijo de elementos.
- La sintaxís es la misma que en un array `[]` pero los tipos de datos deben ser distintos

[Documentación oficial de Tuplas](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)

```typescript
export {} //*Exportamos un objeto vacío, ya que TS no permite usar los mismos nombres de variables que tenemos en otros archivos

//* [1, 'Miguel']
let user: [number, string] = [1,'Miguel']

console.log('user: ', user)
console.log('user id: ', user[0])
console.log('username length: ', user[1].length)

//* Podemos aplicar métodos de string a la posición user[1] ya que es un string.
//*Podemos aplicar métodode de int a la posición user[0] ya que es un int.

//*Tuplas con varios valores
let userInfo: [number, string, boolean] = [2, 'paparazzi', true]
console.log('userinfo: ', userInfo)

//* Arreglo de Tuplas
let arrayDeTuplas: [number, string][] = []
arrayDeTuplas.push([1, 'Erik']) //*0
arrayDeTuplas.push([2, 'Logan']) //*1
arrayDeTuplas.push([3, 'Xavier']) //*2

console.log('arrayDeTuplas: ', arrayDeTuplas)

//* Uso de funciones Array
//*Xavier -> Charles X

arrayDeTuplas[2][1] = arrayDeTuplas[2][1].replace('Xavier', 'Charles Xavier')

console.log('Array de mutantes: ', arrayDeTuplas)
```

### Enum

- Los enumerados permiten definir un conjunto de **constantes con nombre**
- Tienen la ventaja de adapartse al contexto de la aplicación

[Documentación oficial de enums en TS](https://www.typescriptlang.org/docs/handbook/enums.html)

```typescript
//* Orientación para fotografías
/* const landscape = 0
const portrait = 1
const square = 2
const panorama = 3 */

//*Una forma más inteligente de declarar constantes
enum PhotoOrientation {
  Landscape = 'cero', //* Podemos asignar un valor en particular
  Portrait = 1, //* 1
  Square = 2, //* 2
  Panorama = 3 //* 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape
const square: PhotoOrientation = PhotoOrientation.Square

console.log('landscape: ', landscape) //* Accede al valor
console.log('Square: ', PhotoOrientation[square]) //* Accede al nombre

//*Siempre tenemos valores consecutivos que incrementan de 1 en 1
enum PictureOrientation {
  Landscape = 10,
  Portrait, //* 11
  Square, //* 12
  Panorama,// *13
}

console.log('Portrait: ', PictureOrientation.Portrait) //* valor 11

//* Es la misma lógica que: { key, value }
enum Country {
  Bolivia = 'BOL',
  Colombia = 'COL',
  Mexico = 'MEX',
  EEUU = 'USA',
  Espana = 'ESP'
}

const mexico:Country = Country.Mexico
console.log('México: ', mexico)

//! Country.Mexico = 'MX' //!Esto da un error, no podemos modificar su valor

enum ColoresPrimarios {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue'
}

enum CombinacionColores {
  Black = 0,
  Brown = ColoresPrimarios.Red + ColoresPrimarios.Green, //*Concatena strings, suma números
  Yellow = ColoresPrimarios.Green + ColoresPrimarios.Blue,
  Purple = ColoresPrimarios.Red + ColoresPrimarios.Blue,
  White = ColoresPrimarios.Red + ColoresPrimarios.Green + ColoresPrimarios.Blue,
}

console.log('Colores Primarios: ', ColoresPrimarios)
console.log('Combinación de Colores: ', CombinacionColores)
console.log('Red: ', ColoresPrimarios.Red)
console.log('Green: ', ColoresPrimarios.Green)
console.log('Blue: ', ColoresPrimarios.Blue)
console.log('Brown: ', CombinacionColores.Brown)
console.log('Yellow: ', CombinacionColores.Yellow)
console.log('Purple: ', CombinacionColores.Purple)
console.log('White: ', CombinacionColores.White)

enum Prueba {
  hola = -4 ,
  adios //* -3
}

console.log('Prueba: ', Prueba.adios)
```

### Unión de Tipos, Alias y Tipos Literales

#### Unión de Tipos

- En TypeScript se puede definir una variable con múltiples tipos de datos: `Union Type`
- Se usa el símbolo de pipe `|` entre los tipos

#### Alias de Tipos

- TypeScript permite crear un alias como nuevo nombre para un tipo
- El alias se puede aplicar también a un conjunto de combinación de tipos
- Se usa la palabra reservada `type`

#### Tipos Literales

- Una variable con un tipo literal puede contener únicamente una cadena del conjunto
- Se usan cadenas como "tipos", combinados con el símbolo de pipe | entre ellos

```typescript
export {}

//* Por ejemplo, tenemos usuarios que tienen un ID numérico o de tipo string 10, '10'
let idUser: number | string //* Aceptará strings y number
idUser = 10
idUser = '10'

//* Buscar username dado un ID

function getUserNameById(id: number | string) {
  //* Lógica de negocio, find the user
  return id
}

//* No da errores 😄
getUserNameById(10)
getUserNameById('10')

//--------------------------------------------------------------------------------------------

//* Alias de tipos de TS
type IdUser = number | string
type UserName = string
let userID: IdUser
idUser = 10
idUser = '10'

//* Buscar username dado un ID

function getUserName(id: IdUser): UserName {
  //* Lógica de negocio, find the user
  return 'Mike'
}

//----------------------------------------------------------------------------------------------------

//* Tipos literales
//* Por ejemplo, sólo aceptamos fotos de 100x100, 500x500 y 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000'
//! let smallPicture: SquareSize = "200x200" //!Esto da un error, no está incluido ese valor en SquareSize
let smallPicture: SquareSize = "100x100"
let mediumPicture: SquareSize = "500x500"
let bigPicture: SquareSize = "1000x1000"

console.log('small Picture: ', smallPicture)
console.log('medium Picture: ', mediumPicture)
console.log('big Picture: ', bigPicture)
```

### Aserciones de tipo

Además de los tipos de datos, TS provee un mecanismo para poder "convertir" estos tipos en algo que nosotros mejor conocemos.

- Cuando el programador puede conocer más que TypeScript sobre el valor de una variable
- Es un mensaje al compilador: "Confía en mí, sé lo que hago."
- Se parece al casting de tipos en otros lenguajes de programación **PERO no es lo mismo**
- Usa dos sintaxis: `<Angle Bracket> y (variable as tipo)` -> La prioridad de usar `as` por encima de `<>` es desde la versión 1.6 de Typescript debido a que había ambigüedad en archivos .jsx

[Documentación oficial sobre <> y 'as' en TS](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-6.html#new-tsx-file-extension-and-as-operator)

Se recomienda más usar `as` ya que `<>` trae problemas con React

### Funciones en TypeScript

- Los parámetros en las funciones son tipados
- Se pueden definir parámetros opcionales
- El tipo de retorno puede ser un tipo básico, enum, alias, tipo literal o una combinación de ellos

```typescript
//*Crear una fotografía
//*Usando TS, definimos tipos para parámetros

type SquareSize = '100x100' | '500x500' | '1000x1000'

function createPicture(title:string, date:string, size: SquareSize) {
  //*Se crea la fotografía
  console.log('Create picture using: ', title, date, size)
}

createPicture('My picture', '2021/10/22', '1000x1000')
//!createPicture('Disney Vacation', '2018-03-12') //!Esto da un error porque necesita 3 parámetros

//*Parámetros opcionales
//*Solo hace falta escribir '?' al lado del parámetro
function createPhoto(title:string, date:string, size?: SquareSize) {
  //*Se crea la fotografía
  console.log('Create photo using: ', title, date, size)
}

createPhoto('Foto1', '2020-10-10') //! El tercer parámetro es undefined


//* Fat arrow function
let createPic = (title:string, date:string, size:SquareSize):object => {
  return { title, date, size }
}

const picture = createPic('Platzi session', '2020-03-10', '100x100')
console.log('Picture: ', picture)
```

### Tipo de retorno

```typescript
//* Tipo de retorno
function handleError(code:number):never | string {
  //*Procesamiento del código, mensaje
  if (code === 404) {
    throw new Error(`Code error: ${code}: NOT FOUND`);
  }else if(code >= 200 || code <= 299){
    return 'Everything is perfect :)'
  }
  else {
    return 'An error has ocurred!'
  }
}

try {
  let result = handleError(200)
  console.log('result', result)
  result = handleError(404) //!Mostrará un error en la consola, es intencional
  console.log('result again: ', result)
} catch (error) {
  console.log('Oh no, han error ocurred:', error)
}
```

## Tipos personalizados

### Interfaces

Las interfaces en TS constituyen una forma poderosa de definir "contratos" tanto para tu proyecto, como para el código externo del mismo.

[Documentación oficial sobre interfaces en TS](https://www.typescriptlang.org/docs/handbook/2/objects.html#interfaces-vs-intersections)

[Interfaces en TS explicado en TutorialsTeacher](https://www.tutorialsteacher.com/typescript/typescript-interface)

[Interfaces en TS explicado en Desarrollo Web](https://desarrolloweb.com/articulos/definicion-interfaces-typescript.html)

[Interfaces en TS explicado en TutorialsPoint](https://www.tutorialspoint.com/typescript/typescript_interfaces.htm)

```typescript
//* Función para mostrar una fotografía
export {}

enum PhotoOrientation{
  Landscape,
  Portrait,
  Square,
  Panorama
}

interface Picture {
  title: string,
  date: string,
  orientation: PhotoOrientation
}

function showPicture(picture: Picture) {
  console.table({picture}) //* Imprime una tabla con los datos del objeto, se ve muy profesional
}

let myPic = {
  title: 'Test title',
  date: '2020-03',
  orientation: PhotoOrientation.Landscape
}

showPicture(myPic)
showPicture({
  title: 'Another title',
  date: '2021-06',
  orientation: PhotoOrientation.Portrait
})
```

### Interfaces: propiedades opcionales

No todas las propiedades de una interfaz podrían ser requeridas.

Establecemos una propiedad como opcional con el símbolo '?' después del nombre.

```typescript
interface PictureConfig {
  title?: string, //* El '?' indica que el parámetro es opcional
  date?: string,
  orientation?: PhotoOrientation
}

function generatePicture(config: PictureConfig) {
  const picture = {title: 'Default title', date: '2020-01-01'} //*Valores por defecto
  if (config.title) {
    picture.title = config.title
  }
  if (config.date) {
    picture.date = config.date
  }

  return picture
}

let picture = generatePicture({})
console.table({picture})

picture = generatePicture({title: 'Travel Pic'})
console.table({picture})

picture = generatePicture({title: 'Travel Pic', date: '2016-06-23'})
console.table({picture})
```

#### Interfaces: Propiedades de solo lectura

Algunas propiedades de la interfaz podrían no ser modificables una vez creado el objeto. Esto es posible usando `readonly` antes del nombre de la propiedad.

```typescript
//* Interfaz: Usuario

interface User {
  readonly id: number,
  username: string,
  isPro: boolean
}

let user: User = {id: 10, username: 'Mike', isPro: true}
console.table({user})
//*modificamos ahora un campo
//! user.id = 20 ahora no podemos modificar este campo
user.username = 'paparazzi'
console.table({user})
```

### Extensión de interfaces

La herencia es un mecanismo para poder reutilzar código dentro de la programación orientada a objetos. TS provee esto con las interfaces. Las interfaces pueden extenderse de otras. Esto permite copiar los miembros ya definidos en una interfaz a otra, ganando flexibilidad y reusabilidad de componentes.

```typescript
export {}

enum PhotoOrientation{
  Landscape,
  Portrait,
  Square,
  Panorama
}

//*Herencia de interfaces

interface Entity {
  id: number,
  title: string,
}

interface Album  extends Entity{
  //*Copia de los atributos de Entity
  description: string
}

interface Picture extends Entity {
  orientation: PhotoOrientation
}

const album: Album = {
  id: 5,
  title: 'Meetups',
  description: 'Community events around the world'
}

const picture: Picture = {
  id: 10,
  title: 'Family',
  orientation: PhotoOrientation.Square
}

let newPicture = {} as Picture
newPicture.id = 2
newPicture.title = 'Moon'

console.table({album})
console.table({picture})
console.table({newPicture})
```

### Clases

#### Definiendo clases y constructores

A partir de ECMAScript 2015 es posible construir clases y hacer uso del paradigma de POO en JS. TS permite aplicar estas técnicas sin tener que esperar por otra versión.

```typescript
export {}

enum PhotoOrientation{
  Landscape,
  Portrait,
  Square,
  Panorama
}

class Picture {
  //* Propiedades
  id: number
  title: string
  orientation: PhotoOrientation

  //*Atributos que se consideran necesarios para construir objetos
  constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.id = id
    this.title = title
    this.orientation = orientation
  }

  //*Comportamiento
  toString() {
    return `
    [
      id: ${this.id},
      title: ${this.title},
      orientation: ${this.orientation}
    ]
    `
  }
}

class Album {
  id: number
  title: string
  pictures: Picture[]

  constructor(id: number, title: string) {
    this.id = id
    this.title = title
    this.pictures = [] //*Inicializamos el array vacío
  }

  addPicture(picture: Picture) {
    this.pictures.push(picture)
  }
}

const album: Album = new Album(1, 'Personal Pictures')
const picture: Picture = new Picture(1, 'Selfie', PhotoOrientation.Square)
album.addPicture(picture)

//console.table(album)
//console.table(picture)
//console.table({picture})
console.log(album) //* Imprime el objeto
console.table({album}) //* Como manejamos un objeto, podemos usar console.table
console.table(album.pictures) //* Como tenemos un array dentro del objeto, también podemos usar console.table

```

### Clases públicas y privadas

#### Clases - Miembros públicos

TS define un modificador de acceso público por defecto para los miembros de clase.

También es posible marcar un miembro como público usando la palabra reservada `public`.

```typescript
export {}

enum PhotoOrientation{
  Landscape,
  Portrait,
  Square,
  Panorama
}

class Picture {
  //* Propiedades
  public id: number
  public title: string
  public orientation: PhotoOrientation

  //*Atributos que se consideran necesarios para construir objetos
  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.id = id
    this.title = title
    this.orientation = orientation
  }

  //*Comportamiento
  public toString() {
    return `
    [
      id: ${this.id},
      title: ${this.title},
      orientation: ${this.orientation}
    ]
    `
  }
}

class Album {
  public id: number
  public title: string
  public pictures: Picture[]

  public constructor(id: number, title: string) {
    this.id = id
    this.title = title
    this.pictures = [] //*Inicializamos el array vacío
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture)
  }
}

const album: Album = new Album(1, 'Personal Pictures')
const picture: Picture = new Picture(1, 'Selfie', PhotoOrientation.Square)
album.addPicture(picture)

//console.table(album)
//console.table(picture)
//console.table({picture})
console.log(album) //* Imprime el objeto
console.table({album}) //* Como manejamos un objeto, podemos usar console.table
console.table(album.pictures) //* Como tenemos un array dentro del objeto, también podemos usar console.table

//* Accediendo a los miembros públicos
picture.id = 100
picture.orientation = PhotoOrientation.Panorama
picture.title = 'Imagen chida'
console.table({album})
console.table(album.pictures)
```

#### Clases - Miembros privados

TS define una manera propia de declarar o marcar un miembro como privado usando la palabra reservada `private`

```typescript
export {}

enum PhotoOrientation{
  Landscape,
  Portrait,
  Square,
  Panorama
}

class Picture {
  //* Propiedades
  private id: number
  private title: string
  private orientation: PhotoOrientation

  //*Atributos que se consideran necesarios para construir objetos
  //! No tiene sentido marcar un constructor como privado, no podríamos construir más objetos
  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.id = id
    this.title = title
    this.orientation = orientation
  }

  //*Comportamiento
  public toString() {
    return `
    [
      id: ${this.id},
      title: ${this.title},
      orientation: ${this.orientation}
    ]
    `
  }
}

class Album {
  private id: number
  private title: string
  private pictures: Picture[]

  public constructor(id: number, title: string) {
    this.id = id
    this.title = title
    this.pictures = [] //*Inicializamos el array vacío
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture)
  }

  public showPictures(){
    for (let index = 0; index < this.pictures.length; index++) {
      console.log(`Soy el índice ${index}`)
      console.table(this.pictures[index])
    }
  }
}

const album: Album = new Album(1, 'Personal Pictures')
const picture: Picture = new Picture(1, 'Selfie', PhotoOrientation.Square)
const picture2: Picture = new Picture(2, 'Selfie2', PhotoOrientation.Landscape)
const picture3: Picture = new Picture(3, 'Selfie3', PhotoOrientation.Portrait)
album.addPicture(picture)
album.addPicture(picture2)
album.addPicture(picture3)

console.log(album) //* Imprime el objeto
console.table({album}) //* Como manejamos un objeto, podemos usar console.table
album.showPictures()

//! No podemos acceder a los atributos privados desde afuera
//picture.id = 100
//picture.orientation = PhotoOrientation.Panorama
//picture.title = 'Imagen chida'
```

#### Miembros privados - ECMAScript

TypeScript también soporta (a partir de la versión 3.8) la nueva sintaxis JS para miembros privados: `#atributo`.

Esta característica puede ofrecer mejores garantías de aislamiento en miembros privados.

```typescript
export {}

//* TypeScript >= 3.8
/*Ahora suando '#' es similar a escribir 'private' pero esta sintaxís es más estricta y no nos muestra ninguna información */

enum PhotoOrientation{
  Landscape,
  Portrait,
  Square,
  Panorama
}

class Picture {
  //* Propiedades
  #id: number
  #title: string
  #orientation: PhotoOrientation

  //*Atributos que se consideran necesarios para construir objetos
  //! No tiene sentido marcar un constructor como privado, no podríamos construir más objetos
  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.#id = id
    this.#title = title
    this.#orientation = orientation
  }

  //*Comportamiento
  public toString() {
    return `
    [
      id: ${this.#id},
      title: ${this.#title},
      orientation: ${this.#orientation}
    ]
    `
  }
}

class Album {
  #id: number
  #title: string
  #pictures: Picture[]

  public constructor(id: number, title: string) {
    this.#id = id
    this.#title = title
    this.#pictures = [] //*Inicializamos el array vacío
  }

  public addPicture(picture: Picture) {
    this.#pictures.push(picture)
  }

  public showPictures(){
    for (let index = 0; index < this.#pictures.length; index++) {
      console.log(`Soy el índice ${index}`)
      console.table(this.#pictures[index])
    }
  }
}

const album: Album = new Album(1, 'Personal Pictures')
const picture: Picture = new Picture(1, 'Selfie', PhotoOrientation.Square)
const picture2: Picture = new Picture(2, 'Selfie2', PhotoOrientation.Landscape)
const picture3: Picture = new Picture(3, 'Selfie3', PhotoOrientation.Portrait)
album.addPicture(picture)
album.addPicture(picture2)
album.addPicture(picture3)

console.log(album) //* Imprime el objeto
console.table({album}) //* Como manejamos un objeto, podemos usar console.table
album.showPictures()

```

### Métodos get y set

TS soporta los métodos get y set como una forma de interceptar los accesos a los miembros privados de un objeto.

```typescript
export {}

enum PhotoOrientation{
  Landscape,
  Portrait,
  Square,
  Panorama
}

//* get y set

class Picture {
  //* Propiedades
  private _id: number
  private _title: string
  private _orientation: PhotoOrientation

  //*Atributos que se consideran necesarios para construir objetos
  //! No tiene sentido marcar un constructor como privado, no podríamos construir más objetos
  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this._id = id
    this._title = title
    this._orientation = orientation
  }

  get idPicture(){
    return this._id
  }
  set idPicture(id: number){
    this._id = id
  }
  get titlePicture(){
    return this._title
  }
  set titlePicture(title: string){
    this._title = title
  }
  get orientationPicture(){
    return this._orientation
  }
  set orientationPicture(orientation: PhotoOrientation){
    this._orientation = orientation
  }

  //*Comportamiento
  public toString() {
    return `
    [
      id: ${this._id},
      title: ${this._title},
      orientation: ${this._orientation}
    ]
    `
  }
}

class Album {
  private _id: number
  private _title: string
  private pictures: Picture[]

  public constructor(id: number, title: string) {
    this._id = id
    this._title = title
    this.pictures = [] //*Inicializamos el array vacío
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture)
  }

  get idAlbum(){
    return this._id
  }
  set idAlbum(id: number){
    this._id = id
  }
  get titleAlbum(){
    return this._title
  }
  set titleAlbum(title: string){
    this._title = title
  }

  public showPictures(){
    for (let index = 0; index < this.pictures.length; index++) {
      console.log(`Soy el índice ${index}`)
      console.table(this.pictures[index])
    }
  }
}

const album: Album = new Album(1, 'Personal Pictures')
const picture: Picture = new Picture(1, 'Selfie', PhotoOrientation.Square)
const picture2: Picture = new Picture(2, 'Selfie2', PhotoOrientation.Landscape)
const picture3: Picture = new Picture(3, 'Selfie3', PhotoOrientation.Portrait)
album.addPicture(picture)
album.addPicture(picture2)
album.addPicture(picture3)

console.log(album) //* Imprime el objeto
console.table({album}) //* Como manejamos un objeto, podemos usar console.table
album.showPictures()

//* Estamos usando los métodos get y set y, no los atributos directamente
picture.idPicture = 100
picture.titlePicture = 'Another title'
album.titleAlbum = 'Title for an album'
console.table({album})
```

### Herencia

#### Herencia de Clases y Miembros Protegidos

TS soporta este patrón común en el mundo de la POO. Implementa la habilidad de extender código de clases existentes a tráves de la herencia.

Modificadores de acceso en Java (puede ser similar en TypeScript):

||Class|Package|Subclass(same pkg)|Subclass(diff pkg)|World|
|:---:|:---:|:---:|:---:|:---:|:---:|
|public|+|+|+|+|+|
|protected|+|+|+|+||
|no modifier|+|+|+|||
|private|+|||||

#### Clases Abstractas

Las clases abstractas son la base de donde otras clases podrían derivarse. A diferencia de una interfaz, una clase abstracta puede implementar funciones para sus instancias.

La palabra reservada es `abstract`.

#### Propiedades estáticas y propiedades de solo lectura

Las clases por lo general definen atributos y métodos aplicables a las instancias de las mismas.

A través de la palabra reservada `static` se puede definir un miembro visible a nivel de clase.

Al igual que las interfaces, podemos usar la palabra reservada `readonly` para marcar el miembre de una clase como solo lectura.

```typescript
export {}

enum PhotoOrientation{
  Landscape,
  Portrait,
  Square,
  Panorama
}

//*Superclase
abstract class Item {
  protected readonly _id: number
  protected _title: string

  constructor(id: number, title: string){
    this._id = id
    this._title = title
  }

  get id(){
    return this._id
  }

  get title(){
    return this._title
  }
  set title(title: string){
    this._title = title
  }
}

class Picture extends Item {
  public static photoOrientation = PhotoOrientation
  //* Propiedades
  private _orientation: PhotoOrientation

  //*Atributos que se consideran necesarios para construir objetos
  //! No tiene sentido marcar un constructor como privado, no podríamos construir más objetos
  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    super(id, title)
    this._orientation = orientation
  }

  get orientationPicture(){
    return this._orientation
  }
  set orientationPicture(orientation: PhotoOrientation){
    this._orientation = orientation
  }

  //*Comportamiento
  public toString() {
    return `
    [
      id: ${this._id},
      title: ${this._title},
      orientation: ${this._orientation}
    ]
    `
  }
}

class Album extends Item {
  private pictures: Picture[]

  public constructor(id: number, title: string) {
    super(id, title)
    this.pictures = [] //*Inicializamos el array vacío
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture)
  }

  public showPictures(){
    for (let index = 0; index < this.pictures.length; index++) {
      console.log(`Soy el índice ${index}`)
      console.table(this.pictures[index])
    }
  }
}

const album: Album = new Album(1, 'Personal Pictures')
const picture: Picture = new Picture(1, 'Selfie', PhotoOrientation.Square)

//* Estamos usando los métodos get y set y, no los atributos directamente
//!picture.id = 100 ya no podemos hacer esto por ser readonly
picture.title = 'Another title'
album.title = 'Title for an album'
console.table({album})
console.table({picture})
/* console.log('Album: ', {album})
console.log('Picture: ', {picture}) */

//!const item = new Item(1, 'test title') //!No podemos hacer esto porque la clase es abstracta

//* Probar el miembro estático de Picture
console.log('PhotoOrientation' , Picture.photoOrientation.Landscape)
```

### Resumen

Los módulos en TS proveen un mecanimos para una mejor organización del código y promueven su reutilización.

A partir de ECMAScript 2015, los módulos son parte nativa del lenguaje de JS.

#### Importando y Exportando en Módulos

Generalmente se define un módulo con la idea de agruaar código relacionado.

Podemos tomar criterios en torno a la funcionalidad, features, utilitarios, modelos, etc.

Los miembros de módulo interactúan con el suo de las palabras reservadas `import` y `export`.

## Módulos

### Principios de responsabilidad única

Idealmente, un archivo debería tener un propósito o responsabilidad única: definir una clase, una interfaz, un enumerado,etc.

Esto mejora la legibilidad de código, facilita su lectura, testing y favorece su mantenimiento.

Esto viene de [SOLID](https://en.wikipedia.org/wiki/SOLID), un principio de la POO.

Tenemos ahora todos las clases separadas en archivos.

Podemos hacer que el compilador de TS compile todo una carpeta o proyecto, escribiendo `tsc --project nombreDelFolder`

### Resolviendo módulos

TS resuelve la ubicación de módulos observando referencias relativas absolutas.

Porteriormente intenta localizar el módulo usando una **estrategia de resolución de módulos**.

- `tsc --moduleResolution node` -> Más configurable
- `tsc --moduleResolution classic` -> Poco configurable

existen los path alias para que no tengamos que lidiar con esa mano de puntos y slash en nuestros proyectos.
Esta configuración la pueden poner en el ts.config.json dentro de compilerOptions y así pueden acceder al shortcut @item para llegar a esa carpeta en específico que están buscando.
Para el ejemplo yo tengo una carpeta item y dentro el archivo index.ts.

```typescript
"paths": {
  "@item": ["item/index.ts"],
}
```

y así se podría importar

```typescript
import { Item }  from  '@item'
```

### Webpack y agrupación de Módulos

Webpack es un empaquetador de archivos y plugins. Para usarlo es necesario iniciar con `npm init -y`

`npm i typescript webpack webpack-cli --save-dev`
