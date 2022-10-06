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

<h1>Como Clonar</h1>
Comando para clonar:
<br><br>

`cd existing_folder `

`git clone https://github.com/UmeBelle/pokedex.git `

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

Agregar .env a .gitignore

<h1>Rutas</h1>
Nuestras rutas y sus funciones:
<br><br>
<ul>
    <li>
    <li>
    <li>
    <li>
    <li>
</ul>


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


