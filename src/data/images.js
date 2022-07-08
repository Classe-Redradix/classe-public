import { useGenerateImageCandidates } from '../hooks'

import contactMainImage from '/public/images/contacto-classe.jpg'
import contactImage2048 from '/public/images/contacto-classe-2048.jpg'
import contactImage1920 from '/public/images/contacto-classe-1920.jpg'
import contactImage1200 from '/public/images/contacto-classe-1200.jpg'
import contactImage1080 from '/public/images/contacto-classe-1080.jpg'
import contactImage828 from '/public/images/contacto-classe-828.jpg'
import contactImage750 from '/public/images/contacto-classe-750.jpg'
import contactImage640 from '/public/images/contacto-classe-640.jpg'
const CONTACT_IMAGE = {
  mainImage: contactMainImage,
  alt: 'alt-image:office-desks-computer-equipment',
  width: 3480,
  height: 2320,
  sizes: '(max-width: 3480px) 100vw, 3480px',
  srcSet: useGenerateImageCandidates([
    {
      src: contactImage2048,
      width: 2048,
    },
    {
      src: contactImage1920,
      width: 1920,
    },
    {
      src: contactImage1200,
      width: 1200,
    },
    {
      src: contactImage1080,
      width: 1080,
    },
    {
      src: contactImage828,
      width: 828,
    },
    {
      src: contactImage750,
      width: 750,
    },
    {
      src: contactImage640,
      width: 640,
    },
  ]),
}

import coursesMainImage from '/public/images/cursos.jpg'
import coursesImage2048 from '/public/images/cursos-2048.jpg'
import coursesImage1920 from '/public/images/cursos-1920.jpg'
import coursesImage1200 from '/public/images/cursos-1200.jpg'
import coursesImage1080 from '/public/images/cursos-1080.jpg'
import coursesImage828 from '/public/images/cursos-828.jpg'
import coursesImage750 from '/public/images/cursos-750.jpg'
import coursesImage640 from '/public/images/cursos-640.jpg'
const COURSES_IMAGE = {
  mainImage: coursesMainImage,
  alt: 'alt-image:hands-keyboard-mouse',
  width: 3456,
  height: 5184,
  sizes: '(max-width: 3456px) 100vw, 3456px',
  srcSet: useGenerateImageCandidates([
    {
      src: coursesImage2048,
      width: 2048,
    },
    {
      src: coursesImage1920,
      width: 1920,
    },
    {
      src: coursesImage1200,
      width: 1200,
    },
    {
      src: coursesImage1080,
      width: 1080,
    },
    {
      src: coursesImage828,
      width: 828,
    },
    {
      src: coursesImage750,
      width: 750,
    },
    {
      src: coursesImage640,
      width: 640,
    },
  ]),
}

import tailorMadeCoursesMainImage from '/public/images/nuestros-cursos-a-tu-medida.jpg'
import tailorMadeCoursesImage2048 from '/public/images/nuestros-cursos-a-tu-medida-2048.jpg'
import tailorMadeCoursesImage1920 from '/public/images/nuestros-cursos-a-tu-medida-1920.jpg'
import tailorMadeCoursesImage1200 from '/public/images/nuestros-cursos-a-tu-medida-1200.jpg'
import tailorMadeCoursesImage1080 from '/public/images/nuestros-cursos-a-tu-medida-1080.jpg'
import tailorMadeCoursesImage828 from '/public/images/nuestros-cursos-a-tu-medida-828.jpg'
import tailorMadeCoursesImage750 from '/public/images/nuestros-cursos-a-tu-medida-750.jpg'
import tailorMadeCoursesImage640 from '/public/images/nuestros-cursos-a-tu-medida-640.jpg'
const TAILOR_MADE_COURSES_IMAGE = {
  mainImage: tailorMadeCoursesMainImage,
  alt: 'alt-image:developers-working',
  width: 3480,
  height: 2688,
  sizes: '(max-width: 3480px) 100vw, 3480px',
  srcSet: useGenerateImageCandidates([
    {
      src: tailorMadeCoursesImage2048,
      width: 2048,
    },
    {
      src: tailorMadeCoursesImage1920,
      width: 1920,
    },
    {
      src: tailorMadeCoursesImage1200,
      width: 1200,
    },
    {
      src: tailorMadeCoursesImage1080,
      width: 1080,
    },
    {
      src: tailorMadeCoursesImage828,
      width: 828,
    },
    {
      src: tailorMadeCoursesImage750,
      width: 750,
    },
    {
      src: tailorMadeCoursesImage640,
      width: 640,
    },
  ]),
}

const IMAGES = { CONTACT_IMAGE, COURSES_IMAGE, TAILOR_MADE_COURSES_IMAGE }

export default IMAGES
