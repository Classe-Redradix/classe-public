import React from 'react'
import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import FaqsContainer from '../faqs/FaqsContainer'
import demoImage from '../../../assets/images/demo.png'

const Faqs = ({ list }) => {
  const t = useTranslations()

  return (
    <SectionWrapper extraClass="faqs">
      <Row type="full">
        <Cell>
          <div className="scrambleTextWrapper">
            <h3 className="h1 scrambleText">
              {t('faqs:title', {
                line: (text) => <span className="line">{text}</span>,
                lineTab: (text) => <span className="line has-tab">{text}</span>,
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
    })
  ).isRequired,
}

export default Faqs
