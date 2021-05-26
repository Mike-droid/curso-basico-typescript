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
