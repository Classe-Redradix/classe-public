import PropTypes from 'prop-types'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import Paragraphs from '../paragraphs/Paragraphs'
import useTranslations from '../../../hooks/useTranslations'
import image from '/public/images/manifiesto-classe.jpg'

const Manifest = ({ isBlack, isFluor }) => {
  const t = useTranslations()

  return (
    <SectionWrapper isBlack={isBlack} isFluor={isFluor} extraClass="manifest">
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
            <img
              className="bwfilter"
              src={image}
              alt="Dos programadores web trabajando"
            />
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
          <Paragraphs text={t('manifest:description')} />
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
