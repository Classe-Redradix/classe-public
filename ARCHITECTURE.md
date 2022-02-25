# Arquitectura de Classe

La prioridad a la hora de estructurar el código ha sido la de crear el mínimo
número de carpetas, intentando ubicar todos los archivos a los lugares más
más cercanos donde se utilizan dichos archivos.

## Carpetas

- [firebase](./firebase/): carpeta con todo lo relacionado con Firebase.

- [public](./public/): contiene recursos estáticos de la aplicación. Únicamente
  lo utilizamos para guardar las imágenes y el favicon.

- [src](./src/): aquí encontramos el grueso de la aplicación.

- [src/assets](./src/assets/): en esta carpeta encontramos todas las fuentes
  que se utilizan, los iconos (los cuales están siendo utilizados como
  componentes de React) y todas las hojas de estilos escritas en SASS (SCSS)
  que utilizan los componentes y las vistas.

- [src/config](./src/config/): aquí se ubican las traducciones de la aplicación.

- [src/data](./src/data/): en esta carpeta se incluyen todos los datos comunes
  que se utilizan a lo largo de toda la aplicación.

- [src/hooks](./src/hooks/): hooks personalizados de React. Se han desarrollado
  con la idea de optimizar el trabajo y poder reutilizar funcionalidades de
  manera más rápida.

- [src/libs](./src/libs/): carpeta para ubicar pequeñas librerías propias de la
  aplicación, como es el caso de `i18n`.

- [src/pages](./src/pages/): todas las páginas que componen la aplicación
  (inicio, cursos, contacto y vista individual de un curso). Se ha decidido
  ubicar esta carpeta dentro de `src` en lugar de dejarla en la raíz del
  proyecto porque de esta manera acotamos la distancia entre los distintos
  archivos que se van a utilizar, permitiéndonos tener una estructura mucho más
  limpia y hacer unos `imports` más cortos y legibles.

- [src/pages/api](./src/pages/api/): directorio para exponer los distintos
  endpoints a los que se puede llamar desde el lado del navegador. De esta
  manera, se encapsularán las peticiones realizadas a servicios externos
  (como es el caso de Firebase).

- [src/styleguide](./src/styleguide/): guía de estilos en donde se muestran
  todas las fuentes, iconos y colores implementados en la aplicación.

- [src/ui](./src/ui/): esta carpeta consta de dos divisiones (`components` y
  `views`) y un archivo `index.js` en el cual exponemos todos los componentes o
  vistas que se utilizan fuera de este directorio.

- [src/ui/components](./src/ui/components/): pequeños componentes reutilizables
  que se utilizan para componer las vistas.

- [src/ui/views](./src/ui/views/): conforman las distintas páginas que tiene la
  aplicación. Utiliza la carpeta `components` para componer una vista mayor
  (como puede ser la página de `Inicio`)

## Archivos importantes

- [firebase/client.js](./firebase/client.js): contiene la conexión a Firebase
  y exporta una función para guardar el formulario de contacto en la base de
  datos de Firestore.

- [src/IntlProvider.jsx](./src/IntlProvider.jsx): proveedor que se encarga de
  que la aplicación sea multi-idioma.

- [src/data/index.js](./src/data/index.js): exporta los datos comunes que se
  utilizan fuera de su carpeta.

- [src/hooks/index.js](./src/hooks/index.js): fichero el cual expone todos los
  hooks que se utilizan fuera de esta carpeta.

- [src/pages/404.jsx](./src/pages/404.jsx): vista que mostrará la aplicación
  cuando no se encuentre un recurso solicitado.

- [src/pages/index.js](./src/pages/index.js): en este archivo se monta la
  página principal.

- [src/pages/api/contact-request.js](./src/pages/api/contact-request.js): se
  encarga de guardar en firebase los datos del formulario de contacto que haya
  rellenado el usuario.

- [src/ui/sharedPropTypes.js](./src/ui/sharedProptypes.js): proptypes comunes
  que se utilizan tanto en la carpeta [src/ui/components](./src/ui/components/)
  como [src/ui/views](./src/ui/views/)

- [src/ui/views/index.js](./src/ui/views/index.js): expone las distintas vistas
  para que se utilicen fuera de esta aplicación.

## A tener en cuenta

- La aplicación tiene un comportamiento basado en la famosa aplicación Instagram
  o Twitter (por poner algún ejemplo), en las cuales cuando abres un post desde
  la página de inicio, se abre una ventana modal con dicho post y también se
  actualiza la url, siendo esta la url única del post. Esto permitirá que si el
  usuario comparte esa url o recarga la aplicación, se cargue una página
  dedicada al propio post en lugar de tener que cargar la aplicación principal
  en segundo plano y abrir la modal con el recurso solicitado. Esto ayuda
  bastante al SEO.

- Los cursos no se están guardando en [Strapi](https://strapi.io/), en
  [Firebase](https://firebase.google.com/) o en cualquier otra base de datos.
  Se ha decidido almacenarlos directamente en el archivo
  [src/data/courses.js](./src/data/courses.js) para ahorrar servicios externos
  y hacer la carga de la aplicación más eficiente.

## TODOs:

- [src/assets/stylesheets/globals/texts.scss](./src/assets/stylesheets/globals/texts.scss):
  por algún motivo, cuando lanzamos Storybook las fuentes `./../fonts/` y
  cuando se lanza el servidor de desarrollo, las coge de `./../../fonts/`. Hay
  que averiguar por qué ocurre este comportamiento para solucionarlo.

- [src/pages/index.js](./src/pages/index.js): se puede saber cuándo se ha
  guardado el formulario de contacto de la Home (función `onContactFormSuccess`).
  Si es necesario mostrar algún mensaje o cualquier actualización de la
  aplicación cuando se guarda el contacto, se debe hacer en esta función. Se
  ha separado el success del formulario de contacto de la home del de la página
  de contacto porque es muy posible que se tengan que realizar acciones
  diferentes cuando se guarden. En caso de que se realicen las mismas acciones
  tanto con un formulario como con otro, lo mejor sería pasar esta función por
  props o añadirla al hook [src/hooks/useContactForm.js](./src/hooks/useContactForm.js).

- [src/ui/components/sections/course/CourseIntro.jsx](./src/ui/components/sections/course/CourseIntro.jsx):
  hay que añadir el atributo `href` al botón de _inscribirme_ que aparece en la
  vista individual de un curso. Hay que incluirlo porque ayudará a mejorar el
  SEO de la página.
