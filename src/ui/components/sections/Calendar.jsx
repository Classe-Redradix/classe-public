import Image from 'next/image'
import PropTypes from 'prop-types'
import useTranslations from '../../../hooks/useTranslations'
import SectionWrapper from '../wrappers/SectionWrapper'
import Row from '../row/Row'
import Cell from '../cell/Cell'
import Paragraphs from '../paragraphs/Paragraphs'
import DatePicker from '../date-picker/DatePicker'
import image from '/public/images/haz-hueco-en-tu-agenda.jpg'
import Button from '../button/Button'

const Calendar = ({ dates, isBlack, isFluor, openContact }) => {
  const formatMessage = useTranslations()

  return (
    <SectionWrapper isBlack={isBlack} isFluor={isFluor} extraClass="calendar">
      <Row type="half">
        <Cell>
          <div className="scrambleTextWrapper">
            <h2 className="h1 scrambleText">
              {formatMessage('calendar:title', {
                line: text => <span className="line">{text}</span>,
                lineTab: text => <span className="line has-tab">{text}</span>,
              })}
            </h2>
          </div>
        </Cell>
        <Cell>
          <div className="imageWrapper">
            <Image
              src={image}
              alt={formatMessage('alt-image:programming-students-attending')}
              width={3480}
              height={2688}
              objectFit="cover"
              layout="responsive"
              loading="eager"
            />
          </div>
        </Cell>
      </Row>
      <Row type="half">
        <Cell hasGap>
          <Paragraphs text={formatMessage('calendar:description')} />
        </Cell>
        <Cell>
          {dates ? (
            <DatePicker dates={dates} openContact={openContact} />
          ) : (
            <Button
              isFull
              onClick={openContact}
              text={formatMessage('calendar:no-courses')}
            />
          )}
        </Cell>
      </Row>
    </SectionWrapper>
  )
}

Calendar.propTypes = {
  dates: DatePicker.propTypes.dates,
  isBlack: PropTypes.bool.isRequired,
  isFluor: PropTypes.bool.isRequired,
}

export default Calendar
