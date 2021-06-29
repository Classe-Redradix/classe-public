import React from 'react'
import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import Button from '../button/Button'
import demoImage from '../../../assets/images/demo-small.png'
import Glyph from '../../../assets/icons/glyph-icon.svg'

const Custom = ({ isBlack, isFluor }) => {
  const t = useTranslations()

  return (
    <SectionWrapper isBlack={isBlack} isFluor={isFluor} extraClass="custom">
      <Row type="half">
        <Cell isNegative={isBlack}>
          <div className="scrambleTextWrapper">
            <h3 className="h1 scrambleText">
              {t('custom:title', {
                line: (text) => <span className="line">{text}</span>,
                lineTab: (text) => <span className="line has-tab">{text}</span>,
              })}
            </h3>
          </div>
        </Cell>
        <Cell isNegative={isBlack}>
          <img src={demoImage} alt="" />
        </Cell>
      </Row>
      <Row type="half">
        <Cell hasGap isNegative={isBlack}>
          <Glyph viewBox="0 0 76 80" />
          <p className="p">{t('custom:description')}</p>
        </Cell>
        <Cell hasGap isNegative={isBlack}>
          <div className="scrambleTextWrapper">
            <h4 className="h1 scrambleText">
              {t('custom:claim', {
                line: (text) => <span className="line">{text}</span>,
                lineTab: (text) => <span className="line has-tab">{text}</span>,
              })}
            </h4>
          </div>
          <Button isLink isFluor={isFluor} href="/" text={t('custom:button')} />
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

Custom.propTypes = {
  isBlack: PropTypes.bool.isRequired,
  isFluor: PropTypes.bool.isRequired,
}

export default Custom
