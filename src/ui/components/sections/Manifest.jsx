import Image from 'next/image'
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
                lineTabAriaHidden: text => (
                  <span className="line has-tab" aria-hidden="true">
                    {text}
                  </span>
                ),
                screenReadOnly: text => <span className="sr-only">{text}</span>,
              })}
            </h2>
          </Cell>
          <Cell isNegative={isBlack} extraClass={'manifest-imgCel'}>
            <div className="imageWrapper">
              <Image
                src={image}
                alt={t('alt-image:two-web-programmers')}
                width={3456}
                height={5184}
                objectFit="cover"
                layout="responsive"
                loading="eager"
              />
            </div>
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
