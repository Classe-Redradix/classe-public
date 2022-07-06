import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import Button from '../button/Button'
import image from '/public/images/cursos.jpg'
import { CoursePropType } from './../../sharedProptypes'

const Featured = ({ isBlack, isFluor, course, openCourse }) => {
  const t = useTranslations()

  return (
    <SectionWrapper
      isFluorChanger
      isBlack={isBlack}
      isFluor={isFluor}
      extraClass="featured"
    >
      <Row type="half">
        <Cell hasGap>
          <div className="scrambleTextWrapper">
            <h2 className="h1 scrambleText">
              {t('featured:title', {
                lineTabAriaHidden: text => (
                  <span className="line" aria-hidden="true">
                    {text}
                  </span>
                ),
                screenReadOnly: text => <span className="sr-only">{text}</span>,
                line: text => <span className="line">{text}</span>,
              })}
            </h2>
          </div>
          <Button
            isLink
            isFluor={isFluor}
            isFull
            href={course.href}
            onClick={() => openCourse(course)}
            text={t('featured:button')}
          />
        </Cell>
        <Cell>
          <img
            className="bwfilter"
            src={image}
            alt={t('alt-image:hands-keyboard-mouse')}
            loading="lazy"
          />
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

Featured.propTypes = {
  isBlack: PropTypes.bool.isRequired,
  isFluor: PropTypes.bool.isRequired,
  course: CoursePropType,
  openCourse: PropTypes.func,
}

export default Featured
