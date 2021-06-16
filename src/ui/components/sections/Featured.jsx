import React from 'react'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import Button from '../button/Button'
import demoImage from '../../../assets/images/demo.png'

const Featured = () => {
  const t = useTranslations()

  return (
    <SectionWrapper isFluor extraClass="featured">
      <Row type="half">
        <Cell hasGap>
          <div className="scrambleTextWrapper">
            <h3 className="h1 scrambleText">
              {t('featured:title', {
                line: (text) => <span className="line">{text}</span>,
                lineTab: (text) => <span className="line has-tab">{text}</span>,
              })}
            </h3>
          </div>
          <Button isLink isFluor isFull href="/" text={t('featured:button')} />
        </Cell>
        <Cell>
          <img src={demoImage} alt="" />
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

export default Featured
