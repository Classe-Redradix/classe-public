import Image from 'next/image'
import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import FaqsContainer from '../faqs/FaqsContainer'
import image from '/public/images/formacion-remoto-presencial.jpg'

const Faqs = ({ list, isBlack, isFluor }) => {
  const t = useTranslations()

  return (
    <SectionWrapper isBlack={isBlack} isFluor={isFluor} extraClass="faqs">
      <Row type="full">
        <Cell>
          <div className="scrambleTextWrapper">
            <h2 className="h1 scrambleText">
              {t('faqs:title', {
                line: text => <span className="line has-wrap">{text}</span>,
                lineAriaHidden: text => (
                  <span className="line has-wrap" aria-hidden="true">
                    {text}
                  </span>
                ),
                screenReadOnly: text => <span className="sr-only">{text}</span>,
                lineTab: text => <span className="line has-tab">{text}</span>,
              })}
            </h2>
          </div>
        </Cell>
      </Row>
      <Row type="half">
        <Cell>
          <div className="imageWrapper">
            <Image
              src={image}
              alt={t('alt-image:man-working-remotely')}
              width={3264}
              height={2448}
              objectFit="cover"
              layout="responsive"
              loading="eager"
            />
          </div>
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
    }),
  ).isRequired,
  isBlack: PropTypes.bool.isRequired,
  isFluor: PropTypes.bool.isRequired,
}

export default Faqs
