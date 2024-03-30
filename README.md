<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>



## Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar 
```
npm  install
```
3. Tener instalado Nest CLI
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos 
```
docker-compose up -d
```

5. Clonar el archivo ```.env.template``` y renombrar la copia a ```.env```

6. Colocar las variables de entorno definidas en el  ```.env```

7. Correr el proyecto en desarrollo 
```
npm run start:dev
```
8. Reconstruir la base de datos con la semilla 
```
http://localhost:3000/api/v2/seed
```

## Stack usado 
* NestJS  
* TypeScript 
* Docker 
* MongoDB


