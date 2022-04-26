# Etiquette

## Imports

No es una norma escrita en piedra, todo puede hablarse para ponernos de acuerdo
entre todos, pero por intentar tener un estándar mínimo, los `imports`:

- Son importados de mayor a menor distancia con respecto al archivo actual.
  Primero se importan recursos como React, Next, Proptypes, Lodash, etc.
  Después, todos los recursos que están en la carpeta `public`. Finalmente,
  los archivos propios de nuestro proyecto.
- Son utilizados ordenados alfabéticamente.
- Entre un nivel y otro de carpetas, debería haber un espacio de separación
  para saber rápidamente si pertenecen al mismo nivel.
- Empiezan por `./` cuando se importen archivos que están al mismo nivel o por
  debajo del que nos encontramos. Por ejemplo: `import Button from './Button'`,
  `import MenuItem from './Menu/Item'`.
- Empiezan por `../` cuando se importen archivos que están por encima del
  archivo que estamos editando. Por ejemplo: `import Button from '../Button'`,
  `import Collapsable from '../../Collapsable'`.

Ejemplo de cómo deberían utilizarse siguiendo estas reglas:

```javascript
// Primero se importan todas las dependencias que "no están en nuestro
// proyecto" (react, next, prop-types, lodash, etc.)
import { useRouter } from 'next/router'
import { useState } from 'react'

// Después importamos los recursos públicos
import Abertis from '/public/images/logos/abertis.svg'
import Alantra from '/public/images/logos/alantra.svg'
import Anaya from '/public/images/logos/anaya.svg'
import Esa from '/public/images/logos/esa.svg'
import Gmv from '/public/images/logos/gmv.svg'
import HugoBoss from '/public/images/logos/hugo-boss.svg'
import Idealista from '/public/images/logos/idealista.svg'
import Iqvia from '/public/images/logos/iqvia.svg'
import Indra from '/public/images/logos/indra.svg'
import LifullConnect from '/public/images/logos/lifull-connect.svg'
import Masmovil from '/public/images/logos/masmovil.svg'
import Movistar from '/public/images/logos/movistar.svg'
import Santander from '/public/images/logos/santander.svg'
import Solera from '/public/images/logos/solera.svg'
import Vivanta from '/public/images/logos/vivanta.svg'

// Empezamos a importar los archivos propios de nuestro proyecto

// Todos los archivos que se encuentran dos niveles por encima del archivo
// que estamos utilizando (fijarse en que las rutas no empizan por `./../`,
// sino que utilizan directamente `../`).
import { COURSES } from '../../data'
import InfoHead from '../../InfoHead'
import {
  useViewportHeight,
  useDetectMobile,
  useBackgroundChange,
  useScrambleText,
  useContactForm,
  useTranslations,
  useSchema,
  useBreadcrumbListSchema,
} from '../../hooks'
import { withKonami } from '../../hocs'
import { Home as HomeUI } from '../../ui/views'

// Todos los archivos que se encuentran un nivel por encima del archivo que
// estamos utilizando
import { CoursePropType } from '../sharedProptypes'

// Todos los archivos que se encuentran al mismo nivel que el archivo que
// estamos utilizando (fijarse en que las rutas empiezan por `./`).
import Button from './Button'
import Course from './Course'
import Menu from './Menu'
```

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
