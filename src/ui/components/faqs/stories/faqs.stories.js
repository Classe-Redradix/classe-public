import React from 'react'
import FaqsContainer from '../FaqsContainer'

export default {
  title: 'Components/Faqs',
  component: FaqsContainer,
}

const fakeFaqsArray = new Array(7).fill(null)
const faqsList = fakeFaqsArray.map(() => ({
  title: '¿Lorem ipsum dolor sit amet, consectetur adipiscing eli?',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur nulla sed libero dui. Ac molestie diam egestas magnis auctor vitae. Magna scelerisque blandit sed vulputate accumsan pulvinar enim scelerisque. Malesuada.'
}))

export const faqs = () => <FaqsContainer list={faqsList} />
