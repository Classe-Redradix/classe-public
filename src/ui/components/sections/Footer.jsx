import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'

const Footer = ({ courses, isBlack }) => {
  const router = useRouter()
  const t = useTranslations()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <SectionWrapper isBlack={isBlack} isBlackChanger extraClass="footer">
      <Row type="quarter">
        <Cell isNegative={isBlack}>
          <div className="scrambleTextWrapper">
            <h3 className="h2 scrambleText">
              {t('footer:title', {
                line: (text) => <span className="line">{text}</span>,
                lineTab: (text) => <span className="line has-tab">{text}</span>,
              })}
            </h3>
          </div>
        </Cell>
        <Cell isNegative={isBlack}>
          <p>Form</p>
        </Cell>
      </Row>
      <Row type="half">
        <Cell isNegative={isBlack}>
          <span className="tiny">{t('courses:header')}</span>
          <ul className="footer-list">
            {courses.map((course) => (
              <li key={course.title}>
                <a className="h4" href={course.href} onClick={handleClick}>
                  {course.title}
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
                target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="h4"
                href="https://twitter.com/redradix"
                target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a
                className="h4"
                href="https://github.com/redradix"
                target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a
                className="h4"
                href="https://www.behance.net/Redradix"
                target="_blank">
                Behance
              </a>
            </li>
            <li>
              <a
                className="h4"
                href="https://www.instagram.com/redradix_/"
                target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </Cell>
        <Cell isNegative={isBlack} />
        <Cell isNegative={isBlack}>
          <span className="tiny">{t('footer:contact')}</span>
        </Cell>
      </Row>
      <Row type="full">
        <Cell isNegative={isBlack}>
          <p>Logo</p>
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

Footer.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  isBlack: PropTypes.bool.isRequired,
}

export default Footer
