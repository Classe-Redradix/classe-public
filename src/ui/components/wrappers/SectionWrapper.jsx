import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const SectionWrapper = ({ isBlack, isFluor, children, extraClass }) => {
  const classes = cx('sectionWrapper', `${extraClass ? extraClass : ''}`, {
    'is-black': isBlack,
    'is-fluor': isFluor,
  })
  return <section className={classes}>{children}</section>
}

SectionWrapper.propTypes = {
  isBlack: PropTypes.bool,
  isFluor: PropTypes.bool,
  children: PropTypes.node.isRequired,
  extraClass: PropTypes.string,
}

export default SectionWrapper
