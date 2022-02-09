import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import useWindowSize from '../../../hooks/useWindowSize'
import useTranslations from '../../../hooks/useTranslations'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import CoursesList from './CoursesList'
import Input from '../forms/Input'
import Button from '../button/Button'
import Checkbox from '../forms/Checkbox'
import Radio from '../forms/Radio'

const MenuLayer = ({ courses, isOpen, handleClose, type, hasClose = true }) => {
  const t = useTranslations()
  const size = useWindowSize()
  const [linesHidden, setLinesHidden] = useState(false)
  const classes = cx('menuLayer', {
    'is-open': isOpen,
    'is-free': type === 'contact',
  })
  const isDesktop = size.width >= 768

  useEffect(() => {
    if (isOpen) {
      setLinesHidden(true)
    } else {
      setLinesHidden(false)
    }
  }, [isOpen])

  return (
    <div className={classes}>
      <div className="menuLayer-wrapper">
        {isDesktop && hasClose ? (
          <div className="menuLayer-desktopHeader">
            <button
              className="menuLayer-desktopHeader-button button"
              onClick={handleClose}
            >
              [ <span className="braketHover">{t('menu:close')}</span> ]
            </button>
          </div>
        ) : null}
        <div className="menuLayer-content">
          {!isDesktop ? (
            <Row type="half" extraClass="menuLayer-mobileHeader">
              <Cell hasLinesHidden={linesHidden} isAnimated isNegative>
                <p>[Light Mode]</p>
              </Cell>
              <Cell hasLinesHidden={linesHidden} isAnimated isNegative>
                <p>[Dark Mode]</p>
              </Cell>
            </Row>
          ) : null}
          {type === 'contact' ? (
            <Row type="quarter" extraClass="menuLayer-contact">
              <Cell hasLinesHidden={linesHidden} isAnimated isNegative>
                <div className="scrambleTextWrapper">
                  <h2 className="h2 scrambleText">
                    {t('contact:title', {
                      line: text => <span className="line">{text}</span>,
                    })}
                  </h2>
                </div>
                <div className="menuLayer-contactAddress">
                  <h2 className="heading menuLayer-contactAddressText">
                    {t('contact:address1', {
                      line: text => <span className="line">{text}</span>,
                    })}
                  </h2>
                  <h2 className="heading menuLayer-contactAddressText">
                    {t('contact:address2', {
                      line: text => <span className="line">{text}</span>,
                    })}
                  </h2>
                  <h2 className="heading menuLayer-contactAddressText">
                    {t('contact:address3', {
                      line: text => <span className="line">{text}</span>,
                    })}
                  </h2>
                </div>
              </Cell>
              <Cell hasLinesHidden={linesHidden} isAnimated isNegative>
                <div className="contact-formBlock">
                  <div className="scrambleTextWrapper">
                    <h3 className="h3 scrambleText">
                      {t('contact:my-name-is', {
                        line: text => <span className="line">{text}</span>,
                      })}
                    </h3>
                  </div>
                  <Input
                    placeholder={t('general:name-surname-placeholder')}
                    handleBlur={() => {}}
                    handleChange={() => {}}
                    name="email"
                    type="email"
                    isNegative
                  />
                </div>
                <div className="contact-formBlock--flex">
                  <span className="notes">{t('footer:iam')}</span>
                  <Radio
                    handleChange={() => {}}
                    label="footer:company"
                    name="company"
                    value=""
                  />
                  <Radio
                    handleChange={() => {}}
                    label="footer:student"
                    name="student"
                    value=""
                  />
                </div>
                <div className="contact-formBlock">
                  <div className="scrambleTextWrapper">
                    <h3 className="h3 scrambleText">
                      {t('contact:interested-in', {
                        line: text => <span className="line">{text}</span>,
                      })}
                    </h3>
                  </div>
                </div>
                <div className="contact-formBlock--flex">
                  <Checkbox
                    handleChange={() => {}}
                    label="Js pro"
                    name="jspro"
                    value=""
                  />
                  <Checkbox
                    handleChange={() => {}}
                    label="React"
                    name="react"
                    value=""
                  />
                  <Checkbox
                    handleChange={() => {}}
                    label="Redux"
                    name="redux"
                    value=""
                  />
                  <Checkbox
                    handleChange={() => {}}
                    label="Data"
                    name="data"
                    value=""
                  />
                </div>
                <div className="contact-formBlock">
                  <div className="scrambleTextWrapper">
                    <h3 className="h3 scrambleText">
                      {t('contact:my-email', {
                        line: text => <span className="line">{text}</span>,
                      })}
                    </h3>
                  </div>
                  <Input
                    placeholder={t('general:name-surname-placeholder')}
                    handleBlur={() => {}}
                    handleChange={() => {}}
                    name="email"
                    type="email"
                    isNegative
                  />
                </div>
                <div className="contact-formBlock--flex">
                  <Checkbox
                    hasMessage
                    handleChange={() => {}}
                    label="general:conditions-check"
                    name="conditions"
                    value=""
                  />
                  <Checkbox
                    hasMessage
                    handleChange={() => {}}
                    label="general:newsletter-check"
                    name="newsletter"
                    value=""
                  />
                </div>
                <Button
                  isNegative
                  isFull
                  isLink
                  href="/"
                  text={t('general:send')}
                />
              </Cell>
            </Row>
          ) : (
            <Row type="quarter" extraClass="menuLayer-courses">
              <Cell hasLinesHidden={linesHidden} isAnimated isNegative>
                <p>image</p>
              </Cell>
              <Cell hasLinesHidden={linesHidden} isAnimated isNegative>
                <CoursesList courses={courses} />
              </Cell>
            </Row>
          )}
          <Row type="full" extraClass="menuLayer-menu">
            <Cell hasLinesHidden={linesHidden} isAnimated isNegative>
              <span className="menuDesktop-claim menu">{t('menu:claim')}</span>
              <span
                className="menuDesktop-button menu"
                aria-label={t('menu:courses')}
              >
                [{courses.length < 10 ? `0${courses.length}` : courses.length}]{' '}
                {t('menu:courses')}
              </span>
              <button
                className="menuDesktop-link"
                aria-label={t('menu:contact')}
              >
                {t('menu:contact')}
              </button>
            </Cell>
          </Row>
        </div>
      </div>
    </div>
  )
}

MenuLayer.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  isOpen: PropTypes.bool,
  type: PropTypes.string.isRequired,
  hasClose: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default MenuLayer
