import PropTypes from 'prop-types'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import useTranslations from '../../../hooks/useTranslations'
import demoImage from '../../../assets/images/demo.png'

const Manifest = ({ isBlack, isFluor }) => {
  const t = useTranslations()

  return (
    <SectionWrapper isBlack={isBlack} isFluor={isFluor} extraClass="manifest">
      <Row type="half">
        <Cell isColumn>
          <Cell isNegative={isBlack}>
            <h3 className="h3">
              {t('manifest:claim', {
                line: text => <span className="line">{text}</span>,
                lineTab: text => <span className="line has-tab">{text}</span>,
              })}
            </h3>
          </Cell>
          <Cell isNegative={isBlack}>
            <img src={demoImage} alt="" />
          </Cell>
        </Cell>
        <Cell hasGap isNegative={isBlack}>
          <div className="scrambleTextWrapper">
            <h4 className="h1 scrambleText">
              {t('manifest:title', {
                line: text => <span className="line">{text}</span>,
                lineTab: text => <span className="line has-tab">{text}</span>,
              })}
            </h4>
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
