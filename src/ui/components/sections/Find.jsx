import React from 'react'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import demoImage from '../../../assets/images/demo-small.png'
import Glyph from '../../../assets/icons/glyph-2-icon.svg'

const Find = () => {
  const t = useTranslations()

  return (
    <SectionWrapper extraClass="find">
      <Row type="half">
        <Cell>
          <div className="scrambleTextWrapper">
            <h3 className="h1 scrambleText">
              {t('find:title', {
                line: (text) => <span className="line">{text}</span>,
                lineTab: (text) => <span className="line has-tab">{text}</span>,
              })}
            </h3>
          </div>
        </Cell>
        <Cell>
          <img src={demoImage} alt="" />
        </Cell>
      </Row>
      <Row type="half">
        <Cell hasGap>
          <Glyph viewBox="0 0 56 73" />
          <p className="p">{t('find:description')}</p>
        </Cell>
        <Cell hasGap>
          <div className="scrambleTextWrapper">
            <h4 className="h1 scrambleText">
              {t('find:claim', {
                line: (text) => <span className="line">{text}</span>,
                lineTab: (text) => <span className="line has-tab">{text}</span>,
              })}
            </h4>
          </div>
          <p className="notes">{t('find:description2')}</p>
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

export default Find
