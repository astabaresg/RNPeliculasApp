# RNPeliculasApp

## Aplicación que sirve para ver las peliculas en cartelera, peliculas más populares, mejor calificadas y "por venir"
La idea sería practicar los conceptos principales de navegación en react native con una aplicación realista

```TypeScript
 git clone https://github.com/astabaresg/RNPeliculasApp.git

 cd RNPeliculasApp-master

 yarn install o npm install

# Para ios
cd ios && pod install

react-native run-ios

# Para android
react-native run-android
```
## Primeros pasos ✍🏼
- [x] Ir a la página de [The Movie DB] (https://www.themoviedb.org/)
- [x] Registrarse
- [x] Ir a los ajustes de cuenta, y desde ahí dar click en [Api] (https://www.themoviedb.org/settings/api) y seguir todos los pasos para obtener la api para poder conectarse
- [x] Una vez se hagan todos los pasos copiar la api generada en el campo "Clave de la API (v3 auth)"
- [x] En el proyecto ir al archivo movieDB.tsx ubicado en "{nombre_proyecto}src/api/movieDB" y modificar la linea "api_key" con la generada en el paso anterior
