import * as React from 'react'

const GlyphIcon = ({ color, ...props }) => (
  <svg
    width={76}
    height={80}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 0h18.657v6.216H7.633v67.568h11.024V80H0V0ZM56.752 80v-6.216h11.025V6.216H56.752V0H75.41v80H56.752Z"
      fill={color}
    />
  </svg>
)

export default GlyphIcon
