import React from 'react'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import useTranslations from '../../../hooks/useTranslations'
import demoImage from '../../../assets/images/demo.png'

const Featured = () => {
  const t = useTranslations()

  return (
    <SectionWrapper isFluor extraClass="featured">
      <Row type="half">
        <Cell hasGap>
          <div className="scrambleTextWrapper">
            <h3 className="h3 scrambleText">
              {t('manifest:claim', {
                line: (text) => <span className="line">{text}</span>,
                lineTab: (text) => <span className="line has-tab">{text}</span>,
              })}
            </h3>
          </div>
        </Cell>
        <Cell hasGap>
          <img src={demoImage} alt="" />
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

export default Featured
