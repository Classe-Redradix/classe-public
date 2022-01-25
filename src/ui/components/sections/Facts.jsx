import React from 'react'
import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import Fact from '../facts/Fact'

const Facts = ({ isBlack }) => {
  const t = useTranslations()

  return (
    <SectionWrapper isBlack={isBlack} extraClass="facts">
      <Row type="full">
        <Cell>
          <div className="-scrambleTextWrapper">
            <h3 className="h1 -scrambleText">
              {t('facts:title', {
                line: text => <span className="line">{text}</span>,
                lineTab: text => <span className="line has-tab">{text}</span>,
              })}
            </h3>
          </div>
        </Cell>
      </Row>
      <Row type="half">
        <Cell>
          <Fact text={t('facts:fact1')} />
        </Cell>
        <Cell>
          <Fact text={t('facts:fact2')} />
        </Cell>
      </Row>
      <Row type="half">
        <Cell>
          <Fact text={t('facts:fact3')} />
        </Cell>
        <Cell>
          <Fact text={t('facts:fact4')} />
        </Cell>
      </Row>
      <Row type="half">
        <Cell>
          <Fact text={t('facts:fact5')} />
        </Cell>
        <Cell>
          <Fact text={t('facts:fact6')} />
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

Facts.propTypes = {
  isBlack: PropTypes.bool.isRequired,
  isFluor: PropTypes.bool.isRequired,
}

export default Facts
