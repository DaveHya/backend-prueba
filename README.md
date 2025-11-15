#   PRIMERO VA EL BACKEND + BASE DE DATOS 

1. Hay que crear la base de datos, en mi caso utilice Mysql.

2. Ingresar Script:

CREATE TABLE products (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
price DECIMAL(10, 2) NOT NULL
);

3. Cuando ya este creado la base de datos, (Recomendación: Agregar algunos datos a la tabla) hay que ir al codigo del backend para hacer la conexión entre la base de datos y el backend.

4. Al entrar codigo del backend hay que hacer un NPM INSTALL, para actualizar las dependencias. Luego ir al archivo db.ts, ahi esta la configuración de la conexión en la cual habria que cambiar: Host de la bd, user de la bd, password de la bd, el nombre de la bd y el puerto de la bd.
   
5. Ir al archivo index.ts, cambiar el puerto al que este usando en el backend, en mi caso la url del backend es http://localhost:4000/products.
   
6. Ir al erchivo env. y cambiar los mismo datos que se cambiaron en el index.ts
   
7. Paso final para probar hay que hacer el NPM RUN DEV y ver el mensaje ¨Servidor corriendo en puerto...¨ en el terminal, significa que es exitosa la conexión, en el navegador se deberia mostrar los datos de la base de datos en un array de json tipo: {"id":1,"name":"Omeprazol", ...}.


