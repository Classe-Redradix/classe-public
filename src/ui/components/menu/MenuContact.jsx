import useTranslations from '../../../hooks/useTranslations'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import Input from '../forms/Input'
import Button from '../button/Button'
import Checkbox from '../forms/Checkbox'
import Radio from '../forms/Radio'

const MenuContact = ({ linesHidden }) => {
  const t = useTranslations()

  return (
    <Row type="quarter" extraClass="menuLayer-contact">
      <Cell hasLinesHidden={linesHidden} isAnimated isNegative>
        <div className="-scrambleTextWrapper">
          <h2 className="h2 -scrambleText">
            {t('contact:title', {
              line: text => <span className="line">{text}</span>,
            })}
          </h2>
        </div>
        <div className="menuLayer-contactAddress">
          <h2 className="heading menuLayer-contactAddressText">
            {t('contact:address1', {
              line: text => <span className="line">{text}</span>,
            })}
          </h2>
          <h2 className="heading menuLayer-contactAddressText">
            {t('contact:address2', {
              line: text => <span className="line">{text}</span>,
            })}
          </h2>
          <h2 className="heading menuLayer-contactAddressText">
            {t('contact:address3', {
              line: text => <span className="line">{text}</span>,
            })}
          </h2>
        </div>
      </Cell>
      <Cell hasLinesHidden={linesHidden} isAnimated isNegative>
        <div className="contact-formBlock">
          <div className="-scrambleTextWrapper">
            <h3 className="h3 -scrambleText">
              {t('contact:my-name-is', {
                line: text => <span className="line">{text}</span>,
              })}
            </h3>
          </div>
          <Input
            placeholder={t('general:name-lastname-placeholder')}
            handleBlur={() => {}}
            handleChange={() => {}}
            name="email"
            type="email"
            isNegative
          />
        </div>
        <div className="contact-formBlock--flex">
          <span className="notes">{t('footer:iam')}</span>
          <Radio
            handleChange={() => {}}
            label="footer:company"
            name="company"
            value=""
          />
          <Radio
            handleChange={() => {}}
            label="footer:student"
            name="student"
            value=""
          />
        </div>
        <div className="contact-formBlock">
          <div className="-scrambleTextWrapper">
            <h3 className="h3 -scrambleText">
              {t('contact:interested-in', {
                line: text => <span className="line">{text}</span>,
              })}
            </h3>
          </div>
        </div>
        <div className="contact-formBlock--flex">
          <Checkbox
            handleChange={() => {}}
            label="Js pro"
            name="jspro"
            value=""
          />
          <Checkbox
            handleChange={() => {}}
            label="React"
            name="react"
            value=""
          />
          <Checkbox
            handleChange={() => {}}
            label="Redux"
            name="redux"
            value=""
          />
          <Checkbox handleChange={() => {}} label="Data" name="data" value="" />
        </div>
        <div className="contact-formBlock">
          <div className="-scrambleTextWrapper">
            <h3 className="h3 -scrambleText">
              {t('contact:my-email', {
                line: text => <span className="line">{text}</span>,
              })}
            </h3>
          </div>
          <Input
            placeholder={t('general:placeholder')}
            handleBlur={() => {}}
            handleChange={() => {}}
            name="email"
            type="email"
            value=""
            isNegative
          />
        </div>
        <div className="contact-formBlock--flex">
          <Checkbox
            hasMessage
            handleChange={() => {}}
            label={t('general:conditions-check')}
            name="conditions"
            value=""
          />
          {/* <Checkbox
            hasMessage
            handleChange={() => {}}
            label="general:newsletter-check"
            name="newsletter"
            value=""
          /> */}
        </div>
        <Button isNegative isFull isLink href="/" text={t('general:send')} />
      </Cell>
    </Row>
  )
}

export default MenuContact
