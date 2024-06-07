# PROYECTO DE ESPECIALIDAD (AGENDA)

Para empezar, soy Christopher González Ramos y decidi implementar un sistema para organizar y administrar las actividades y tareas de los usuarios mediante una agenda por medio de notas, este README.md abarcará como instale librerías y dependencias para que mi proyecto pudiera funcionar correctamente, una descripción breve de mi proyecto en cuanto a la estructura que tiene y su utilización y por útlimo, habrá una descripción de las pruebas o tests que se llevaron a cabo y como se ejecutan.

Falto mencionar los prototipos de mi proyecto en cuanto a las vistas y como utilizarlas, para ello realizare un manual de usuario pero no estará aqui en este archivo, sino en un PDF para que se pueda visualizar con más claridad y no abarcar mucho espacio.

## INSTRUCCIONES DE INSTALACIÓN Y EJECUCIÓN

Empezaremos con la instalación de nuestras librerías, antes de eso implemente dos carpetas en mi proyecto, una esta dedicada a mi servidor local (backend) y el otro es el sistema y sus vistas (frontend) para que no me pierda y sea más organizado mi área de trabajo. Para cada carpeta se tiene instalados ciertas librerías específicas, así que empezaremos con la carpeta de node que contiene mi backend:

Dato: para cada instalación se empleará el comento `npm i` o `npm install` para instalar las librerías y dependencias.

### Instalación de Librerías en la Carpeta Node

Vamos a instalar las siguientes librerías:

1.- npm init -y: Este comando inicializa un proyecto Node.js con valores predeterminados, creando un archivo package.json. La bandera -y indica que se acepten todas las opciones por defecto.

2.- npm i express: Express es un framework web de Node.js que simplifica el desarrollo de aplicaciones web y APIs. Facilita la creación de rutas, manejo de solicitudes y respuestas.

3.- npm i cors: CORS (Cross-Origin Resource Sharing) es un mecanismo de seguridad que permite a los servidores indicar a los navegadores si se debe permitir que una solicitud web acceda a recursos de otro origen fuera del dominio desde el que se sirve la página actual.

4.- npm i mysql2: mysql2 es un controlador MySQL para Node.js que ofrece un mejor rendimiento en comparación con el módulo mysql original. Facilita la conexión y la interacción con bases de datos MySQL desde una aplicación Node.js.

5.- npm i sequelize: Sequelize es un ORM (Object-Relational Mapping) para Node.js que soporta los dialectos de SQL más comunes, incluyendo MySQL, PostgreSQL, SQLite, y MSSQL. Simplifica la interacción con la base de datos mediante el uso de modelos y consultas en lugar de sentencias SQL directas.

6.- npm install -g nodemon: Nodemon es una herramienta que ayuda en el desarrollo de aplicaciones Node.js reiniciando automáticamente la aplicación cuando se detectan cambios en los archivos del proyecto. La bandera -g indica que se instale de forma global para que pueda ser utilizado en todo el sistema.

### Ejecución del Servidor

Una vez instaladas las librerías, nos dirigimos a la carpeta de node utilizando el comando:
`cd node`
y ejecutamos este apartado emplearemos el siguiente comando: 
`nodemon app`

Este último comando inicia el servidor y lo monitorea en busca de cambios. Si se detecta algún cambio en los archivos del proyecto, nodemon reinicia automáticamente el servidor para aplicar los cambios. Una vez iniciado el servidor con el comando, se debería de mostrar lo siguiente:

PS C:\Users\elgra\Proyectos\Agenda v.3\node> nodemon app
[nodemon] 3.1.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node app.js`
Executing (default): SELECT 1+1 AS result
Conexión exitosa a la base de datos
Server UP running in http://localhost:8000/ -> El servidor dependerá del usuario como lo desee tener.

Quiero añadir la instalación del XAMPP, software de escritorio para el manejo de la base de datos que se empleo para este proyecto y que debe de inicializarse junto con el nodemon app para que se pueda realizar las acciones debidamente.

Link para la descarga del Programa:
https://www.apachefriends.org/es/index.html

Para la instalación de este programa, se podrá observar mejor en el PDF adjunto a este proyecto.

### Instalación de Librerías en la Carpeta Agenda

Ahora para esta carpeta vamos a instalar las siguientes librerías:

1.- npx create-react-app agenda: Este comando crea una nueva aplicación React llamada "agenda", proporcionando una estructura de carpetas y archivos inicial para comenzar a desarrollar una aplicación web. Al momento de ejecutar este comando en la terminal y si lo hicimos correctamente, nos trendría que salir lo siguiente:

`Creating a new React app in /ruta/a/tu/proyecto/agenda.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...

+ cra-template@1.1.2
+ react@17.0.2
+ react-dom@17.0.2
+ react-scripts@5.0.0
added 2079 packages from 1027 contributors and audited 2083 packages in 137.839s

