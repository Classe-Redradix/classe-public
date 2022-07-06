import PropTypes from 'prop-types'
import { copyClasseEmailToClipboard } from '../../../business'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import image480 from '/public/images/contacto-classe-480.jpg'
import image935 from '/public/images/contacto-classe-935.jpg'
import image1254 from '/public/images/contacto-classe-1254.jpg'
import image1485 from '/public/images/contacto-classe-1485.jpg'
import image1707 from '/public/images/contacto-classe-1707.jpg'
import image1951 from '/public/images/contacto-classe-1951.jpg'
import image2486 from '/public/images/contacto-classe-2486.jpg'
import image3480 from '/public/images/contacto-classe-3480.jpg'

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
                lineAriaHidden: text => (
                  <span className="line" aria-hidden="true">
                    {text}
                  </span>
                ),
                screenReadOnly: text => <span className="sr-only">{text}</span>,
                lineTab: text => <span className="line has-tab">{text}</span>,
              })}
            </h2>
          </div>
        </Cell>
        <Cell isNegative={isBlack}>
          <picture>
            <img
              className="bwfilter"
              sizes="(max-width: 3480px) 100vw, 3480px"
              srcset={`${image480} 480w,
              ${image935} 935w,
              ${image1254} 1254w,
              ${image1485} 1485w,
              ${image1707} 1707w,
              ${image1951} 1951w,
              ${image2486} 2486w,
              ${image3480} 3480w`}
              src={image3480}
              alt={t('alt-image:office-desks-computer-equipment')}
              loading="lazy"
            />
          </picture>
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
