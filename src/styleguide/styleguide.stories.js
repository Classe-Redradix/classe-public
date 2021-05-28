import React from 'react'
import PatternColorWrapper from './components/pattern-color-wrapper'
import PatternFontWrapper from './components/pattern-font-wrapper'
import PatternIconWrapper from './components/pattern-icon-wrapper'
import config from './styleguide-config'
import './styles/styleguide.scss'

export default { title: 'Style Guide' }

export const colors = () => (
  <PatternColorWrapper colors={config.colors} />
)
export const fonts = () => (
  <PatternFontWrapper fonts={config.fonts} />
)
export const icons = () => (
  <PatternIconWrapper icons={config.icons} />
)
