import useTranslations from '../../../hooks/useTranslations'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import Input from '../forms/Input'
import Button from '../button/Button'
import Checkbox from '../forms/Checkbox'
import Radio from '../forms/Radio'

const MenuContact = ({ linesHidden, contactFormParams }) => {
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
        <form
          onSubmit={e => {
            e.preventDefault()
            contactFormParams.saveToFirebase({
              onSuccess: () => alert('Se guardó!'),
            })
          }}
        >
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
              handleChange={contactFormParams.onNameChange}
              value={contactFormParams.name}
              name="name"
              type="name"
              isNegative
            />
          </div>
          <div className="contact-formBlock--flex">
            <span className="notes">{t('footer:iam')}</span>
            <Radio
              onChange={contactFormParams.onUserTypeChange}
              label="footer:company"
              name="user-type"
              value="company"
              isChecked={contactFormParams.userType === 'company'}
            />
            <Radio
              onChange={contactFormParams.onUserTypeChange}
              label="footer:student"
              name="user-type"
              value="student"
              isChecked={contactFormParams.userType === 'student'}
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
            {contactFormParams.interestedInOptions.map(option => (
              <Checkbox
                key={`interested-in-${option.id}`}
                handleChange={_ =>
                  contactFormParams.onInterestedInOptionChange(option)
                }
                label={option.label}
                name={option.id}
                id={option.id}
                isChecked={option.checked}
              />
            ))}
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
              handleChange={contactFormParams.onEmailChange}
              name="email"
              type="email"
              value={contactFormParams.email}
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
          <Button isNegative isFull text={t('general:send')} />
        </form>
      </Cell>
    </Row>
  )
}

export default MenuContact
