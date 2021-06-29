import React from 'react'
import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import Button from '../button/Button'
import demoImage from '../../../assets/images/demo.png'

const Featured = ({ isFluor }) => {
  const t = useTranslations()

  return (
    <SectionWrapper isFluor={isFluor} isFluorChanger extraClass="featured">
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
          <Button
            isLink
            isFluor={isFluor}
            isFull
            href="/"
            text={t('featured:button')}
          />
        </Cell>
        <Cell>
          <img src={demoImage} alt="" />
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

Featured.propTypes = {
  isFluor: PropTypes.bool.isRequired,
}

export default Featured
