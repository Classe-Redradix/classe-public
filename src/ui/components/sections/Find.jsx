import PropTypes from 'prop-types'
import { copyClasseEmailToClipboard } from '../../../business'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'

import generateImageCandidates from 'libs/generateImageCandidates'
import image from '/public/images/contacto-classe.jpg'
import image2048 from '/public/images/contacto-classe-2048.jpg'
import image1920 from '/public/images/contacto-classe-1920.jpg'
import image1200 from '/public/images/contacto-classe-1200.jpg'
import image1080 from '/public/images/contacto-classe-1080.jpg'
import image828 from '/public/images/contacto-classe-828.jpg'
import image750 from '/public/images/contacto-classe-750.jpg'
import image640 from '/public/images/contacto-classe-640.jpg'

const imagesMetaData = [
  {
    url: image2048,
    width: 2048,
  },
  {
    url: image1920,
    width: 1920,
  },
  {
    url: image1200,
    width: 1200,
  },
  {
    url: image1080,
    width: 1080,
  },
  {
    url: image828,
    width: 828,
  },
  {
    url: image750,
    width: 750,
  },
  {
    url: image640,
    width: 640,
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
          <img
            className="bwfilter"
            sizes="(max-width: 3480px) 100vw, 3480px"
            srcSet={generateImageCandidates(imagesMetaData)}
            src={image}
            width={3480}
            height={2320}
            alt={t('alt-image:office-desks-computer-equipment')}
            loading="lazy"
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
