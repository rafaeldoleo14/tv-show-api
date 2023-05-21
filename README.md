# Tv Show API

SPA using TV Shows API

----------

## Buenas practicas

1. Estructura del proyecto: un componente por archivo.
   
2. Redux: centralizacion de la informacion de la aplicacion.
   
3. Hooks personalizados: encapsulamiento de logica reutilizable.
   
4. Renderizado condicional: renderizado de componentes condicionalmente.

5. Nombres variables: nombres descriptivos y facil de interpretar.
   
6. Principio DRY (Don't Repeat Yourself): Utilizacion de funciones para evitar la repeticion de codigo.


----------

## Componentes

- AppRouter --> Manejo de las rutas
  
- MainPage --> Vista pagina principal
- SingleTvShowPage --> Vista Tv Show por el id
- TvShows --> Contenedor de los resultados de la API
- TvShowsCard --> Listado de cada uno de los tv shows
- HeaderLayout --> Cascaron del header
- Header --> Contendor data dinamica de la vista principal
- NavBar --> Menu de navegacion
- SearchField --> Input encargado de la busqueda
- SearchFieldCard --> Listado de los resultados de la busqueda
- SingleTvShowInfo --> Informacion tv show mediante el id
- Episodes --> Contenedor de los episodios
- EpisodesCard --> Listado de cada uno de los episodios
- Pagination --> Paginado de la pagina
- Loader --> Loader para mejorar la experiencia de usuario

----------

## Vistas

#### Escritorio: Vista ruta principal
<img style="width: 450px;" src='./src/assets/capturas/Imagen1.png'>

<img style="width: 450px;" src='./src/assets/capturas/Imagen2.png'>

<img style="width: 450px;" src='./src/assets/capturas/Imagen3.png'>

#### Escritorio: Vista Tv show por el id

<img style="width: 450px;" src='./src/assets/capturas/Imagen4.png'>

<img style="width: 450px;" src='./src/assets/capturas/Imagen5.png'>

#### Movil: Vista ruta principal

<img style="width: 150px;" src='./src/assets/capturas/Imagen6.png'>

<img style="width: 150px;" src='./src/assets/capturas/Imagen7.png'>

<img style="width: 150px;" src='./src/assets/capturas/Imagen8.png'>

#### Movil: Vista Tv show por el id

<img style="width: 150px;" src='./src/assets/capturas/Imagen9.png'>

<img style="width: 150px;" src='./src/assets/capturas/Imagen10.png'>