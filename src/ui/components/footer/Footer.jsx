import React from 'react'
import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import Radio from '../forms/Radio'
import Input from '../forms/Input'
import Checkbox from '../forms/Checkbox'
import { CoursePropType } from '../../sharedProptypes'

const Footer = ({
  courses,
  isBlack,
  isFluor,
  onContactFormSubmit,
  contactFormParams,
  openCourse,
}) => {
  const t = useTranslations()

  const handleClick = (e, course) => {
    e.preventDefault()
    openCourse(course)
  }

  return (
    <SectionWrapper
      isBlackChanger
      isBlack={isBlack}
      isFluor={isFluor}
      extraClass="footer"
    >
      <Row type="quarter">
        <Cell isNegative={isBlack}>
          <div className="scrambleTextWrapper">
            <h2 className="h2 scrambleText">
              {t('footer:title', {
                line: text => <span className="line">{text}</span>,
                lineTab: text => <span className="line has-tab">{text}</span>,
              })}
            </h2>
          </div>
        </Cell>
        <Cell isNegative={isBlack}>
          <form className="footer-form" onSubmit={onContactFormSubmit}>
            <div className="footer-formBlock">
              <span className="notes">{t('footer:iam')}</span>
              <Radio
                onChange={contactFormParams.onUserTypeChange}
                label="footer:company"
                name="user-type"
                id="user-type-company"
                value="company"
                isChecked={contactFormParams.userType === 'company'}
              />
              <Radio
                onChange={contactFormParams.onUserTypeChange}
                label="footer:student"
                id="user-type-student"
                name="user-type"
                value="student"
                isChecked={contactFormParams.userType === 'student'}
              />
            </div>
            <div className="footer-formBlock">
              <Input
                handleBlur={() => {}}
                handleChange={contactFormParams.onEmailChange}
                handleSubmit={() => {}}
                name="email"
                placeholder={t('general:placeholder')}
                type="email"
                value={contactFormParams.email}
              />
            </div>
            <div className="footer-formBlock">
              <Checkbox
                hasMessage
                handleChange={() => {}}
                label={t('general:conditions-check')}
                name="conditions"
                value=""
              />
            </div>
          </form>
        </Cell>
      </Row>
      <Row type="half">
        <Cell isNegative={isBlack}>
          <span className="tiny">{t('courses:header')}</span>
          <ul className="footer-list">
            {courses.map(course => (
              <li key={course.information.title}>
                <a
                  className="h4"
                  href={course.href}
                  onClick={e => handleClick(e, course)}
                >
                  {course.information.title}
                </a>
              </li>
            ))}
          </ul>
        </Cell>
        <Cell isNegative={isBlack}>
          <span className="tiny">{t('footer:social')}</span>
          <ul className="footer-list">
            <li>
              <a
                className="h4"
                href="https://www.linkedin.com/company/redradix"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="h4"
                href="https://twitter.com/redradix"
                target="_blank"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className="h4"
                href="https://github.com/redradix"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="h4"
                href="https://www.behance.net/Redradix"
                target="_blank"
              >
                Behance
              </a>
            </li>
            <li>
              <a
                className="h4"
                href="https://www.instagram.com/redradix_/"
                target="_blank"
              >
                Instagram
              </a>
            </li>
          </ul>
        </Cell>
        <Cell isNegative={isBlack} />
        <Cell isNegative={isBlack}>
          <span className="tiny">{t('footer:contact')}</span>
          <a
            className="button"
            href="https://www.google.es/maps/place/Redradix/@40.4092458,-3.7143432,17z/data=!3m1!4b1!4m5!3m4!1s0xd42287e4a90167b:0x9bfdc0ed1f91d800!8m2!3d40.4092458!4d-3.7121545?shorturl=1"
            target="_blank"
          >
            Madrid, Calatrava 27
            <br />
            [Metro La Latina]
          </a>
          <a className="button" href="mailto:info@classe.com">
            info[at]classe.com
          </a>
          <a className="button" href="tel:+34914346336">
            +34 914 346 336
          </a>
        </Cell>
      </Row>
      <Row type="full">
        <Cell isNegative={isBlack}>
          <p className="logo">Class(e)</p>
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

Footer.propTypes = {
  courses: PropTypes.arrayOf(CoursePropType.isRequired).isRequired,
  isBlack: PropTypes.bool.isRequired,
  isFluor: PropTypes.bool.isRequired,
  onContactForm: PropTypes.object,
  onContactFormSubmit: PropTypes.func,
  openCourse: PropTypes.func,
}

export default Footer
