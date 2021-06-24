import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import Button from '../button/Button'
import demoImage from '../../../assets/images/demo-small-black.png'
import Tab from '../../../assets/icons/tab-icon.svg'

const Courses = ({ courses }) => {
  const router = useRouter()
  const t = useTranslations()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <SectionWrapper isBlack extraClass="courses">
      <Row type="third">
        <Cell isColumn isNegative>
          <Cell isNegative>
            <div className="scrambleTextWrapper">
              <h3 className="h2 scrambleText">
                {t('courses:claim', {
                  line: (text) => <span className="line">{text}</span>,
                  lineTab: (text) => (
                    <span className="line has-tab">{text}</span>
                  ),
                })}
              </h3>
            </div>
          </Cell>
          <Cell isNegative>
            <img src={demoImage} alt="" />
            <p className="p">{t('courses:description')}</p>
            <Button isLink isNegative href="/" text={t('courses:button')} />
          </Cell>
        </Cell>
        <Cell isNegative>
          <ol className="coursesList-list">
            {courses.map((course, index) => (
              <li key={course.title}>
                <a
                  className="coursesList-link h1"
                  href={course.href}
                  onClick={handleClick}>
                  <span className="coursesList-linkNumber">
                    {index < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  <span className="coursesList-linkTextWrapper">
                    <Tab viewBox="0 0 85 73" />
                    <span className="coursesList-linkText">{course.title}</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

Courses.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default Courses
