import React from 'react'
import MainWrapper from '../../components/wrappers/MainWrapper'
import SectionWrapper from '../../components/wrappers/SectionWrapper'
import Row from '../../components/row/Row'
import Cell from '../../components/cell/Cell'
import useTranslations from '../../../hooks/useTranslations'
import demoImage from '../../../assets/images/demo.png'

export default {
  title: 'Views'
}

export const Home = () => {
  const t = useTranslations()

  return (
    <MainWrapper>
      <SectionWrapper extraClass="manifest">
        <Row type="half">
          <Cell isColumn>
            <Cell>
              <h3 className="h3">
                {t('manifest:claim', {
                  line: text => <span className="line">{text}</span>,
                  lineTab: text => <span className="line has-tab">{text}</span>,
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
                line: text => <span className="line">{text}</span>,
                lineTab: text => <span className="line has-tab">{text}</span>,
              })}
            </h4>
            <p className="p">{t('manifest:description')}</p>
          </Cell>
        </Row>
      </SectionWrapper>
    </MainWrapper>
  )
}
