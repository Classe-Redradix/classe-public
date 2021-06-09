import React from 'react'
import useWindowSize from '../../../hooks/useWindowSize'
import MenuDesktop from './MenuDesktop'

const Menu = () => {
  const size = useWindowSize()

  return size.width >= 768 ? <MenuDesktop courses={7} /> : <p>Menu mobile</p>
}

export default Menu