136 packages are looking for funding
  run `npm fund` for details

found 2 vulnerabilities (1 moderate, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details

Initialized a git repository.

Success! Created agenda at /ruta/a/tu/proyecto/agenda
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd agenda
  npm start

Happy hacking!`

Una vez instalada la aplicación de React en la carpeta, seguimos con las siguientes librerías:

2.- npm install axios: Axios es una librería que simplifica el envío de solicitudes HTTP desde el navegador o desde Node.js. Es especialmente útil para realizar peticiones a APIs y obtener o enviar datos.

3.- npm install react-router-dom: React Router Dom es una librería que permite la navegación entre diferentes componentes React en una aplicación de una sola página (SPA). Facilita la creación de rutas y la gestión de la navegación del usuario.

4.- npm i bootstrap: Bootstrap es un framework de diseño front-end que proporciona estilos predefinidos y componentes CSS para facilitar el desarrollo de interfaces de usuario responsivas y atractivas.

### Ejecución de la Aplicación
Una vez instaladas las librerías, para iniciar la aplicación React, se siguen estos pasos:

* Navega hasta la carpeta "agenda" en tu terminal.
* Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

`npm start`

Este comando inicia un servidor de desarrollo local y abre la aplicación en tu navegador web predeterminado. La aplicación se recargará automáticamente si realizas cambios en los archivos del proyecto. Si funciona correctamente, debe de aparecer lo siguiente en la consola:

`
> agenda@0.1.0 start 
> react-scripts start

Starting the development server...

Compiled with warnings.

Compiled with warnings.

Compiled with warnings.

[eslint]
src\notas\CreateNota.js
  Line 3:20:  'useEffect' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

WARNING in [eslint]
src\notas\CreateNota.js
Compiled successfully!

You can now view agenda in the browser.

  Local:            http://localhost:3000        
  On Your Network:  http://192.168.0.15:3000     

Note that the development build is not optimized.
To create a production build, use npm run build. 

webpack compiled successfully`

## DESCRIPCIÓN DEL PROYECTO (ESTRUCTURA Y USO)

La estructura de mi proyecto esta conformada por dos carpeta:

La primera llamada agenda es la aplicación con sus vistas y archivos test para realizarle pruebas y comprobar que todo esta en órden (frontend). Se encuentran carpetas (login, notas y register) en donde cada una contiene vistas en relación a las funciones y apartados de mi aplicación, además de contar con mis test.js de cada carpeta mencionada anteriormente para observar si pasa la prueba o se le debe de hacer alguna modificación sin alterar el funcionamiento de la misma aplicación.


La segunda carpeta llamada node se encuentra el servidor local, la conexión con mi base de datos MYSQL, los controladores, modelos y rutas para que funciona correctamente mi aplicación (backend). Al igual que con la agenda, están separadas por carpetas en relación a cada apartado que mencione anteriormente y para este si costo un poco más, ya que por las importaciones que debo de hacer a veces me daban errores pero ya pude solucionarlos y funciona correctamente.

Para utilizar el proyecto, recomiendo tener dos pestañas en la terminal, ya que se debe de ejecutar tanto el servidor como la aplicación en simultáneo para que pueda funcionar correctamente y como se pudo observar en el apartado de instalación y ejecución de ambas carpetas en la terminal y debería de mostrarse en pantalla las vistas de la aplicación funcionando. En caso de tener algún error en la terminal, en la vista también se mostrará dicho error para que se verifique y corrija, una vez hecho eso, se recarga la aplicación automáticamente y se puee seguir utilizando sin problema.

## PROTOTIPO DE LAS VISTAS Y CÓMO UTILIZARLAS (TIPO MANUAL)

Este punto se explica mejor en el PDF que viene incluido en esta carpeta de proyecto, ya que abarca muchos detalles que en este archivo es complicado de comentar.

## DESCRIPCIÓN DE LAS PRUEBAS Y COMO EJECUTARLAS

También en este punto se explicara con más detalle la descripción de cada prueba en el segundo video (el que dura 17:54 mins) que subí en el drive, pero en cuanto a la ejecución, tendremos que hacer lo siguiente:

1.- Nos dirigimos a la carpeta de agenda utilizando el comando `cd agenda` y damos enter.

2.- Cuando estemos dentro de la misma, ejecutamos el comando `npm test` y de nuevo damos enter.

3.- Una vez ejecutado el programa, saldrán los archivos test.js que tenemos en la carpeta, se van a analizar una por una y cuando termine el test, nos va a desplegar aquellos test.js que pasaron el análisis "PASS" y aquellos que tengan errores e indiquen el porque aparecerán con un "FAIL".

Cabe mencionar, que el único que no paso las pruebas es el App.test.js por la estrucutra que se maneja pero no es para preocuparse mucho, mientras los otros test.js estén funcionando correctamente, esos son los que debemos de preocuparnos un poco más en que funcionen debidamente.