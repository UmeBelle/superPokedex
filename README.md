# Pokedex
Proyecto bootcamp 2022<br><br>
Creación de una Pokedéx en la cuál nos permite visualizar las fichas de diversas especies de Pokemones y agregar nuevos.<br><br>

Este es el repositorio de la Pokedex. Se encuentra el Backend y el Frontend.
<h1>Principales funcionalidades del proyecto</h1>
<ul>
    <li>Mostrar listado de pokemones obteniendolos de la basa de datos
    <li>Buscar pokemones en el listado
    <li>Mostrar card con características individuales de cada pokemon
    <li>Permitir al usuario agregar un nuevo pokemon con todas sus características
    <li>Login del usuario y verificación
</ul>

<h1>BACKEND</h1>
Tecnologías utilizadas:
<br><br>
<ul>
    <li>Node js
    <li>express js
</ul>

<h1>Programas necesarios</h1>
Para poder utilizar el proyecto en localhost en necesario clonarlo y tener algunos programas necesarios:
<br><br>
<ul>
    <li>Nodejs v12.18.0 o Superior.
    <li>IDE de desarrollo de tu comodidad Ej. VS Code
    <li>PostgreSQL (pgAdmin o DBeaver)
    <li>Insomnia (o Postman) para pruebas de APIS (Opcional)
    <li>Git para poder gestionar las versiones.
</ul>

<h1>Clonar repositorio de GitHub</h1>
<ol>
<li>Comando para clonar:</li>

`cd existing_folder `

`git clone https://github.com/UmeBelle/pokedex.git `


<li>Edita el archivo .gitignore con el siguiente contenido:</li>

`node_modules/`<br><br>
`.env`

De esta forma indicamos que la carpeta `node_modules` y el archivo `.env` no serán incluidos en el repositorio, sólo permanecerán en el directorio de trabajo.

`node_modules` contiene las dependencias y no es aconsejable añadirlo al repositorio. Su contenido será re-creado a partir del archivo `package-lock.json`.

`.env` es el archivo que guarda las variables de entorno. Nunca debe añadirse al repositorio, puede contener información sensible.
</ol>
<h1>Archivo de configuración .env</h1>
Crear archivo .env y definir variables de entorno:
<br><br>
<ul>
    <li>DATABASE_USER=""
    <li>DATABASE_HOST=""
    <li>DATABASE_PASSWORD=""
    <li>DATABASE_NAME=""
    <li>DATABASE_PORT=""
</ul>

<h1>Rutas</h1>
Nuestras rutas y sus funciones:
<br><br>
Este backend proporpociona una API Rest con los siguientes end-points:
<ul>
    <li>(post)    /auth/registro         (Registro usuarios)
    <li>(post)   /auth/login            (Login usuarios)
    <li>(get)   /pokemon/pokedex         (Listado de pokemones)
    <li> router.get("/pokedex", verifyToken, obtenerPokemones);
    <li> router.post("/newentry", verifyToken, addPokemon);
</ul>

<h1>Instalación</h1>
Ya clonado el proyecto es necesario instalar todas las dependencias con el comando:
<br><br>

`npm install `

<h1>Test</h1>
Cambiar las llaves a modo pruebas en el archivo config.js<br><br>
Cuando las llaves esten en modo pruebas ejecutar el comando:

`npm test`

Este a su vez ejecutara nodemon app.js, el cual ayudará a la funcionalidad de pruebas y dev.

<h1>Levantar backend</h1>
Ejecutar el comando:
<br><br>

`cd pokedex`

`cd backend`

`npm run dev`

<br><br>
<h1>FRONTEND</h1>
Tecnologías utilizadas:
<br><br>
<ul>
    <li>HTML
    <li>CSS
    <li>Bootstrap
    <li>JavaScript                      
    <li>React
</ul>

<h1>Programas necesarios</h1>
<ul>
    <li>Next js
</ul>

<h1>Instalación</h1>
Ya clonado el proyecto es necesario instalar todas las dependencias con el comando:
<br><br>

`npm install `

<h1>Levantar frontend</h1>
Ejecutar el comando en una nueva terminal:
<br><br>

`cd pokedex`

`cd frontend`

`npm start `


