import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'

const Footer = ({ isBlack }) => {
  const router = useRouter()
  const t = useTranslations()

  return (
    <SectionWrapper isBlack={isBlack} isBlackChanger extraClass="footer">
      <Row type="quarter">
        <Cell isNegative={isBlack}>
          <div className="scrambleTextWrapper">
            <h3 className="h2 scrambleText">
              {t('footer:title', {
                line: (text) => <span className="line">{text}</span>,
                lineTab: (text) => <span className="line has-tab">{text}</span>,
              })}
            </h3>
          </div>
        </Cell>
        <Cell isNegative={isBlack}>
          <p>Form</p>
        </Cell>
      </Row>
      <Row type="half">
        <Cell isNegative={isBlack}>
          <p>Courses</p>
        </Cell>
        <Cell isNegative={isBlack}>
          <p>Social</p>
        </Cell>
        <Cell isNegative={isBlack} />
        <Cell isNegative={isBlack}>
          <p>Contact</p>
        </Cell>
      </Row>
      <Row type="full">
        <Cell isNegative={isBlack}>
          <p>Logo</p>
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

Footer.propTypes = {
  isBlack: PropTypes.bool.isRequired,
}

export default Footer
