import React from 'react'
import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import FaqsContainer from '../faqs/FaqsContainer'
import demoImage from '/public/images/demo.png'

const Faqs = ({ list, isBlack, isFluor }) => {
  const t = useTranslations()

  return (
    <SectionWrapper isBlack={isBlack} isFluor={isFluor} extraClass="faqs">
      <Row type="full">
        <Cell>
          <div className="scrambleTextWrapper">
            <h3 className="h1 scrambleText">
              {t('faqs:title', {
                line: text => <span className="line has-wrap">{text}</span>,
                lineTab: text => <span className="line has-tab">{text}</span>,
              })}
            </h3>
          </div>
        </Cell>
      </Row>
      <Row type="half">
        <Cell>
          <img src={demoImage} alt="" />
        </Cell>
        <Cell>
          <FaqsContainer list={list} />
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

Faqs.propTpes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isBlack: PropTypes.bool.isRequired,
  isFluor: PropTypes.bool.isRequired,
}

export default Faqs
