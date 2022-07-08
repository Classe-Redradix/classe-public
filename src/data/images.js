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

import agendaSlotMainImage from '/public/images/haz-hueco-en-tu-agenda.jpg'
import agendaSlotImage2048 from '/public/images/haz-hueco-en-tu-agenda-2048.jpg'
import agendaSlotImage1920 from '/public/images/haz-hueco-en-tu-agenda-1920.jpg'
import agendaSlotImage1200 from '/public/images/haz-hueco-en-tu-agenda-1200.jpg'
import agendaSlotImage1080 from '/public/images/haz-hueco-en-tu-agenda-1080.jpg'
import agendaSlotImage828 from '/public/images/haz-hueco-en-tu-agenda-828.jpg'
import agendaSlotImage750 from '/public/images/haz-hueco-en-tu-agenda-750.jpg'
import agendaSlotImage640 from '/public/images/haz-hueco-en-tu-agenda-640.jpg'
const AGENDA_SLOT_IMAGE = {
  mainImage: agendaSlotMainImage,
  alt: 'alt-image:programming-students-attending',
  width: 3480,
  height: 2688,
  sizes: '(max-width: 3480px) 100vw, 3480px',
  srcSet: useGenerateImageCandidates([
    {
      src: agendaSlotImage2048,
      width: 2048,
    },
    {
      src: agendaSlotImage1920,
      width: 1920,
    },
    {
      src: agendaSlotImage1200,
      width: 1200,
    },
    {
      src: agendaSlotImage1080,
      width: 1080,
    },
    {
      src: agendaSlotImage828,
      width: 828,
    },
    {
      src: agendaSlotImage750,
      width: 750,
    },
    {
      src: agendaSlotImage640,
      width: 640,
    },
  ]),
}

import professionalTrainingMainImage from '/public/images/formacion-para-profesionales.jpg'
import professionalTrainingImage2048 from '/public/images/formacion-para-profesionales-2048.jpg'
import professionalTrainingImage1920 from '/public/images/formacion-para-profesionales-1920.jpg'
import professionalTrainingImage1200 from '/public/images/formacion-para-profesionales-1200.jpg'
import professionalTrainingImage1080 from '/public/images/formacion-para-profesionales-1080.jpg'
import professionalTrainingImage828 from '/public/images/formacion-para-profesionales-828.jpg'
import professionalTrainingImage750 from '/public/images/formacion-para-profesionales-750.jpg'
import professionalTrainingImage640 from '/public/images/formacion-para-profesionales-640.jpg'
const PROFESSIONAL_TRAINING_IMAGE = {
  mainImage: professionalTrainingMainImage,
  alt: 'alt-image:three-web-developers',
  width: 3480,
  height: 2320,
  sizes: '(max-width: 3480px) 100vw, 3480px',
  srcSet: useGenerateImageCandidates([
    {
      src: professionalTrainingImage2048,
      width: 2048,
    },
    {
      src: professionalTrainingImage1920,
      width: 1920,
    },
    {
      src: professionalTrainingImage1200,
      width: 1200,
    },
    {
      src: professionalTrainingImage1080,
      width: 1080,
    },
    {
      src: professionalTrainingImage828,
      width: 828,
    },
    {
      src: professionalTrainingImage750,
      width: 750,
    },
    {
      src: professionalTrainingImage640,
      width: 640,
    },
  ]),
}

import remoteOnSiteTrainingMainImage from '/public/images/formacion-remoto-presencial.jpg'
import remoteOnSiteTrainingImage2048 from '/public/images/formacion-remoto-presencial-2048.jpg'
import remoteOnSiteTrainingImage1920 from '/public/images/formacion-remoto-presencial-1920.jpg'
import remoteOnSiteTrainingImage1200 from '/public/images/formacion-remoto-presencial-1200.jpg'
import remoteOnSiteTrainingImage1080 from '/public/images/formacion-remoto-presencial-1080.jpg'
import remoteOnSiteTrainingImage828 from '/public/images/formacion-remoto-presencial-828.jpg'
import remoteOnSiteTrainingImage750 from '/public/images/formacion-remoto-presencial-750.jpg'
import remoteOnSiteTrainingImage640 from '/public/images/formacion-remoto-presencial-640.jpg'
const REMOTE_ON_SITE_TRAINING_IMAGE = {
  mainImage: remoteOnSiteTrainingMainImage,
  alt: 'alt-image:man-working-remotely',
  width: 3264,
  height: 2448,
  sizes: '(max-width: 3264px) 100vw, 3264px',
  srcSet: useGenerateImageCandidates([
    {
      src: remoteOnSiteTrainingImage2048,
      width: 2048,
    },
    {
      src: remoteOnSiteTrainingImage1920,
      width: 1920,
    },
    {
      src: remoteOnSiteTrainingImage1200,
      width: 1200,
    },
    {
      src: remoteOnSiteTrainingImage1080,
      width: 1080,
    },
    {
      src: remoteOnSiteTrainingImage828,
      width: 828,
    },
    {
      src: remoteOnSiteTrainingImage750,
      width: 750,
    },
    {
      src: remoteOnSiteTrainingImage640,
      width: 640,
    },
  ]),
}

import classeManifestMainImage from '/public/images/manifiesto-classe.jpg'
import classeManifestImage2048 from '/public/images/manifiesto-classe-2048.jpg'
import classeManifestImage1920 from '/public/images/manifiesto-classe-1920.jpg'
import classeManifestImage1200 from '/public/images/manifiesto-classe-1200.jpg'
import classeManifestImage1080 from '/public/images/manifiesto-classe-1080.jpg'
import classeManifestImage828 from '/public/images/manifiesto-classe-828.jpg'
import classeManifestImage750 from '/public/images/manifiesto-classe-750.jpg'
import classeManifestImage640 from '/public/images/manifiesto-classe-640.jpg'
const CLASSE_MANIFEST_IMAGE = {
  mainImage: classeManifestMainImage,
  alt: 'alt-image:two-web-programmers',
  width: 3456,
  height: 5184,
  sizes: '(max-width: 3456px) 100vw, 3456px',
  srcSet: useGenerateImageCandidates([
    {
      src: classeManifestImage2048,
      width: 2048,
    },
    {
      src: classeManifestImage1920,
      width: 1920,
    },
    {
      src: classeManifestImage1200,
      width: 1200,
    },
    {
      src: classeManifestImage1080,
      width: 1080,
    },
    {
      src: classeManifestImage828,
      width: 828,
    },
    {
      src: classeManifestImage750,
      width: 750,
    },
    {
      src: classeManifestImage640,
      width: 640,
    },
  ]),
}

const IMAGES = {
  CONTACT_IMAGE,
  COURSES_IMAGE,
  TAILOR_MADE_COURSES_IMAGE,
  AGENDA_SLOT_IMAGE,
  PROFESSIONAL_TRAINING_IMAGE,
  REMOTE_ON_SITE_TRAINING_IMAGE,
  CLASSE_MANIFEST_IMAGE,
}

export default IMAGES
