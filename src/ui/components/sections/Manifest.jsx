import React from 'react'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import useTranslations from '../../../hooks/useTranslations'
import demoImage from '../../../assets/images/demo.png'

const Manifest = () => {
  const t = useTranslations()

  return (
    <SectionWrapper extraClass="manifest">
      <Row type="half">
        <Cell isColumn>
          <Cell>
            <h3 className="h3">
              {t('manifest:claim', {
                line: (text) => <span className="line">{text}</span>,
                lineTab: (text) => <span className="line has-tab">{text}</span>,
              })}
            </h3>
          </Cell>
          <Cell>
            <img src={demoImage} alt="" />
          </Cell>
        </Cell>
        <Cell hasGap>
          <h4 className="h1">
            {t('manifest:title', {
              line: (text) => <span className="line">{text}</span>,
              lineTab: (text) => <span className="line has-tab">{text}</span>,
            })}
          </h4>
          <p className="p">{t('manifest:description')}</p>
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

export default Manifest
