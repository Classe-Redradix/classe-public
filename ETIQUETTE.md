# Etiquette

## Archivos y carpetas

- [Pages](./src/pages): las páginas están escritas con la nomenclatura de
  [kebab case](https://www.neoguias.com/tipos-notacion-nombres/#Kebab_Case_contar-elementos)
  (siempre en minúsculas). Por ejemplo: `contact.js`, `some-other-page.js`.
  Las páginas que sean dinámicas (como la [página individual de curso](./src/pages/courses/[courseId].jsx))
  estarán escritos con [camelCase](https://www.neoguias.com/tipos-notacion-nombres/#Camel_Case_contarElementos)
  y tendrá que ser el nombre del parámetro por el cual se quiere obtener el
  recurso también en camelCase. Por ejemplo, para la página en la que se
  visualiza un curso por su id, su ruta sería `src/pages/courses/[id].js`; si
  fuese por su nombre, sería `src/pages/courses/[name].js`; si fuese por fecha
  de creación, sería `src/pages/courses/[creationDate].js`.

  > Actualmente, el archivo para obtener el curso por su id sigue llamándose
  > `[courseId].jsx`, hay que refactorizarlo a la nueva nomenclatura.

- [Api](./src/pages/api): estos recursos también tendrán que ser escritos con
  nomenclatura de _kebab-case_.

- [Hooks](./src/hooks): todos los hooks deberán empezar por `use` + el nombre
  del hook, con nomenclatura _camelCase_.

- [Data](./src/data) y [Config](./src/config): los archivos de ambos directorios
  también estarán escritos con _kebab-case_.
