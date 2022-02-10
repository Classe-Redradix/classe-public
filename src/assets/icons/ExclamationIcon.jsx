import * as React from 'react'

const ExclamationIcon = ({ color, ...props }) => (
  <svg
    width={111}
    height={88}
    viewBox="0 0 111 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.4 87.8H0V.6h22.4v7.2H8.6v72.8h13.8v7.2Zm36.073-32.5 1.2-28.7V2h-8.9v24.6l1.2 28.7h6.5Zm1.9 16.7V61.4h-10.1V72h10.1Zm27.787 8.6h13.8V7.8h-13.8V.6h22.4v87.2h-22.4v-7.2Z"
      fill={color}
    />
  </svg>
)

export default ExclamationIcon
