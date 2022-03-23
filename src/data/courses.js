import imageCourseJS from '/public/images/curso-javascript.jpg'
import imageCourseReact from '/public/images/curso-front.jpg'
import imageCourseUIDeveloper from '/public/images/curso-maqueta.jpg'

const JS_PRO = {
  id: 'js-pro',
  isFeatured: false,
  isPublic: false,
  href: '/courses/js-pro',
  information: {
    title: 'JS PRO',
    start: '21.08.22',
    finish: '25.08.22',
    description: "This is the best JavaScript course you'll ever find",
    image: {
      source: imageCourseJS,
      alt: 'Un chico de perfil trabajando con su portátil',
    },
    price: 900,
    hours: 20,
    places: 30,
    enrolledStudents: 13,
    successPercentage: 95,
  },
  index: [
    {
      number: '01',
      name: 'Fundamentos',
      description:
        'Introducción y recursos. String templates. Desestructuración. Declaración de variables. (2H)',
    },
    {
      number: '02',
      name: 'Programación funcional',
      description:
        'Higher order functions. Operaciones sobre listas. Composición de funciones. (2H)',
    },
    {
      number: '03',
      name: 'Programación orientada a objetos',
      description:
        'Métodos y receptor. Constructores. Clases. Principios de diseño S.O.L.I.D. (3H)',
    },
    {
      number: '04',
      name: 'Programación funcional II',
      description:
        'Higher order functions. Operaciones sobre listas. Composición de funciones.(4H)',
    },
  ],
  objetives: [
    'Objetive 1',
    'Objetive 2',
    'Objetive 3',
    'Objetive 4',
    'Objetive N',
  ],
}

const UI_DEV = {
  id: 'react',
  isFeatured: false,
  isPublic: true,
  href: '/courses/maqueta',
  information: {
    title: 'Maqueta',
    start: '21.08.22',
    finish: '25.08.22',
    description: "This is the best React course you'll ever find",
    image: {
      source: imageCourseUIDeveloper,
      alt: 'Un chico de perfil trabajando con su portátil',
    },
    price: 1400,
    hours: 25,
    places: 30,
    enrolledStudents: 28,
    successPercentage: 98,
  },
  index: [
    {
      number: '01',
      name: 'Fundamentos',
      description:
        'Introducción y recursos. String templates. Desestructuración. Declaración de variables. (2H)',
    },
    {
      number: '02',
      name: 'Programación funcional',
      description:
        'Higher order functions. Operaciones sobre listas. Composición de funciones. (2H)',
    },
    {
      number: '03',
      name: 'Programación orientada a objetos',
      description:
        'Métodos y receptor. Constructores. Clases. Principios de diseño S.O.L.I.D. (3H)',
    },
    {
      number: '04',
      name: 'Programación funcional II',
      description:
        'Higher order functions. Operaciones sobre listas. Composición de funciones.(4H)',
    },
  ],
  objetives: [
    'Objetive 1',
    'Objetive 2',
    'Objetive 3',
    'Objetive 4',
    'Objetive N',
  ],
}

const FRONT_END = {
  id: 'data',
  isFeatured: false,
  isPublic: true,
  href: '/courses/front-end',
  information: {
    title: 'Front-end',
    start: '21.08.22',
    finish: '25.08.22',
    description: "This is the best Data course you'll ever find",
    image: {
      source: imageCourseReact,
      alt: 'Un chico con un gorro trabajando en su portátil',
    },
    price: 1200,
    hours: 30,
    places: 20,
    enrolledStudents: 9,
    successPercentage: 94,
  },
  index: [
    {
      number: '01',
      name: 'Fundamentos',
      description:
        'Introducción y recursos. String templates. Desestructuración. Declaración de variables. (2H)',
    },
    {
      number: '02',
      name: 'Programación funcional',
      description:
        'Higher order functions. Operaciones sobre listas. Composición de funciones. (2H)',
    },
    {
      number: '03',
      name: 'Programación orientada a objetos',
      description:
        'Métodos y receptor. Constructores. Clases. Principios de diseño S.O.L.I.D. (3H)',
    },
    {
      number: '04',
      name: 'Programación funcional II',
      description:
        'Higher order functions. Operaciones sobre listas. Composición de funciones.(4H)',
    },
  ],
  objetives: [
    'Objetive 1',
    'Objetive 2',
    'Objetive 3',
    'Objetive 4',
    'Objetive N',
  ],
}

const BACK_END = {
  id: 'full-stack',
  isFeatured: true,
  isPublic: false,
  href: '/courses/back-end',
  information: {
    title: 'Backend con Node',
    start: '21.08.22',
    finish: '25.08.22',
    description: "This is the best Full stack course you'll ever find",
    image: {
      source: imageCourseReact,
      alt: 'Un chico con un gorro trabajando en su portátil',
    },
    price: 1500,
    hours: 50,
    places: 30,
    enrolledStudents: 18,
    successPercentage: 93,
  },
  index: [
    {
      number: '01',
      name: 'Fundamentos',
      description:
        'Introducción y recursos. String templates. Desestructuración. Declaración de variables. (2H)',
    },
    {
      number: '02',
      name: 'Programación funcional',
      description:
        'Higher order functions. Operaciones sobre listas. Composición de funciones. (2H)',
    },
    {
      number: '03',
      name: 'Programación orientada a objetos',
      description:
        'Métodos y receptor. Constructores. Clases. Principios de diseño S.O.L.I.D. (3H)',
    },
    {
      number: '04',
      name: 'Programación funcional II',
      description:
        'Higher order functions. Operaciones sobre listas. Composición de funciones.(4H)',
    },
  ],
  objetives: [
    'Objetive 1',
    'Objetive 2',
    'Objetive 3',
    'Objetive 4',
    'Objetive N',
  ],
}

const COURSES = [JS_PRO, UI_DEV, FRONT_END, BACK_END]

export default COURSES
