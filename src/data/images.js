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

const IMAGES = { CONTACT_IMAGE }

export default IMAGES
