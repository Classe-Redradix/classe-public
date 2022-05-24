import PropTypes from 'prop-types'
import { copyClasseEmailToClipboard } from '../../../business'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import image from '/public/images/contacto-classe.jpg'
import GlyphIcon from './../../../assets/icons/Glyph2Icon'

const Find = ({ isBlack, isFluor }) => {
  const t = useTranslations()

  return (
    <SectionWrapper isBlack={isBlack} isFluor={isFluor} extraClass="find">
      <Row type="half">
        <Cell isNegative={isBlack}>
          <div className="scrambleTextWrapper">
            <h2 className="h1 scrambleText">
              {t('find:title', {
                line: text => <span className="line">{text}</span>,
                lineTab: text => <span className="line has-tab">{text}</span>,
                lineSROnly: text => (
                  <span className="line has-tab sr-only">{text}</span>
                ),
              })}
            </h2>
          </div>
        </Cell>
        <Cell isNegative={isBlack}>
          <img
            className="bwfilter"
            src={image}
            alt="Oficina con varias mesas y equipos informáticos"
          />
        </Cell>
      </Row>
      <Row type="half">
        <Cell hasGap isNegative={isBlack}>
          <GlyphIcon className="icon" />
          <p className="p">{t('find:description')}</p>
        </Cell>
        <Cell hasGap isNegative={isBlack}>
          <div className="scrambleTextWrapper">
            <h3 className="h1 scrambleText" aria-hidden="true">
              {t('find:claim', {
                line: text => <span className="line">{text}</span>,
                lineTab: text => <span className="line has-tab">{text}</span>,
              })}
            </h3>
          </div>
          <button
            className="notes"
            aria-label={t('find:aria')}
            onClick={copyClasseEmailToClipboard}
          >
            {t('find:description2', {
              ariaHidden: text => <span aria-hidden="true">{text}</span>,
              screenReader: text => <span className="sr-only">{text}</span>,
            })}
          </button>
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

Find.propTypes = {
  isBlack: PropTypes.bool.isRequired,
  isFluor: PropTypes.bool.isRequired,
}

export default Find
