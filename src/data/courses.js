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
    description: 'course:js-pro-description',
    image: {
      source: imageCourseJS,
      alt: 'Un chico de perfil trabajando con su portátil',
    },
    price: 600,
    hours: 30,
    places: 15,
    practical: 80,
  },
  indexItems: [
    {
      number: '01',
      name: 'course:object-oriented-programming',
      name: 'course:js-pro-01-title',
      description: 'course:js-pro-01-description',
    },
    {
      number: '02',
      name: 'course:js-pro-02-title',
      description: 'course:js-pro-02-description',
    },
    {
      number: '03',
      name: 'course:js-pro-03-title',
      description: 'course:js-pro-03-description',
    },
    {
      number: '04',
      name: 'course:js-pro-04-title',
      description: 'course:js-pro-04-description',
    },
    {
      number: '05',
      name: 'course:js-pro-05-title',
      description: 'course:js-pro-05-description',
    },
  ],
  objectives: {
    learn: 'course:js-pro-learn',
    text: 'course:js-pro-learn-description',
    objectives: 'course:js-pro-objectives',
    objectivesText: 'course:js-pro-objetives-description',
  },
}

const UI_DEV = {
  id: 'uidev',
  isFeatured: false,
  isPublic: true,
  href: '/courses/maqueta',
  information: {
    title: 'Maqueta',
    start: '21.08.22',
    finish: '25.08.22',
    description: 'course:ui-dev-description',
    image: {
      source: imageCourseUIDeveloper,
      alt: 'Un chico de perfil trabajando con su portátil',
    },
    price: 600,
    hours: 30,
    places: 15,
    practical: 80,
  },
  indexItems: [
    {
      number: '01',
      name: 'course:ui-dev-01-title',
      description: 'course:ui-dev-01-description',
    },
    {
      number: '02',
      name: 'course:ui-dev-02-title',
      description: 'course:ui-dev-02-description',
    },
    {
      number: '03',
      name: 'course:ui-dev-03-title',
      description: 'course:ui-dev-03-description',
    },
    {
      number: '04',
      name: 'course:ui-dev-04-title',
      description: 'course:ui-dev-04-description',
    },
    {
      number: '05',
      name: 'course:ui-dev-05-title',
      description: 'course:ui-dev-05-description',
    },
  ],
  objectives: {
    learn: 'course:ui-dev-learn',
    text: 'course:ui-dev-learn-description',
    objectives: 'course:ui-dev-objectives',
    objectivesText: 'course:ui-dev-objetives-description',
  },
}

const FRONT_END = {
  id: 'data',
  isFeatured: false,
  isPublic: true,
  href: '/courses/front-end',
  information: {
    title: 'Front-end con React',
    start: '21.08.22',
    finish: '25.08.22',
    description: 'course:front-description',
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
  indexItems: [
    {
      number: '01',
      name: 'course:front-01-title',
      description: 'course:front-01-description',
    },
    {
      number: '02',
      name: 'course:front-02-title',
      description: 'course:front-02-description',
    },
    {
      number: '03',
      name: 'course:front-03-title',
      description: 'course:front-03-description',
    },
    {
      number: '04',
      name: 'course:front-04-title',
      description: 'course:front-04-description',
    },
  ],
  objectives: {
    learn: 'course:front-learn',
    text: 'course:front-learn-description',
    objectives: 'course:front-objectives',
    objectivesText: 'course:front-objetives-description',
  },
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
    description: 'course:back-description',
    image: {
      source: imageCourseReact,
      alt: 'Un chico con un gorro trabajando en su portátil',
    },
    price: 600,
    hours: 30,
    places: 15,
    practical: 80,
  },
  indexItems: [
    {
      number: '01',
      name: 'course:back-01-title',
      description: 'course:back-01-description',
    },
    {
      number: '02',
      name: 'course:back-02-title',
      description: 'course:back-02-description',
    },
    {
      number: '03',
      name: 'course:back-03-title',
      description: 'course:back-03-description',
    },
    {
      number: '04',
      name: 'course:back-04-title',
      description: 'course:back-04-description',
    },
    {
      number: '05',
      name: 'course:back-05-title',
      description: 'course:back-05-description',
    },
    {
      number: '06',
      name: 'course:back-06-title',
      description: 'course:back-06-description',
    },
  ],
  objectives: {
    learn: 'course:back-learn',
    text: 'course:back-learn-description',
    objectives: 'course:back-objectives',
    objectivesText: 'course:back-objetives-description',
  },
}

const COURSES = [JS_PRO, UI_DEV, FRONT_END, BACK_END]

export default COURSES
