import * as React from 'react'

const Glyph2Icon = ({ color, ...props }) => (
  <svg
    width={56}
    height={73}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m45.161 27.812-2.389 15.655h9.848l-1.107 7.8h-9.79L38.46 73h-8.566l3.147-21.734H18.764L15.5 73H6.934l3.264-21.734H0l1.107-7.799h10.198l2.39-15.655H3.38l1.165-7.799h10.198L17.773 0h8.566l-2.913 20.013h14.276L40.732 0H49.3l-3.03 20.013H56l-1.107 7.8H45.16ZM34.148 43.467l2.389-15.655H21.969l-2.273 15.655h14.452Z"
      fill={color}
    />
  </svg>
)

export default Glyph2Icon
