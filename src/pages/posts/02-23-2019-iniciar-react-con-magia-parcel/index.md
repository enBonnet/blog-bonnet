---
path: '/iniciar-react-con-magia-parcel'
title: 'Iniciar React con magia de Parcel'
description: 'La forma más senscilla de levantar una app de React'
date: 2019-02-23
published: true
---

Iniciar un nuevo proyecto, no es algo que hagamos todos los días, pero siempre tiene una emoción especial. Siempre hay algo nuevo que queremos probar en cada `init`. Una de las barreras para comenzar a trabajar con React puede ser la configuración que requiere `webpack`, para eso se creó el famoso módulo que nos facilita la vida `create-react-app` que en su versión 2 vino con muchas mejoras muy interesantes, gracias a la magia de los `react-scripts` podemos tener `webpack`, `babel` y todo lo que necesita React funcionando en un par de minutos.

Pero en este universo de los bundler o empaquetadores, tenemos un aliado conocido como Parcel que nos facilita muchas configuraciones de una forma muy ligera y casi mágica, para comenzar un proyecto de React con Parecel, solo necesitas unos pocos pasos, como veremos ahora:

## Base

Abre una terminal y ejecuta los siguientes comandos

```bash
mkdir react-parcel-app-demo
cd react-parcel-app-demo
npm init -y
npm i react react-dom
npm i -D parcel-bundler babel-preset-react babel-preset-env
mkdir src
touch src/index.html
touch src/index.js
```

## Hello React

Ahora con un poco de código puedes crear el "Hola Mundo" en React

- En el archivo `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>React Parcel Demo</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./index.js"></script>
  </body>
</html>
```

- En el archivo `index.js`

```javascript
import React from 'react'
import { render } from 'react-dom'
const App = () => {
  return (
    <div>
      <h1>Hello React from Parcel</h1>
    </div>
  )
}
render(<App />, document.getElementById('app'))
```

Con estos dos archivos listos solo necesitas ejecutar una línea más para ver la aplicación corriendo: `parcel -p 3001 ./src/index.html`.
También puedes agregar a tu archivo `package.json` en la sección de `scripts` las siguientes líneas:

```javascript
  "start": "parcel -p 3001 ./src/index.html",
  "build": "parcel build ./src/index.html/"
```

De esta forma puedes ejecutar tu aplicación con `npm start` y visualizarla en el navegador ingresando a la url `http://localhost:3001`.

> Ualà, tu aplicación debería estar diciendo `Hello React from Parcel`

## Ahora SASS

Uno de los mayores inconvenientes de `create-react-app` llega a la hora de querer implementar transpiladores de estilos como Sass, pero Parcel lo hace por ti. De la siguiente manera:

```bash
mkdir src/sass
touch src/sass/main.scss
```

- En el archivo `sass/main.scss`

```javascript
*,
*::after
,*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
html {
    font-size: 62.5%;
}
body {
    background-color: #ecf0f1;
    color: #d35400;
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.7rem;
    padding: 3rem;
}
h1 {
    text-align: center;
    margin-top: 5rem;
    font-size: 6rem;
}
```

Ahora importamos el archivo `main.scss`, en `index.js` agrendo lo siquiente:

```javascript
import “./sass/main.scss”
```

Parcel sabrá que necesitamos el módulo que interpreta los archivos de estilo SASS y lo usará en la marcha para leer nuestro código sin necesidad de hacer ninguna configuración adicional.

Debes detener el servidor de desarrollo y volver a iniciarlo para que cargue el módulo que necesita.

Y por arte de Parcel tendrémos los estilos cargados en nuestra aplicación.

Puedes encontrar el código resultante de este post en [github aquí](https://github.com/enBonnet/react-parcel-app-demo).
