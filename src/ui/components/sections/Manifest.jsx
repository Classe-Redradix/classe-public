import React from 'react'
import PropTypes from 'prop-types'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import useTranslations from '../../../hooks/useTranslations'
import demoImage from '/public/images/demo.png'

const Manifest = ({ isBlack, isFluor }) => {
  const t = useTranslations()

  return (
    <SectionWrapper isBlack={isBlack} isFluor={isFluor} extraClass="manifest">
      <h1 className="sr-only">{t('home:h1-title')}</h1>
      <Row type="half">
        <Cell isColumn>
          <Cell isNegative={isBlack}>
            <h2 className="h3">
              {t('manifest:claim', {
                line: text => <span className="line">{text}</span>,
                lineTab: text => <span className="line has-tab">{text}</span>,
              })}
            </h2>
          </Cell>
          <Cell isNegative={isBlack}>
            <img src={demoImage} alt="" />
          </Cell>
        </Cell>
        <Cell hasGap isNegative={isBlack}>
          <div className="scrambleTextWrapper">
            <h3 className="h1 scrambleText">
              {t('manifest:title', {
                line: text => <span className="line">{text}</span>,
                lineTab: text => <span className="line has-tab">{text}</span>,
              })}
            </h3>
          </div>
          <p className="p">{t('manifest:description')}</p>
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

Manifest.propTypes = {
  isBlack: PropTypes.bool.isRequired,
  isFluor: PropTypes.bool.isRequired,
}

export default Manifest
