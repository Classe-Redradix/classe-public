import React from 'react'
import MainWrapper from '../../components/wrappers/MainWrapper'
import Header from '../../components/header/Header'
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
      <Header title={t('manifest:header')} number={1} />
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
      <Header isClose title={t('manifest:header')} />
      <Header title={t('courses:header')} number={2} />
      <Header isClose title={t('courses:header')} />
      <Header title={t('custom:header')} number={3} />
      <Header isClose title={t('custom:header')} />
      <Header title={t('featured:header')} number={4} />
      <Header isClose title={t('featured:header')} />
      <Header title={t('facts:header')} number={5} />
      <Header isClose title={t('facts:header')} />
      <Header title={t('calendar:header')} number={6} />
      <Header isClose title={t('calendar:header')} />
      <Header title={t('companies:header')} number={7} />
      <Header isClose title={t('companies:header')} />
      <Header title={t('faqs:header')} number={8} />
      <Header isClose title={t('faqs:header')} />
      <Header title={t('find:header')} number={9} />
      <Header isClose title={t('find:header')} />
      <Header title={t('footer:header')} number={10} />
      <Header isClose title={t('footer:header')} />
    </MainWrapper>
  )
}
