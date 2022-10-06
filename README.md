# Pokedex
Tercer proyecto bootcamp 2022

Este es el repositorio de la POKEDEX. Se encuentra el backend y el frontend.

<h1>Contenido</h1>
El proyecto esta realizado en:
<br><br>
<ul>
    <li>Node js
    <li>express js
    <li>React js
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

`node_modules` contiene las dependencias y no es aconsejable añadirlo al repositorio. Su contenido será re-creado a partir del archivo `package-lock.json` una vez se despliegue en producción.

`.env` es el archivo que guarda las variables de entorno. Dicho contenido nunca debe añadirse al repositorio, puesto que puede contener información sensible, tal como URLs, usuarios, contraseñas, ...
</ol>
<h1>Conexión a la base de datos</h1>
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

(GET)    /api/clientes         (Lista    todos los clientes)
(POST)   /api/clientes         (Crea     cliente)
(GET)    /api/clientes/:id     (Lista    cliente :id)
(PUT)    /api/clientes/:id     (Modifica cliente :id)
(DELETE) /api/clientes/:id     (Elimina  cliente :id)

(GET)    /api/articulos        (Lista    todos los artículos)
(POST)   /api/articulos        (Crea     artículo)
(GET)    /api/articulos/:id    (Lista    artículo :id)
(PUT)    /api/articulos/:id    (Modifica artículo :id)
(DELETE) /api/articulos/:id    (Elimina  artículo :id)


<h1>Instalación</h1>
Ya clonado el proyecto es necesario instalar todas las dependencias con el comando:
<br><br>

`npm install `

<h3>Run en LocalHost:</h3>
Cambiar las llaves a modo pruebas en el archivo config.js<br><br>
Cuando las llaves esten en modo pruebas ejecutar el comando:

`npm test`

Este a su vez ejecutara nodemon app.js, el cual ayudará a la funcionalidad de pruebas y dev.

<h3>Run en Producción:</h3>
Cambiar las llaves a modo producción en el archivo config.js
Cuando las llaves esten en modo producción ejecutar el comando:

`npm start`

Este a su vez ejecutará el comando node app.js el cual estará preparado para la ejecución del servidor en producción

<h1>Levantar backend en LocalHost</h1>
Ejecutar el comando
<br><br>

`npm run dev`

<h1>Levanatr frontend en LocalHost</h1>
Ejecutar el comando 
<br><br>

`npm start `


