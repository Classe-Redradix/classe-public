import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import Radio from '../forms/Radio'
import Input from '../forms/Input'
import Checkbox from '../forms/Checkbox'
import { CoursePropType } from '../../sharedProptypes'
import Button from '../button/Button'

const Footer = ({
  courses,
  isBlack,
  isFluor,
  onContactFormSubmit,
  contactFormParams,
  openCourse,
}) => {
  const formatMessage = useTranslations()

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
              {formatMessage('footer:title', {
                line: text => <span className="line">{text}</span>,
                lineTab: text => <span className="line has-tab">{text}</span>,
              })}
            </h2>
          </div>
        </Cell>
        <Cell isNegative={isBlack}>
          <form className="footer-form" onSubmit={onContactFormSubmit}>
            <div className="footer-formBlock">
              <span className="notes">{formatMessage('footer:iam')}</span>
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
                placeholder={formatMessage('newsletter:placeholder')}
                type="email"
                value={contactFormParams.email}
              />
              <Button
                text={formatMessage('newsletter:btn')}
                onClick={() => {}}
              />
            </div>
            <div className="footer-formBlock">
              <Checkbox
                hasMessage
                handleChange={contactFormParams.toggleTermsAndConditions}
                label={formatMessage('general:conditions-check')}
                name="conditions"
                isChecked={contactFormParams.termsAndConditions}
              />
            </div>
          </form>
        </Cell>
      </Row>
      <Row type="half">
        <Cell isNegative={isBlack}>
          <span className="tiny">{formatMessage('courses:header')}</span>
          <ul className="footer-list">
            {courses.map(course => (
              <li key={formatMessage(course.information.title)}>
                <a
                  className="h4"
                  href={course.href}
                  onClick={e => handleClick(e, course)}
                >
                  {formatMessage(course.information.title)}
                </a>
              </li>
            ))}
          </ul>
        </Cell>
        <Cell isNegative={isBlack}>
          <span className="tiny">{formatMessage('footer:social')}</span>
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
          </ul>
        </Cell>
        <Cell isNegative={isBlack}>
          <span className="tiny">As?? se ha hecho</span>
          <ul className="footer-list">
            <li>
              <a
                className="h4"
                href="https://github.com/Classe-Redradix/classe-public"
                target="_blank"
              >
                Repositorio Classe
              </a>
            </li>
          </ul>
        </Cell>
        <Cell isNegative={isBlack}>
          <address>
            <span className="tiny">{formatMessage('footer:contact')}</span>
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
          </address>
          <div className="footer-legal">
            <span className="tiny">{formatMessage('footer:legal')}</span>
            <ul className="">
              <li>
                <a
                  className="button"
                  href={`${formatMessage('footer:legal-terms-route')}`}
                >
                  {formatMessage('footer:legal-terms')}
                </a>
              </li>
              <li>
                <a
                  className="button"
                  href={`${formatMessage('footer:cookies-route')}`}
                >
                  {formatMessage('footer:cookies')}
                </a>
              </li>
            </ul>
          </div>
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
