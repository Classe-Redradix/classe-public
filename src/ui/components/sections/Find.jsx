import PropTypes from 'prop-types'
import { copyClasseEmailToClipboard } from '../../../business'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'

import generateImageCandidates from 'libs/generateImageCandidates'
import image480 from '/public/images/contacto-classe-480.jpg'
import image935 from '/public/images/contacto-classe-935.jpg'
import image1254 from '/public/images/contacto-classe-1254.jpg'
import image1485 from '/public/images/contacto-classe-1485.jpg'
import image1707 from '/public/images/contacto-classe-1707.jpg'
import image1951 from '/public/images/contacto-classe-1951.jpg'
import image2486 from '/public/images/contacto-classe-2486.jpg'
import image3480 from '/public/images/contacto-classe-3480.jpg'

const imagesMetaData = [
  {
    url: image480,
    width: 480,
  },
  {
    url: image935,
    width: 935,
  },
  {
    url: image1254,
    width: 1254,
  },
]

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
            {/* <source
              sizes="(max-width: 3480px) 100vw, 3480px"
              srcSet="mdn-logo.svg"
              type="image/avif"
            /> */}

            <img
              className="bwfilter"
              sizes="(max-width: 3480px) 100vw, 3480px"
              srcSet={generateImageCandidates(imagesMetaData)}
              src={image3480}
              width={3480}
              height={2320}
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
