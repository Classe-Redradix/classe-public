import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import SectionWrapper from '../../wrappers/SectionWrapper'
import Row from '../../row/Row'
import Cell from '../../cell/Cell'
import Button from '../../button/Button'
import Paragraphs from '../../paragraphs/Paragraphs'
import TabIcon from './../../../../assets/icons/TabIcon'
import DatePicker from '../../date-picker/DatePicker'
import useTranslations from '../../../../hooks/useTranslations'
import useFitText from 'use-fit-text'
import { DatesPropType } from './../../../sharedProptypes'

const Course = React.forwardRef(
  (
    { dates, name, image, description, openContact, course },
    refCourseIntro,
  ) => {
    const formatMessage = useTranslations()
    const onFinish = useCallback(fontSize => {}, [])
    const { fontSize, ref } = useFitText({ maxFontSize: 5000, onFinish })
    return (
      <div ref={refCourseIntro}>
        <SectionWrapper isBlack extraClass="courseIntro">
          <Row type="full" extraClass="courseIntro-name">
            <Cell isNegative>
              <h1 className="courseIntro-nameText" ref={ref}>
                <TabIcon className="courseIntro-tab" aria-hidden="true" />
                {formatMessage(name)}
              </h1>
            </Cell>
          </Row>
          <Row type="half" extraClass="courseIntro-data">
            <Cell isNegative>
              <img
                src={image.mainImage}
                alt={formatMessage(image.alt)}
                width={image.width}
                height={image.height}
                sizes={image.sizes}
                srcSet={image.srcSet}
                loading="lazy"
                className="bwfilter"
              />
            </Cell>

            {/**
             * TODO: when the course is private, fix the layout with the correct
             * layout
             */}
            <Cell isColumn isNegative>
              {course.isPublic ? (
                <Cell isNegative>
                  <DatePicker dates={dates} isCourse />
                </Cell>
              ) : (
                <Cell isNegative>
                  <div className="courseIntro-help">
                    <p>{formatMessage('course:need-more-details')}</p>
                    <Button
                      isNegative
                      onClick={openContact}
                      text={formatMessage('course:contact-us')}
                    />
                  </div>
                </Cell>
              )}
              <Cell isNegative extraClass="cell-description">
                <div className="courseIntro-description">
                  <Paragraphs text={formatMessage(description)} />
                </div>
                <div className="courseIntro-actions">
                  {/**
                   * TODO: add the `href` attribute to provide the link the course
                   * route to the contact page (e.g. `/contact/interested-in=js-pro`,
                   * `/contact/interested-in=full-stack`)
                   * Now it's working, but we should implement it for SEO
                   */}
                  {course.isPublic ? (
                    <Button
                      isNegative
                      onClick={openContact}
                      text={formatMessage('course:button')}
                    />
                  ) : null}
                  <div className="arrow-container">
                    <span className="p uppercase">Scroll o drag</span>
                    <span class="arrow-icon"></span>
                  </div>
                </div>
              </Cell>
            </Cell>
          </Row>
        </SectionWrapper>
      </div>
    )
  },
)

Course.propTypes = {
  dates: DatesPropType,
  name: PropTypes.string.isRequired,
  openContact: PropTypes.func,
}

export default Course
