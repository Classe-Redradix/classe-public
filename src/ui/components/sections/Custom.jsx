import React from 'react'
import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import Button from '../button/Button'
import demoImage from '/public/images/demo-small.png'
import GlyphIcon from './../../../assets/icons/GlyphIcon'

const Custom = ({ isBlack, isFluor, openCourses }) => {
  const t = useTranslations()

  return (
    <SectionWrapper isBlack={isBlack} isFluor={isFluor} extraClass="custom">
      <Row type="half">
        <Cell isNegative={isBlack}>
          <div className="scrambleTextWrapper">
            <h2 className="h1 scrambleText">
              {t('custom:title', {
                line: text => <span className="line">{text}</span>,
                lineTab: text => <span className="line has-tab">{text}</span>,
                lineTabAriaHidden: text => (
                  <span className="line has-tab" aria-hidden="true">
                    {text}
                  </span>
                ),
                lineTabSROnly: text => (
                  <span className="line has-tab sr-only">{text}</span>
                ),
              })}
            </h2>
          </div>
        </Cell>
        <Cell isNegative={isBlack}>
          <img src={demoImage} alt="" />
        </Cell>
      </Row>
      <Row type="half">
        <Cell hasGap isNegative={isBlack}>
          <GlyphIcon className="icon" />
          <p className="p">{t('custom:description')}</p>
        </Cell>
        <Cell hasGap isNegative={isBlack}>
          <div className="scrambleTextWrapper">
            <h3 className="h1 scrambleText" aria-hidden="true">
              {t('custom:claim', {
                line: text => <span className="line">{text}</span>,
                lineTab: text => <span className="line has-tab">{text}</span>,
              })}
            </h3>
          </div>
          <Button
            isLink
            isFluor={isFluor}
            href="/"
            text={t('custom:button')}
            onClick={openCourses}
          />
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

Custom.propTypes = {
  isBlack: PropTypes.bool.isRequired,
  isFluor: PropTypes.bool.isRequired,
  openCourses: PropTypes.func,
}

export default Custom
